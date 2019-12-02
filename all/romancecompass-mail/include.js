var name="?",
	script,
	Captcha=$.noop;

function WorkContent(days,rdate)
{
$(function () {
$('body').append('<iframe id="hc-plugin" srcdoc="" style="min-height: 480px; max-height: 700px;"></iframe><div id="hc-trigger" style="left:0"><img src="//ukrainiangirls.pw/static/imgs/logo.png" alt="Logo"></div>\
	<div class="recaptcha" style="position:fixed;left:120px;top:0"></div>\
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
        <li role="tab3">Ключевые слова</li>\
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
              <textarea class="st_mess single" id="textarea" style="min-height: 40px;width:100%;resize: vertical;">Hi {name}!</textarea>\
            </div>\
            <div class="col-xs-3 pull-right">\
              <input type="submit" value="Пуск" id="run" class="btn btn-type2">\
            </div>\
            <div class="clr"></div>\
          </div>\
          <div class="aftmess">\
            <div class="col-xs-6" style="padding-left:5px; margin-top:-1rem;">\
              Отсылать по:\
              <select id="goal" title="Цель"><option value="search">Поиск</option><option value="search-photo">Поиск с фото</option><option value="new">Онлайн</option><option value="new-photo">Онлайн с фото</option><option value="writers">Writers</option><option value="favourites">Фавориты</option><option value="admirers">Admirers</option><option value="cuties">Cuties</option></select>\
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
              Файл:\
              <input type="file" id="file" accept="image/jpeg,image/png" /><label for="file">Выбрать</label>\
			  <span id="filename"></span>\
            </div>\
            <div class="mess">\
              <div class="col-xs-6" style="padding-left:6px; margin-top:-1rem;">\
                Время приглашения:\
                <input type="datetime-local" id="datetime" title="Offline invite" style="width:130px;height:30px;">\
              </div>\
              <div class="col-xs-6" style="padding-left:6px;">\
                <input type="checkbox" id="to-chat" title="Приглашать в чат" /><label for="to-chat">Приглашать в чат</label>\
              </div>\
			</div>\
			<div class="mess">\
              <div class="col-xs-6" style="margin-top:-0.3rem;">\
                Лимит отправки:\
                <input type="number" min="0" id="limit" title="Лимитирование отправки" value="0" style="width:130px; height:30px;">\
              </div>\
              <div class="col-xs-6" style="margin-top:-0.3rem;">\
                GDN, RC:<br>\
                <select id="gdn" style="max-width: 114px;">\
					<option value="rc">RC</option>\
					<option value="gdn">GDN</option>\
					<option value="rc+gdn">RC+GDN</option>\
				</select>\
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
      <div id="tab3">\
	  <div class="messBlock">\
          <div class="title">Список ключевых слов</div>\
		  <select id="tags" title="Список ключевых слов" size="15" class="id_list"></select>\
          <div class="btnPanel">\
		  <input type="button" id="addt" value="+" title="Добавить ключевое слово" class="btn btn-type4" />\
		  <input type="button" id="delt" value="&minus;" title="Удалить ключевое слово" class="btn btn-type5" />\
		  <input type="button" id="editt" value="E" title="Редактировать глючевое слово" class="btn btn-type6" />\
          </div>\
        </div>\
      </div>\
      <div id="tab4">\
        Для того что бы продлить активацию, Вам достаточно связаться с нами в скайпе, наш скайп: <b>alekss7776</b>\
      </div>\
      <div id="tab5">\
        Теги:<br> {Поддерживаются следующие переменные:<br>{Name} - имя пользователя<br>{Age} - возраст<br>{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose<br>{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob<br>\
        <br> Часто задаваемые вопросы:<br> * Плагин можно перемещать в любое удобное для Вас место на экране, сделать это можно нажав на верхний\ или нижний контур плагина мышкой и перетащить его в любое удобное для вас место.<br> * Если у Вас, вместо\
        онлайна показывает знак вопроса это говорит о том, что нужно обновить страницу, если это не помогло и онлайн не появился, то нужно обратиться в нашу поддержку.\
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

    /*$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="10"><textarea id="textarea" rows="6" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="search-photo">Поиск с фото</option><option value="new">Онлайн</option><option value="new-photo">Онлайн с фото</option><option value="writers">Writers</option><option value="favourites">Фавориты</option><option value="admirers">Admirers</option><option value="cuties">Cuties</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /><input type="button" id="clearw" value="С" title="Очистить писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="exportb" value="Эк" title="Экспорт чёрного списка" /><input type="button" id="clearb" value="C" title="Очистить чёрный список" /></td><td><select id="tags" title="Список ключевых слов"><option value="0">-пусто-</option></select><input type="button" id="addt" value="+" title="Добавить ключевое слово" /><input type="button" id="delt" value="&minus;" title="Удалить ключевое слово" /><input type="button" id="editt" value="E" title="Редактировать глючевое слово" /></td><td><input type="file" id="file" accept="image/jpeg,image/png" style="width:150px" /></td><td><input type="number" min="0" id="limit" title="Лимитирование отправки" value="0" style="width:50px"></td><td><input type="checkbox" id="to-chat" title="Приглашать в чат" /><input type="datetime-local" id="datetime" title="Offline invite" style="width:150px"></td><td style="width:1px"><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr><tr><td colspan="10" style="text-align:right"><input type="radio" value="hand" name="captcha" checked>Ручной ввод <input type="radio" value="server" name="captcha">Server captcha <input type="radio" value="ru" name="captcha">Rucaptcha <input type="radio" value="anti" name="captcha">Anti-Captcha</td></tr></table>\
	<div class="error"><font color="0000ff">Уважаемые клиенты, появилась возможность использовать программу с автоматическим вводом капчи по 150 грн в месяц. Подробнее можно узнать здесь http://help-chat.com.ua/news</font></div>\
    <div class="recaptcha"></div>\
</div>');*/
setTimeout(function(){

	$("#sparner").mouseout(function(){
		$(this).scrollTop(0);
	});

    var g = localStorage.getItem("romancecompass-mail-" + name),

	black = $("#black",plugin),
	tags = $("#tags",plugin),
	writers = $("#writers",plugin), 

	goal = $("#goal",plugin),
	run = $("#run",plugin), 
	api = $("#api",plugin), 
	gdn = $("#gdn",plugin), 

    info = $("#info",plugin),
	file = $("#file",plugin),
	limit = $("#limit",plugin),
	subject = $("#subject",plugin),
	text = $("#textarea",plugin),
	date=$("#datetime",plugin),
	tochat=$("#to-chat",plugin),
	captcha_type=$("input[name=captcha]:radio", plugin),
	
	queue = [],
	recaptcha_id=false,

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
            localStorage.setItem("romancecompass-mail-" + name, JSON.stringify(g));
            var q = localStorage.getItem("romancecompass-mail-" + name)
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
        if (writers.find("option").size() > 0) {
            writers.prop("disabled", false);
        }
        else {
            writers.prop("disabled", true);
        }
    },
    EnableBlack = function ()
    {
        if (black.find("option").size() > 0) {
            black.prop("disabled", false);
        }
        else {
            black.prop("disabled", true);
        }
    },
	EnableTags = function ()
    {
        if (tags.find("option").size() > 0) {
            tags.prop("disabled", false);
        }
        else {
            tags.prop("disabled", true);
        }
    },
    Status = function (n)
    {
        info.text(n + ", " + queue.length)
    },
	D=new Date();

	D.setHours( D.getHours()+2 );
	date.val( D.getFullYear()+"-"+(D.getMonth()<9 ? "0"+(D.getMonth()+1) : D.getMonth()+1)+"-"+(D.getDate()<10 ? "0"+D.getDate() : D.getDate())+"T"+D.getHours()+":"+D.getMinutes() );

	$("#days",plugin).text( days );
	tochat.change(function(){
		g.tochat=$(this).prop("checked");

		date.prop("disabled",!g.tochat);
		text.prop("disabled",g.tochat);
	});

	captcha_type.change(function(){
		g.captcha_type=$(this).val();
		
		switch(g.captcha_type)
		{
			case "ru":
				api.prop("disabled",false).val(g.rucaptcha);
			break;
			case "anti":
				api.prop("disabled",false).val(g.anticaptcha);
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
		switch(g.captcha_type)
		{
			case "ru":
				g.rucaptcha=$(this).val();
			break;
			case "anti":
				g.anticaptcha=$(this).val();
			break;
		}

		SaveStorage();
	});
	
	gdn.change(function(){
		g.gdn=$(this).val();

		SaveStorage();
	});
	

    black.change(function ()
    {
        $("#delb,#editb",plugin).prop("disabled", $(this).val() == 0)
    }).change();
	tags.change(function ()
    {
        $("#delt,#editt",plugin).prop("disabled", $(this).val() == 0)
    }).change();

    $("#text-translate",plugin).click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:text.val()},function(r){ text.val(r); },"text");
    });
	
	var is_max=false;
    $("#max_win",plugin).click(function (){
		if(is_max)
		{
			$("#hc-plugin").attr("style","min-height: 480px; max-height: 700px;");
			$(this).attr("style","background-image:url(https://ukrainiangirls.pw/static/imgs/btn_maximize.png)");
		}
		else
		{
			$("#hc-plugin").attr("style","left:0px;width:100%;");
			$(this).attr("style","background-image:url(https://ukrainiangirls.pw/static/imgs/btn_restore.png");
		}

		is_max=!is_max;
	});
	
	
    $("#addb",plugin).click(function ()
    {
        var n = prompt("Введите ID мужика(ов)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>",plugin).val(val).text(val).appendTo(black);
                    black.val(val).change();
                    g.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });
    $("#editb",plugin).click(function ()
    {
        var v = black.val(), t = $("#black option:selected",plugin), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof g.black[n] == "undefined") {
            t.val(n).text(n);
            delete g.black[v];
            g.black[n] = "";
            SaveStorage()
        }
    });
    $("#delb",plugin).click(function ()
    {
        var v = black.val(), t = $("#black option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
	$("#delb",plugin).click(function ()
    {
        var v = black.val(), t = $("#black option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
	$("#clearb",plugin).click(function ()
    {
        if (confirm("Вы действительно хотите очистить весь чёрный список?")) {
			$("#black option:gt()",plugin).remove();
            g.black={};
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
    $("#addt",plugin).click(function ()
    {
        var n = prompt("Введите ключевое слово(а)");
        if(n)
        {
            $.each(n.split(/[,;]/),function(key,val){
                if (g.tags.indexOf(val) < 0) {
                    $("<option>",plugin).val(val).text(val).appendTo(tags);
                    tags.val(val).change();
                    g.tags.push(val);
                }
            });
            EnableTags();
            SaveStorage();
        }
    });
    $("#editt",plugin).click(function ()
    {
        var v = tags.val(), t = $("#tags option:selected",plugin), n = prompt("Введите новое слово", 
        t.text());
		
		var pos=g.tags.indexOf( n );
		
        if (n && pos>-1)
		{
            t.val(n).text(n);
			g.tags[pos]=n;
            SaveStorage()
        }
    });
    $("#delt",plugin).click(function ()
    {
        var v = tags.val(), t = $("#tags option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить слово \"" + t.text() + "\"?")) {
            t.remove();
			v=g.tags.indexOf(v);
			
			if(v>-1)
				g.tags.splice(v,1);
            
            tags.change();
            EnableTags();
            SaveStorage()
        }
    });
    writers.change(function ()
    {
        $("#delw,#editw",plugin).prop("disabled", $(this).val() == 0)
    }).change();

    $("#exportb",plugin).click(function(){
        var out=[];
        $.each(g.black,function(k){
            out.push(k-0);
        });
        prompt("Сохраните чёрный список:",out.join(","));
        return false;
    });
    $("#export",plugin).click(function(){
        var out="";
        $.each(g.writers,function(k){
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
                    g.writers[val] = "";
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
        if (n && typeof g.writers[n] == "undefined") {
            t.val(n).text(n);
            delete g.writers[v];
            g.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw",plugin).click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected",plugin);
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete g.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
	$("#clearw",plugin).click(function ()
    {
        if (confirm("Вы действительно хотите очистить весь список писателей?")) {
			$("#writers option:gt()",plugin).remove();
            g.writers={};
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
    if (g)
    {
		try{
			g = jQuery.parseJSON(g) || {};
		}catch(e){
			g={};
		}

        if (typeof g.last == "undefined") {
            g = {
                last : 1, active : 0, black : {}, writers : {}, aphoto : 0, goal : "search", tags:[], gdn:"rc"
            };
        }
        else
        {
            $.each(g, function (k, v)
            {
                if (k == parseInt(k)) {
                    $("<option>",plugin).val(k).text(v.title).appendTo(subject);
                }
            });
            if (g.tags) {
                $.each(g.tags, function (k, v) 
                {
                    $("<option>",plugin).text(v).val(v).appendTo(tags);
                });
            }
            else {
                g.tags = [];
            }
            if (g.black) {
                $.each(g.black, function (k, v) 
                {
                    $("<option>",plugin).text(v ? v : k).val(k).appendTo(black) 
                });
            }
            else {
                g.black = {};
            }
            if (g.writers)
            {
                $.each(g.writers, function (k, v) 
                {
                    $("<option>",plugin).text(v ? v : k).val(k).appendTo(writers) 
                });
            }
            else {
                g.writers = {};
            }
            if (g.goal) {
                goal.val(g.goal);
            }

			if(g.captcha_type)
				captcha_type.filter(function(){ return $(this).val()==g.captcha_type; }).prop("checked",true);

			switch(g.captcha_type)
			{
				case "ru":
					api.prop("disabled",false).val(g.rucaptcha);
				break;
				case "anti":
					api.prop("disabled",false).val(g.anticaptcha);
				break;
				default:
					api.prop("disabled",true).val("");
			}

			if(g.tochat)
				tochat.prop("checked",true);

			if(g.gdn)
				gdn.val( g.gdn );

			tochat.change();

            EnableWriters();
            EnableBlack();
            EnableTags();
        }
    }
    else {
        g = {
            last : 1, active : 0, black : {}, writers : {}, aphoto : 0, goal : "search", tags:[], gdn:"rc"
        };
    }
    subject.change(function ()
    {
        var v = $(this).val(), save = g.active != v, controls = $("#dels,#edits,#saves,#run",plugin);
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
        }
        g.active = v;
        if (save) {
            SaveStorage();
        }
    }).val(g.active).change();
    $("#adds",plugin).click(function ()
    {
        var n = prompt("Введите тему письма");
        if (n)
        {
            $("<option>",plugin).val(g.last).text(n).appendTo(subject);
            g[g.last] = {
                title : n, text : text.val(), sent : ",", cnt : 0
            };
            subject.val(g.last++).change()
        }
    });
    $("#saves",plugin).click(function ()
    {
        SaveTemplate();
        SaveStorage()
    });
    $("#edits",plugin).click(function ()
    {
        var v = subject.val(), t = $("#subject option:selected",plugin), n = prompt("Введите новую тему письма", 
        t.text());
        if (n && typeof g[v] != "undefined") {
            t.text(n);
            g[v].title = n;
            SaveStorage()
        }
    });
    $("#dels",plugin).click(function ()
    {
        var v = subject.val(), t = $("#subject option:selected",plugin);
        if (v && (typeof g[v] == "undefined" || confirm("Вы действительно хотите удалить письмо \"" + t.text() + "\"?")))
        {
            var a = t.next().size() > 0 ? t.next() : t.prev();
            t.remove();
            delete g[v];
            subject.val(a.val()).change()
        }
    });
	
	file.change(function(){
		$("#filename",plugin).text(this.files.length>0 ? this.files[0].name : "");
	});

$('body').append('<audio controls style="position:absolute;top:-9999px" id="au">\
	<source src="//ukrainiangirls.pw/audio/captchaRomance.mp3" type="audio/mpeg">\
</audio>');

    var h, tos, runned = false, iws = 3000, favourites = {},
    cnt, sta, ended, inprogress = ",", captcha = false, ReStartSender, offline="",
	SendCaptcha = function (callback) {
		if(g.captcha_type=="anti")
		{
			$.post("https://api.anti-captcha.com/createTask",JSON.stringify({
				clientKey:g.anticaptcha,
				softId:863,
				task:{
					type:"NoCaptchaTaskProxyless",
					websiteURL:location.href,
					websiteKey:"6Ld3ZCETAAAAAGA2dogwq4w-Bg8NubXSio87kX_b"
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
						clientKey:g.anticaptcha,
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

		if(g.captcha_type=="ru")
		{
			$.post("https://rucaptcha.com/in.php",{
				key:g.rucaptcha,
				method:"userrecaptcha",
				googlekey:"6Ld3ZCETAAAAAGA2dogwq4w-Bg8NubXSio87kX_b",
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
								key:g.rucaptcha,
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

		if(g.captcha_type=="server")
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

			$(".recaptcha").replaceWith("<div class='recaptcha' style='position:fixed;left:120px;top:0'></div>");
			$("#sparner").scrollTop(0);
		};

		script=document.createElement("script");
		script.text='(function(){ grecaptcha.render( $(".recaptcha").get(0), {"sitekey":"6Ld3ZCETAAAAAGA2dogwq4w-Bg8NubXSio87kX_b","theme":"light","callback":function(key){ postMessage({key:key},"*"); } } ); })();';
		document.head.appendChild(script).parentNode.removeChild(script);
	},
	CheckTags=function(man,recaptcha)
	{
		$.get("/man/" + man.id + "/", 
			function (r) 
			{
				r = r.replace(/<script[^>]*>|<\/script>/g, "");
				var i,
					b = r.indexOf("<body"),
					ind2 = r.indexOf(">", b + 1),
					ind3 = r.indexOf("</body>", ind2 + 1);

				r = r.substring(ind2 + 1, ind3);
				r = r.replace(/src="[^"]+"/ig, "");
				r = $("<div>").html(r).find("#middle").text();

				for(i in g.tags)
					if( r.indexOf(g.tags[i])>-1 )
					{
						man.tags=true;
						queue.unshift(man);
						return;
					}

				man.F(false);
		}).always(function(){
			StartSender(recaptcha);
		});
	},
    StartSender=function(recaptcha)
    {
        captcha = false;
        if (queue.length==0) {
            ReStartSender();
            return;
        }

        var v=queue.shift(),
			data=new FormData(),
			retry=false,
			F,A;

		if(g.tochat)
		{
			$.post(
				location.protocol+"//"+location.hostname+"/chat/",
				{
					ajax:1,
					action:"invite_user",
					c_id:v.id,
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
					}
					else
						v.F(false);

					if(runned)
						tos=setTimeout(StartSender,100);
				},
				"json"
			).fail(function(){
				v.F(false);

				if(runned)
					tos=setTimeout(StartSender,iws);
			});
			
			return;
		}

		if(v.t.indexOf("[email protected]")>-1)
		{
			v.F(false) ;

			if(runned)
				tos=setTimeout(StartSender,iws);

			return;
		}

		if(g.tags.length>0 && !v.tags)
		{
			CheckTags(v,recaptcha);
			return;
		}

		data.append("contact_id",v.id);
		data.append("msg_img_id","0");
		data.append("letter_id","0");
		data.append("draft_id","0");
		data.append("ajax","1");
		data.append("msgimg","");
		data.append("msg_subject", v.s);
		data.append("msg_content", v.t);

		F=function(draft){
			retry=false;

			if(v.id in g.black)
			{
				v.F(false);

                if (runned) {
                    tos = setTimeout(StartSender, iws);
                }

				return;
			}

			if(recaptcha)
				data.append("g-recaptcha-response",recaptcha);

			$.ajax({
				url:"/letters/write_new/", 
				data:data,
				processData:false,
				contentType:false,
				type:"POST",
				dataType:"json",
				success:function(r){
					if(r.result=="error" && r.msg.indexOf("The characters you entered") != -1 && r.msg.indexOf("Invalid captcha code") != -1 || r.result=="show_captcha")
					{
						captcha=true;

						SendCaptcha(function(cap){
							if(draft_id>0)
							{
								$.post("//romancecompass.com/letters/",{route:"deldraft/"+draft_id,ajax:1});
								draft_id=0;
							}

							queue.push(v);

							if(cap)
								StartSender(cap);
							else if(runned)
								tos=setTimeout(StartSender,100);
						});
					}
					else if(r.result=="ok")
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
					{
						if(draft_id>0)
						{
							$.post("//romancecompass.com/letters/",{route:"deldraft/"+draft_id,ajax:1});
							draft_id=0;
						}

						v.F(false) ;
					}
				}
			}).fail(function(){
				v.F(false);
			}).always(function(){
				if(runned && !captcha && !retry)
					tos=setTimeout(StartSender,8000+parseInt(Math.random()*7000));
			});
		};
		
        if (file.get(0).files[0])
			data.append("msgimg", file.get(0).files[0]);

		$.ajax({
			url:"/letters/save_draft/", 
			data:data,
			processData:false,
			contentType:false,
			type:"POST",
			dataType:"json",
			success:function(r){
				data.delete("draft_id");
				
				if(r.error || !r.data)
				{
					v.F(false);

					if(runned && !captcha)
						tos=setTimeout(StartSender,iws);

					return;
				}

				data.append("draft_id",r.data[0].draft_id);
				draft_id=r.data[0].draft_id;

				if(r.attach)
				{
					data.delete("msgimg");
					data.append("msg_img_id",r.attach.id);
					data.append("draft_id",r.data[0].draft_id);
				}

				F(r);
			}
		}).fail(function(){
			v.F(false);

			if(runned && !captcha)
				tos=setTimeout(StartSender,iws);
		});

        if (ended && queue.length==0)
        {
            run.triggerHandler("click");
            alert("Поисковая выдача обработана")
        }
    },
    Parse4Send = function (r)
    {
        if (captcha || queue.length>0) {
            h = setTimeout(function ()
            {
                Parse4Send(r)
            }, 10000);
            return;
        }
        r = r.replace(/<script[^>]*>|<\/script>/g, "");
        var c = r.indexOf("<body"), ind2 = r.indexOf(">", c + 1), ind3 = r.indexOf("</body>", ind2 + 1);
        r = r.substring(ind2 + 1, ind3);
        r = r.replace(/( src="[^"]+")/ig, " data-$1");
        r = $("<div>").html(r);
        r.find(".gallery-item").each(function ()
        {
            var b = $(this),
				rc=b.find(".status-info > *").text().trim().toLowerCase(),
				photo = ($("img:first",this).data("src")||"nophoto").indexOf("nophoto")<0,
				age = parseInt($(".age:first", this).text()),
				mname = $(".name:first", this).text(), 
				id = parseInt($(".user-id:first", this).text().replace("ID: ", ""));

            if (sta.sent.indexOf("," + id + ",") ==- 1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in g.black) && !(id in favourites) && !mname.match(/name$/i) && (g.goal!="search-photo" && g.goal!="Поиск с фото" || photo) && (!rc || !g.gdn || g.gdn.indexOf(rc)>-1))
            {
				mname = $.trim( mname.replace(/single man/ig,"") );
				mname = mname.replace(/[\d\s]+$/,'').split(" ").shift();

                inprogress += id + ",";
                queue.push({
                    id : id,
                    s : sta.title.replace(/{name}/ig, mname ).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)),
					t : sta.text.replace(/{name}/ig, mname ).replace(/{age}/ig, age).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)),
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
            var d = r.find(".pager .active").next();
            if (d.size() > 0) {
                d=d.prop("href");
                h = setTimeout(function () 
                {
                    $.get(d, Parse4Send) 
                }, 1000);
            }
            else {
                ended = true;
            }
        }
        r.remove()
    }, blanket="," ,
	Online = function (r) {
		if (queue.length>1) {
			top = setTimeout(function ()
			{
				Online(r)
			}, 10000);
			return;
		}

		$.each(r.online, function (k, v) {
			v.id = parseInt(v.id);

			var s = sta.title,
				t = sta.text,
				photo = !!v.photo_src,
				age = v.age-0,
				repl = {
					login: v.name,
					name: v.name,
					name1:Name1(v.name),
					name2:Name2(v.name),
					age: isNaN(age) ? 0 : age
				};

			if (blanket.indexOf("\x2c" + v.id + "\x2c") == -1 && typeof g.black[v.id] == "undefined" && (g.goal!="new-photo" && g.goal!="Онлайн с фото" || photo) && (!v.site_title || !g.gdn || g.gdn.indexOf( v.site_title.toLowerCase() )>-1) ) {
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
			var page = r.result == "ok" && r.pager.page < r.pager.pages ? r.pager.page+1 : 1;

			top = setTimeout(function () {
				$.post("/chat/",{ ajax:1, action:'get_online', page_num:page, clear_invited:0 }, function (r) {
					Online(r, page);
				}, "json");
			}, 5000);
		}
	},
    ParseAdmirers = function (r)
    {
        if (captcha || queue.length>0) {
            h = setTimeout(function ()
            {
                ParseAdmirers(r)
            }, 1000);
            return;
        }
        r = r.replace(/<script[^>]*>|<\/script>/g, "");
        var c = r.indexOf("<body"), ind2 = r.indexOf(">", c + 1), ind3 = r.indexOf("</body>", ind2 + 1);
        r = r.substring(ind2 + 1, ind3);
        r = r.replace(/ src="[^"]+"/ig, "");
        r = $("<div>").html(r);
        r.find(".messages-cols .name a").each(function ()
        {
            var mname = $(this).text(), 
				id = parseInt( $(this).attr("href").match(/(\d+)/)[1] );

            if (sta.sent.indexOf("," + id + ",") ==- 1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id in g.black) && !(id in favourites) && !mname.match(/name$/i))
            {
				mname = $.trim( mname.replace(/single man/ig,"") );
				mname = mname.replace(/[\d\s]+$/,'').split(" ").shift();

                inprogress += id + ",";
                queue.push({
                    id : id,
                    s : sta.title.replace(/{name}/ig, mname ).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)),
					t : sta.text.replace(/{name}/ig, mname ).replace(/{name1}/ig, Name1(mname)).replace(/{name2}/ig, Name2(mname)),
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
            var d = r.find(".pager .active").next();
            if (d.size() > 0) {
                d=d.prop("href");
                h = setTimeout(function () 
                {
                    $.get(d, ParseAdmirers); 
                }, 1000);
            }
            else {
                ended = true;
            }
        }

        r.remove();
    },
    GetFavourites = function (F, b)
    {
        b = b || 1;
        $("<div>").load(location.protocol + "//" + location.hostname + "/myprofile/favorites/page"+b+"/ #middle",
        function ()
        {
            $(".gallery-item-in", this).each(function ()
            {
                var a = parseInt($(".user-id", this).text().replace("ID: ", ""));
                favourites[a] = [$(".name", this).text().replace(/[\d\s]+$/,''), $(".age", this).text()];
            });
            if ($("a.next", this).size() > 0) {
                GetFavourites(F, b + 1);
            }
            else {
                F();
            }
        })
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
        if (runned)
        {
            d.prop("disabled", false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(h);
            queue = [];
            e.val("Пуск");
            runned = false;
            inprogress = ",";
            Status(["Поиск","search"].indexOf(g.goal)>-1 ? sta.cnt : cnt, 0)
        }
        else
        {
			g.goal=goal.val();
			offline=date.val();
			offline=offline ? offline.split(/\D+/) : null;


            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = g[g.active];

			var invalid_tags=CheckNames(sta.text,["age","name","name1","name2","login"]);

            if (sta.text == "" && !g.tochat)
                alert("Введите текст письма!");
            else if (invalid_tags.length>0)
                alert("Вы ввели недопустимые теги: {"+invalid_tags.join("}, {")+"}");
            else if (sta.title == "" && !g.tochat)
                alert("Введите тему письма!");
            else {
				
				if(!g.anticaptcha && g.captcha_type=="anti")
				{
					g.anticaptcha=prompt("Ввведите ключ anti-captcha","");

					if(!g.rucaptcha)
						return;

					SaveStorage();
				}

				if(!g.rucaptcha && g.captcha_type=="ru")
				{
					g.rucaptcha=prompt("Ввведите ключ rucaptcha.com","");

					if(!g.rucaptcha)
						return;

					SaveStorage();
				}

				
				
                $.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: sta.text});
                runned = true;
                d.prop("disabled", true);
                e.val("Стоп");

                switch (g.goal)
                {
                    case "search":
                    case "search-photo":
					case "Поиск":
					case "Поиск с фото":
						GetFavourites(function(){
							ended = false;
							Parse4Send("<body>" + $("body").html() + "</body>");
						});
                    break;
                    case "favourites":
                    case "Фавориты":
                        GetFavourites(function ()
                        {
                            Status(0, 0);
                            $.each(favourites, function (b, c)
                            {
								if(sta.sent.indexOf(","+b+",")<0 && inprogress.indexOf(","+b+",")<0 && !(b in g.black))
								{
									inprogress += b + ",";

									queue.push({
										id : b,
										s : sta.title.replace(/{age}/ig, c[1]).replace(/{name}/ig, c[0]).replace(/{name1}/ig, Name1(c[0])).replace(/{name2}/ig, Name2(c[0])),
										t : sta.text.replace(/{age}/ig, c[1]).replace(/{name}/ig, c[0]).replace(/{name1}/ig, Name1(c[0])).replace(/{name2}/ig, Name2(c[0])),
										F : function (a)
										{
											if(a)
												sta.sent += b + ",";

											Status(a ?++cnt : cnt);
											if (queue.length == 0) {
												alert("Рассылка завершена!");
												run.click()
											};
											SaveStorage()
										}
									});
								}
                                Status(cnt);
                            });

							if (queue.length == 0) {
								alert("Рассылка завершена!");
								run.click()
							};

							return;
                        });
                    break;
					case"cuties":
					case"Cuties":
						$.get("/myprofile/interests/cuties/",ParseAdmirers);
					break;
					case"admirers":
					case"Admirers":
						$.get("/myprofile/interests/",ParseAdmirers);
					break;
					case "new":
					case "new-photo":
					case "Онлайн":
					case "Онлайн с фото":
						$.post("/chat/", { ajax:1, action:'get_online', page_num:1, clear_invited:0 }, Online, "json");
					break;
                    default:
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

                                if (d != 0 && !(d in g.black))
                                {
									setTimeout(function(){
										if(!runned)
											return;

										$.get(location.protocol + "//" + location.hostname + "/man/" + d + "/", function (r) {
											if(!runned)
												return;

											r = r.replace(/<script[^>]*>|<\/script>/g, "");
											var b = r.indexOf("<body"), ind2 = r.indexOf(">", b + 1), ind3 = r.indexOf("</body>", 
											ind2 + 1);
											r = r.substring(ind2 + 1, ind3);
											r = r.replace(/ src="[^"]+"/ig, "");
											r = $("<div>").html(r);
											var c = parseInt(r.find(".age:first").text()), mname = r.find(".name:first").text();
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
                }
                StartSender()
            }
        }
    });
    $("#help").click(function ()
    {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob")
    });
    setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}, $.noop, "text"); },120000);//Every 2 minutes

},3000);//Timeout
});//Dom ready
}

function NewAccount()
{
	$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
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
	$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
<h3 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date +
'</h3>\
</div>');
}

addEventListener("message",function(e){
	if(e.data.key) Captcha(e.data.key);
});

$.get(location.protocol+"//"+location.hostname+"/chat/",function(r){
	name=r.match(/ID: <b>([^<]+)<\/b>/i)[1];

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
				WorkContent(data.days,data.rdate);
			else if(data.expired)
				Expired(data.expired);
			else
				NewAccount();
		},2000);
	},"json");
});
