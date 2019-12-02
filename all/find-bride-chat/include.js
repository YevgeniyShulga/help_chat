var name="?",
	GBL="",
//",41482,4931,68373,65460,73517,67393,62863,41663,60785,48996,35850,18937,11984,73722,73080,73125,62162,53968,52038,148,18760,51695,52860,46712,60729,117,78927,37447,54728,538,120,281,109,15686,99263,",
	script,
	Captcha=$.noop;

function WorkContent(remain,rdate,days,$){$(function () {
	$("head").append('<link rel="stylesheet" type="text/css" href="//ukrainiangirls.pw/assets/css/styles.css" />');

	$("body").append('<div id="chat-widget-logo">\
		<a href="javascript:;" id="show-widget">\
			<img src="//ukrainiangirls.pw/assets/images/logo.png" alt="Logo" />\
		</a>\
	</div>\
<div class="chat-widget-wrap" style="z-index:1000;box-sizing:content-box;box-shadow:black 0px 0px 10px;"><iframe srcdoc="" id="chat-widget" class="" frameborder="0" style="width: 711px; height: 597px;"></iframe></div>\
');

var plugin=$("#chat-widget").get(0).contentWindow.document;
plugin.open("text/html","replace");
plugin.write('<!DOCTYPE html>\
<head>\
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
	<title>Widget</title>\
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
	<!-- Bootstrap CSS -->\
	<link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic" rel="stylesheet"> \
	<link rel="stylesheet" href="https://cdn.rawgit.com/malihu/malihu-custom-scrollbar-plugin/master/jquery.mCustomScrollbar.css">\
  <link rel="stylesheet" href="//ukrainiangirls.pw/assets/css/bootstrap.min.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/css/icons.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/css/widget.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/css/jquery.mCustomScrollbar.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/css/gijgo.min.css" />\
</head>\
<body>\
	<div class="container-fluid d-flex ">\
	 	<!--Sidebar-->\
    <div class="white flex-fixed-width-item" >\
    	<div class="top-bar cleared">\
    		<div class="queue">\
    			Очередь отправки:  <span id="status">10,0</span>\
    		</div>\
    	</div>\
\
    	<nav>\
    		<ul class="tab-menu">\
    			<li role="tab0"  class="active"><a href="#">Главная</a></li>\
    			<li role="tab1" ><a href="#">Черный список</a></li>\
    			<li role="tab2" ><a href="#">Добавить писателя</a></li>\
    			<li role="tab4" ><a href="#">Продлить активацию</a></li>\
    			<li role="tab5" ><a href="#">FAQ</a></li>\
    		</ul>\
\
    		<div class="lang-switcher">\
    			<a href="#" class="current">Russuan</a>\
    			<a href="#">English</a>\
    		</div>\
\
    	</nav>\
\
    	<div class="activation-info">\
  			<span>Дней активации:</span>\
  			<strong class="red" id="days">2</strong>\
  		</div>\
    </div>\
    <!--end of Sidebar-->\
\
  	<!--Main-->\
    <div class="flex-item-100 " >\
    	<div class="top-bar cleared">\
    		<div class="window-control">\
    			<a href="javascript:;" id="x-minify"><span class="icon-minify"></span></a>\
    			<a href="javascript:;" class="expand-btn" id="x-expand"><span class="icon-expand"></span><span class="icon-ex"></span></a>\
    			<a href="javascript:;" id="x-close"><span class="icon-close"></span></a>\
    		</div>\
    	</div>\
\
        <div id="tab0" style="display: block; opacity: 1;">\
          <div class="content">\
        		<form action="#" class="msg-form">\
        			<textarea name="message" id="textarea" cols="30" rows="10" placeholder="Введите сообщение сюда..."></textarea>\
        			<div class="tools cleared">\
        				<div class="group">\
							<a href="#" id="translate"><span class="icon-typo"></span></a>\
						</div>\
        			</div>\
        		</form>\
        		<form action="#" class="message-options  cleared">\
        			<div class="col-50 cleared" style="min-height:140px">\
						<div class="sub-row one-half cleared">\
							<label>Отсылать по:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="via" id="goal">\
									<option value="online">Онлайн</option>\
									<option value="favourites">Фавориты</option>\
									<option value="writers">Writers</option>\
								</select>\
							</div>\
						</div>\
						<div class="sub-row one-half cleared">\
							<label>Возраст</label>\
							<div class="slider-wrap">\
								<div id="slider"></div>\
								<div>\
								  <strong id="minvalue"><i><em></em><span>18</span> лет</i></strong>\
								  <strong id="maxvalue"><i><em></em><span>99</span> лет</i></strong>\
								</div>\
							</div>\
						</div>\
        			</div>\
\
					<!-- <div class="col-50 cleared">\
						<div class="sub-row one-half cleared">\
						  <label>Поле ввода API</label>\
						  <input type="text" id="api" class="medium-input" />\
						</div>\
					</div>\
\
        			<div class="sub-row cleared radio-type">\
      					<span>\
      						<input type="radio" name="captcha" id="optionsRadios1" value="hand" checked="" />\
      						<label for="optionsRadios1">Ручной ввод</label>\
      					</span>\
      					<span>\
      						<input type="radio" name="captcha" id="optionsRadios2" value="ru" checked="" />\
      						<label for="optionsRadios2">Rucaptcha</label>\
      					</span>\
      					<span>\
      						<input type="radio" name="captcha" id="optionsRadios3" value="server" checked="" />\
      						<label for="optionsRadios3">Servar captcha</label>\
      					</span>\
      					<span>\
      						<input type="radio" name="captcha" id="optionsRadios4" value="anti" checked="" />\
      						<label for="optionsRadios4">Anti-Captcha</label>\
      					</span>\
					</div> -->\
        		</form>\
          </div>\
	    	</div>\
\
        <div id="tab1" style="display: none; opacity: 0;">\
          <div class="content mCustomScrollbar">\
            <div class="search-section cleared">\
              <div class="col-50">\
                <div class="search-bar">\
                  <span class="icon-search"></span>\
                  <input type="text" name="id" />\
                  <a href="javascript:;" class="clear-search"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a>\
                </div>\
                <div class="search-list mCustomScrollbar" id="black">\
                  <!-- <div class="row-id nothing">Ничего не найденно :(</div> -->\
                </div>\
              </div>\
              <div class="col-50 search-controls">\
                <div class="main-btns">\
                  <a href="javascript:;" class="add-el"><span class="icon-add"></span> <i>Добавить новый id</i></a>\
                  <a href="javascript:;" class="download-el"><span class="icon-download"></span> <i>Скачать все</i></a>\
                  <a href="javascript:;" class="edit-el"><span class="icon-edit"></span> <i>Реактировать все</i></a>\
                  <a href="javascript:;" class="delete-el"><span class="icon-remove"></span> <i>Удалить все</i></a>\
                </div>\
                <div class="confirm-delete">\
                  <span>Удалить файл?</span>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="delete">Удалить</a>\
                </div>\
                <div class="confirm-add confirm-box">\
                  <div class="el-wrap">\
                    <span>id</span>\
                    <input type="text" name="el" />\
                  </div>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="apply">Применить</a>\
                </div>\
                <div class="confirm-edit confirm-box ">\
                  <div></div>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="apply-edit">Применить</a>\
                </div>\
                <a href="javascript:;" class="cancel-search">Отменить поиск</a>\
              </div>\
            </div>\
            <div class="notice-bar inline"><p>Вы успешно скачали выбранные файлы</p></div>\
          </div>\
        </div>\
        <div id="tab2" style="display: none; opacity: 0;">\
          <div class="content mCustomScrollbar">\
            <div class="search-section cleared">\
              <div class="col-50">\
                <div class="search-bar">\
                  <span class="icon-search"></span>\
                  <input type="text" name="id" />\
                  <a href="javascript:;" class="clear-search"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a>\
                </div>\
                <div class="search-list mCustomScrollbar" id="writers">\
                  <!-- <div class="row-id nothing">Ничего не найденно :(</div> -->\
                  <!-- <div class="row-id">475 847 49</div> -->\
                </div>\
              </div>\
              <div class="col-50 search-controls">\
                <div class="main-btns">\
                  <a href="javascript:;" class="add-el"><span class="icon-add"></span> <i>Добавить новый id</i></a>\
                  <a href="javascript:;" class="download-el"><span class="icon-download"></span> <i>Скачать все</i></a>\
                  <a href="javascript:;" class="edit-el"><span class="icon-edit"></span> <i>Реактировать все</i></a>\
                  <a href="javascript:;" class="delete-el"><span class="icon-remove"></span> <i>Удалить все</i></a>\
                </div>\
                <div class="confirm-delete">\
                  <span>Удалить файл?</span>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="delete">Удалить</a>\
                </div>\
                <div class="confirm-add confirm-box">\
                  <div class="el-wrap">\
                    <span>id</span>\
                    <input type="text" name="el" />\
                  </div>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="apply">Применить</a>\
                </div>\
                <div class="confirm-edit confirm-box ">\
                  <div></div>\
                  <a href="javascript:;" class="cancel">Отменить</a>\
                  <a href="javascript:;" class="apply-edit">Применить</a>\
                </div>\
                <a href="javascript:;" class="cancel-search">Отменить поиск</a>\
              </div>\
            </div>\
            <div class="notice-bar inline"><p>Вы успешно скачали выбранные файлы</p></div>\
          </div>\
        </div>\
        <div id="tab4" style="display: none; opacity: 0;">\
          <div class="content mCustomScrollbar">\
            dddd\
          </div>\
        </div>\
        <div id="tab5" style="display: none; opacity: 0;">\
          <div class="content mCustomScrollbar">\
            Поддерживаются следующие переменные:<br>\n\
{Name} - имя пользователя<br>\n\
{City} - город (только для онлайна)<br>\n\
{Country} - страна (только для онлайна)<br>\n\
{Age} - возраст (только для онлайна)<br>\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose<br>\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob\
          </div>\
        </div>\
    	<div class="send-row">\
        <div class="send-row-in">\
      		<a href="#" class="button send-btn" id="run">Отправить</a>\
      		<p>Проверьте, нет ли ошибок и нажмите “Отправить”</p>\
        </div>\
    	</div>\
     </div>\
\
		<!--end of Main-->\
	</div>\
\
	<!--Notice Bar-->\
	<div class="notice-bar">\
  	<p>В меню FAQ, находится полезная инструкция как пользоваться новым плагином А можно даже в две строчки написать</p>\
  	<a href="#" id="x-ok" class="button notice-btn ">Хорошо</a>\
  </div>\
  <!--end of Notice Bar-->\
\
  <script src="//ukrainiangirls.pw/assets/js/jquery.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/popper.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/bootstrap.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/jquery.mCustomScrollbar.concat.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/fancySelect.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/gijgo.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/jquery.autogrow-textarea.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/jquery-ui.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/jquery.inputmask.bundle.min.js"></script>\
  <script src="//ukrainiangirls.pw/assets/js/init.js"></script>\
</body>\
</html>');
plugin.close();

$("#days",plugin).text(days);
$("#x-minify",plugin).click(function(e){
	e.preventDefault();
	parent.document.fire('close:event');
});

$("#x-expand",plugin).click(function(e){
	e.preventDefault();
	parent.document.fire('expand:event');
});

$("#x-close",plugin).click(function(e){
	e.preventDefault();
	parent.document.fire('close:event');
});

$("#x-ok",plugin).click(function(e){
	e.preventDefault();
	parent.document.fire('collapse:event');
});

$("form",plugin).submit(function(e){
	e.preventDefault();
});

$("#translate",plugin).click(function(e){
	e.preventDefault();
	
	$.post("//ukrainiangirls.pw/translate.php",{text:text.val()},function(r){ text.val(r); },"text");
});

$(".apply",plugin).click(function(){
	setTimeout(ParseBlack,1000);
});

$.get("//ukrainiangirls.pw/assets/js/scripts.js",window.eval,"text");

/*$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
		<table>\
			<tr>\
				<td colspan="6"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td>\
			</tr>\
			<tr>\
				<td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td>\
				<td><select id="goal" title="Цель"><option value="online">По списку онлайн</option><option value="contacts">Контакт-листу</option></select> <input type="button" id="help" value="?"></td>\
				<td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td>\
				<td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="50" title="Возраст до" /></td>\
				<td><input type="button" id="run" value="Пуск"></td>\
				<td id="s-info" title="Статус рассылки: отправлено, очередь">0, 0</td>\
			</tr>\
		</table>\
<audio controls style="position:absolute;top:-9999px" id="au">\
	<source src="//ukrainiangirls.pw/fine-bride.mp3" type="audio/mpeg">\
</audio>\
	</div>');*/

	script=document.createElement("script");
	script.text='(function(){ $("#chat-captcha").on("hide.bs.modal",function(){ postMessage({key:1},"*"); }); })();';
	document.head.appendChild(script).parentNode.removeChild(script);

	var storage={},
        run=$("#run",plugin),
		text=$("#textarea",plugin),

        black=$("#black",plugin),
		writers = $("#writers",plugin), 
        goal=$("#goal",plugin),
        af=$("#minvalue span",plugin),
        at=$("#maxvalue span",plugin),

		api = $("#api",plugin),
		captcha_type=$("input[name=captcha]:radio", plugin),

		version_js=$("script[src*=ichat]").prop("src"),

		Script=function(script)
		{
			var el = plugin.createElement('script');

			el.innerHTML = script;

			plugin.head.appendChild(el);//.parentNode.removeChild(el);
		},

		ParseBlack=function()
		{
			//Сохранение чёрного списка
			storage.black={};
			black.find(".row-id").each(function(){
				var x=$(this).text();

				if(x)
					storage.black[x]="";
			});
			///Сохранение чёрного списка
		},
		SendCaptcha = function (callback) {
			var audio=$("#au").get(0);
			audio.currentTime=0;
			audio.play();

			Captcha=function(key){
				callback(key);
				Captcha=$.noop;
			};

			script=document.createElement("script");
			script.text='(function(){ $("#chat-captcha").modal("show"); })();';
			document.head.appendChild(script).parentNode.removeChild(script);
/*		if(g.captcha_type=="anti")
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
		document.head.appendChild(script).parentNode.removeChild(script);*/
		},
		SaveStorage=function()
		{
			try
			{
				chrome.storage.local.set({["find-bride-"+name]:JSON.stringify(storage)});
			}
			catch(e)
			{
				console.info(e);
				if(e==QUOTA_EXCEEDED_ERR)
					alert("Локальное хранилище переполнено");
			}
		},
		Status=function()
		{
			$("#status",plugin).text(storage.ids.length + ", " + queue.length);
		};

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

	text.change(function(){
		storage.ids=[];
		SaveStorage();
	});

	chrome.storage.local.get("find-bride-"+name,function(st){
		st=st["find-bride-"+name]||null;

		if(st)
		{
			storage=jQuery.parseJSON(st)||{};

			if(typeof storage.black=="undefined")
				storage={black:{},writers:{},goal:"favourites",af:18,at:99,text:"",ids:[]};
			else
			{
				if(storage.goal)
					goal.val(storage.goal).trigger("change.fs");
				
				text.val(storage.text);
				
				if(!("ids" in storage))
					storage.ids=[];

				if(storage.af && storage.at)
					Script( "setTimeout(function(){ jQuery('#slider').slider('values',["+storage.af+","+storage.at+"]); },1000);" );

				if (storage.writers)
				{
					let list=writers.find(".mCSB_container");
					
					if(list.length<1)
						list=writers;

					$.each(storage.writers, function (k, v){
						$("<div>").addClass("row-id").text(k).appendTo(list);
					});
				}
				else {
					storage.writers = {};
				}

				if (storage.black)
				{
					let list=black.find(".mCSB_container");
					
					if(list.length<1)
						list=black;

					$.each(storage.black, function (k, v){
						$("<div>").addClass("row-id").text(k).appendTo(list);
					});
				}
				else {
					storage.black = {};
				}

				Status(storage.ids.length);
			}
		}
		else
			storage={black:{},writers:{},goal:"favourites",af:18,at:99,text:"",ids:[]};
	});

	version_js=version_js.match(/v(\d+)/);
	version_js=version_js ? version_js[1] : 58;

	goal.change(function(){
		storage.goal=$(this).val();
	}).change();

	var top,
		tos,
		runned=false,
		ibp=10000,
		queue=[],

		sent=[],
		insend=[],

		StartSender=function()
		{
			if(queue.length<1)
			{
				if(runned)
					tos=setTimeout(StartSender,parseInt(Math.random()*6000)+4000);

				return;
			}

			var v=queue.shift();

			if(storage.goal=="online")
			{
				var script=document.createElement("script");
				script.text="(function(){ichatSetContacts("+v.id+",'Add to contacts','iLoadProfile');})();";
				document.head.appendChild(script).parentNode.removeChild(script);
			}

			$.post(
				"/chat/set_mess",
				{
					v:version_js, 
					correct_user:v.id,
					text:v.t
				},
				function(r)
				{
					if(r.c==1 && r.status=="Incorrect captcha inserted")
						SendCaptcha(function(){
							queue.push(v);

							if(runned)
								StartSender();
						});
					else
					{
						v.F(r.status=="OK");

						if(runned)
							tos=setTimeout(StartSender,parseInt(Math.random()*6000)+4000);
					}
				},
				"json"
			).fail(function(){
				v.F(false);

				if(runned)
					tos=setTimeout(StartSender,parseInt(Math.random()*6000)+4000);
			});
		},

		Parse4Send=function()
		{
            if (queue.length>0) {
                h = setTimeout(Parse4Send, ibp);
                return;
            }

			$.get("/chat/get_online",function(json){
				$.each(json.online,function(gid,man){
					var age=parseInt(man.e),
						na=man.n.match(/\(([^\)]+)\)/);

					if(storage.af<=age && age<=storage.at && $("#g"+man.id+"-icon").length==0 && storage.ids.indexOf(man.id)==-1 && insend.indexOf(man.id)==-1 && GBL.indexOf(","+man.id+",")==-1 && !(man.id in storage.black))
					{
						na=na ? na[1] : man.l;
						insend.push(man.id);
						queue.push({
							id:man.id,
							name:na,
							t:storage.text
										.replace(/{name}/ig,na)
										.replace(/{age}/ig,age),
							F:function(st)
							{
								if(st)
									storage.ids.push(man.id);

								if(runned){
									Status();
								}
							}
						});
						if(runned){
							Status();
						}
					}
				});
			},"json").always(function(){
				if(runned){
					top=setTimeout(Parse4Send,ibp);
				}
			});
		};

	run.click(function(){
		var th=$(this),
			d=$("select",plugin).not(this);

		if(runned)
		{
			d.prop("disabled",false).trigger("change.fs");
			goal.change();
			clearTimeout(tos);
			clearTimeout(top);
			runned=false;
			queue=[];
			insend=[];
			run.text("Пуск");
			return;
		}

		storage.goal=goal.val();
		storage.text=text.val();
		storage.at=at.text()-0;
		storage.af=af.text()-0;

		//Сохранение писателей
		storage.writers={};
		writers.find(".row-id").each(function(){
			var x=$(this).text();

			if(x)
				storage.writers[x]="";
		});
		///Сохранение писателей

		ParseBlack();
		SaveStorage();

		$("#ichat_banlist a").each(function(){
			var id=parseInt( $(this).text(), 10 );

			if(insend.indexOf(id)<0)
				insend.push(id);
		});
console.info(storage);
		if(storage.text=="")
		{
			alert("Введите текст!");
			return;
		}

		runned=true;

		switch(storage.goal)
		{
			case"writers":
				var w = Object.keys(storage.writers);

				if (w.length < 1)
				{
					runned=false;
					alert("Заполните писателей");
					return;
				}

				$.each(w,function(i,id){
					id = parseInt( id,10 );

					if (!isNaN(id) && id != 0 && storage.ids.indexOf(id)==-1 && GBL.indexOf(","+id+",")==-1)
					{
						queue.push({
							id: id,
							name:"",
							t:storage.text.replace(/{name}/ig,"").replace(/{age}/ig,""),
							F : function (st) 
							{
								if(st)
									storage.ids.push(id);

								if(runned)
									Status();

								if (queue.length == 0) {
									alert("Рассылка завершена!");
									run.click() 
								};

								SaveStorage() 
							}
						});
					}

					Status();
				});
				
				if (queue.length < 1)
				{
					runned=false;
					alert("Рассылка завершена");
					return;
				}
			break;
			case"favourites":
				$("#ichat_contacts_favorite span>span").each(function(){
					var data=$(this).text().split(":");

					if(data.length!=2)
						return;

					var id=parseInt(data[1],10),
						manname=data[0];

					if(id>0 && GBL.indexOf(","+id+",")==-1 && storage.ids.indexOf(id)==-1 && !(id in storage.black))
					{
						queue.push({
							id:id,
							name:manname,
							t:storage.text.replace(/{name}/ig,manname).replace(/{age}/ig,""),
							F:function(st){
								if(st)
									storage.ids.push(id);

								if(queue.length==0 && runned){
									alert("Рассылка завершена!");
									run.click();
								}

								if(runned){
									Status();
								}
							}
						});
						Status();
					}
				});
			break;
			default:
				Parse4Send();
		}

		d.prop("disabled",true).trigger("change.fs");
		run.text("Стоп");
		StartSender();
	});

	$("#help").click(function(){
		alert("Учетная запись оплачена до "+rdate+".\n\
Осталось "+remain+".\n\
\n\
Поддерживаются следующие переменные:\n\
{Login} - логин пользователя\n\
{Name} - имя пользователя (иногда доступно)\n\
{Age} - возраст (только для онлайна)\n");
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

function NewAccount($)
{
	$("body").prepend('<div id="sparner">\
<a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
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

function Expired(date,$)
{
	$("body").prepend('<div id="sparner">\
<a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
<h2 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился\
</h2>\
</div>');
}

addEventListener("message",function(e){
	if(e.data.key) Captcha(e.data.key);
});

(function($){

	$(function(){
		$(this).on("click","#sparner-pin",function(){
			$("#sparner").toggleClass("active");
		});
	});

	$.get("/main",function(r){
		name=r.match(/\/search\/profile\/all\/(\d+)/i)[1];

		if(name)
			$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
				if(data.remain && data.rdate)
					WorkContent(data.remain,data.rdate,data.days,jQuery);
				else if(data.expired)
					//WorkContent("хз","2020-02-20",23,jQuery);
					Expired(data.expired,jQuery);
				else
					NewAccount(jQuery);
			},"json");
	});

})(jQuery);