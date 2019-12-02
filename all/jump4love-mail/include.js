var name="?",
	script,
	Captcha=$.noop;

function WorkContent(remain,rdate,days)
{
$(function () {
$('body').append('<iframe id="hc-plugin" srcdoc="" style="min-height: 380px; max-height: 700px;z-index: 1501;"></iframe><div id="hc-trigger" style="left:0;z-index: 1500;"><img src="//ukrainiangirls.pw/static/imgs/logo.png" alt="Logo"></div>\
	<div class="recaptcha" style="position:fixed;left:120px;top:80px;"></div>\
	<div id="count_send"></div>\
');
var plugin=$("#hc-plugin").get(0).contentWindow.document;
//position:fixed; left:125px; top:7px;
plugin.open("text/html","replace");
plugin.write('<!DOCTYPE html><html lang="ru"><head>\
	<meta charset="utf-8">\
	<meta name="viewport" content="width=device-width, initial-scale=0.3">\
	<title>[TITLE]</title>\
	<link href="//ukrainiangirls.pw/static/css/style.css" rel="stylesheet"><link href="//ukrainiangirls.pw/static/css/jquery.scrollbar.css" rel="stylesheet">\
	<script src="//cdn.jsdelivr.net/g/jquery@2,bootstrap@3"></script>\
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.5.8/perfect-scrollbar.min.js"></script>\
	<script src="//ukrainiangirls.pw/static/js/jquery.scrollbar.min.js"></script>\
	<script src="//ukrainiangirls.pw/static/js/functions.js"></script>\
	<style>\
input[type="date"]::-webkit-clear-button,\
input[type="date"]::-ms-clear {\
  display: none;\
}\
\
#tab3 table {\
  width: 100%;\
  text-align: center;\
}\
\
#tab3 th {\
  font-weight: bold;\
  text-align: center;\
}\
\
tr.select-man {\
  cursor: pointer;\
}\
\
sup {\
  color: red;\
}\
	</style>\
</head><body style="overflow: auto; overflow-x: hidden;">\
<div id="hc-plugin" class="wrapped container" style="width: auto;">\
  <div class="row">\
    <div class="top_drag drag"></div>\
    <div class="col-xs-4 lb">\
      <div class="hc-logo"><a href="//help-chat.com.ua" target="_blank" title="Help-Chat"><img src="//ukrainiangirls.pw/static/imgs/logo.png" alt="Logo"></a></div>\
      <ul class="tab-menu">\
        <li role="tab0" class="active">Главная</li>\
        <li role="tab1">Чёрный список</li>\
        <li role="tab2">Добавить писателя</li>\
        <li role="tab4">Продлить активацию</li>\
        <li role="tab5">FAQ</li>\
      </ul>\
    </div>\
    <div class="col-xs-6" style="margin-left:-1rem;">\
      Очередь отправки:\
      <td title="Статус рассылки: отправлено, очередь"><text style="color:#18dbff;" id="info">0 из 0</text></td>\
    </div>\
    <div class="pull-right win_control">\
      <div class="btn-win btn-minimize" id="min_win"></div>\
      <div class="btn-win btn-minimize" id="max_win" style="background-image:url(https://ukrainiangirls.pw/static/imgs/btn_maximize.png)"></div>\
      <div class="btn-win btn-close" id="close_win"></div>\
    </div>\
    <div class="col-xs-8 hc-rb">\
      <div id="tab0">\
        <div id="tab0-content">\
          <div class="mess" style="padding-top:2.3rem;">\
            <div class="col-xs-9 pull-left">\
              <textarea class="st_mess single" id="textarea" style="min-height: 40px; width: 100%; resize: vertical; margin-top: 0px; margin-bottom: 0px; height: 67px;">Hi {name}!</textarea>\
            </div>\
            <div class="col-xs-3 pull-right">\
              <input type="submit" value="Пуск" id="run" class="btn btn-type2">\
            </div>\
            <div class="clr"></div>\
          </div>\
          <div class="aftmess">\
            <div class="col-xs-6" style="padding-left:5px; margin-top:-1rem;">\
              Отсылать по:\
              <select id="goal" title="Цель"><option value="search">Поиск</option><option value="search-photo">Поиск с фото</option><option value="writers">Writers</option><option value="new">Онлайн</option><option value="new-photo">Онлайн с фото</option><option value="favourites">Фавориты</option></select>\
            </div>\
            <div class="col-xs-6" style="padding-left:2rem; margin-top:-1.1rem;">\
              Тема письма:\
              <select id="subject" title="Тема" class="" style="max-width: 114px;">\
					<option value="0">Выберите тему</option>\
				</select>\
              <br>\
              <input type="button" style="width:20px;height:20px;border:1px solid #a2a4a5; border-radius:3px" id="adds" value="+" title="Добавить тему" class="" />\
              <input type="button" style="width:20px;height:20px;border:1px solid #a2a4a5; border-radius:3px" id="dels" value="&minus;" title="Удалить" class="" />\
              <input type="button" style="width:20px;height:20px;border:1px solid #a2a4a5; border-radius:3px" id="edits" value="E" title="Редактировать" class="" />\
              <input type="button" style="width:20px;height:20px;border:1px solid #a2a4a5; border-radius:3px" id="text-translate" value="T" title="Перевести письмо" class="" />\
            </div>\
            <div class="clr"></div>\
          </div>\
		  <div>\
          <div class="mess">\
            <div class="col-xs-6" style="margin-top:-0.3rem;">\
              Фото:\
              <select id="photos" title="Фотки"><option value="0">-фото-</option></select><br>\<input type="button" id="view" title="Просмотр" value="П" style="width:20px;height:20px;border:1px solid #a2a4a5; border-radius:3px" /><br><br>\
            </div>\
            <div class="mess">\
              <div class="col-xs-6" style="padding-left:6px; margin-top:-1rem;">\
                Время приглашения:\
                <input type="datetime-local" id="datetime" title="Offline invite" style="width:130px;height:30px;">\
              </div>\
              <div class="col-xs-6" style="padding-left:6px;">\
                <input type="checkbox" id="to-chat" title="Приглашать в чат" /><label for="to-chat">Приглашать в чат</label>\
              </div>\
              <div class="col-xs-6" style="margin-top:-0.3rem;">\
                Лимит отправки:\
                <input type="number" min="0" id="limit" title="Лимитирование отправки" value="0" style="width:130px; height:30px;">\
              </div>\
              <div class="clr"></div>\
            </div>\
            <div class="clr"></div>\
          </div>\
          <div class="mess" style="margin-top: -1.5rem;">\
            <input type="radio" style="vertical-align:middle;margin:0;" value="hand" name="captcha" checked>Ручной ввод\
            <input type="radio" style="vertical-align:middle;margin:0; margin-left:1rem;" value="server" name="captcha">Server captcha<br>\
            <input type="radio" style="vertical-align:middle;margin:0;" value="ru" name="captcha">Rucaptcha\
            <input type="radio" style="vertical-align:middle;margin:0; margin-left:2.5rem;" value="anti" name="captcha">Anti-Captcha\
          </div>\
          <div class="mess" style="margin-top:-0.4rem;">\
            Поле ввода API\
            <input type="text" id="api" title="API" style="width:130px;height:30px;">\
          </div>\
		  </div>\
          <div class="load">\
            <div class="col-xs-6" style="margin-top:-1.5rem;">\
              <div class="day_activ" style="margin-bottom:0.2rem;">Дней активации <span class="activate"><span id="days">0</span></span>\
              </div>\
            </div>\
            <div class="col-xs-6"></div>\
          </div>\
        </div>\
      </div>\
      <div id="tab1">\
        <div class="messBlock">\
          <div class="title">Чёрный список</div>\
          <select id="black" title="Черный список" size="15" class="id_list"></select>\
          <div class="subDesc">\
            *перед удалением выберите одного или несколько<br> мужчин в списке\
          </div>\
          <div class="btnPanel">\
		  <input type="button" id="addb" value="+" title="Добавить в черный список" class="btn btn-type4" />\
		  <input type="button" id="delb" value="&minus;" title="Удалить" class="btn btn-type5" />\
		  <input type="button" id="editb" value="E" title="Редактировать" class="btn btn-type6" />\
		  <input type="button" id="exportb" value="Эк" title="Экспорт чёрного списка" class="btn btn-type4" />\
		  <input type="button" id="clearb" value="C" title="Очистить чёрный список" class="btn btn-type5" />\
          </div>\
        </div>\
      </div>\
      <div id="tab2">\
        <div class="messBlock">\
          <div class="title">Писатели</div>\
          <select id="writers" title="Писатели" size="15" class="id_list"></select>\
          <div class="subDesc">\
            *перед удалением выберите одного или несколько<br> &nbsp;&nbsp;мужчин в списке\
          </div>\
          <div class="btnPanel">\
            <input type="button" id="addw" value="+" title="Добавить" class="btn btn-type4" />\
			<input type="button" id="delw" value="&minus;" title="Удалить" class="btn btn-type5" />\
			<input type="button" id="editw" value="E" title="Редактировать" class="btn btn-type6" />\
			<input type="button" id="export" value="Эк" title="Экспорт писателей" class="btn btn-type4" />\
			<input type="button" id="clearw" value="С" title="Очистить писателей" class="btn btn-type5" />\
          </div>\
        </div>\
      </div>\
      <div id="tab4">\
        Для того что бы продлить активацию, Вам достаточно связаться с нами в скайпе, наш скайп: <b>alekss7776</b>\
      </div>\
      <div id="tab5">\
        Поддерживаются следующие переменные:<br>{Login} - имя пользователя<br>{Age} - возраст<br>{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose<br>{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob\
      </div>\
    </div>\
  </div>\
  <div class="row info drag">\
  <font color="red">В меню FAQ, находиться полезная инструкция как пользоваться новым плагином.</font><br>\
		</div>\
	</div>\
</body></html>');
plugin.close();

$("head").append('<link href="//ukrainiangirls.pw/static/css/iframes.css" rel="stylesheet">');

$('#hc-trigger').click(function(e){
	$('#hc-plugin').toggleClass("showed").css("position","");

	e.preventDefault();
	e.stopPropagation();
});

setInterval(function(){
	$("#hc-plugin").height( $("#hc-plugin",plugin).height()+10 );
},1000);

setTimeout(function(){
	$("#sparner").mouseout(function(){
		$(this).scrollTop(0);
	});
    var storage = localStorage.getItem("jump4love-mail-" + name),
        black = $("#black",plugin),
		writers = $("#writers",plugin),

        goal = $("#goal",plugin),
		run = $("#run",plugin),
		api = $("#api",plugin),

		info = $("#info",plugin),
		limit = $("#limit",plugin),
        subject = $("#subject",plugin),
        text = $("#textarea",plugin),
		date=$("#datetime",plugin),
		tochat=$("#to-chat",plugin), 
		captcha_type=$("input[name=captcha]:radio",plugin),

        photos = $("#photos",plugin),
        view = $("#view",plugin),
		queue = [], captcha_add_id=0,

		recaptcha_id=false,

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
        },
		EnableWriters = function ()
		{
			if (writers.find("option").size() > 0) {
				writers.prop("disabled", false);
			}
			else {
				writers.prop("disabled", true);
			}
		},
		EnableBlack = function () {
           if (black.find("option").size() > 0) {
				black.prop("disabled", false);
			}
			else {
				black.prop("disabled", true);
			}
        }, Status = function (n) {
            info.text(n + ", " + queue.length);
        },
	D=new Date();

	D.setHours( D.getHours()+2 );
	date.val( D.getFullYear()+"-"+(D.getMonth()<9 ? "0"+(D.getMonth()+1) : D.getMonth()+1)+"-"+(D.getDate()<10 ? "0"+D.getDate() : D.getDate())+"T"+D.getHours()+":"+D.getMinutes() );

	$("#days",plugin).text( days );
	tochat.change(function(){
		storage.tochat=$(this).prop("checked");

		date.prop("disabled",!storage.tochat);
		text.prop("disabled",storage.tochat);
	});

	captcha_type.change(function(){
		storage.captcha_type=$(this).val();
		
		switch(storage.captcha_type)
		{
			case "ru":
				api.prop("disabled",false).val(storage.rucaptcha);
			break;
			case "anti":
				api.prop("disabled",false).val(storage.anticaptcha);
			break;
			default:
				api.prop("disabled",true).val("");
		}
	});

	text.on("input",function(){
		var x=CheckNames($(this).val(),["age","name","name1","name2","login"]);
		
		$(this).closest(".mess").css("background-color",x.length>0 ? "red" : "");
	});

	api.change(function(){
		switch(storage.captcha_type)
		{
			case "ru":
				storage.rucaptcha=$(this).val();
			break;
			case "anti":
				storage.anticaptcha=$(this).val();
			break;
		}

		SaveStorage();
	});

	black.change(function () {
        $("#delb,#editb",plugin).prop("disabled", $(this).val() == 0);
    }).change();
    $("#text-translate",plugin).click(function(e){
        e.preventDefault();
        $.post("//ukrainiangirls.pw/translate.php",{text:text.val()},function(r){ text.val(r); },"text");
    });
	
	var is_max=false;
    $("#max_win",plugin).click(function (){
		if(is_max)
		{
			$("#hc-plugin").attr("style","min-height: 380px; max-height: 700px;z-index: 1501;");
			$(this).attr("style","background-image:url(https://ukrainiangirls.pw/static/imgs/btn_maximize.png)");
		}
		else
		{
			$("#hc-plugin").attr("style","left:0px;width:100%;z-index: 1501;");
			$(this).attr("style","background-image:url(https://ukrainiangirls.pw/static/imgs/btn_restore.png");
		}

		is_max=!is_max;
	});
	
    $("#addb",plugin).click(function () {
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/\D+/),function (key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>",plugin).val(val).text(val).appendTo(black);
                    black.val(val).change();
                    storage.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });
    $("#editb",plugin).click(function () {
        var v = black.val(),
            t = $("#black option:selected",plugin),
            n = prompt("Введите новый ID", t.text());
        if (n && typeof storage.black[n] == "undefined") {
            t.val(n).text(n);
            delete storage.black[v];
            storage.black[n] = "";
            SaveStorage();
        }
    });
    $("#delb",plugin).click(function () {
        var v = black.val(),
            t = $("#black option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.black[v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
    });
   $("#exportb",plugin).click(function(){
        var out="";
        $.each(storage.black,function(k){
            out+=", "+k;
        });
        prompt("Сохраните чёрный список:",out.substr(2));
        return false;
    });
	$("#clearb",plugin).click(function ()
    {
        if (confirm("Вы действительно хотите очистить весь чёрный список?")) {
			$("#black option:gt()",plugin).remove();
            storage.black={};
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
    $("#export",plugin).click(function(){
        var out="";
        $.each(storage.writers,function(k){
            out+=", "+k;
        });
        prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#addw",plugin).click(function ()
    {
        var n = prompt("Введите ID писателя(ей)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (writers.find("[value=" + val + "]").size() == 0) {
                    $("<option>",plugin).val(val).text(val).appendTo(writers);
                    writers.val(val).change();
                    storage.writers[val] = "";
                }
            });
            EnableWriters();
            SaveStorage();
        }
    });
    $("#editw",plugin).click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected",plugin), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof storage.writers[n] == "undefined") {
            t.val(n).text(n);
            delete storage.writers[v];
            storage.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw",plugin).click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
	$("#clearw",plugin).click(function ()
    {
        if (confirm("Вы действительно хотите очистить весь список писателей?")) {
			$("#writers option:gt()",plugin).remove();
            storage.writers={};
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
            writers: {},
            photo: 0,
            goal: "search"
        };
        else {
            $.each(storage, function (k, v) {
                if (k == parseInt(k)) $("<option>",plugin).val(k).text(v.title).appendTo(subject);
            });
            if (storage.black) $.each(storage.black, function (k, v) {
                $("<option>",plugin).text(v ? v : k).val(k).appendTo(black);
            });
            else storage.black = {};
			
			 if (storage.writers)
            {
                $.each(storage.writers, function (k, v) 
                {
                    $("<option>",plugin).text(v ? v : k).val(k).appendTo(writers) 
                });
            }
			else {
                storage.writers = {};
            }

			if(storage.tochat)
				tochat.prop("checked",true);

			tochat.change();

			if(storage.captcha_type)
				captcha_type.filter(function(){ return $(this).val()==storage.captcha_type; }).prop("checked",true);

			switch(storage.captcha_type)
			{
				case "ru":
					api.prop("disabled",false).val(storage.rucaptcha);
				break;
				case "anti":
					api.prop("disabled",false).val(storage.anticaptcha);
				break;
				default:
					api.prop("disabled",true).val("");
			}

			if (storage.goal) goal.val(storage.goal);
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
            controls = $("#dels,#edits,#saves,#run",plugin);
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
    $("#adds",plugin).click(function () {
        var n = prompt("Введите тему письма");
        if (n) {
            $("<option>",plugin).val(storage.last).text(n).appendTo(subject);
            storage[storage.last] = {
                title: n,
                text: text.val(),
                sent: ",",
                cnt: 0
            };
            subject.val(storage.last++).change();
        }
    });
    $("#saves",plugin).click(function () {
        SaveTemplate();
        SaveStorage();
    });
    $("#edits",plugin).click(function () {
        var v = subject.val(),
            t = $("#subject option:selected",plugin),
            n = prompt("Введите новую тему письма", t.text());
        if (n && typeof storage[v] != "undefined") {
            t.text(n);
            storage[v].title = n;
            SaveStorage();
        }
    });
    $("#dels",plugin).click(function () {
        var v = subject.val(),
            t = $("#subject option:selected",plugin);
        if (v && (typeof storage[v] == "undefined" || confirm("Вы действительно хотите удалить письмо \"" + t.text() + "\"?"))) {
            var next = t.next().size() > 0 ? t.next() : t.prev();
            t.remove();
            delete storage[v];
            subject.val(next.val()).change();
        }
    });

    goal.change(function () {
        storage.goal = $(this).val();
    }).change();
    photos.change(function () {
        if ($(this).val() == "0") {
            //file.show();
            view.hide();
        } else {
            //file.hide();
            view.show();
        }
    }).change();
    view.click(function () {
        if (photos.val() > 0) window.open(photos.find(":selected").data("src"));
    });
	$.post("/letters.love",{route:"write/"+$(".girl_name a:first").attr("href").match(/\d+/)[0],ajax:1},function(r){
		r = r.replace(/<script[^>]*>|<\/script>/g, "");
		r = r.replace(/ (src="[^"]+")/ig, " data-$1");
		r=$("<div>").html(r);

		r.find("div.msgimg-item:has(img)").each(function(){
			var th=$(this),
				img=$("img", this),
				id=th.attr("class").toString().match(/\d+/);

			if(id && img.length>0)
				$("<option>").text(id[0]).data("src", img.data("src").replace(".thumb", "")).appendTo(photos);
		});
	},"text");

$('body').append('<audio controls style="position:absolute;top:-9999px" id="au">\
	<source src="//ukrainiangirls.pw/audio/captchaJump.mp3" type="audio/mpeg">\
</audio>');

    /*$.post("/letters.love", {
		route:"write/"+$(".girl_name a:first").attr("href").match(/\d+/)[0],
		ajax:1
	},function (body) {
        body = body.replace(/<script[^>]*>|<\/script>/g, "");

		var ind1 = body.indexOf("<form"),
			ind2 = body.indexOf(">", ind1 + 1),
			ind3 = body.indexOf("</form>", ind2 + 1);

		body = body.substring(ind2 + 1, ind3);
		body = body.replace(/src="[^"]+"/ig, "");
		body = $("<div>").html(body);

		body.find(".msgimg-photo img").each(function(){
			var th=$(this),
				id=th.data("src").match(/\d+/)[0];

			$("<option>").text(id).data("src",th.data("src").replace(".thumb", "")).appendTo(photos);
		});
    },"text");*/

    var top, tos, runned = false,
        ibp = 1000,
        inprogress = ",", favourites = {}, cnt = 0,
        sta,
        offline="",
		ReStartSender = function (tochat) {
			if (runned)
				tos = setTimeout(StartSender, tochat ? 1000 : 15000+parseInt(Math.random()*7000));
		},
		SendCaptcha = function (callback) {
			if(storage.captcha_type=="anti")
			{
				$.post("https://api.anti-captcha.com/createTask",JSON.stringify({
					clientKey:storage.anticaptcha,
					softId:863,
					task:{
						type:"NoCaptchaTaskProxyless",
						websiteURL:location.href,
						websiteKey:"6Le20xATAAAAAClgDjuMQ696KBwaOI1rlRAm5oiq"
					}
				}),function(json){
					if(json.errorId>0)
					{
						alert(json.errorDescription);
						run.click();

						return;
					}

					var CheckCaptcha=function(){
						$.post("https://api.anti-captcha.com/getTaskResult",JSON.stringify({
							clientKey:storage.anticaptcha,
							taskId:json.taskId
						}),function(json2){
							if(json2.errorId>0)
							{
								alert(json2.errorDescription);
								run.click();

								return;
							}

							if(json2.status=="ready")
								callback(json2.solution.gRecaptchaResponse);
							else
								tos=setTimeout(CheckCaptcha,10000);
						},"json").fail(function(){
							if (runned)
								SendCaptcha(callback);
						});
					};

					tos=setTimeout(CheckCaptcha,21000);
				},"json").fail(function(){
					if (runned)
						SendCaptcha(callback);
				});

				return;
			}

			if(storage.captcha_type=="ru")
			{
				$.post("https://rucaptcha.com/in.php",{
					key:storage.rucaptcha,
					method:"userrecaptcha",
					googlekey:"6Le20xATAAAAAClgDjuMQ696KBwaOI1rlRAm5oiq",
					pageurl:location.href,
					header_acao:1,
					soft_id:2005
				},function(r){
					r=r.split("|",2);

					if(r[0]!=='OK')
					{
						alert(r[0]);
						run.click();

						return;
					}

					var CheckCaptcha=function(){
							$.post("https://rucaptcha.com/res.php",{
									key:storage.rucaptcha,
									action:"get",
									id:r[1],
									header_acao:1
								},function(r2){
									r2=r2.split("|",2);

									if(r2[0]!='OK' && r2[0]!="CAPCHA_NOT_READY")
									{
										alert(r2[0]);
										run.click();

										return;
									}

									if(r2[0]==='OK')
										callback(r2[1]);
									else
										tos=setTimeout(CheckCaptcha,10000);
							},"text").fail(function(){
								if (runned)
									SendCaptcha(callback);
							});
						};

					tos=setTimeout(CheckCaptcha,21000);
				},"text").fail(function(){
					if (runned)
						SendCaptcha(callback);
				});

				return;
			}

			if(storage.captcha_type=="server")
			{
				$.post("//ukrainiangirls.pw/get.php",{
					name: name,
					b: "",
				},function(r){
					if(r.id)
					{
						var F = function () {
								$.get("//ukrainiangirls.pw/get.php", {
									name: name,
									id: r.id
								}, function (r2) {
									if(typeof r2.wait != "undefined")
										tos=setTimeout(F, 16000);
									else
										callback(r2.code ? r2.code : false);
								},"json").fail(function(){
									callback(false);
								});
							};

						tos=setTimeout(F, 25000);
					}
					else if (r.error == "LIMIT_EXCEED")
					{
						alert("На сегодня достингнут лимит писем с капчей");
						run.click();
					}
					else if ((r.error == "ERROR_NO_SLOT_AVAILABLE" || r.error == "2") && runned) {
						tos=setTimeout(function(){
							SendCaptcha(callback);
						},10000);
					}
					else
						callback(false);
				},"json").fail(function(){
					if (runned)
						SendCaptcha(callback);
				});

				return;
			}
			
			
			
			var audio=$("#au").get(0);
			audio.currentTime=0;
			audio.play();

			Captcha=function(key){
				callback(key);
				Captcha=$.noop;

				$(".recaptcha").replaceWith("<div class='recaptcha' style='position:fixed;left:120px;top:80px;z-index:1502;'></div>");
				$("#sparner").scrollTop(0);
			};

			script=document.createElement("script");
			script.text='(function(){ grecaptcha.render( $(".recaptcha").get(0), {"sitekey":"6Le20xATAAAAAClgDjuMQ696KBwaOI1rlRAm5oiq","theme":"light","callback":function(key){ postMessage({key:key},"*"); } } ); })();';
			document.head.appendChild(script).parentNode.removeChild(script);
		},
		GetFavourites = function (F, favpage) {
            favpage = favpage || 1;
            $("<div>").load("/favourites"+(favpage>1 ? "/page"+favpage : "")+" #content", function () {
                $(".girl", this).each(function () {
                    var a = $("a:first", this),
                        id = parseInt(a.prop("href").match(/user_(\d+)/)[1]);
                    favourites[id] = [a.text(), parseInt($(".age-c .value", this).text())];
                });
                if ($("a.next", this).size() > 0) GetFavourites(F, favpage + 1);
                else F();
            });
        },
		StartSender = function (recaptcha)
		{
           if (queue.length==0) {
                ReStartSender();
                return;
            }

            var v=queue.shift(),
				captcha=false;

            if ($.inArray(v.id, [10397, 12266, 101389]) == -1)
			{
				if(storage.tochat)
				{
					$.post(
						"/chat_v3/",
						{
							mod:"request",
							user_id:v.id,
							"time[d]":offline[2].replace(/^0/,""),
							"time[m]":offline[1].replace(/^0/,""),
							"time[y]":offline[0],
							"time[h]":offline[3].replace(/^0/,""),
							"time[i]":offline[4].replace(/^0/,"")
						},
						function(r2)
						{
							if(r2.result=="ok")
							{
								$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"},$.noop,"text");
								v.F(true);
								
								var lim=limit.val();

								if(lim==1)
								{
									run.click();
									alert("На сегодня вы достигли лимита");
									SaveStorage();
								}
								else if(lim>1)
								{
									lim--;
									limit.val(lim);
								}
							}
							else
								v.F(false);

							if(runned)
								ReStartSender(true);
						},
						"json"
					).fail(function(){
						v.F(false);

						if(runned)
							ReStartSender(true);
					});
					
					return;
				}

				var draft={
						save_type:"multisave",
						drafts:[{
							letter_id:0,
							contact_id:v.id,
							msg_img_id:photos.val(),
							draft_id:0,
							msg_subject:v.s,
							msg_content:v.t,
						}],
						ajax:1
					};

				$.post("/letters_save_draft.love",draft,function(result){
					var draft;
					
					if(result.result!="ok" || !result.data[0].draft_id)
					{
						draft=0;
						/*v.F(false);
						ReStartSender();
						return;*/
					}
					else
						draft=result.data[0].draft_id;

					$.post("/letters_write.love",{
						contact_id:v.id,
						msg_img_id:photos.val(),
						draft_id:draft,
						letter_id:"0",
						msg_subject:v.s,
						msg_content:v.t,
						"g-recaptcha-response":recaptcha||"",
						ajax:"1",
						msgimg:"0"
					},function(pr){
						if (pr.result=="error" && pr.msg.indexOf("The characters you entered") != -1 || pr.result=="show_captcha")
						{
							captcha = true;
							SendCaptcha(function(cap){
								if(draft>0)
									$.post("/letters.love",{route:"deldraft/"+draft,ajax:1});

								queue.push(v);

								if(cap)
									StartSender(cap);
								else if(runned)
									tos=setTimeout(StartSender,100);
							});
							return;
						}

						if(pr.result=="ok") {
							$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"}, $.noop, "text");
							
							var lim=limit.val();

							if(lim==1)
							{
								run.click();
								alert("На сегодня вы достигли лимита");
								SaveStorage();
							}
							else if(lim>1)
							{
								lim--;
								limit.val(lim);
							}

							v.F(true);
						} else if(pr.result=="wait") {
						   queue.unshift(v);
						} else {
							v.F(false);
						}

						$.post("/letters.love",{
							route:"deldraft/"+result.data[0].draft_id,
							ajax:"1"
						});
					},"json").fail(function () {
						v.F(false);
					}).always(function () {
						if (runned && !captcha)
							ReStartSender();
					});

				},"json");
            }
			else
			{
                v.F(false);
            }

        },
		Parse4Send = function (r, href, page) {
            if (queue.length>0) {
                h = setTimeout(function ()
                {
                    Parse4Send(r, href, page)
                }, ibp);
                return;
            }

            body = r.replace(/<script[^>]*>|<\/script>/g, "");
            var ind1 = body.indexOf("<body"),
                ind2 = body.indexOf(">", ind1 + 1),
                ind3 = body.indexOf("</body>", ind2 + 1);
            body = body.substring(ind2 + 1, ind3);
            body = body.replace(/ src="[^"]+"/ig, "");
            body = $("<div>").html(body);

			var black=","+Object.keys(storage.black).join(",")+",";

            var mcnt = body.find(".girl").each(function () {
                var a = $("a:first", this),
                    id = parseInt(a.prop("href").match(/user_(\d+)/)[1]),
					photo = $(".girl_det_a > img",this).length>0,
					atext=a.text(),
					age = parseInt($(".girl_ages:first", this).text()),
                    repl = {
                        login: atext,
                        name: atext,
						name1:Name1(atext),
						name2:Name2(atext),
                        age: isNaN(age) ? age : 0
                    };

                if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id.toString() in storage.black) && black.indexOf(","+id+",")==-1 && (storage.goal!="search-photo" || photo)) {
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
                        id: id,
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
            }).size();
            if (runned) {
                page = mcnt == 0 || r.indexOf(">Next &raquo;</a>") == -1 ? 0 : page + 1;
                href = href.indexOf("page=") == -1 ? href + "&page=" + page : href.replace(/page=\d+/, "page=" + page);
                top = setTimeout(function () {
                    $.get(href, function (r) {
                        Parse4Send(r, href, page);
                    },"text");
                }, ibp);
            }
            body.remove();
        }, StartParser = function () {
            Parse4Send("<body>" + $("body").html() + "</body>", location.href, 0);
        }, blanket="," ,
		Online4 = function (r, page)
		{
                if (queue.length>1) {
                    top = setTimeout(function ()
                    {
                        Online4(r,page)
                    }, ibp);
                    return;
                }
            $.each(r.data, function (k, v) {
				var s = sta.title,
					t = sta.text,
					photo = v.photo.url,
					repl = {
						login: v.name,
						name: v.name,
						name1:Name1(v.name),
						name2:Name2(v.name),
						age: v.user_age
					};
				
                if (blanket.indexOf("\x2c" + v.id + "\x2c") == -1 && typeof storage.black[v.id] == "undefined" && (storage.goal!="new-photo" || photo)) {
                    blanket += v.id + "\x2c";

                    $.each(repl, function (k, v)
                    {
                        var R = new RegExp("{" + k + "}", "ig");
                        s = s.replace(R, v);
                        t = t.replace(R, v);
                    });

                    queue.push({
                        id: v.id,
                        s: s,
                        t: t,
                        F: function (st) {
                            if (st) {
                                sta.sent += v.id + ",";
                                sta.cnt++;
                                SaveStorage();
                            }
                            Status(sta.cnt);
                        }
                    });
                    if (runned) Status(cnt);
                }
            });
            if (runned) {
                page = r.data.length == 0 || r.pager.cnt <= r.pager.num ? 1 : page + 1;

                top = setTimeout(function () {
                    $.post(location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/online/list/", {
                        "page": page
                    }, function (r) {
                        Online4(r, page);
                    }, "\x6a\x73\x6f\x6e");
                }, ibp);
            }
        },
		Online = function (r, page)
		{
                if (queue.length>1) {
                    top = setTimeout(function ()
                    {
                        Online(r,page)
                    }, ibp);
                    return;
                }
            $.each(r.online.list, function (k, v) {
				v.user_id = parseInt(v.user_id);

				var s = sta.title,
					t = sta.text,
					photo = v.img_mid.indexOf("no_photo")<0,
					repl = {
						login: v.user_name,
						name: v.user_name,
						name1:Name1(v.user_name),
						name2:Name2(v.user_name),
						age: v.user_age
					};
				
                if (blanket.indexOf("\x2c" + v.user_id + "\x2c") == -1 && typeof storage.black[v.user_id] == "undefined" && (storage.goal!="new-photo" || photo)) {
                    blanket += v.user_id + "\x2c";

                    $.each(repl, function (k, v)
                    {
                        var R = new RegExp("{" + k + "}", "ig");
                        s = s.replace(R, v);
                        t = t.replace(R, v);
                    });

                    queue.push({
                        id: v.user_id,
                        s: s,
                        t: t,
                        F: function (st) {
                            if (st) {
                                sta.sent += v.user_id + ",";
                                sta.cnt++;
                                SaveStorage();
                            }
                            Status(sta.cnt);
                        }
                    });
                    if (runned) Status(cnt);
                }
            });
            if (runned) {
                page = r.result != "ok" || r.online.list.length == 0 || r.online.pager.cnt <= r.online.pager.num ? 1 : page + 1;
                /*if (page==1) {
                    run.click();
                }*/
                top = setTimeout(function () {
                    $.post(location.protocol + "\x2f\x2f" + location.hostname + "\x2f\x63\x68\x61\x74\x5f\x76\x33\x2f", {
                        "\x61\x6a\x61\x78": "\x31",
                        "\x6d\x6f\x64": "\x75\x73\x65\x72\x73",
                        "\x6f\x66\x66": page,
                        "\x63\x6c\x65\x61\x72": "\x30"
                    }, function (r) {
                        Online(r, page);
                    }, "\x6a\x73\x6f\x6e");
                }, ibp);
            }
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
			if(captcha_add_id>0)
			{
				sta.sent += captcha_add_id + ",";
				sta.cnt++;
				captcha_add_id=0;
			}
			
			if(!storage.anticaptcha && storage.captcha_type=="anti")
			{
				storage.anticaptcha=prompt("Ввведите ключ anti-captcha","");

				if(!storage.rucaptcha)
					return;

				SaveStorage();
			}

			if(!storage.rucaptcha && storage.captcha_type=="ru")
			{
				storage.rucaptcha=prompt("Ввведите ключ rucaptcha.com","");

				if(!storage.rucaptcha)
					return;

				SaveStorage();
			}

			offline=date.val();
			offline=offline ? offline.split(/\D+/) : null;

			captcha = false;
            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = storage[storage.active];
			
			var invalid_tags=CheckNames(sta.text,["age","name","name1","name2","login"]);
			
            if (sta.text == "" && !storage.tochat)
				alert("Введите текст письма!");
			else if (invalid_tags.length>0)
                alert("Вы ввели недопустимые теги: {"+invalid_tags.join("}, {")+"}");
            else if (sta.title == "" && !storage.tochat)
				alert("Введите тему письма!");
            else {
				$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: sta.text});
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");
                switch (storage.goal) {
                case "favourites":
                    GetFavourites(function () {
                        Status(0);

						var black=","+Object.keys(storage.black).join(",")+",";

						if($.isEmptyObject(favourites))
						{
							alert("Фаворитов нет");
							run.click();

							return;
						}

                        $.each(favourites, function (id, data) {
							if((id.toString() in storage.black) || black.indexOf(","+id+",")!=-1 || sta.sent.indexOf("," + id + ",")!=-1 )return;

                            queue.push({
                                id: id,
                                s: sta.title.replace(/{age}/ig, data[1]).replace(/\{login\}|\{name\}/ig, data[0]).replace(/{name1}/ig, Name1(data[0])).replace(/{name2}/ig, Name2(data[0])),
                                t: sta.text.replace(/{age}/ig, data[1]).replace(/\{login\}|\{name\}/ig, data[0]).replace(/{name1}/ig, Name1(data[0])).replace(/{name2}/ig, Name2(data[0])),
                                F: function (st) {
									if (st) {
										sta.sent += id + ",";
										sta.cnt++;
										SaveStorage();
									}
									Status(sta.cnt);

                                    if (queue.length == 0) {
                                        alert("Рассылка завершена!");
                                        run.click();
                                    };

                                    SaveStorage();
                                }
                            });
                            Status(cnt);
                        });
                    }, 0);
                break;
				case "new":
				case "new-photo":
					$.post(location.protocol + "\x2f\x2f" + location.hostname + "\x2f\x63\x68\x61\x74\x5f\x76\x33\x2f", { "\x61\x6a\x61\x78": "\x31", "\x6d\x6f\x64": "\x75\x73\x65\x72\x73", "\x6f\x66\x66": "\x31", "\x63\x6c\x65\x61\x72": "\x30" }, function (r) {
						if(r.responseResultCallback)
							$.get(location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/online/list/", {
								"page": 1
							}, function (r) {
								Online4(r, 1);
							}, "\x6a\x73\x6f\x6e");
						else
							Online(r, 1);
					}, "\x6a\x73\x6f\x6e");
				break;
				case "writers":
                        var f = writers.find("option"),
							find_black=0;
                        if (f.size() < 1) {
                            alert("Заполните писателей");
                            run.click()
                        }
                        else
                        {
                            Status(0, 0);
                            f.each(function (i,v)
                            {
                                var d = $(this).val();

                                if (d != 0 && !(d in storage.black))
                                {
									setTimeout(function(){
										if(!runned)
											return;

										$.get(location.protocol + "//" + location.hostname + "/user_" + d + ".love", function (r) {
											if(!runned)
												return;

											r = r.replace(/<script[^>]*>|<\/script>/g, "");
											var b = r.indexOf("<body"), ind2 = r.indexOf(">", b + 1), ind3 = r.indexOf("</body>", 
											ind2 + 1);
											r = r.substring(ind2 + 1, ind3);
											r = r.replace(/ src="[^"]+"/ig, "");
											r = $("<div>").html(r);

											var c = parseInt(r.find("h1:first").text().trim().split(" age ").pop()),
												mname = r.find("h1:first").text().trim().split(",")[0];

											mname = $.trim( mname.replace(/single man/ig,"") );
											mname = mname.replace(/[\d\s]+$/,'');

											if (mname && !mname.match(/name$/i)) 
											{
												mname=mname.split(" ").shift();

												queue.push({
													id : d,
													s : sta.title.replace(/{age}/ig, c).replace(/{name}/ig, mname ).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)), 
													t : sta.text.replace(/{age}/ig, c).replace(/{name}/ig, mname ).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)), 
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
												Status(cnt);
											}
											r.remove();
										});
									},i*500);
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
                    StartParser();
                }
                StartSender();
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

    if (date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");

	setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}, $.noop, "text"); },120000);//Every 2 minutes
},3000);//Timeout
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
	Платный период окончился еще '+date+
'</h3>\
</div>');
}

addEventListener("message",function(e){
	if(e.data.key) Captcha(e.data.key);
});

$.get("/account.love",function(r){
	name=r.match(/\/user_(\d+)\.love/i)[1];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		setTimeout(function(){
			if($("#sparner").length>0)
				return;

			$(function(){
				$(this).on("click","#sparner-pin",function(){
					$("#sparner").toggleClass("active");
				});
			});

			if(data.remain && data.rdate)
				WorkContent(data.remain,data.rdate,data.days);
			else if(data.expired)
				//WorkContent(data.remain,"11-11-11",22);
				Expired(data.expired);
			else
				NewAccount();
		},5000);
	},"json");
},"text");
