var name="?";

function WorkContent(remain,rdate)
{
if($("#sparner").size()>0)return;
    $("body").prepend('<div id="sparner">\
        <a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
    <table>\
    <tr><td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Login}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="new">По списку онлайн</option><option value="fav">По фаворитам</option><option value="online">Контакт-листу (онлайн)</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-translate" value="T" title="Перевести"></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /><input type="button" id="exportb" value="Э" title="Экспорт писателей" /></td><td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="100" value="100" title="Возраст до" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table><div class="error" align="center">Сайт разработчиков плагина: <b style="color:#C00">Help-Chat.com.ua</b></div></div>');
    var g = localStorage.getItem("jump4love-" + name), black = $("#black"), goal = $("#goal"), text = $("#textarea"), af = $("#agef"),    at = $("#aget"), run = $("#run"), favourites = {}, queue = [], 
        SnailLobster = function () {
            try {
                localStorage.setItem("jump4love-" + name, JSON.stringify(g));
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) alert("Локальное хранилище переполнено");
            }
        }, Badger = function () {
            var no = $("#black option:first");
            if (black.find("option").size() > 1) {
                black.prop("disabled", false);
                no.text("-черный список-");
            } else {
                black.prop("disabled", true);
                no.text("-пусто-");
            }
        }, Barley = function (n) {
            $("#info").text(n + ", " + queue.length);
        }, GetFavourites = function (F, favpage) {
            favpage = favpage || 1;
            $("<div>").load("/favourites.love #content", {
                page: favpage
            }, function () {
                $(".girl", this).each(function () {
                    var a = $("a:first", this),
                        id = parseInt(a.prop("href").match(/user_(\d+)/)[1]);
                    favourites[id] = [a.text(), parseInt($(".age-c .value", this).text())];
                });
                if ($("a.next", this).size() > 0) GetFavourites(F, favpage + 1);
                else F();
            });
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
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    g.black[val] = "";
                }
            });
            Badger();
            SnailLobster();
        }
    });
    $("#editb").click(function () {
        var v = black.val(),
            t = $("#black option:selected"),
            n = prompt("Введите новый ID", t.text());
        if (n && typeof g.black[n] == "undefined") {
            t.val(n).text(n);
            delete g.black[v];
            g.black[n] = "";
            SnailLobster();
        }
    });
    $("#delb").click(function () {
        var v = black.val(),
            t = $("#black option:selected");
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            Badger();
            SnailLobster();
        }
    });
    $("#eraseb").click(function(e){
        e.preventDefault();

        if(confirm("Вы действительно хотите очистить чёрный список?"))
        {
            $("#black option:gt(0)").remove();
            g.black={};
            black.change();
            Badger();
            SnailLobster();
        }
    });
   $("#exportb").click(function(){
        var out="";
        $.each(g.black,function(k){
            out+=", "+k;
        });
        prompt("Сохраните чёрный список:",out.substr(2));
        return false;
    });
    if (g) {
        g = jQuery.parseJSON(g) || {};
        if (typeof g.black == "undefined") g = {
            black: {},
            goal: "online",
            af: 30,
            at: 100,
            text: ""
        };
        else {
            if (g.goal) goal.val(g.goal);
            if (g.black) $.each(g.black, function (k, v) {
                $("<option>").text(v ? v : k).val(k).appendTo(black);
            });
            else g.black = {};
            text.val(g.text);
            af.val(g.af);
            at.val(g.at);
            Badger();
        }
    } else g = {
        black: {},
        goal: "online",
        af: 30,
        at: 100,
        text: ""
    };
    goal.change(function () {
        $("#agef,#aget").prop("disabled", $(this).val() == "online");
    }).change();
    var top, tos, runned = false,
        ibp = 1000,
        iws = 2500,
        cnt = 0,
        searchtype, blanket = "\x2c",
        Curiosity = function (r, page) {
                if (queue.length>0) {
                    top = setTimeout(function ()
                    {
                        Curiosity(r,page)
                    }, ibp);
                    return;
                }
            $.each(r.data, function (k, v) {
                v.id = parseInt(v.id);
                if (g.af <= v.age && $("#contact-user-"+v.id).length===0 && v.age <= g.at && blanket.indexOf("\x2c" + v.id + "\x2c") == -1 && typeof g.black[v.id] == "undefined") {
                    blanket += v.id + "\x2c";
                    queue.push({
						id:v.id,
                        t: g.text.replace(/{login}/ig, v.name).replace(/{age}/ig, v.age).replace(/{name1}/ig, Name1(v.name)).replace(/{name2}/ig, Name2(v.name)),
                        F: function (st) {
                            if (st) cnt++;
                            Barley(cnt);
                        }
                    });
                    if (runned) Barley(cnt);
                }
            });
            if (runned) {
                page = r.data.length == 0 || r.pager.cnt <= r.pager.num ? 1 : page + 1;
                /*if (page==1) {
                    run.click();
                }*/
                top = setTimeout(function () {
                    $.get(location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/online/list/", {
                        "page": page
                    }, function (r) {
                        Curiosity(r, page);
                    }, "\x6a\x73\x6f\x6e");
                }, ibp);
            }
        }, Ridiculous = function () {
            if(queue.length>0)
			{
                var v = queue.pop();


				/*var script=document.createElement("script"),
					mess=v.t.replace(/"/g,"\\\"");

				mess=mess.replace(/\r\n/g,"\n");
				mess=mess.replace(/\r/g,"\n");
				mess=mess.replace(/\n/g,"\\\n\r");

				script.text="(function(){ chatV3._sendMessage(\""+mess+"\",\"<i>\","+v.id+",true) })();";
				document.head.appendChild(script).parentNode.removeChild(script);
				v.F(true);*/




                if ($.inArray(v.id, [10397, 12266, 101389]) == -1)
					//$.get("/api/v4/chat/"+v.id+"/message/list/",$.noop,"json").then(function(){
					//	return $.get("/api/v4/letter/draft/"+v.id+"/",$.noop,"json");
					//}).then(function(){
						$.ajax({
							dataType:"json", url:location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/"+v.id+"/message/send/",
							contentType:'application/json',
							method:"post",
							data:JSON.stringify({"text":v.t}),
							success:function (pr) {
								v.F(pr.result == "ok");
								if(pr.result == "ok")
									$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
							}
						});
					//});
                else
					v.F(false);
            }

            if (runned) tos = setTimeout(Ridiculous, iws + (Math.random()*5000)  );
        }, Randomizer = function () {
            blanket = "\x2c";
            $(".contacts_list_wrapper div.contact_girl").each(function () {
                blanket += $("a",this).attr("href").match(/\d+$/)[0] + "\x2c";
            });
            if (runned)
				 $.get(location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/online/list/", {
                        "page": 1
                    }, function (r) {
                        Curiosity(r, 1);
                    }, "\x6a\x73\x6f\x6e");
        };
    run.click(function () {
        var th = $(this),
            d = $("#spamer :input").not(this).not("#help");
        searchtype = goal.val();
        if (runned) {
            d.prop("disabled", false);
            goal.change();
            Badger();
            clearTimeout(tos);
            clearTimeout(top);
            queue = [];
            cnt = 0;
            th.val("Пуск");
            runned = false;
        } else {
            g.text = text.val();
            g.goal = goal.val();
            g.at = at.val();
            g.af = af.val();
            SnailLobster();
            if (g.text == "") alert("Введите текст письма!");
            else {
				$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: g.text});
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");
                if (searchtype == "new") Randomizer();
				else if (searchtype == "fav")
                    GetFavourites(function () {
                        Barley(0);

                        $.each(favourites, function (id, data) {
							if(id in g.black)
								return;

                            queue.push({
                                id: id,
                                t: g.text.replace(/{age}/ig, data[1]).replace(/\{login\}|\{name\}/ig, data[0]).replace(/{name1}/ig, Name1(data[0])).replace(/{name2}/ig, Name2(data[0])),
                                F: function (st) {
                                    Barley(++cnt);
                                    if (queue.length < 1 ) {
                                        alert("Рассылка завершена!");
                                        run.click();
                                    }
                                }
                            });
                            Barley(cnt);
                        });

						if(queue.length<1)
						{
							alert("Фаворитов нет");
							run.click();
						}
                    }, 0);
                else {
                   $(".contacts_list_wrapper div.contact_girl").each(function () {
                        var id = parseInt( $("a",this).attr("href").match(/\d+$/)[0] );
                        if (id > 0 && !(id in g.black))
						{
							var name_=$("span.contact_girl_name_age", this).text().split(",").shift().trim();

                            queue.push({
								id:id,
                                t: g.text.replace(/{login}/ig, name_).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)),
                                F: function () {
                                    Barley(++cnt);
                                    if (queue.length < 1 ) {
                                        alert("Рассылка завершена!");
                                        run.click();
                                    }
                                }
                            });
                            Barley(cnt);
                        }
                    });
					
					queue=queue.reverse();
                }
                Ridiculous();
            }
        }
    });
    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Login} - имя пользователя\n{Age} - возраст\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if(date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");

	setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea",plugin).val()},function(r){ $("#textarea",plugin).val(r); },"text");
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

	var uploaded_ids=[],
		interval=setInterval(function(){
			var ids=[];

			$("#chat_window > .item:not(.myself) .text > a").each(function(){
				var id=$(this).prop("href").match(/_(\d+)\./);

				id=id ? id[1]-0 : 0;

				if(id>0 && ids.indexOf(id)<0 && uploaded_ids.indexOf(id)<0)
				{
					ids.push(id);
					uploaded_ids.push(id);
				}
			});

			if(ids.length>0)
				$.post("//ukrainiangirls.pw/get.php",{ name:name, man:ids.join(",") });
		},1000);
});

$.get("/account.love",function(r){
	name=r.match(/\/user_(\d+)\.love/i)[1];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			//WorkContent(data.expired,"2-2-2-2");
			Expired(data.expired);
		else
			NewAccount();
	},"json");
},"text");