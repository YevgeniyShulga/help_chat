var name="?";

function WorkContent(remain,rdate)
{
$.ajaxSetup({
	crossDomain:true,
	contentType:"application/x-www-form-urlencoded"
});

$(function () {
	if($(".Pop-up").size()>0)
		return;

    $("body").prepend('<div class="Pop-up" style="z-index:999">\
		<a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
	<div id="sparner">\
	<table>\<tr>\<td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td>\</tr>\<tr>\<td><select id="goal" title="Цель"><option value="new">По списку онлайн</option><option value="online">Контакт-листу</option></select> <input type="button" id="help" value="?"> <input type="button" id="text-ranslate" value="T" title="Перевести"></td>\<td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td><td><select id="speed" title="Скорость"><option value="0">Медленно</option><option value="1">Чуть быстрее</option></select></td><td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="50" title="Возраст до" /></td>\<td><input type="button" id="run" value="Пуск"></td>\<td id="s-info" title="Статус рассылки: отправлено, очередь">0, 0</td>\</tr>\</table>\
	</div></div>');
    var login = document.cookie.match(/LOGIN=([^;]+)/i)[1],
        storage = localStorage.getItem("hanuma-" + login),
        run = $("#run,#run1"),
        black = $("#black"),
        speed = $("#speed"),
        goal = $("#goal"),
        text = $("#textarea"),
        af = $("#agef"),
        at = $("#aget"),
		man_id = 1,
		girlid = $("#girlid").val(),
        SaveStorage = function () {
            try {
                localStorage.setItem("hanuma-" + login, JSON.stringify(storage));
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
        }, Status = function (n, q) {
            $("#sparner #s-info, #s-info1").html(n + ", " + q);
        };
    black.change(function () {
        $("#delb,#editb").prop("disabled", $(this).val() == 0);
    }).change();
	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").off("click").click(function () {
        var n = prompt("Введите ID мужика");
        n = n.replace(/^\D+/, "");
        if (n && black.find("[value=" + n + "]").size() == 0) {
            $("<option>").val(n).text(n).appendTo(black);
            black.val(n).change();
            storage.black[n] = "";
            EnableBlack();
            SaveStorage();
        }
    });
    $("#editb").off("click").click(function () {
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
    $("#delb").off("click").click(function () {
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
            black: {},
            //goal:"online",
			af: 30,
            at: 50,
            text: "",
			speed:1
        };
        else {
            if (storage.goal) goal.val(storage.goal);
            if (storage.black) $.each(storage.black, function (k, v) {
                $("<option>").text(v ? v : k).val(k).appendTo(black);
            });
            else storage.black = {};
            text.val(storage.text);
            af.val(storage.af);
            at.val(storage.at);
			
			if(storage.speed)
				speed.val( storage.speed );
			
            EnableBlack();
        }
    } else storage = {
        black: {},
        //goal:"online",
		af: 30,
        at: 50,
        text: "",
		speed:1
    };
    goal.change(function () {
        storage.goal = $(this).val();
        $("#agef,#aget").prop("disabled", storage.goal == "online");
    }).change();
	speed.change(function(){
		storage.speed=$(this).val();
	});
    var top, tos, runned = false,
        iws = 15000,
        queue = {}, cnt = 0,
        qcnt = 0,
        inchatlist = ",",
        gid = $("#girlid").val() || $("div.hello h4 strong").text(),
        name, StartSender = function () {
			iws = storage.speed>0 ? 15000 : Math.round(3600000 / $("#mon_list > li").length);

            $.each(queue, function (k, v) {
                var ms = new Date(),
                    id = k.substr(1).split("-"),
                    Send = function () {
						v.t=v.t.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n\r");
						var script=document.createElement("script");
						script.text="(function(){var msg=\""+v.t+"\",wurl=\"sid="+id[0]+"&mid="+id[1]+"&hmid="+v.id+"&gid=\"+girlid+\"&dr=\"+mengirl+\"&n="+encodeURIComponent(name)+"&msg=\"+ encodeURIComponent(msg);"+(v.add ? "AddNewContact("+v.id+",'"+v.img+"','"+v.name+"',"+v.age+",'"+v.country+"',"+id[0]+","+id[1]+");removeMoBlock("+v.id+");" : "")+"ajax_write(addmesurl,wurl,girlid,\""+name+"\",msg);})();";
						document.body.appendChild(script).parentNode.removeChild(script);
						 v.F(true);



                        /*$.post(location.protocol + "//" + location.hostname + "/cgi-bin/livechat/addmessage.cgi", {
                            sid: id[0],
                            mid: id[1],
                            hmid: v.id,
                            gid: gid,
                            dr: "g",
                            n: name,
                            msg: v.t,
                            sec: 0,
                            x: ms
                        }, function (r) { 
                            v.F(r == "100_0");

							if(v.add)
							{
								var script=document.createElement("script");
								script.text="AddNewContact("+v.id+",'"+v.img+"','"+v.name+"',"+v.age+",'"+v.country+"',"+id[0]+","+id[1]+");removeMoBlock("+v.id+");";
								document.body.appendChild(script).parentNode.removeChild(script);
							}
                        },"text");*/
                    };
                ms = (ms.getHours() * 24 * 60 * 1000) + (ms.getMinutes() * 60 * 1000) + (ms.getSeconds() * 1000) + ms.getMilliseconds();
                /*if (v.add)
                {
                    Send();
                $.get(location.protocol + "//" + location.hostname + "/cgi-bin/livechat/contactlist.cgi", {
                    action: "addcontact",
                    sid: id[0],
                    mid: id[1],
                    gid: gid,
                    dr: "g",
                    hid: v.id,
                    x: ms
                }, Send);
                }
                else */  Send();
                delete queue[k];
                return false;
            });
            if (runned) tos = setTimeout(StartSender, iws+parseInt(Math.random()*10000));
        }, Parse4Send = function (r) {
            $.each(r.split("\n"),function (i,v) {
				if(!v)
					return;
				v=v.split("|");

				//216273|12591|19|Noah Dunn|Canada   |0        |2 |9 |1987|27|0'|0|0|0|0|0|1|/pics/NPbigsmall.gif
				//50940|56250|1|    Roy    |USA      |Fairfield|21|10|1947|67|6'|183|215|98|218419|1|1|http://www.army-of-brides.com/men/sb/218419.jpg
                var id = v[0],
					hmid = v[2]+"-"+v[1];
                age = v[9]-0;
                if ((age == 0 || (storage.af <= age && age <= storage.at)) && inchatlist.indexOf("," + id + ",") == -1 && typeof queue["u" + hmid] == "undefined" && typeof storage.black[id] == "undefined" && typeof storage.black[hmid] == "undefined") {
                    var name = v[3],
                        country = v[4];
                    inchatlist += id + ",";
                    queue["u" + hmid] = {
                        add: true,
						age:age,
						name:name,
						country:country,
						img:v[17],
                        id: id,
                        t: storage.text.replace(/{name}/ig, name).replace(/{age}/ig, age).replace(/{country}/ig, country).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
                        F: function (st) {
                            if (st) cnt++;
                            if (runned) Status(cnt, qcnt > 0 ? --qcnt : 0);
                        }
                    };
                    if (runned) Status(cnt, ++qcnt);
                }
            });

			var zeit = new Date(),
				ms = (zeit.getHours() * 24 * 60 * 1000) + (zeit.getMinutes() * 60 * 1000) + (zeit.getSeconds() * 1000) + zeit.getMilliseconds();

			top = setTimeout(function (){
                $.get("/livechat/online/monline_data.html",{gid:girlid,x:ms},Parse4Send,"text");
            },5000);
        }, StartParser = function () {
            inchatlist = ",";
			$("#list_block_ul li").each(function () {
				inchatlist += $(this).attr("id").match(/(\d+)/)[1] + ",";
			});

			var zeit = new Date(),
				ms = (zeit.getHours() * 24 * 60 * 1000) + (zeit.getMinutes() * 60 * 1000) + (zeit.getSeconds() * 1000) + zeit.getMilliseconds();

			$.get("/livechat/online/monline_data.html",{gid:girlid,x:ms},Parse4Send,"text");
        };
	name=$("#chatnick").val();
    run.off("click").click(function () {
        var th = $(this),
            d = $("#spamer :input").not(this).not("#help");
        if (runned) {
            d.prop("disabled", false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            runned = false;
            queue = {};
            qcnt = 0;
            cnt = 0;
            th.val("Пуск");
            Status(0, 0);
        } else {
            storage.text = text.val();
            storage.goal = goal.val();
            storage.at = at.val();
            storage.af = af.val();
            SaveStorage();
            if (storage.text == "") alert("Введите текст письма!");
            else {
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");
                if (storage.goal == "new") StartParser();
                else {
                    /*$("<div>").load(location.protocol + "//" + location.hostname + "/cgi-bin/livechat/gchat.cgi?hrumenid="+man_id+" #list_block_ul", function () {
                        $("img", this).remove();*/
                        $("#list_block_ul li").each(function () {
                            var id = $(this).html().match(/<em>\(ID:([^\)]+)\)/)[1];
                            if (typeof storage.black[id] == "undefined") {
								var name_=$("strong:first", this).text();
								
                                queue["u" + id] = {
                                    add: true,
                                    id: parseInt($("span", this).prop("id").match(/(\d+)$/)[1]),
                                    t: storage.text.replace(/{name}/ig, name_).replace(/{name1}/ig, Name1(name_)).replace(/{name2}/ig, Name2(name_)),
                                    F: function () {
                                        Status(++cnt, --qcnt);
                                        if (qcnt == 0 || $.isEmptyObject(queue)) {
                                            alert("Рассылка завершена!");
                                            run.click();
                                        }
                                    }
                                };
                                Status(cnt, ++qcnt);
                            }
                        })/*.remove();
                    })*/;
                }
                StartSender();
            }
        }
    });

    $("#help").off("click").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\n\Осталось " + remain + ".\n\\n\Поддерживаются следующие переменные:\n\{Name} - имя пользователя\n\{Age} - возраст (только для онлайна)\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
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