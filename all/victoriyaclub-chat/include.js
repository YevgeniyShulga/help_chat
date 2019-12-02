var the_name="?";

function WorkContent(remain,rdate,days)
{
    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
        <table>\
            <tr>\
                <td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td>\
            </tr>\
            <tr>\
                <td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td>\
				<td><select id="goal" title="Цель"><option value="new">По списку онлайн</option><option value="online">Контакт-листу</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-translate" value="T" title="Перевести"></td>\
                <td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td>\
                <td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="50" title="Возраст до" /></td>\
                <td><input type="button" id="run" value="Пуск"></td>\
                <td id="s-info" title="Статус рассылки: отправлено, очередь">0, 0</td>\
            </tr>\
        </table>\
    </div>');

    var storage=localStorage.getItem("victoriyaclub-"+the_name),
        run=$("#run"),
        black=$("#black"),
        goal=$("#goal"),
        text=$("#textarea"),
        af=$("#agef"),
        at=$("#aget"),
        dbde=$("#delb,#editb"),

		queue=[],
		inprogress=[],

        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("victoriyaclub-"+the_name,JSON.stringify(storage));
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
        iws=6000,
        cnt=0,
        
        StartSender=function()
        {
			if (queue.length>0)
			{
				var v=queue.shift(),
					el = document.createElement('script');

				el.innerHTML = "newChat.socket.emit('send_message',\""+v.t.replace(/"/ig,"\\\"")+"\",'',{id:"+v.id+",name:'"+v.n+"',replaced:'',alerts:'',original:''});";
				document.head.appendChild(el).parentNode.removeChild(el);

				v.F(true);
			}

            if(runned)
                tos=setTimeout(StartSender,iws);
        },

        Parse4Send=function(r)
        {
			if(queue.length>0)
			{
				top=setTimeout(function(){
                    Parse4Send(r);
                },10000);
				return;
			}

			$("<div>").html(r.online).children().each(function(){
				var id=$(this).data("id")-0,
					the_name=$(".name",this).text(),
					age=$(".age",this).text();;

				age=age ? parseInt( age ) : 0;

				if((isNaN(age) || age<10 || age>90 || storage.af<=age && age<=storage.at) && inprogress.indexOf(id)<0 && !(id in storage.black))
                {
                    inprogress.push(id);

                    queue.push({
						id:id,
						n:the_name,
                        t:storage.text.replace(/{name}/ig,the_name).replace(/{age}/ig,age).replace(/{name1}/ig, Name1(the_name)).replace(/{name2}/ig, Name2(the_name)),
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

			}).end().remove();

            if(runned)
                top=setTimeout(function(){
                    $.get("/js/html/chat/?action=get_online_and_contact_list",Parse4Send,"json");
                },25000);
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
            else
            {
                runned=true;
                d.prop("disabled",true);
                th.val("Стоп");

				inprogress=[];

                if(storage.goal=="new")
                {
					$("#newchat-contacts-list > .items > div.item").each(function(){
						inprogress.push( $(this).data("id")-0 );
					});

					$.get("/js/html/chat/?action=get_online_and_contact_list",Parse4Send,"json");
				}
                else
                {
                    var q=$("#newchat-contacts-list > .items > div.item").each(function(){
                            var id=$(this).data("id")-0,
								name=$(".name",this).text(),
								age=parseInt( $(".age",this).text() );

                            if(id>0 && typeof storage.black[id]=="undefined" && inprogress.indexOf(id)<0)
                            {
								inprogress.push(id);
                                queue.push({
									id:id,
									n:name,
									t:storage.text.replace(/{name}/ig,name).replace(/{age}/ig,age).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
									F:function(){
										Status(++cnt);

										if(queue.length<1)
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
                }

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
{Age} - возраст (только для онлайна)\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
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
<h3 style="color:red;font-weight:bold;text-align:center">\
	<a href="#" id="help-chat-test">Получите тестовый период</a> или напишите нам в скайп: <br />alekss7776\
</h3>\
</div>');

	$("#help-chat-test").click(function(e){
		e.preventDefault();
		$.post("//ukrainiangirls.pw/get.php?json=1",{name:the_name,"test-period":1},function(r){
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

	$.get("/search/",function(r){
		var id=r.match(/\/girl(\d+)\//);

		if(!id)
			return;

		the_name=id[1]-0;

		$.get("//ukrainiangirls.pw/get.php?json=1&name="+the_name,function(data){
			setTimeout(function(){
				if($("#sparner").length>0)
					return;

				if(data.remain && data.rdate)
					WorkContent(data.remain,data.rdate);
				else if(data.expired)
					Expired(data.expired);
				else
					NewAccount();
			},5000);
		},"json");
	},"text");
});