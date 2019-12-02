var name="?";

function WorkContent(remain,rdate)
{
$(function(){

    $("body").prepend('<div id="sparner">\
        <table>\
            <tr>\
                <td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td>\
            </tr>\
            <tr>\
                <td><select id="goal" title="Цель"><option value="online">Онлайн</option><option value="offline">Офлайн</option><option value="writers">Writers</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-translate" value="T" title="Перевести"></td>\
                <td><select id="girl" title="Девочка"></select></td>\
				<td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td>\
                <td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td>\
                <td><input type="number" id="agef" min="18" max="90" value="18" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="90" title="Возраст до" /></td>\
                <td><input type="button" id="run" value="Пуск"></td>\
                <td id="s-info" title="Статус рассылки: отправлено, очередь">0, 0</td>\
            </tr>\
        </table>\
    </div>');

    var storage=localStorage.getItem("mariyaclub-"+name),
        run=$("#run"),
		girl=$("#girl"),
        black=$("#black"),
		writers = $("#writers"), 
        goal=$("#goal"),
        text=$("#textarea"),
        af=$("#agef"),
        at=$("#aget"),
        dbde=$("#delb,#editb"),
		queue=[],
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("mariyaclub-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if(e==QUOTA_EXCEEDED_ERR)
                    alert("Локальное хранилище переполнено");
            }
        },
		EnableWriters = function ()
		{
			var a = $("#writers option:first");
			if (writers.find("option").size() > 1) {
				writers.prop("disabled", false);
				a.text("-писатели-")
			}
			else {
				writers.prop("disabled", true);
				a.text("-пусто-")
			}
		},
        EnableBlack=function()
        {
            var no=$("#black option:first");
            if(black.find("option").size()>1)
            {
                black.add(dbde).prop("disabled",false);
                no.text("-черный список-");
            }
            else
            {
                black.add(dbde).prop("disabled",true);
                no.text("-пусто-");
            }
        },
        Status=function(n,q)
        {
            $("#s-info").text(n+", "+queue.length);
        };

        black.change(function(){
            dbde.prop("disabled",$(this).val()==0);
        }).change();

	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").click(function(){
        var n = prompt("Введите ID мужика(ов)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    storage.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });

    $("#editb").click(function(){
        var v=black.val(),
            t=$("#black option:selected"),
            n=prompt("Введите новый ID",t.text());
        if(n && typeof storage.black[n]=="undefined")
        {
            t.val(n).text(n);
            delete storage.black[v];
            storage.black[n]="";
            SaveStorage();
        }
    });

    $("#delb").click(function(){
        var v=black.val(),
            t=$("#black option:selected");
        if(v && confirm("Вы действительно хотите удалить мужика \""+t.text()+"\"?"))
        {
            t.remove();
            delete storage.black[v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
    });        
    
	girl.change(function(){
		storage.girl=$(this).val();
		SaveStorage();
	});

   writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();

    $("#export").click(function (){
        var out="";
        $.each(storage.writers,function(k){
            out+=", "+k;
        });
        prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#addw").click(function ()
    {
        var n = prompt("Введите ID писателя(ей)");
        if (n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (writers.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(writers);
                    writers.val(val).change();
                    storage.writers[val] = "";
                }
            });
            EnableWriters();
            SaveStorage();
        }
    });
    $("#editw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected"), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof storage.writers[n] == "undefined") {
            t.val(n).text(n);
            delete storage.writers[v];
            storage.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected");
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });

    if(storage)
    {
		try
		{
			storage = jQuery.parseJSON(storage) || {};
		}catch(e){
			storage = {};
		}

        if(typeof storage.black=="undefined")
            storage={black:{},goal:"online",writers : {}, af:30,at:50,text:"",girl:""};
        else
        {
            if(storage.goal)
                goal.val(storage.goal);
            if(storage.black)
                $.each(storage.black,function(k,v){
                    $("<option>").text(v ? v : k).val(k).appendTo(black);
                });
            else
                storage.black={};
            text.val(storage.text);
			
			if(storage.af)
				af.val(storage.af);

			if(storage.at)
				at.val(storage.at);

			if(storage.girl)
				girl.val(storage.girl);

            if (storage.writers)
            {
                $.each(storage.writers, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(writers) 
                });
            }
            else {
                storage.writers = {};
            }

            EnableBlack();
			EnableBlack();
        }
    }
    else
        storage={black:{},writers : {}, goal:"online",af:30,at:50,text:""};

	//Получение девушек
	$("#list_offline_girl td.hand,#list_online_girl td.hand").each(function(){
		var id=$(this).closest("tr").attr("id").match(/(\d+)/)[1],
			nam=$.trim( $(this).text() /*.contents()[2].wholeText*/ );

		$("<option>").text( nam ).val( id ).appendTo(girl);
		storage.girl=id;
	});
	//[E] Получение девушек

    goal.change(function(){
        var a = black.closest("td"), tdw = writers.closest("td");
        storage.goal = $(this).val();
        if (storage.goal == "writers") {
            tdw.show();
            a.hide();
            EnableWriters()
        } else {
            tdw.hide();
            a.show();
            EnableBlack()
        }
    }).change();

    var top,
        tos,
        runned=false,
        ibp=1000,
        iws=30000,
        cnt=0,

		onl="2",
		nav_from=1,
        
		inpogress=[],
        inchatlist=[],

		ReStartSender = function () {
			if (runned)
				tos = setTimeout(StartSender, iws);
		},
        StartSender=function()
        {
            if (queue.length==0) {
                ReStartSender();
                return;
            }

            if (queue.length>0)
			{
                var v=queue.shift();

				$.post("onlinechat_ajax.php",{idg: storage.girl, idb: v.id, msg: v.t, hc:1},function(r){
					v.F( r.length>0 );
				}).always(ReStartSender);
            }
			else
				ReStartSender();
        },

        Parse4Send=function(r)
        {
            if (queue.length>0) {
                h = setTimeout(function ()
                {
                    Parse4Send(r)
                }, ibp);
                return;
            }

            $.each(r.items,function(k,v){
				v.idb-=0;

                if((v.age==0 || storage.af<=v.age && v.age<=storage.at) && inchatlist.indexOf(v.idb)==-1 && !(v.idb in storage.black))
                {
                    inchatlist.push(v.idb);

                    queue.push({
						id:v.idb,
                        t:storage.text.replace(/{name}/ig,v.nm).replace(/{age}/ig,v.age).replace(/{name1}/ig, Name1(v.nm)).replace(/{name2}/ig, Name2(v.nm)),
                        F:function(st)
                        {
                            if(st)
                                cnt++;

                            if(runned)
                                Status(cnt);
                        }
                    });

                    if(runned)
                        Status(cnt);
                }
            });

            if(runned)
            {
                nav_from=r.navigator.last>r.navigator.current ? r.navigator.current+1 : 1;
                top=setTimeout(function(){
					$.get(
						"/partner/onlinechat_ajax.php?boys=1&nav_from="+nav_from+"&onl="+onl+"&sort_f=9&sort_o=-1&hc=1",
						Parse4Send,
						"json"
					);
                },ibp);
            }
        };

    run.click(function(){
        var th=$(this),
            d=$("#spamer :input").not(this).not("#help");

        if(runned)
        {
            d.prop("disabled",false);
            goal.change();
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            runned=false;
            queue=[];
            cnt=0;
            th.val("Пуск");
            Status(0);
        }
        else
        {
            storage.text=text.val();
            storage.goal=goal.val();
            storage.at=at.val();
            storage.af=af.val();
            SaveStorage();

            if(storage.text=="")
                alert("Введите текст сообщения!");
			else if (storage.goal=="writers")
			{
				var f = writers.find("option");
				if (f.size() < 2) {
					alert("Заполните писателей");
				}
				else
				{
					if( $("#on_girl"+storage.girl).length==0 )
					{
						var script=document.createElement("script");
						script.text="set_girl_online("+storage.girl+");";
						document.body.appendChild(script).parentNode.removeChild(script);
					}

					runned=true;
					d.prop("disabled",true);
					th.val("Стоп");
					Status(0);

					f.each(function ()
					{
						var d = $(this).val();
						if (d != 0)
						{
							$.get("/partner/index.php?category=boy&id_b="+d, function (r) {
								r = r.replace(/<script[^>]*>|<\/script>/g, "");
								var b = r.indexOf("<body"),
									ind2 = r.indexOf(">", b + 1),
									ind3 = r.indexOf("</body>", ind2 + 1);

								r = r.substring(ind2 + 1, ind3);
								r = r.replace(/src="[^"]+"/ig, "");
								r = $("<div>").html(r);

								var name = r.find("td.bold:eq(2)").text().trim();

								if (name) 
								{
									queue.push({
										id: d,
										t : storage.text.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
										name : name,
										F : function (a) 
										{
											Status(a ? ++cnt : cnt);
											if (queue.length == 0) {
												alert("Рассылка завершена!");
												run.click() 
											};
											SaveStorage() 
										}
									});
									Status(cnt);
								}
								r.remove();
							});
						}
					});

					StartSender();
				}
			}
            else
            {
                runned=true;
                d.prop("disabled",true);
                th.val("Стоп");

				onl=goal.val()=="online" ? 2 : 1;

				if(onl==1)
					nav_from=1;

				if( $("#on_girl"+storage.girl).length==0 )
				{
					var script=document.createElement("script");
					script.text="set_girl_online("+storage.girl+");";
					document.body.appendChild(script).parentNode.removeChild(script);
				}

				$.get(
					"/partner/onlinechat_ajax.php?boys=1&nav_from="+nav_from+"&onl="+onl+"&sort_f=9&sort_o=-1&hc=1",
					Parse4Send,
					"json"
				);

                StartSender();
            }
        }
    });

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\n\
Осталось "+remain+".\n\
\n\
Поддерживаются следующие переменные:\n\
{Name} - имя пользователя\n\
{City} - город (только для онлайна)\n\
{Country} - страна (только для онлайна)\n\
{Age} - возраст (только для онлайна)\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if(date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
});
}

function NewAccount()
{
$("body").prepend('<div id="sparner">\
<h2 style="color:red;font-weight:bold;text-align:center">\
	<a href="#" id="help-chat-test">Получите тестовый период</a> или напишите нам в скайп: <br />alekss7776\
</h2>\
</div>');

	$("#help-chat-test").click(function(e){
		e.preventDefault();
		$.post("//ukrainiangirls.pw/get.php?json=1",{name:name,"test-period":1},function(r){
			if(r=="ok")
				location.reload();
		},"text");
	});
}

function Expired(date)
{
$("body").prepend('<div id="sparner">\
<h2 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще <?php echo$date?>\
</h2>\
</div>');
}

$.get("/partner/",function(body){
	body = body.replace(/<script[^>]*>|<\/script>/g, "");

	var ind1 = body.indexOf("<body"),
		ind2 = body.indexOf(">", ind1 + 1),
		ind3 = body.indexOf("</body>", ind2 + 1);

	body = body.substring(ind2 + 1, ind3);
	body = body.replace(/src="[^"]+"/ig, "");
	body = $("<div>").html(body);

	name=body.find("span.alogo b:last").text().match(/\d+/)[0];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			Expired(data.expired);
		else
			NewAccount();
	},"json");

	body.remove();
},"text");