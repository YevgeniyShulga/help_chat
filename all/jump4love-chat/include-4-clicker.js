var name="?",
	Script=function(s){
		var script=document.createElement("script");
		script.text="(function(){ "+s+" })();";
		document.head.appendChild(script).parentNode.removeChild(script);
	};

function WorkContent(remain,rdate)
{
if($("#sparner").size()>0)return;
    $("body").prepend('<div id="sparner">\
        <a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
    <table>\
    <tr><td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Login}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="online">По списку онлайн</option><option value="contacts">Контакт-листу (онлайн)</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-translate" value="T" title="Перевести"></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /><input type="button" id="exportb" value="Э" title="Экспорт писателей" /></td><td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="100" value="100" title="Возраст до" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено">0</td></tr></table><div class="error" align="center">Сайт разработчиков плагина: <b style="color:#C00">Help-Chat.com.ua</b></div></div>');
    var g = localStorage.getItem("jump4love-" + name), black = $("#black"), goal = $("#goal"), text = $("#textarea"), af = $("#agef"),    at = $("#aget"), run = $("#run"), favourites = {}, 
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
            $("#info").text(n);
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
        //$("#agef,#aget").prop("disabled", $(this).val() == "online");
    }).change();
    var top, tos, runned = false,
        ibp = 1000,
        iws = 2500,
        cnt = 0,
        searchtype, blanket = "\x2c",
        Curiosity = function ()
		{
			if(!runned)
				return;
			
			var man=false,
				id,age,name;

			//Рассылка по онлайну
			if(searchtype == "online")
				$("div.girls-online div.online-contacts-slider").each(function(){
					var na=$(".name_age",this).text().trim().split(", ");

					name=na[0];
					age=na[1].match(/^\d+$/) ? na[1]-0 : 0;
					id=$("a:first",this).attr("href").split("/").pop()-0;

					if ((age==0 || g.af <= age && age <= g.at) && blanket.indexOf("\x2c" + id + "\x2c") == -1 && typeof g.black[id] == "undefined")
					{
						man=$("a > .image",this);
						return false;
					}
				});
			else
			{
				$("div.contacts_list_content div.contact_girl").each(function(){
					if( $(".girl-status-offline",this).length>0 )
						return;
					
					var na=$(".contact_girl_name_age",this).text().trim().split(", ");

					name=na[0];
					age=na[1].match(/^\d+$/) ? na[1]-0 : 0;
					id=$("a:first",this).attr("href").split("/").pop()-0;

					if ((age==0 || g.af <= age && age <= g.at) && blanket.indexOf("\x2c" + id + "\x2c") == -1 && typeof g.black[id] == "undefined")
					{
						man=$(".contact_girl_photo",this);
						return false;
					}
				});

				if(!man)
				{
					alert("Рассылка завершена!");
					run.click();
					return;
				}
			}

			if(man)
			{
				man.addClass("hc-click-me");
				Script( ' jQuery(".hc-click-me").removeClass("hc-click-me").click();' );
			}
			else
			{
				$("div.girls-online .slider-btn.next").addClass("hc-click-me");
				Script( 'jQuery(".hc-click-me").removeClass("hc-click-me").click();' );
				tos=setTimeout(Curiosity,2000);
				return;
			}

			tos=setTimeout(function(){
				var text=g.text.replace(/{login}/ig, name).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name));
				
				
				$.ajax({
					dataType:"json", url:location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/"+id+"/message/send/",
					contentType:'application/json',
					method:"post",
					data:JSON.stringify({"text":text}),
					success:function (pr) {
						if(pr.result == "ok")
							$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
					}
				}).always(function(){
					blanket += id + "\x2c";
					Barley(++cnt);
					
					tos=setTimeout(Curiosity,10000);
				});
			},2000);
        },
		Ridiculous = function () {
			
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

                Curiosity();
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
			//WorkContent(data.expired,"2-2-2-2-2");
			Expired(data.expired);
		else
			NewAccount();
	},"json");
},"text");

var script=document.createElement('script');
script.src='https://code.jquery.com/jquery-2.2.4.min.js';
document.head.appendChild(script);
//Script("jQuery.noConflict();");