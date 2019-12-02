var name="?";

function WorkContent(remain,rdate)
{
	$(function () {
    $("body").prepend('<div id="sparner"><table><tr><td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="writers">Writers</option><!-- <option value="favourites">Favourites</option> --></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td><td><input type="file" id="file" accept="image/jpeg,image/png" /></td><td style="width:1px"><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table><a href="http://help-chat.com.ua" target="_blank"><img src="//ukrainiangirls.pw/images/logo1.png"><font color="ff00ff" size="3">help-chat.com.ua</font></a></div>');
    var myid = $(".block_title_bg:first").text().match(/\((\d+)\)/)[1], g = localStorage.getItem("sm-mail-" + myid), black = $("#black"), goal = $("#goal"), run = $("#run"), 
    info = $("#info"), file = $("#file"), writers = $("#writers"), text = $("#textarea"), subject = $("#subject"), queue = [], 
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
            localStorage.setItem("sm-mail-" + myid, JSON.stringify(g));
            var q = localStorage.getItem("sm-mail-" + myid)
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
        $("#delb,#editb").prop("disabled", $(this).val()=="0")
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
            $.each(n.split(/[^a-z0-9_\-]+/i),function(key,val){
                val=val.toLowerCase();
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
        var v = black.val().toLowerCase(), t = $("#black option:selected"), n = prompt("Введите новый ID", 
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
        if (v != "0" && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
    writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == "0")
    }).change();
    text.change(function(){
        g.text=text.val();
        SaveStorage();
    });
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
            $.each(n.split(/[^a-z0-9_\-]+/i),function(key,val){
                val=val.toLowerCase();
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
        var v = writers.val().toLowerCase(), t = $("#writers option:selected"), n = prompt("Введите новый ID", 
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
        if (v != "0" && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
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
            if (g.goal) {
                goal.val(g.goal);
            }
            if (g.text) {
                text.val(g.text);
            }
            EnableWriters();
            EnableBlack()
        }
    }
    else {
        g = {
            last : 1, active : 0, black : {}, writers : {}, goal : "search", text : "" 
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
        var n = prompt("Введите тему письма");
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
        var v = subject.val(), t = $("#subject option:selected"), n = prompt("Введите новую тему письма", 
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

    var h, tos, runned = false, ibp = 5000, iws = 6000, favourites = {},
    cnt, sta, ended, inprogress = "", ReStartSender,
    StartSender = function ()
    {
        if (queue.length==0) {
            ReStartSender();
            return;
        }

        if (queue.length>0)
        {

            var v=queue.shift(), data = new FormData();

            data.append("mailbox[title]", v.s);
            data.append("mailbox[body]", v.t);

            if (file.get(0).files[0]) {
                data.append("mailbox[image]", file.get(0).files[0]);
            }

            data.append("mailbox[id]","");
            data.append("mailbox[from_id]",myid);
            data.append("mailbox[to_user]",v.id);

            $.ajax( 
            {
                url : "/en/mail_reply.html?id="+v.id, 
                data : data, processData : false, contentType : false, type : "POST", dataType : "text",
                success : function (r) 
                {
                    v.F(true);//r.indexOf("Message sent")>-1
                }
            }).fail(function () 
            {
                v.F(false);
            }).always(function()
            {
                if (runned) {
                    tos = setTimeout(StartSender, iws);
                }
            });

        }
        else if (runned) {
            tos = setTimeout(StartSender, iws);
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
            }, ibp);
            return;
        }

        r = r.replace(/<script[^>]*>|<\/script>/g, "");
        r = r.replace(/src=/ig, "data-src=");
        r = $("<div>").html(r);
        r.find(".white_block_item").each(function ()
        {
            var idname = $(".searh_name:first", this).text(),
                name = $.trim(idname.match(/^([^\(]+)/)[1]),
                id = parseInt(idname.match(/\(([\d]+)\)/)[1]),
                age = parseInt($(".search_city:first").text());
            if (sta.sent.indexOf("," + id + ",") ==- 1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in g.black) && !(id in favourites) )
            {
                inprogress += id + ",";
                queue.push({
                    id : id,
                    s : sta.title.replace(/{name}/ig, name).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
                    t : sta.text.replace(/{name}/ig, name).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
                    F : function (a)
                    {
                        if (a) {
                            sta.sent += id + ",";
                            sta.cnt++;
                            SaveStorage();
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
            var ne = r.find(".pagenator > span a:eq(-2)");
            if (ne.prev().is("a")) {
                h = setTimeout(function () 
                {
                    $.get(ne.prop("href"),Parse4Send);
                }, ibp);
            }
            else {
                ended = true;
            }
        }

        r.remove();
    };
    /*GetFavourites = function (F, page)
    {
        page = page || 1;
        $("<div>").load(location.protocol + "//" + location.hostname + "/members/my_favorites.php?all=1 #favoritesWrapper", 
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
    }*/

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
        }
        else {
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
        }
        else
        {
            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = g[g.active];
            if (sta.title == "") {
                alert("Введите тему письма!");
            } else if (sta.text == "") {
                alert("Введите текст письма!");
            }
            else
            {
                runned = true;
                inprogress = ",";
                d.prop("disabled", true);
                e.val("Стоп");
                switch (g.goal)
                {
                    case "writers":
                        var f = writers.find("option");
                        if (f.size() < 2) {
                            alert("Заполните писателей");
                            run.click()
                        }
                        else
                        {
                            Status(0);
                            f.each(function ()
                            {
                                queue.push({
                                    id : id,
                                    s : sta.title,
                                    t : sta.text,
                                    F : function (a) 
                                    {
                                        Status(a ? ++cnt : cnt);
                                        if (queue.length == 0) {
                                            alert("Рассылка завершена!");
                                            run.click() 
                                        };
                                        SaveStorage(); 
                                    }
                                });
                                Status(cnt);
                            })
                        }
                    break;
                    default:
                        ended = false;
                        var pr=$(".pagenator a:first");
                        if(pr.next().next().is("a")) {
                            $.get(pr.attr("href"),Parse4Send);
                        } else {
                            Parse4Send($("body").html());
                        }
                }
                StartSender();
            }
        }
    });

    $("#help").click(function ()
    {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob")
    });
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
	Платный период окончился еще '+date+'\
</h2>\
</div>');
}

$(function(){
	name=$(".block_title_bg:first").text().match(/\((\d+)\)/)[1];

	if(name)
		$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
			if(data.remain && data.rdate)
				WorkContent(data.remain,data.rdate);
			else if(data.expired)
				Expired(data.expired);
			else
				NewAccount();
		},"json");
});