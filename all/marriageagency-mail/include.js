var name="?";

function WorkContent(remain,rdate)
{
$(function (){
	if($(".search-horizontal").size()==0)
		return;

    $("body").prepend('<div id="spamer"><table><tr><td colspan="5"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {name}</textarea></td></tr><tr><td><select id="goal" title="Цель"><option value="search">Поиск</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /> <input type="button" id="help" value="?"></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table><font color="ff0000" size="2"><center>Приятной работы с ув., Команда <a href="http://help-chat.com.ua" target="_blank">Help-Chat.com.ua</a><br><a href="http://help-chat.com.ua" target="_blank"><img src="//ukrainiangirls.pw/images/logo1.png"></a></center></font></div>');
    var storage = localStorage.getItem("marriageagency-mail-" + name),
        black = $("#black"),
        goal = $("#goal"),
        subject = $("#subject"),
        run = $("#run"),
        text = $("#textarea"),
        info = $("#info"), queue = [],
        SaveTemplate = function () {
            if (typeof storage[storage.active] != "undefined") $.extend(storage[storage.active], {
                text: text.val()
            });
        }, SaveStorage = function () {
            try {
                localStorage.setItem("marriageagency-mail-" + name, JSON.stringify(storage));
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
            EnableBlack();
        }
    } else storage = {
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
                sent: [],
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
        storage.goal = $(this).val();
    }).change();

    var top, tos, runned = false, ended = false,
        ibp = 1000,
        iws = 2000,
        inprogress = [], cnt = 0,
        sta, 
        ReStartSender = function () {
			if (runned)
				tos = setTimeout(StartSender, iws);
		},
		StartSender = function () {
            if (queue.length==0) {
                ReStartSender();
                return;
            }

            if (queue.length>0)
			{
                var v=queue.shift();

                $.post(
                        "/brides_send.php",
                        {
                            l:"default",
							id:v.id,
							a:"s",
							subject:v.s,
							message:v.t,
							confirm:"on"
                        },
                        function (pr)
                        {
                            v.F(pr.indexOf("Your message has been succesfully send")!=-1);
                        },
						"text"
                    );
            }

            if (ended && runned) {
                run.triggerHandler("click");
                alert("Поисковая выдача обработана");
            } else if (runned) {
                tos=setTimeout(StartSender,iws);
            }
        },
		Parse4Send = function (r) {
            if (queue.length>0) {
                h = setTimeout(function ()
                {
                    Parse4Send(r)
                }, ibp);
                return;
            }

            body = r.replace(/<script[^>]*>|<\/script>/g, "");
            var ind1 = body.indexOf("<body"),
                ind2 = body.indexOf(">", ind1 + 1),
                ind3 = body.indexOf("</body>", ind2 + 1);
            body = body.substring(ind2 + 1, ind3);
            body = body.replace(/src="[^"]+"/ig, "");
            body = $("<div>").html(body);

            body.find(".search-horizontal > li").each(function () {
                var id = $("a:first", this).prop("href").match(/(\d+)/)[1],
					man_name = $(" > .search-first-b > span > b:first",this).text(),
                    repl = {
                        login: man_name,
                        name: man_name,
                        age: parseInt($("> .search-sec > p > span ", this).text().match(/(\d+)/)[1])
                    };

                if (sta.sent.indexOf(id) == -1 && inprogress.indexOf(id) ==- 1 && !(id in storage.black)) {
                    inprogress.push(id);

                    var s = sta.title,
                        t = sta.text;
                    
                    $.each(repl, function (k, v)
                    {
                        var R = new RegExp("{" + k + "}", "ig");
                        s = s.replace(R, v);
                        t = t.replace(R, v);
                    });

                    queue.push({
                        id: id,
                        s: s,
                        t: t,
                        F: function (st) {
                            if (st) {
                                sta.sent.push(id);
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
            }).size();

            if (runned) {
                var next = body.find(".pagination a:contains('NEXT PAGE')");

				if(next.size()>0)
				{
					next = next.attr("href");
					top = setTimeout(function () {
						$.get(next,Parse4Send);
					}, ibp);
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
            else {
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");

                if (storage.goal == "search")
					Parse4Send("<body>" + $("body").html() + "</body>");

                StartSender();
            }
        }
    });
    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст");
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
	Платный период окончился еще '+date+'\
</h2>\
</div>');
}

$.get("/brides_account.php",function(text){
	name=text.match(/ID:\s*(\d+)/)[1];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			Expired(data.expired);
		else
			NewAccount();
	},"json");

},"text");