var name="?";

function WorkContent(remain,rdate)
{
$(function (){
    $("body").prepend('<div id="spamer"><table><tr><td colspan="7"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {name}</textarea></td></tr><tr><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="writers">Writers</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /> <input type="button" id="help" value="?"></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="sender" title="Отправитель"></select></td><td><input type="file" id="file" accept="image/jpeg,image/png" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table><font color="ff0000" size="2"><center>Приятной работы с ув., Команда <a href="http://help-chat.com.ua" target="_blank">Help-Chat.com.ua</a><br><a href="http://help-chat.com.ua" target="_blank"><img src="//ukrainiangirls.pw/images/logo1.png"></a></center></font></div>');

    var storage = localStorage.getItem("mariyaclub-mail-" + name),
        black = $("#black"),
		writers = $("#writers"), 
        goal = $("#goal"),
        subject = $("#subject"),
        run = $("#run"),
        text = $("#textarea"),
		file = $("#file"), 
		sender = $("#sender"),
        info = $("#info"), queue = [],
        SaveTemplate = function () {
            if (typeof storage[storage.active] != "undefined") $.extend(storage[storage.active], {
                text: text.val()
            });
        }, SaveStorage = function () {
            try {
                localStorage.setItem("mariyaclub-mail-" + name, JSON.stringify(storage));
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) alert("Локальное хранилище переполнено");
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
		EnableBlack = function () {
            var no = $("#black option:first");
            if (black.find("option").size() > 1) {
                black.prop("disabled", false);
                no.text("-черный список-");
            } else {
                black.prop("disabled", true);
                no.text("-пусто-");
            }
        }, Status = function (n) {
            info.text(n + ", " + queue.length);
        },




		sender_parsed=false,
		Parsesender=function(body){
			body=body.replace(/<script[^>]*>|<\/script>/g,"")

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1);

			body=body.substring(ind2+1,ind3);
			body=body.replace(/(src="[^"]+")/ig,"data-$1");

			body=$("<div>").html(body);

			var pp=body.find(".table1 .mtext1").each(function(){
						var a=$("a:first",this),
							href=a.prop("href"),
							id=parseInt(href.match(/(\d+)/)[1]),
							name=a.text(),
							img=$("img:first",this).data("src");

						$("<option>").text(name).val(id).appendTo(sender);
					}).size(),
				pages=body.find("a.nav:last").prev().text()-0,
				total=pages*pp,
				current=body.find("a.nav:first").closest("p").find("b:first"),
				proccessed=current.text()*pp,
				next=current.parent().next().next();

			if(next.is("a"))
				$.get(next.prop("href"),Parsesender,"text");
			else
			{
				sender_parsed=true;
				subject.change();
			}

			storage.sender=sender.val();
			body.remove();
		};

    black.change(function () {
        $("#delb,#editb").prop("disabled", $(this).val() == 0);
    }).change();
	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").click(function () {
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/\D+/),function (key,val){
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
    $("#editb").click(function () {
        var v = black.val(),
            t = $("#black option:selected"),
            n = prompt("Введите новый ID", t.text());
        if (n && typeof storage.black[n] == "undefined") {
            t.val(n).text(n);
            delete storage.black[v];
            storage.black[n] = "";
            SaveStorage();
        }
    });
    $("#delb").click(function () {
        var v = black.val(),
            t = $("#black option:selected");
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.black[v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
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
    if (storage) {
		try
		{
			storage = jQuery.parseJSON(storage) || {};
		}catch(e){
			storage = {};
		}
        if (typeof storage.last == "undefined") storage = {
			writers : {}, 
            last: 1,
            active: 0,
            black: {},
            photo: 0,
            goal: "search"
        };
        else {
            $.each(storage, function (k, v) {
                if (k == parseInt(k)) $("<option>").val(k).text(v.title).appendTo(subject);
            });
            if (storage.black) $.each(storage.black, function (k, v) {
                $("<option>").text(v ? v : k).val(k).appendTo(black);
            });
            else storage.black = {}; if (storage.goal) goal.val(storage.goal);

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
    } else storage = {
		writers : {}, 
        last: 1,
        active: 0,
        black: {},
        photo: 0,
        goal: "search"
    };
    subject.change(function () {
        var v = $(this).val(),
            save = storage.active != v,
            controls = $("#dels,#edits,#saves,#run");
        if (save) SaveTemplate();
        if (v == "0") {
            controls.prop("disabled", true);
            text.val(text.prop("defaultValue"));
            Status(0);
        } else if (typeof storage[v] == "undefined") $("option:selected", this).remove();
        else {
            text.val(storage[v].text);
            Status(storage[v].cnt);
            controls.prop("disabled",!sender_parsed);
        }
        storage.active = v;
        if (save) SaveStorage();
    }).val(storage.active).change();

$.get("/partner/index.php?category=girl",Parsesender,"text");

	sender.change(function(){
		storage.sender=$(this).val();
		SaveStorage();
	});

    $("#adds").click(function () {
        var n = prompt("Введите тему письма");
        if (n) {
            $("<option>").val(storage.last).text(n).appendTo(subject);
            storage[storage.last] = {
                title: n,
                text: text.val(),
                sent: {},
                cnt: 0
            };
            subject.val(storage.last++).change();
        }
    });
    $("#saves").click(function () {
        SaveTemplate();
        SaveStorage();
    });
    $("#edits").click(function () {
        var v = subject.val(),
            t = $("#subject option:selected"),
            n = prompt("Введите новую тему письма", t.text());
        if (n && typeof storage[v] != "undefined") {
            t.text(n);
            storage[v].title = n;
            SaveStorage();
        }
    });
    $("#dels").click(function () {
        var v = subject.val(),
            t = $("#subject option:selected");
        if (v && (typeof storage[v] == "undefined" || confirm("Вы действительно хотите удалить письмо \"" + t.text() + "\"?"))) {
            var next = t.next().size() > 0 ? t.next() : t.prev();
            t.remove();
            delete storage[v];
            subject.val(next.val()).change();
        }
    });
	$("#eraseb").click(function(e){
		e.preventDefault();

		if(confirm("Вы действительно хотите очистить чёрный список?"))
		{
			$("#black option:gt(0)").remove();
            storage.black={};
            black.change();
            EnableBlack();
            SaveStorage();
		}
	});
    goal.change(function () {
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

    var top, tos, runned = false, ended = false,
        ibp = 1000,
        inprogress = [], cnt = 0,
        sta,
		nextpage=false,
        ReStartSender = function () {
			if (runned)
				tos = setTimeout(StartSender, 15000+parseInt(Math.random()*5000));
		},
		StartSender = function () {
            if (queue.length==0) {
                ReStartSender();
                return;
            }

            if (queue.length>0)
			{
                var mess=queue.shift(),
					data=new FormData();

				data.append("id_from",storage.sender);
				data.append("id_to",mess.id);
				data.append("mail_title",mess.s);
				data.append("mail_text",mess.t.replace(/\n/g,"\r\n"));

				if (file.get(0) && file.get(0).files[0]) {
					data.append("attach1", file.get(0).files[0]);
				}

				$.ajax({
					url:"/partner/index.php?category=boy&action=savemail&id_g="+storage.sender+"&id_b="+mess.id,
					data:data,
					processData:false,
					contentType:false,
					type:"POST",
					dataType:"text",
					success:function(r2){
						mess.F(r2.indexOf("Операция прошла успешно!")>-1);
						
						if(r2.indexOf("Ошибка: Достигнут лимит писем на сегодня!")>-1)
						{
							run.click();
							alert("Ошибка: Достигнут лимит писем на сегодня!");
						}
					}
				}).fail(function(){
					mess.F(false);
				}).always(ReStartSender);
            }
            else if (ended && runned) {
                run.triggerHandler("click");
                alert("Поисковая выдача обработана");
            } else {
				RestartSender();
			}
        },
		Parse4Send = function (body) {
 			if(queue.length>0)
			{
				tos=setTimeout(function(){ Parse4Send(body); },1000);
				return;
			}

			body=body.replace(/<script[^>]*>|<\/script>/g,"");

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1);

			body=body.substring(ind2+1,ind3);
			body=body.replace(/(src="[^"]+")/ig,"data-$1");
			body=$("<div>").html(body);

			body.find("tr.td2").each(function(){
				var img=$("img:first",this),
					id=$("b:eq(1)",this).text()-0,
					repl={
						name:$.trim( $("b:eq(2)",this).text() )
					},
					arr=sta.sent[ storage.sender ];

				if(name.match(/^[a-z\d_\s]+$/i) && arr.indexOf(id)==-1 && inprogress.indexOf(id)==-1 && !(id in storage.black))
				{
					inprogress.push(id);

					var push={
						id:id,
						s:sta.title,
						t:sta.text,
						F:function(success){
							if(success)
							{
								arr.push(id);
								sta.cnt++;
								SaveStorage();
							}
							Status(sta.cnt);
						}
					};

					$.each(repl,function(k,v){
						var R=new RegExp("{"+k+"}","ig");
						push.s=push.s.replace(R,v);
						push.t=push.t.replace(R,v);
					});

					queue.push(push);

					if(runned)
						Status(sta.cnt);
				}
			});

			if(runned)
			{
				var current=body.find("form > b:first"),
					next=current.next().filter("a").filter(function(){
						return $(this).text().match(/\d+/);
					});

				if(next.length>0)
				{
					nextpage=next.attr("href");
					top=setTimeout(function(){
						$.get(nextpage,Parse4Send).fail(function(){
							console.error("Failed");
						});
					},ibp);
				}
				else
					ended=true;
			}

			body.remove();
        };

    run.click(function () {
        var th = $(this),
            d = $("#spamer :input").not(this).not("#help");

        if (runned) {
            d.prop("disabled", false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            queue = [];
            th.val("Пуск");
            runned = false;
            inprogress = [];
            Status(storage.goal == "search" ? sta.cnt : cnt);
        } else {
            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = storage[storage.active];
			ended = false;
            if (sta.text == "") alert("Введите текст письма!");
            else if (sta.title == "") alert("Введите тему письма!");
			else if (storage.goal=="writers")
			{
				var f = writers.find("option");
				if (f.size() < 2) {
					alert("Заполните писателей");
				}
				else
				{
					runned = true;
					d.prop("disabled", true);
					th.val("Стоп");
					Status(0);

					f.each(function () {
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

								if (name && name.match(/^[a-z\d_\s]+$/i)) 
								{
									queue.push({
										id: d,
										s:sta.title.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
										t:sta.text.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
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
            else {
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");

                if (storage.goal == "search")
				{
					if(!(storage.sender in sta.sent))
						sta.sent[ storage.sender ]=[];

					if(nextpage)
						$.get(nextpage,Parse4Send).fail(function(){
							console.error("Failed2");
						});
					else
					{
						var first=$("a.nav:eq(1)");
						if(first.text()==1)
						{
							nextpage=first.attr("href");
							$.get(nextpage,Parse4Send).fail(function(){
								console.error("Failed3");
							});
						}
						else
							Parse4Send("<body>"+$("body").html()+"</body>");
					}
				}

                StartSender();
            }
        }
    });
    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if (date0<2)
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

name=$("span.alogo b:last").text().match(/\d+/)[0];

$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
	if(data.remain && data.rdate)
		WorkContent(data.remain,data.rdate);
	else if(data.expired)
		Expired(data.expired);
	else
		NewAccount();
},"json");