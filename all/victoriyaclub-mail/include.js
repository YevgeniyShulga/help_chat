var name="?",
	script;

function WorkContent(remain,rdate,days)
{
    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="7"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="online">Онлайн</option><option value="writers">Писатели</option><option value="view">View</option><option value="winks">Winks</option><option value="likes">Likes</option><option value="favorites">Favorites</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /> <input type="button" id="help" value="?"></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /></td><td><select id="photos" title="Фотки"><option value="0">-фото-</option></select> <input type="button" id="view" title="Просмотр" value="П" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table>\
</div>');
	$("#sparner").mouseout(function(){
		$(this).scrollTop(0);
	});
    var storage = localStorage.getItem("jump4love-mail-" + name),
        black = $("#black"),
        goal = $("#goal"),
        subject = $("#subject"),
        run = $("#run"),
        text = $("#textarea"),
        photos = $("#photos"),
        view = $("#view"), writers = $("#writers"),
        info = $("#info"), queue = [],

        SaveTemplate = function () {
            if (typeof storage[storage.active] != "undefined") $.extend(storage[storage.active], {
                text: text.val()
            });
        }, SaveStorage = function () {
            try {
                localStorage.setItem("jump4love-mail-" + name, JSON.stringify(storage));
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) alert("Локальное хранилище переполнено");
            }
        }, EnableBlack = function () {
            var no = $("#black option:first");
            if (black.find("option").size() > 1) {
                black.prop("disabled", false);
                no.text("-черный список-");
            } else {
                black.prop("disabled", true);
                no.text("-пусто-");
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
    }, Status = function (n) {
            info.text(n + ", " + queue.length);
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
        var n = prompt("Введите ID писателя(ей)");
        if(n)
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
        storage = jQuery.parseJSON(storage) || {};
        if (typeof storage.last == "undefined") storage = {
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
			EnableWriters();
            EnableBlack();
        }
    } else storage = {
        last: 1,
        active: 0,
        black: {}, writers : {},
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
            controls.prop("disabled", false);
        }
        storage.active = v;
        if (save) SaveStorage();
    }).val(storage.active).change();
    $("#adds").click(function () {
        var n = prompt("Введите тему письма");
        if (n) {
            $("<option>").val(storage.last).text(n).appendTo(subject);
            storage[storage.last] = {
                title: n,
                text: text.val(),
                sent: ",",
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
    goal.change(function ()
    {
        var a = black.closest("td"), tdw = writers.closest("td");
        storage.goal = $(this).val();
        if (storage.goal == "writers") {
            tdw.show();
            a.hide();
            EnableWriters()
        }
        else {
            tdw.hide();
            a.show();
            EnableBlack()
        }
    }).change();
    photos.change(function () {
        if ($(this).val() == "0") {
            view.hide();
        } else {
            view.show();
        }
    }).change();
    view.click(function () {
        if (photos.val() > 0) window.open(photos.find(":selected").data("src"));
    });
	$.get("/js/html/profile/?action=get_photos_to_attach",function(r){
		r = r.replace(/<script[^>]*>|<\/script>/g, "");
		r = r.replace(/(src="[^"]+")/ig, "data-$1");
		r=$("<div>").html(r);

		r.children(".user-photo").each(function(){
			$("<option>").text( $(this).data("id") ).data("src", $("img", this).data("src").replace(".thumb", "")).appendTo(photos);
		});

	},"text");

    var top, tos, runned = false,
        ibp = 1000,
        inprogress = ",", favourites = {}, cnt = 0,
        sta,
        ReStartSender,
		StartSender = function ()
		{
           if (queue.length==0) {
                ReStartSender();
                return;
            }

           var v=queue.shift();

			$.post("/js/html/messages/?action=start",{
				name:v.id,
				subject:v.s,
				text:v.t,
				alerts:"",
				original:"",
				theme_alerts:"",
				theme_original:"",
				user_file_id:photos.val()
			},function(text) {
				v.F(text.indexOf("messages/dialog-")>-1);
			},"text").fail(function() {
				v.F(false);
			}).always(function () {
				if (runned)
					ReStartSender();
			});
        }, Parse4Send = function (body) {
            if (queue.length>0) {
                h = setTimeout(function ()
                {
                    Parse4Send(body);
                }, ibp);
                return;
            }

            body = body.replace(/<script[^>]*>|<\/script>/g, "");
            var ind1 = body.indexOf("<body"),
                ind2 = body.indexOf(">", ind1 + 1),
                ind3 = body.indexOf("</body>", ind2 + 1);
            body = body.substring(ind2 + 1, ind3);
            body = body.replace(/src="[^"]+"/ig, "");
            body = $("<div>").html(body);

			var black=","+Object.keys(storage.black).join(",")+",";

            body.find(".girls-list>a").each(function () {
                var id=$(".id",this).text().match(/\d+/),
					age=$(".age", this).text().match(/\d+/),
                    repl = {
                        name: $(".name",this).text(),
                        age: age ? age[0] : ""
                    };

				if(id)
					id=parseInt(id[0]);

                if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id.toString() in storage.black) && black.indexOf(","+id+",")==-1) {
                    inprogress += id + ",";

                    var s = sta.title,
                        t = sta.text;
                    
                    $.each(repl, function (k, v)
                    {
                        var R = new RegExp("{" + k + "}", "ig");
                        s = s.replace(R, v);
                        t = t.replace(R, v);
                    });

                    queue.push({
                        id: repl.name+"(id "+id+")",
                        s: s,
                        t: t,
                        F: function (st) {
                            if (st) {
                                sta.sent += id + ",";
                                sta.cnt++;
                                SaveStorage();
                            }
                            Status(sta.cnt);
                        }
                    });
                    if (runned) {
                        Status(sta.cnt);
                    }
                }
            });

            if (runned) {
                var pager=body.find(".pager .current").next();

				if(pager.length>0)
					top = setTimeout(function () {
						$.get(pager.attr("href"), Parse4Send,"text");
					}, ibp);
				else
				{
					run.click();
					alert("Результаты поиска подошли к концу");
				}
            }
            body.remove();
        };
    ReStartSender = function () {
        if (runned) tos = setTimeout(StartSender, 15000+parseInt(Math.random()*7000));
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
            inprogress = ",";
            Status(storage.goal == "search" ? sta.cnt : cnt);
        } else {
            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = storage[storage.active];
            if (sta.text == "") alert("Введите текст письма!");
            else if (sta.title == "") alert("Введите тему письма!");
            else {
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");
                switch (storage.goal) {
                case "online":
					$.get("/js/html/chat/?action=get_online_and_contact_list",function(r){
						r = $("<div>").html(r.online);
						r.children("div").each(function(){
							var id=parseInt($(this).data("id")),
							name=$(".name",this).text(),
							c=$(".age",this).text();

							if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in storage.black))
							{
								inprogress += id + ",";
								queue.push({
									id : name+"(id "+id+")",
									s : sta.title.replace(/{age}/ig, c).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
									t : sta.text.replace(/{age}/ig, c).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
									F : function (st) 
									{
										if (st) {
											sta.sent += id + ",";
											sta.cnt++;
											SaveStorage();
										}
										Status(sta.cnt);
									}
								});
							}
						});
					},"json");
				break;
                case "view":
					$("div.item.item-views .content-scroll ul>li").each(function(){
						var id=$("a:first",this).data("user-id")-0,
							name=$(".username",this).text();

						if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in storage.black))
						{
							inprogress += id + ",";
							queue.push({
								id : name+"(id "+id+")",
								s : sta.title.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								t : sta.text.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								F : function (st) 
								{
									if (st) {
										sta.sent += id + ",";
										sta.cnt++;
										SaveStorage();
									}
									Status(sta.cnt);
								}
							});
						}
					});
				break;
                case "winks":
					$("div.item.item-wink .content-scroll ul>li").each(function(){
						var id=$("a:first",this).data("user-id")-0,
							name=$(".username",this).text();

						if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in storage.black))
						{
							inprogress += id + ",";
							queue.push({
								id : name+"(id "+id+")",
								s : sta.title.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								t : sta.text.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								F : function (st) 
								{
									if (st) {
										sta.sent += id + ",";
										sta.cnt++;
										SaveStorage();
									}
									Status(sta.cnt);
								}
							});
						}
					});
				break;
                case "likes":
					$("div.item.item-likes .content-scroll ul>li").each(function(){
						var id=$("a:first",this).data("user-id")-0,
							name=$(".username",this).text();

						if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in storage.black))
						{
							inprogress += id + ",";
							queue.push({
								id : name+"(id "+id+")",
								s : sta.title.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								t : sta.text.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								F : function (st) 
								{
									if (st) {
										sta.sent += id + ",";
										sta.cnt++;
										SaveStorage();
									}
									Status(sta.cnt);
								}
							});
						}
					});
				break;
                case "favorites":
					$("div.item.item-fav .content-scroll ul>li").each(function(){
						var id=$("a:first",this).data("user-id")-0,
							name=$(".username",this).text();

						if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in storage.black))
						{
							inprogress += id + ",";
							queue.push({
								id : name+"(id "+id+")",
								s : sta.title.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								t : sta.text.replace(/{age}/ig, "").replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								F : function (st) 
								{
									if (st) {
										sta.sent += id + ",";
										sta.cnt++;
										SaveStorage();
									}
									Status(sta.cnt);
								}
							});
						}
					});
				break;
                case "writers":
					var f = writers.find("option"),
							find_black=0;

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
                                if (d != 0 && !(d in storage.black))
                                {
                                    $.get(location.protocol + "//" + location.hostname + "/man" + d + "/", 
                                    function (r) 
                                    {
                                        r = r.replace(/<script[^>]*>|<\/script>/g, "");
                                        var b = r.indexOf("<body"), ind2 = r.indexOf(">", b + 1), ind3 = r.indexOf("</body>", 
                                        ind2 + 1);
                                        r = r.substring(ind2 + 1, ind3);
                                        r = r.replace(/src="[^"]+"/ig, "");
                                        r = $("<div>").html(r);

										var name=r.find("h1:first").children().remove().end().text(),
										c=r.find("table.striped-table td:eq(1)").children().remove().end().text().match(/\d+/);

										c=c ? c[1]-0 : 0;

                                        if (name) 
                                            queue.push({
                                                id : name+"(id "+d+")",
                                                s : sta.title.replace(/{age}/ig, c).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
                                                t : sta.text.replace(/{age}/ig, c).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
                                                F : function (a) 
                                                {
                                                    Status(a ?++cnt : cnt);
                                                    if (queue.length == 0) {
                                                        alert("Рассылка завершена!");
                                                        run.click() 
                                                    };
                                                    SaveStorage() 
                                                }
                                            });
                                        r.remove();
                                    });
                                }
								else
									find_black++;

								if(find_black==f.length)
								{
									alert("Весь список писателей содержится в черном списке");
									run.click();
								}
                            })
                        }
                break;
                default:
                    Parse4Send("<body>" + $("body").html() + "</body>");
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
	Платный период окончился еще '+date+
'</h3>\
</div>');
}

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});

	var GetName=function(){
		var a=$("a.pointer");

		if(a.length<1)
		{
			setTimeout(GetName,2000);
			return;
		}

		name=a.prop("href").match(/\d+/)[0];

		$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
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
	};

	setTimeout(GetName,2000);
});