var name="?";

function WorkContent(remain,rdate)
{
$.ajaxSetup({
	crossDomain:true,
	contentType:"application/x-www-form-urlencoded"
});
$(function () {
//if( $("#gallery_inside_block").size()==0 ) { return; }
    $("body").prepend('<div id="sparner"><table><tr><th>Черный список</th><td><select id="black"><option value="0">-пусто-</option></select><br /><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td></tr><tr><th><input type="button" id="help" value="?"><input type="button" id="run" value="Пуск"></th><td id="s-info" title="Подготовлено">0</td></tr></table></div>');
    var login = document.cookie.match(/LOGIN=([^;]+)/i)[1], storage = localStorage.getItem("hanuma-mail-" + login), run = $("#run"), black = $("#black"),
        SaveStorage = function () {
            try {
                localStorage.setItem("hanuma-mail-" + login, JSON.stringify(storage));
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
            $("#s-info").text(n);
        };

    black.change(function () {
        $("#delb,#editb").prop("disabled", $(this).val() == 0);
    }).change();
    $("#addb").click(function () {
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/[^\d\-]+/),function(key,val){
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
        if (typeof storage.black == "undefined") storage = {
            black: {}
        };
        else {
            if (storage.black) $.each(storage.black, function (k, v) {
                $("<option>").text(v ? v : k).val(k).appendTo(black);
            });
            else storage.black = {};
            EnableBlack();
        }
    } else storage = {
        black: {}
    };
    var runned = false, cnt = 0, Parse4Send = function (r)
    {
        r = r.replace(/<script[^>]*>|<\/script>/g, "");
        var ind1 = r.indexOf("<body"),
            ind2 = r.indexOf(">", ind1 + 1),
            ind3 = r.indexOf("</body>", ind2 + 1);
        r = r.substring(ind2 + 1, ind3);
        r = r.replace(/(src="[^"]+")/ig, "data-$1");
        r = $("<div>").html(r);

		if(r.find("#searchengine_button").size()>0)
		{
			var inputs={};

			r.find("form:first :input").filter("[name]").each(function(){
				inputs[ $(this).attr("name") ]=$(this).val();
			});

			$.ajax({
				url:"/cgi-bin/user/men_search.cgi",
				method:"post",
				data:inputs,
				success:Parse4Send,
				dataType:"text",
				beforeSend:function(a){
					a.setRequestHeader(
						'X-Requested-With',{toString: function() { return ''; } }
					);
				}
			});
		}
		else
		{
			var num=0,limit = $(".user_notification_green h5:first").text().match(/(\d+)/), sent = $(".user_notification_green h5:last").text().match(/(\d+)/);

			limit = limit ? parseInt(limit[1]) : 0;
			sent = sent ? parseInt(sent[1]) : 0;

        r.find("#gallery_inside_block ul.gallery_cover_list > li").each(function (i)
            {
                var a = $(this).find("a:eq(1)"), id = a.text(), realid = a.prop("href"), age = $(".gallery_data", this).html().match(/<strong>Возраст:<\/strong>&nbsp;([^<]+)/), check = $(":checkbox",this);

                realid = realid ? realid.match(/id=(\d+)/)[1] : false;

                if (realid && typeof storage.black[id] == "undefined" && !check.prop("disabled")){
                    $.cookie("Plist"+ ++i, realid+"_1", { domain : ".hanuma.ru", path : "/" });
                    Status(++cnt);

                    if(limit<cnt+sent) {
						num=-1;

                        return false;
                    }

					num++;
					return false;
                }
            });

            if (runned) setTimeout(function(){
                var a=r.find(".links_inside_block strong:first").closest("li").next().find("a");
                if(num==0){//if (cnt<60 && limit>cnt+sent && a.size()>0) {
                    $.get(a.attr("href"),Parse4Send);
                }
                else {
					$.ajax({
						url:"/cgi-bin/user/men_search.cgi",
						data:{action:"send_selected"},
						success:function(r2)
						{
							var ok=r2.indexOf("user_notification_green")>-1;
							//var ok=r2.indexOf("Задача записана и будет выполнена в течении часа.")>-1;
							console.info(ok ? "Частично обработано. После выполнения - запустите рассылку еще раз" : "Произошла ошибка");

							if(num==-1)
							{
								run.click();
								alert("Выполнено");
							}
							else
								setTimeout(function(){
									$.get("/cgi-bin/user/men_search.cgi",Parse4Send,"text");
								},25000);

							//run.click();
							//location.href="/cgi-bin/user/exit.cgi";
						},
						method:"post",
						dataType:"text",
						beforeSend:function(a){
							a.setRequestHeader(
								'X-Requested-With',{toString: function() { return ''; } }
							);
						}
					});
                }
            },60000);

            r.remove();
		}
	};

    run.click(function () {
        var th = $(this),
            d = $("#sparner :input").not(this).not("#help");
            //cnt = 0;
            //Status(0);
        if (runned) {
            d.prop("disabled", false);
            EnableBlack();
            runned = false;
            th.val("Пуск");
        } else {
            runned = true;
            th.val("Стоп");

            var a=$(".links_inside_block strong:first").closest("ul").children("li:eq(1)").find("a");
            if (a.size()>0) {
                $.get(a.attr("href"),Parse4Send);
            } else {
                Parse4Send("<body>" + $("body").html() + "</body>");
            }
        }
    });

    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\n\Осталось " + remain + ".");
    });
    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if (date0<2) {
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
    }
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

name=document.cookie.match(/LOGIN=([^;]+)/i)[1];

$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
	if(data.remain && data.rdate)
		WorkContent(data.remain,data.rdate);
	else if(data.expired)
		Expired(data.expired);
	else
		NewAccount();
},"json");