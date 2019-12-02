var name="?";

function WorkContent(remain,rdate)
{
$(function(){
    $("body").prepend('<div id="sparner">\
        <table>\
            <tr><th>Цель</th><td><select id="goal"><option value="search">Поиск</option><option value="writers">Писателям</option></select></td></tr>\
            <tr><th>From</th><td><input type="text" id="from_name" placeholder="Girl Name" /> <input type="button" id="clean" value="Очистить" title="Очистить историю этого отправителя" /></td></tr>\
            <tr><th>Subject</th><td><input type="text" id="subject" value="Hi, {name}!" /></td></tr>\
            <tr><th>Message <input type="button" id="text-translate" value="T" title="Перевести"></th><td><textarea id="message">Hi, {name}!</textarea></td></tr>\
            <tr><th>Писатели</th><td><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td></tr>\
            <tr><th>Черный список</th><td><select id="black"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td></tr>\
            <tr><th><input type="button" id="help" value="?"><input type="button" id="run" value="Пуск" disabled></th><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr>\
        </table>\
    </div>');

    var name=document.cookie.match(/_AFF\[logins_ident\]=([^;]+)/i)[1],
        storage=localStorage.getItem("foreignladies-"+name),
        goal=$("#goal"),
        from=$("#from"),
        from_name=$("#from_name"),
        clean=$("#clean"),
		cv,aff_id,
        subject=$("#subject"),
        message=$("#message"),
        black=$("#black"),
        run=$("#run"),
        writers = $("#writers"),
        info=$("#info"),
        runned = false,
        queue = [],
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("foreignladies-"+name,JSON.stringify(storage));
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
            if (writers.find("option").length > 1) {
                writers.prop("disabled", false);
                a.text("-писатели-")
            }
            else {
                writers.prop("disabled", true);
                a.text("-нет писателей-")
            }
        },
        EnableBlack=function()
        {
            var no=$("#black option:first");
            if(black.find("option").length>1)
            {
                black.prop("disabled",false);
                no.text("-черный список-");
            }
            else
            {
                black.prop("disabled",true);
                no.text("-пусто-");
            }
        },
        Status=function(n)
        {
            info.text(n+", "+queue.length);
        };

        black.change(function(){
            $("#delb,#editb").prop("disabled",$(this).val()==0);
        }).change();
	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#message").val()},function(r){ $("#message").val(r); },"text");
    });
    writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();
    $("#export").click(function(){
        var out="";
        $.each(storage.writers,function(k){
            out+=", "+k;
        });
        prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#addw").click(function ()
    {
        var n = prompt("Введите NAME писателя(ей)");
        if(n)
        {
            $.each(n.split(/[^a-z0-9_]+/i),function(key,val){
                if (writers.find("[value=" + val + "]").length == 0) {
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
        var v = writers.val(), t = $("#writers option:selected"), n = prompt("Введите новый NAME", 
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
    $("#addb").click(function(){
        var n = prompt("Введите NAME мужика(ов)");
        if(n)
        {
            $.each(n.split(/[^a-z0-9_]+/i),function(key,val){
                if (black.find("[value=" + val + "]").length == 0) {
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
            n=prompt("Введите новый NAME",t.text());
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
        storage=$.parseJSON(storage)||{};
        if(typeof storage.black=="undefined")
            storage={black:{}, writers : {},from_name:"",subject:"",message:"",goal:"online",froms:{}};
        else
        {
            if(storage.black) {
                $.each(storage.black,function(k,v){
                    $("<option>").text(v ? v : k).val(k).appendTo(black);
                });
            }
            else {
                storage.black={};
            }

            if(storage.goal) {
                goal.val(storage.goal);
            }

            if (storage.writers) {
                $.each(storage.writers, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(writers) 
                });
            }
            else {
                storage.writers = {};
            }

			if(storage.from_name)
				from_name.val(storage.from_name);

            subject.val(storage.subject);
            message.val(storage.message);
            EnableBlack();
        }
    }
    else
        storage={black:{}, writers : {}, from_name:"", subject:"", message:"", goal:"online", froms:{}};

	$.get("/aff-myaccount.html",function(r){
		aff_id=r.match(/aff_key\-(\d+)\.html/);
		aff_id=aff_id ? aff_id[1] : 2319;

		from_name.blur(function() {
			run.prop("disabled",true);
			storage.from_name=$(this).val();

			if(storage.from_name)
				$.post("/site-remote~request-autocomplete_profile_name_site.html",{
					q:storage.from_name,
					limit:10,
					timestamp:Math.floor(Date.now() / 1000),
					remote_aff:aff_id
				},function(r2){
					if(!r2)
						return;

					r2=r2.split("|");
					run.prop("disabled",false);
					cv=r2[1];

					if(!("froms" in storage))
						storage.froms={};

					if(!(cv in storage.froms)) {
						storage.froms[ cv ]={ cnt:0, sent:"|" };
						SaveStorage();
					}

					Status(storage.froms[ cv ].cnt); 
				},"text");
		}).blur();
	},"text");

	clean.click(function(){
		if(!runned && confirm("Вы уверены?"))
		{
			queue=[];
			storage.froms[ cv ]={ cnt:0, sent:"|" };
			Status(storage.froms[ cv ].cnt); 
			SaveStorage();
		}
	});

    goal.change(function(){
        var trw=writers.closest("tr");

        storage.goal=$(this).val();
        if(storage.goal=="writers")
            trw.show();
        else
            trw.hide();
        SaveStorage();
    }).change();

    var top,
        tos,
        ibp = 1000,
        cnt = 0,
        ended = false,
        
        linktosend="",
        inprogress="|",
        ReStartSender,
        StartSender=function()
        {
            if (queue.length==0) {
                ReStartSender();
                return;
            }
            
            if (queue.length>0) {
                var v = queue.shift();
                $.get(linktosend,function (body)
                {
                    $.post(
                        linktosend,
                        {
                            _CTRLSTATE_ : body.match(/NAME="_CTRLSTATE_" VALUE="([^"]+)"/i)[1],
                            fk_profile : cv,
                            profile_name_and_username : storage.from_name,
                            logins_username : v.name,
                            mbox_subject : v.subject,
                            mbox_body : v.message
                            },
                        function(r)
                        {
                            v.F(r.indexOf("Your message was successfully sent.")!=-1);
                        }
                    );
                }).fail(function () 
				{
					v.F(false) 
				}).always(function () 
				{
					if (runned) {
						StartSender();
					}
				});
            }
			else if (runned) {
				tos = setTimeout(StartSender, 3000 + (Math.random()*3000) );
			}
			if (ended && queue.length==0) {
				run.triggerHandler("click");
				alert("Обработано")
			}
        },

        Parse4Send=function(body)
        {
            if (queue.length>0) {
                top = setTimeout(function () {
                    Parse4Send(body);
                }, ibp);
                return;
            }
            body = body.replace(/<script[^>]*>|<\/script>/g, "");
            var ind1 = body.indexOf("<body"),
                ind2 = body.indexOf(">", ind1 + 1),
                ind3 = body.indexOf("</body>", ind2 + 1);
            body = body.substring(ind2 + 1, ind3);
            body = body.replace(/(src="[^"]+")/ig,"data-$1");
            body = $("<div>").html(body);

            body.find("table.borders_light:has(a)").each(function(){
                var nAme = $("a:first",this).text(),
                    la = $("b:last",this).text().replace(" Last activity: ",""),
                    age = parseInt($.trim($("b:eq(1)",this).text())),
                    ladate = new Date(la),
                    now = new Date();

                //3 дня, бля
                if(((now.getTime()-ladate.getTime())/(1000*60*60*24*3)>=0) && typeof storage.black[ nAme ]=="undefined" && inprogress.indexOf("|"+nAme+"|")==-1 && storage.froms[ cv ].sent.indexOf("|"+nAme+"|")==-1)
                {
                    inprogress+=nAme+"|";
                    queue.push({
						name : nAme,
                        subject : storage.subject.replace(/{name}/ig, nAme).replace(/\{age\}/ig, age).replace(/{name1}/ig, Name1(nAme)).replace(/{name2}/ig, Name2(nAme)),
                        message : storage.message.replace(/{name}/ig, nAme).replace(/\{age\}/ig, age).replace(/{name1}/ig, Name1(nAme)).replace(/{name2}/ig, Name2(nAme)),
                        F : function(st){
                            if(st)
                            {
                                storage.froms[ cv ].sent+=nAme+"|";
                                storage.froms[ cv ].cnt++;
                                SaveStorage();
                            }
                            Status(storage.froms[ cv ].cnt);
                        }
                    });
                    if(runned)
                        Status(storage.froms[ cv ].cnt);
                }
            });

            var next=body.find("a:contains('Next >'),a:contains('Следующая >')");

            if(runned)
                if(next.length>0)
                    top=setTimeout(function(){
                        $.get(next.attr("href"), Parse4Send).fail(function(){
							console.warn(1);
						});
                    },ibp);
                else
                    ended = true;

            body.remove();
        },
        StartParser=function()
        {
            var start=$("a:contains('<< Start'),a:contains('<< Старт')");

            if(start.length>0)
                $.get(start.attr("href"), Parse4Send).fail(function(){
					console.warn(2);
				});
            else
                Parse4Send("<body>" + $("body").html() + "</body>");
        };
    ReStartSender = function () {
        if (runned) tos = setTimeout(StartSender, 3000 + (Math.random()*3000) );
    };
    run.click(function(){
        var th=$(this),
            d=$("#spamer :input").not(this).not("#help");

        if(runned)
        {
            
            d.prop("disabled",false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            
            queue=[];
            inprogress="|";
            
            th.val("Пуск");
            runned=false;
            Status(storage.froms[ cv ].cnt);
        }
        else
        {
            ended = false;

            storage.message = message.val();
            storage.subject = subject.val();

            if (storage.message == "") alert("Введите текст письма");
            else if (storage.subject == "") alert("Введите тему письма");
            else if (!cv) alert("Введите отправителя");
            else
            {
                runned = true;
                th.val("Стоп");
                SaveStorage();

                if(storage.goal=="writers")
                {
                    var wrs=writers.find("option");
                    if(wrs.length<2)
                    {
                        alert("Заполните писателей");
                        run.click();
                        return;
                    }

                    wrs.each(function(){
                        var nAme=$(this).val();
                        if(nAme!=0 && inprogress.indexOf("|"+nAme+"|")==-1)
                        {
                            inprogress+=nAme+"|";
                            queue.push({
								name : nAme,
                                subject : storage.subject.replace(/{name}/ig, nAme).replace(/{name1}/ig, Name1(nAme)).replace(/{name2}/ig, Name2(nAme)),
                                message : storage.message.replace(/{name}/ig, nAme).replace(/{name1}/ig, Name1(nAme)).replace(/{name2}/ig, Name2(nAme)),
                                F : function(st){
                                    if(st)
                                        cnt++;
                                    Status(cnt);
                                    if(queue.length==0)
                                    {
                                        run.click();
                                        alert("Рассылка завершена");
                                    }
                                }
                            });
                            Status(cnt);
                        }
                    });
                    
                    if(queue.length==0)
                    {
                        run.click();
                        alert("Некому рассылать");
                    }
                }
                else
                    StartParser();

                StartSender();
            }
        }
    });
    $.get("/aff-myaccount.html",function(body){
         body = body.replace(/<script[^>]*>|<\/script>/g, "");
         var ind1 = body.indexOf("<body"),
             ind2 = body.indexOf(">", ind1 + 1),
             ind3 = body.indexOf("</body>", ind2 + 1);
         body = body.substring(ind2 + 1, ind3);
         body = body.replace(/(src="[^"]+")/ig,"data-$1");
         body = $("<div>").html(body);
         
        linktosend=body.find("a:contains('Compose')").attr("href"); 
        body.remove();
    });

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\
Осталось "+remain+".\n\n{name} - имя\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
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
	$(function(){
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
	});
}

function Expired(date)
{
	$(function(){
		$("body").prepend('<div id="sparner">\
		<h2 style="color:red;font-weight:bold;text-align:center">\
			Платный период окончился еще '+date+'\
		</h2>\
		</div>');
	});
}

name=document.cookie.match(/_AFF\[logins_ident\]=([^;]+)/i)[1];

$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
	if(data.remain && data.rdate)
		WorkContent(data.remain,data.rdate,data.days);
	else if(data.expired)
		Expired(data.expired);
	else
		NewAccount();
},"json");