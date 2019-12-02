var name="?";

function WorkContent(remain,rdate,days)
{
    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
        <table>\
            <tr>\
                <td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td>\
            </tr>\
            <tr>\
                <td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td>\
				<td><select id="goal" title="Цель"><option value="new">По списку онлайн</option><option value="new-photo">Онлайн с фото</option><option value="online">Контакт-листу</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-translate" value="T" title="Перевести"></td>\
                <td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td>\
                <td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="50" title="Возраст до" /></td>\
                <td><input type="button" id="run" value="Пуск"></td>\
                <td id="s-info" title="Статус рассылки: отправлено, очередь">0, 0</td>\
            </tr>\
        </table>\
    </div>');

    var storage=localStorage.getItem("romancecompass-"+name),
		queue=[],
        run=$("#run"),
        black=$("#black"),
        goal=$("#goal"),
        text=$("#textarea"),
        af=$("#agef"),
        at=$("#aget"),
        dbde=$("#delb,#editb"),
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("romancecompass-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if(e==QUOTA_EXCEEDED_ERR)
                    alert("Локальное хранилище переполнено");
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
        Status=function(n)
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
    
    if(storage)
    {
        storage=jQuery.parseJSON(storage)||{};
        if(typeof storage.black=="undefined")
            storage={black:{},goal:"online",af:30,at:50,text:""};
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
            af.val(storage.af);
            at.val(storage.at);
            EnableBlack();
        }
    }
    else
        storage={black:{},goal:"online",af:30,at:50,text:""};

    goal.change(function(){
        storage.goal=$(this).val();
        $("#agef,#aget").prop("disabled",storage.goal=="online");
    }).change();

    var top,
        tos,
        runned=false,
        cnt=0,

		offline="",
        inchatlist=",",

        StartSender=function(restart)
        {
			if (queue.length==0 && restart) {
				tos=setTimeout(function(){
					StartSender(true);
				},6000);
				return;
			}
			
			var v=queue.shift(),
				Send=function(){
					v.t=v.t.split("||");

					$.post(
						location.protocol+"//"+location.hostname+"/chat/",
						{
							ajax:1,
							action:"send_message",
							c_id:v.id,
							message:v.t.shift()
						},
						function(r)
						{
							if(r.result=="ok")
							{
								$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});

								v.F(true);

								if(v.t.length>0)
								{
									v.t=v.t.join("||");
									queue.push(v);
								}
							}
							else
								v.F(false);
						},
						"json"
					);
				};

			if(offline)
			{
				$.post(
					location.protocol+"//"+location.hostname+"/chat/",
					{
						ajax:1,
						action:"get_contact_customer",
						c_id:v.id
					},
					function(r)
					{
						if(r.result=="ok")
						{
							if(r.customer.is_online==1)
								Send();
							else
								$.post(
									location.protocol+"//"+location.hostname+"/chat/",
									{
										ajax:1,
										action:"invite_user",
										c_id:v.id,
										"time[d]":offline[2].replace(/^0/,""),
										"time[m]":offline[1].replace(/^0/,""),
										"time[y]":offline[0],
										"time[h]":offline[3].replace(/^0/,""),
										"time[i]":offline[4].replace(/^0/,"")
									},
									function(r2)
									{
										if(r2.result=="ok")
										{
											$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
											v.F(true);
										}
										else
											v.F(false);
									},
									"json"
								);
						}
						else
							v.F(false);
					},
					"json"
				);
			}
			else
				Send();
  
            if(runned && restart)
                tos=setTimeout(function(){
					StartSender(true);
				},6000);
        },

        Parse4Send=function(r,page,mark)
        {
			if(queue.length>0 && mark || queue.length>=10) {
				StartSender(false);

				h = setTimeout(function(){
					Parse4Send(r,page,true)
				}, 6000);
				return;
			}

            $.each(r.online,function(k,v){
                if(storage.af<=v.age && v.age<=storage.at && inchatlist.indexOf(","+v.id+",")==-1 && typeof storage.black[v.id]=="undefined" && (storage.goal!="new-photo" || v.photo_m_src))
                {
					var name_=v.name.split(" ").shift();
					
                    v.country=v.country.split(",");
                    v.country[0]=v.country[0] ? $.trim(v.country[0]) : "";
                    v.country[1]=v.country[1] ? $.trim(v.country[1]) : "";
                    inchatlist+=v.id+",";
                    queue.push({
						id:v.id,
                        t:storage.text.replace(/{name}/ig,name_ ).replace(/{age}/ig,v.age).replace(/{city}/ig,v.country[0]).replace(/{country}/ig,v.country[1]).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)),
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

					if(queue.length>=10)
						return false;
                }
            });

            if(runned)
            {
                page=r.pager.pages>page ? page+1 : 1;
                top=setTimeout(function(){
                    $.post(
                        location.protocol+"//"+location.hostname+"/chat/",
                        {
                            ajax:1,
                            action:"get_online",
                            page_num:page
                        },
                        function(r)
                        {
                            Parse4Send(r,page);
                        },
                        "json"
                    );
                },1000);
            }
        },
        StartParser=function()
        {
            inchatlist=",";
            $("div.chat-contact-list .chat-contact-item-name").each(function(){
                inchatlist+=parseInt($("span",this).text().match(/(\d+)$/)[1])+",";
            });

            $.post(
                location.protocol+"//"+location.hostname+"/chat/",
                {
                    ajax:1,
                    action:"get_online",
                    page_num:1
                },
                function(r)
                {
                    Parse4Send(r,1);
                },
                "json"
            );
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
                alert("Введите текст письма!");
            else
            {
                $.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: storage.text});
                runned=true;
                d.prop("disabled",true);
                th.val("Стоп");

                if(storage.goal=="new" || storage.goal=="new-photo")
                    StartParser();
                else
                {
                    var q=$("div.chat-contact-list .chat-contact-item-name").each(function(){
                            var id=parseInt($("span",this).text().match(/(\d+)$/)[1]);
                            if(id>0 && typeof storage.black[id]=="undefined")
                            {
								var name_=$("a",this).text().split(" ").shift();

                                queue.push({
									id:id,
									t:storage.text.replace(/{name}/ig, name_).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)),
									F:function(){
										Status(++cnt);

										if(queue.length==0)
										{
											alert("Рассылка завершена");
											run.click();
										}
									}
								});
                                Status(cnt);
                            }
                        }).length;

                    if(q==0)
                    {
                        alert("Нечего рассылать");
                        run.click();
                    }

					StartSender(true);
                }
            }
        }
    });

    setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

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

	var sendi=setInterval(function(){
		$("#chat-send-message").before('<button id="text-translate" class="btn1">Перевод</button>');

		if($("#text-translate").length>0)
			clearInterval(sendi);
	},1000);
	
	$(document).on("click","#text-translate",function(e){
		e.preventDefault();

		$.post("//ukrainiangirls.pw/translate.php",{text:$("#write-box-text div").text()},function(r){ $("#write-box-text div").text(r); },"text");
	});

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if(date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
}

function NewAccount()
{
	$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
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
	$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
<h3 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date+
'</h3>\
</div>');
}

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});
});

$(function(){
	name=document.body.innerHTML.match(/ID: <b>([^<]+)<\/b>/i)[1];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			Expired(data.expired);
		else
			NewAccount();
	},"json");
});