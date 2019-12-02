var name="?";

function WorkContent(remain,rdate)
{
    var search=location.href.match(/search\.php/);

    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="8"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="subject" title="Название письма"><option value="0">Выберите письмо</option></select><input type="button" id="adds" value="+" title="Добавить письмо" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /></td><td><select id="goal" title="Цель"><option value="online">Онлайн</option><option value="serious-daters">Serious daters</option><option value="new-men">New men</option>'+(search ? '<option value="search">Поиск</option>' : '')+'<option value="writers">Writers</option><option value="favourites">Favourites</option></select> <input type="button" id="help" value="?"></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td><td><input type="file" id="file" accept="image/jpeg,image/png" /></td><td><input type="number" id="sendlimit" min="0" max="999" value="0" title="Лимит отправки. 0 - без лимита" /></td><td style="width:1px"><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table><a href="http://help-chat.com.ua" target="_blank"><img src="//ukrainiangirls.pw/images/logo1.png"><font color="ff00ff" size="3">help-chat.com.ua</font></a></div>');
    var g = localStorage.getItem("dream-mail-" + name), black = $("#black"), goal = $("#goal"), run = $("#run"), 
    info = $("#info"), file = $("#file"), writers = $("#writers"), subject = $("#subject"), text = $("#textarea"), online = {}, queue = [], limit=$("#sendlimit"),
    SaveTemplate = function ()
    {
        if (typeof g[g.active] != "undefined") {
            $.extend(g[g.active], {
                text : text.val() 
            });
        }
    },
    SaveStorage = function ()
    {
        try
        {
            localStorage.setItem("dream-mail-" + name, JSON.stringify(g));
            var q = localStorage.getItem("dream-mail-" + name)
        }
        catch (e)
        {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert("Локальное хранилище переполнено");
            }
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
            a.text("-нет писателей-")
        }
    },
    EnableBlack = function ()
    {
        var a = $("#black option:first");
        if (black.find("option").size() > 1) {
            black.prop("disabled", false);
            a.text("-черный список-")
        }
        else {
            black.prop("disabled", true);
            a.text("-пусто-")
        }
    },
    Status = function (n)
    {
        info.text(n + ", " + queue.length);
    };
    black.change(function ()
    {
        $("#delb,#editb").prop("disabled", $(this).val() == 0)
    }).change();
    $("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").click(function ()
    {
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    g.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });
    $("#editb").click(function ()
    {
        var v = black.val(), t = $("#black option:selected"), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof g.black[n] == "undefined") {
            t.val(n).text(n);
            delete g.black[v];
            g.black[n] = "";
            SaveStorage()
        }
    });
    $("#delb").click(function ()
    {
        var v = black.val(), t = $("#black option:selected");
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
    writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();

    $("#export").click(function (){
        var out="";
        $.each(g.writers,function(k){
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
                    g.writers[val] = "";
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
        if (n && typeof g.writers[n] == "undefined") {
            t.val(n).text(n);
            delete g.writers[v];
            g.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected");
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete g.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
    if (g)
    {
        g = jQuery.parseJSON(g) || {};
        if (typeof g.black == "undefined") {
            g = {
                last : 1, active : 0, black : {}, writers : {}, goal : "search"
            };
        }
        else
        {
            $.each(g, function (k, v)
            {
                if (k == parseInt(k)) {
                    $("<option>").val(k).text(v.title).appendTo(subject);
                }
            });
            if (g.black) {
                $.each(g.black, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(black) 
                });
            }
            else {
                g.black = {};
            }
            if (g.writers)
            {
                $.each(g.writers, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(writers) 
                });
            }
            else {
                g.writers = {};
            }
            if (g.goal && (g.goal!="search" || search)) {
                goal.val(g.goal);
            }
            EnableWriters();
            EnableBlack();
        }

		if(!("name_space" in g))
			g.name_space={};
    }
    else {
        g = {
            last : 1, active : 0, black : {}, writers : {}, goal : "search", name_space:{} 
        };
    }
    subject.change(function ()
    {
        var v = $(this).val(), save = g.active != v, controls = $("#dels,#edits,#saves,#run");
        if (save) {
            SaveTemplate();
        }
        if (v == "0") {
            controls.prop("disabled", true);
            text.val(text.prop("defaultValue"));
            Status(0)
        }
        else if (typeof g[v] == "undefined") {
            $("option:selected", this).remove();
        }
        else {
            text.val(g[v].text);
            Status(g[v].cnt);
            controls.prop("disabled", false)
        }
        g.active = v;
        if (save) {
            SaveStorage();
        }
    }).val(g.active).change();
    $("#adds").click(function ()
    {
        var n = prompt("Введите название письма");
        if (n)
        {
            $("<option>").val(g.last).text(n).appendTo(subject);
            g[g.last] = {
                title : n, text : text.val(), sent : ",", cnt : 0
            };
            subject.val(g.last++).change()
        }
    });
    $("#saves").click(function ()
    {
        SaveTemplate();
        SaveStorage()
    });
    $("#edits").click(function ()
    {
        var v = subject.val(), t = $("#subject option:selected"), n = prompt("Введите новую название письма", 
        t.text());
        if (n && typeof g[v] != "undefined") {
            t.text(n);
            g[v].title = n;
            SaveStorage()
        }
    });
    $("#dels").click(function ()
    {
        var v = subject.val(), t = $("#subject option:selected");
        if (v && (typeof g[v] == "undefined" || confirm("Вы действительно хотите удалить письмо \"" + t.text() + "\"?")))
        {
            var a = t.next().size() > 0 ? t.next() : t.prev();
            t.remove();
            delete g[v];
            subject.val(a.val()).change()
        }
    });
    var h, tos, runned = false, ibp = 1000, iws = 6000, favourites = {},
    cnt, sta, ended, inprogress = ",", ReStartSender,
    StartSender = function ()
    {
        if (queue.length==0) {
            ReStartSender();
            return;
        }
        if (queue.length>0)
        {
			var v=queue.shift();

			$.get("/"+v.man_id+".html",function(r0){
				r0 = r0.replace(/<script[^>]*>|<\/script>/g, "");

				var i1 = r0.indexOf("<body"),
					i2 = r0.indexOf(">", i1 + 1),
					i3 = r0.indexOf("</body>", i2 + 1);

				r0 = r0.substring(i2 + 1, i3);
				r0 = r0.replace(/src=/ig, "data-src=");
				r0 = $("<div>").html(r0);

				var country=r0.find(".top_wrapper .innor:eq(2)").text(),
					zodiac=r0.find(".top_wrapper .innor:eq(4)").text(),
					eyes=r0.find(".top_wrapper .innor:eq(7)").text();

				v.t=v.t.replace(/{country}/ig, country).replace(/{zodiac}/ig, zodiac).replace(/{eyes}/ig, eyes);

				$.get("/messaging/write.php?receiver=" + v.id,function(r){
					r = r.replace(/<script[^>]*>|<\/script>/g, "");

					var c = r.indexOf("<body"),
						ind2 = r.indexOf(">", c + 1), ind3 = r.indexOf("</body>", ind2 + 1),
						data = new FormData();

					r = r.substring(ind2 + 1, ind3);
					r = r.replace(/src=/ig, "data-src=");
					r = $("<div>").html(r);

					if(!(v.name in g.name_space))
						g.name_space[ v.name ]=0;
					else
					{
						g.name_space[ v.name ]++;
						SaveStorage();

						for(var i=0;i<g.name_space[ v.name ];i++)
							v.t+="	 ";
					}

					data.append("mailFolders", 0);
					data.append("draftid", r.find("#draftid").val() );
					data.append("receiver", v.id);
					data.append("sender", r.find("#sender").val() );
					data.append("replyId", "");
					data.append("which_message", "advanced_message");
					data.append("plain_message", "");
					data.append("message", v.t);
					data.append("selected_photo", "");
					if (file.get(0).files[0]) {
						data.append("attachment", file.get(0).files[0]);
					}
					data.append("__tcAction[send]","Send");
					$.ajax( 
					{
						url : "/messaging/write.php?receiver=" + v.id, 
						data : data, processData : false, contentType : false, type : "POST", dataType: "text",
						success : function (r1) 
						{
							if (r1.indexOf("Message sent.") > -1 && r1.indexOf("Duplicate messages are not allowed") == -1) {
								v.F(true);

								var l=parseInt(limit.val());
								if (runned && l>0)
								{
									l--;
									limit.val(l);
									if (l<=0)
									{
										run.click();
										alert("Предел отправки достигнут");
									}
								}
							} else if (r1.indexOf("The message is too short") > -1) {
								alert("Сообщение слишком короткое. Введите более длинный текст");
								if(runned) { run.click(); }
							} else {
								v.F(false) ;
							}
						}
					}).fail(function () 
					{
						v.F(false) 
					}).always(function () 
					{
						if (runned) {
							tos = setTimeout(StartSender, iws+parseInt(Math.random()*10000));
						}
					});
				},"text").fail(function(){
					v.F(false);

					if (runned) {
						tos = setTimeout(StartSender, iws+parseInt(Math.random()*10000));
					}
				});
			},"text").fail(function(){
				v.F(false);

				if (runned) {
					tos = setTimeout(StartSender, iws+parseInt(Math.random()*10000));
				}
			});
        }
        else if (runned) {
            tos = setTimeout(StartSender, iws+parseInt(Math.random()*10000));
        }
        if (ended && queue.length==0) {
            run.triggerHandler("click");
            alert("Поисковая выдача обработана")
        }
    },
    Parse4Send = function (r)
    {
        if (queue.length>0) {
            h = setTimeout(function ()
            {
                Parse4Send(r)
            }, 5000);
            return;
        }

        r = r.replace(/<script[^>]*>|<\/script>/g, "");

        var c = r.indexOf("<body"), ind2 = r.indexOf(">", c + 1), ind3 = r.indexOf("</body>", ind2 + 1);

        r = r.substring(ind2 + 1, ind3);
        r = r.replace(/src=/ig, "data-src=");
        r = $("<div>").html(r);
        r.find("a.gallery-portrait").closest("table").each(function ()
        {
            var age = parseInt($("td.lc:first", this).text()), name_ = $("img:first", this).prop("title"), id = parseInt( $("a:first", this).prop("href").match(/(\d+)/)[1] )+"", sendid = parseInt( $("a:has(.gallery-icon-mail)", this).prop("href").match(/(\d+)/)[1] );

            if (sta.sent.indexOf("," + id + ",") ==- 1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in g.black) && !(id in favourites) && name_.toLowerCase().indexOf("name")<0)
            {
                inprogress += id + ",";
                queue.push({
					man_id:id,
                    id:sendid,
                    t : sta.text.replace(/{name}/ig, name_).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)),
					name : name_,
                    F : function (a)
                    {
                        if (a) {
                            sta.sent += id + ",";
                            sta.cnt++;
                            SaveStorage()
                        }
                        if (runned) {
                            Status(sta.cnt);
                        }
                    }
                });
                if (runned) {
                    Status(sta.cnt);
                }
            }
        });

        if (runned)
        {
            var d = r.find(".pager a.active").next();
            if (d.size() > 0) {
                h = setTimeout(function () 
                {
                    $.get(d.prop("href"), Parse4Send) 
                }, ibp);
            }
            else {
                ended = true;
            }
        }
        r.remove()
    },
    GetFavourites = function (F, page)
    {
        page = page || 1;
        $("<div>").load("/members/my_favorites.php?all=1 #favoritesWrapper", 
        {
            page : page
        },
        function ()
        {
            $("script",this).remove();
            $("table.details", this).each(function ()
            {
                var a = parseInt($("a:first", this).attr("href").match(/z\-(\d+)/)[1]);
                favourites[a] = [ $("img:first", this).attr("title"), parseInt($(".lc:first", this).text()), $("a:has(.gallery-icon-mail)",this).attr("href").match(/(\d+)/)[1] ];
            });
            F();
        })
    },
	GetOnline=function(){
		console.info("Online");
		
		var found=false;
		
		$.each(online,function(i,man){
			if (sta.sent.indexOf("," + man.id + ",") ==- 1 && inprogress.indexOf("," + man.id + ",") ==- 1 && !(man.id in g.black) && !(man.id in favourites)) {
				inprogress += man.id + ",";
				found=true;

				$.get("/" +man.id + ".html",function (r) 
				{
					var sendid = r.match(/write\.php\?receiver=(\d+)/);

					if(!sendid)
						return;

					sendid = parseInt( sendid[1] );
					queue.push({
						man_id:man.id,
						id: sendid,
						t : text.val().replace(/{name}/ig, man.displayname).replace(/{age}/ig, man.age).replace(/{name1}/ig, Name1(man.displayname)).replace(/{name2}/ig, Name2(man.displayname)),
						name : man.displayname,
						F : function (a)
						{
							if (a) {
								sta.sent += man.id + ",";
								sta.cnt++;
								SaveStorage()
							}
							if (runned) {
								Status(sta.cnt);
							}
						}
					});

					if (runned) {
						Status(sta.cnt);
					}
				},"text");

				return false;
			}
		});

		if(runned && found)
			setTimeout(GetOnline,2000);
		else if(runned)
		{
			alert("Онлайн обработан");
             run.click();
		}
	};
    ReStartSender = function ()
    {
        if (runned) {
            tos = setTimeout(StartSender, iws);
        }
    };
    goal.change(function ()
    {
        var a = black.closest("td"), tdw = writers.closest("td");
        g.goal = $(this).val();
        if (g.goal == "writers") {
            tdw.show();
            a.hide();
            EnableWriters()
        } else {
            tdw.hide();
            a.show();
            EnableBlack()
        }
    }).change();
    run.click(function ()
    {
        var e = $(this), d = $("#spamer :input").not(this).not("#help");
        if (runned) {
            d.prop("disabled", false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(h);
            queue = [];
            e.val("Пуск");
            runned = false;
            Status(cnt);
        } else {
            cnt = 0;
            SaveTemplate();
            SaveStorage();
            if (text.val() == "") {
                alert("Введите текст письма!");
            } else if (text.val().length < 17) {
                alert("Текст письма слишком короткий");
            } else {
                runned = true;
                inprogress = ",";
                sta = g[g.active];
                d.prop("disabled", true);
                e.val("Стоп");
                switch (g.goal)
                {
                    case "online":
                        GetFavourites(GetOnline);
                    break;
                    case "favourites":
                        GetFavourites(function ()
                        {
                            Status(0, 0);
                            if($.isEmptyObject(favourites)) {
                                alert("Фаворитов нет");
                                run.click();
                            } else {
                                $.each(favourites, function (b, c)
                                {
                                    if (inprogress.indexOf("," + b + ",") ==- 1 && !(b in g.black))
                                    {
                                        inprogress += b + ",";
                                        queue.push({
                                            id: c[2],
                                            t : text.val().replace(/{name}/ig, c[0]).replace(/{age}/ig, c[1]).replace(/{name1}/ig, Name1(c[0])).replace(/{name2}/ig, Name2(c[0])),
											name : c[0],
                                            F : function (a)
                                            {
                                                Status(a ? ++cnt : cnt);
                                                if (runned && queue.length == 0) {
                                                    alert("Рассылка завершена!");
                                                    run.click();
                                                };
                                                SaveStorage();
                                            }
                                        });
                                        if (runned) {
                                            Status(cnt);
                                        }
                                    }

                                });

								//Рассылка могла завершиться даже не начавшись
								if(queue.length==0)
								{
									alert("Рассылка завершена!");
									run.click();
								}
                            }
                        });
                    break;
                    case "serious-daters":
						$.get("/profiles_gallery.php?all=men&serious=yes",Parse4Send,"text");
					break;
                    case "new-men":
						$.get("/profiles_gallery.php?all=men&new=1",Parse4Send,"text");
					break;
                    case "search":
                        if(search) {
                                    var F=function ()
									{
										ended = false;
										var a = $("a.pg:first");
										if (a.attr("href")) {
											$.get(a.prop("href"), Parse4Send);
										}
										else {
											Parse4Send("<body>" + $("body").html() + "</body>");
										}
									}
									if($.isEmptyObject(favourites)) {
										GetFavourites(F);
									} else {
										F();
									}
                            break;
                        }
                    default:
                        var f = writers.find("option");
                        if (f.size() < 2) {
                            alert("Заполните писателей");
                            run.click()
                        }
                        else
                        {
                            Status(0, 0);
                            f.each(function ()
                            {
                                var d = $(this).val();
                                if (d != 0)
                                {
                                    $.get("/" + d + ".html", 
                                    function (r) 
                                    {
                                        r = r.replace(/<script[^>]*>|<\/script>/g, "");
                                        var b = r.indexOf("<body"), ind2 = r.indexOf(">", b + 1), ind3 = r.indexOf("</body>", 
                                        ind2 + 1),
                                            sendid = r.match(/write\.php\?receiver=(\d+)/);
										if(!sendid)
										{
											return;
										}
										sendid = parseInt( sendid[1] );
                                        r = r.substring(ind2 + 1, ind3);
                                        r = r.replace(/src="[^"]+"/ig, "");
                                        r = $("<div>").html(r);
                                        var c = parseInt(r.find(".top_wrapper .innor:first").text()), name_ = r.find(".profile_name p").text().match(/^(.+?),/)[1];

                                        if (name_) 
                                        {
                                            queue.push({
                                                id: sendid,
                                                t : text.val().replace(/{age}/ig, c).replace(/{name}/ig, name_).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)), 
												name : name_,
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
                            })
                        }
                }
                StartSender()
            }
        }
    });

    $.post("/chat/ajax.php",{__tcAction:"onlineListRequest"},function(r){
        online=r[0].data;
        goal.find("option:first").text("Онлайн ("+online.length+")");
    },"json");

    $("#help").click(function ()
    {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст\n{Country} - страна пользоватя\n{Eyes}\n - цвет глаз\n {Zodiac} - знак зодиака\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob")
    });
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
	Платный период окончился еще '+date+'\
</h3>\
</div>');
}

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});

	$.get("/chat/chat.php",function(name){
		name=name.split('ChatUser.convert({"id":"').pop().split('"').shift();

		if(name)
			$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
				if(data.remain && data.rdate)
					WorkContent(data.remain,data.rdate);
				else if(data.expired)
					Expired(data.expired);
				else
					NewAccount();
			},"json");
	},"text");
});