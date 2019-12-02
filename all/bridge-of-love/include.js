var name="?";

function WorkContent(remain,rdate,days,$){$(function(){
	$("head").append('<link rel="stylesheet" type="text/css" href="//ukrainiangirls.pw/assets/lada-chat/css/styles.css" />');
	
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
  <link rel="stylesheet" href="//ukrainiangirls.pw/assets/lada-chat/css/bootstrap.min.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/lada-chat/css/icons.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/lada-chat/css/widget.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/lada-chat/css/jquery.mCustomScrollbar.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/lada-chat/css/gijgo.min.css" />\
</head>\
<body>\
    	<div class="top-bar cleared">\
    		<div class="queue">\
    			Очередь отправки:  <span id="status">0,0</span>\
    		</div>\
    		<div class="window-control">\
    			<a href="javascript:;" id="x-minify"><span class="icon-minify"></span></a>\
    			<a href="javascript:;" class="expand-btn" id="x-expand"><span class="icon-expand"></span><span class="icon-ex"></span></a>\
    			<a href="javascript:;" id="x-close"><span class="icon-close"></span></a>\
    		</div>\
    	</div>\
	<div class="container-fluid d-flex ">\
	 	<!--Sidebar-->\
    <div class="white flex-fixed-width-item" >\
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
\
        <div id="tab0" style="display: block; opacity: 1;">\
          <div class="content">\
        		<form action="#" class="msg-form">\
        			<textarea name="message" id="textarea" cols="30" rows="10" placeholder="Введите сообщение сюда..."></textarea>\
        			<div class="tools cleared">\
						<div class="group">\
        				  <a href="javascript:;" class="show-photos"><span class="icon-photo"></span></a>\
        				</div>\
        				<div class="group">\
							<div class="smiles">\
								<a href="#"><span class="icon-smiles"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span></a>\
								<div class="smiles-modal">\
								  <div class="smiles-modal-in mCustomScrollbar" data-mcs-axis="y">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/cry.gif" title="Cry" data-emotion="* cry *" alt="Cry">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/d_w_t_see.gif" title="Do not want to see" data-emotion="* d_w_t_see *" alt="Do not want to see">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/doubt.gif" title="Doubt" data-emotion="* doubt *" alt="Doubt">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/dream.gif" title="Dream" data-emotion="* dream *" alt="Dream">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/dreaminess.gif" title="Dreaminess" data-emotion="* dreaminess *" alt="Dreaminess">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/evil_g.gif" title="Evil" data-emotion="* evil_g *" alt="Evil">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/get_off.gif" title="Get off" data-emotion="* get_off *" alt="Get off">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/giggle.gif" title="Giggle" data-emotion="* giggle *" alt="Giggle">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/hesitate.gif" title="Hesitate" data-emotion="* hesitate *" alt="Hesitate">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/hi.gif" title="Hi" data-emotion="* hi *" alt="Hi">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/idea.gif" title="Idea" data-emotion="* idea *" alt="Idea">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/inlove.gif" title="Inlove" data-emotion="* inlove *" alt="Inlove">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/kiss.gif" title="Kiss" data-emotion="* kiss *" alt="Kiss">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/laught.gif" title="Laught" data-emotion="* laught *" alt="Laught">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/make_up.gif" title="Make up" data-emotion="* make_up *" alt="Make up">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/mmmmm.gif" title="Mmmmm" data-emotion="* mmmmm *" alt="Mmmmm">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/no_words.gif" title="No words" data-emotion="* no_words *" alt="No words">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/no.gif" title="No" data-emotion="* no *" alt="No">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/oops.gif" title="Oops" data-emotion="* oops *" alt="Oops">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/rofl.gif" title="Rofl" data-emotion="* rofl *" alt="Rofl">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/sick.gif" title="Sick" data-emotion="* sick *" alt="Sick">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/smirk.gif" title="Smirk" data-emotion="* smirk *" alt="Smirk">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/n_smiles/sorrow.gif" title="Sorrow" data-emotion="* sorrow *" alt="Sorrow">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/SMILE.gif" title="Smile" data-emotion="* SMILE *" alt="Smile">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/WINK.gif" title="Wink" data-emotion="* WINK *" alt="Wink">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/LOL.gif" title="Lol" data-emotion="* LOL *" alt="Lol">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/APPLAUSE.gif" title="Applause" data-emotion="* APPLAUSE *" alt="Applause">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/BRAVO.gif" title="Bravo" data-emotion="* BRAVO *" alt="Bravo">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/JOKE.gif" title="Joke" data-emotion="* JOKE *" alt="Joke">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/TONGUE.gif" title="Tongue" data-emotion="* TONGUE *" alt="Tongue">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/MMMMM.gif" title="Mmmmm" data-emotion="* MMMMM *" alt="Mmmmm">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/HEART.gif" title="Heart" data-emotion="* HEART *" alt="Heart">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/ROFL.gif" title="Rolf" data-emotion="* ROFL *" alt="Rolf">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/BYE.gif" title="Bye" data-emotion="* BYE *" alt="Bye">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/THANKS.gif" title="Thanks" data-emotion="* THANKS *" alt="Thanks">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/HELLO.gif" title="Hello" data-emotion="* HELLO *" alt="Hello">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/LOVE.gif" title="Love" data-emotion="* LOVE *" alt="Love">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/OMG.gif" title="Omg" data-emotion="* OMG *" alt="Omg">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/KISS.gif" title="Kiss" data-emotion="* KISS *" alt="Kiss">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/GIFT.gif" title="Gift" data-emotion="* GIFT *" alt="Gift">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/FLOWER.gif" title="Flower" data-emotion="* FLOWER *" alt="Flower">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/GIRLKISS.gif" title="Girlkiss" data-emotion="* GIRLKISS *" alt="Girlkiss">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/DRINK.gif" title="Drink" data-emotion="* DRINK *" alt="Drink">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/CRY.gif" title="Cry" data-emotion="* CRY *" alt="Cry">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/SORRY.gif" title="Sorry" data-emotion="* SORRY *" alt="Sorry">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/BEER.gif" title="Beer" data-emotion="* BEER *" alt="Beer">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/FRIENDS.gif" title="Friends" data-emotion="* FRIENDS *" alt="Friends">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/DEVIL.gif" title="Devil" data-emotion="* DEVIL *" alt="Devil">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/CRAZY.gif" title="Crazy" data-emotion="* CRAZY *" alt="Crazy">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/ANGRY.gif" title="Angry" data-emotion="* ANGRY *" alt="Angry">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/ANGEL.gif" title="Angel" data-emotion="* ANGEL *" alt="Angel">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/DANCE.gif" title="Dance" data-emotion="* DANCE *" alt="Dance">\
<img src="https://www.bridge-of-love.com/themes/site/Bridge/chat/images/smiles/HUG.gif" title="Hug" data-emotion="* HUG *" alt="Hug">\
								  </div>\
								</div>\
							  </div>\
						</div>\
\
\
                <div class="file-controls">\
                  <a href="javascript:;" class="cancel-files">Отменить</a>\
                  <a href="javascript:;" class="apply-files">Прикрепить</a>\
                </div>\
                <a href="javascript:;" class="remove-all">Открепить все</a>\
                <div class="files-wrap photo-files">\
                  <div class="files-wrap-in mCustomScrollbar" id="photos">\
                    <!-- <span data-id="file-1-01"><img data-name="PhotoLab1.png" src="assets/images/image.png" alt="Image"></span> -->\
                  </div>\
                </div>\
\
                <div class="selected-files">\
                  <div class="selected-files-in mCustomScrollbar"></div>\
                </div>\
\
        			</div>\
        		</form>\
        		<form action="#" class="message-options  cleared">\
        			<div class="col-50 cleared">\
        				<div class="sub-row subject-wrap cleared">\
        					<label>Шаблоны:</label>\
      						<div class="custom-select-wrap">\
        						<select name="subject" id="template">\
        							<option value="0" selected>Выберите шаблон</option>\
        						</select>\
      						</div>\
      						<a href="#" class="tooltip-icon disabled remove-subject" data-toggle="tooltip" data-placement="top" title="Удалить"><span class="icon icon-remove"></span></a>\
      						<a href="#" class="tooltip-icon add-subject" data-toggle="tooltip" data-placement="top" title="Добавить"><span class="icon icon-add"></span></a>\
      						<a href="#" class="tooltip-icon disabled edit-subject" data-toggle="tooltip" data-placement="top" title="Редактировать"><span class="icon icon-edit"></span></a>\
							<div class="subject-overlay">\
								<input type="text" placeholder="Введите шаблон сюда...">\
								<a href="javascript:;" class="cancel-subject">Отменить</a>\
								<a href="javascript:;" class="apply-subject">Применить</a>\
							</div>\
        				</div>\
						<div class="sub-row one-half cleared">\
							<label>Время:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="times" id="times">\
									<option value="1">1 минута</option>\
									<option value="2">2 минуты</option>\
									<option value="5">5 минут</option>\
									<option value="0">Случайно</option>\
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
        			<div class="col-50 cleared" style="min-height:200px">\
						<div class="sub-row one-half cleared">\
							<label>Отсылать по:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="via" id="goal">\
									<option value="textual">Онлайн текст</option>\
									<option value="template">Онлайн шаблоны</option>\
									<option value="w-textual">Writers текст</option>\
									<option value="w-template">Writers шаблоны</option>\
								</select>\
							</div>\
						</div>\
						<div class="sub-row one-half cleared">\
							<label>Страна:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="country" id="country">\
<option value="">нет</option>\
<option value="United Kingdom">Великобритания</option>\
<option value="United States">США</option>\
								</select>\
							</div>\
						</div>\
        			</div>\
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
{age} - возраст (только для онлайна)<br>\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose<br>\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob\
          </div>\
        </div>\
    	<div class="send-row">\
        <div class="send-row-in">\
      		<a href="#" class="button send-btn" id="run">Отправить</a>\
      		<p>Проверьте, нет ли ошибок и нажмите “Отправить”</p>\
			<a href="#" class="button send-btn button-reset" id="reset">Сброс</a>\
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

$.get("//ukrainiangirls.pw/assets/js/scripts.js",window.eval,"text");

var Script=function(script)
{
	var el = plugin.createElement('script');

	el.innerHTML = script;

	plugin.head.appendChild(el);//.parentNode.removeChild(el);
},
WScript=function(script)
{
	var el = document.createElement('script');

	el.innerHTML = script;

	document.head.appendChild(el);//.parentNode.removeChild(el);
};

	$("form",plugin).submit(function(e){
		e.preventDefault();
	});

    var storage=localStorage.getItem("bridge-"+name),

		reset=$("#reset",plugin),
        run=$("#run",plugin),
		text=$("#textarea",plugin),
		photos=$("#photos",plugin),
		photos_ids={},

        black=$("#black",plugin),
		writers = $("#writers",plugin), 
		template = $("#template",plugin), 
        goal=$("#goal",plugin),
        country=$("#country",plugin),
		age=$("#slider",plugin)
        af=$("#minvalue span",plugin),
        at=$("#maxvalue span",plugin),
        times=$("#times",plugin),

		send_template=false,
		queue=[],
		queue2=[],
		hi_var=0,
		ids="",

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
		ParseAttaches=function(){
			storage.photos=[];
			$(".selected-files strong > span:visible",plugin).each(function(){
				var f=$(this).text()-0;

				if(f && !isNaN(f) && storage.photos.indexOf(f)<0)
					storage.photos.push(f);
				else
				{
					f=$(this).closest("strong").data("id");

					if(f)
					{
						f=f.split("-").pop()-0;

						if(f && !isNaN(f) && storage.photos.indexOf(f)<0)
							storage.photos.push(f);
					}
				}
			});
		},
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("bridge-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if(e==QUOTA_EXCEEDED_ERR)
                    alert("Локальное хранилище переполнено");
            }
        },
        Status=function(n,q)
        {
            $("#status",plugin).text(n+", "+queue.length);
        };

	$("#translate",plugin).click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:text.val()},function(r){ text.val(r); },"text");
    });
	
	$(".apply",plugin).click(function(){
		setTimeout(ParseBlack,1000);
	});

	$(".apply-subject,.remove-subject",plugin).click(function(){
		setTimeout(function(){
			storage.template=[];
			template.find("option:gt(0)").each(function(){
				var v=$(this).val()-0;

				if(v)
					storage.template.push( $(this).text() );
			});
		},700);
		setTimeout(SaveStorage,1200);
	});

	reset.click(function(e){
		e.preventDefault();

		storage.ids=[];
		Status(0);
	});

	text.change(function(){
		storage.ids=[];
	});

	// Фотки
	var phts=photos.find(".mCSB_container:first");

	if(phts.length<1)
		phts=photos;

	$("#smile-tab-3 img").each(function(){
		var img=$(this),
			src=img.prop("src"),
			id=src.split("_").pop().split(".").shift().substr(10),
			im=img.attr("data-onclick-img"),
			sm=img.attr("data-onclick-img-small");

		photos_ids[id]="data-src='"+im+"' data-show-url-small='"+sm+"'";
		phts.append('<span data-id="file-1-'+id+'" id="photo-'+id+'"><img data-name="'+id+'" src="'+src+'" alt="Image"></span>');
	});
	/// Фотки

	$(".apply-files,.remove-all",plugin).click(function(){
		setTimeout(ParseAttaches,1000);
		setTimeout(SaveStorage,1200);
	});
	
	$("body",plugin).on("click",".icon-close1",function(){
		setTimeout(ParseAttaches,1000);
		setTimeout(SaveStorage,1200);
	});

	if(storage)
	{
		try
		{
			storage = jQuery.parseJSON(storage) || {};
		}catch(e){
			storage = {};
		}

		if(typeof storage.black=="undefined")
			storage={black:{},writers : {},goal:"textual",country:"", af:30,at:50,text:"",ids:[],template:[],times:0,photos:[]};
		else
		{
			if(storage.goal)
				goal.val(storage.goal).trigger("change.fs");

			if(storage.country)
				country.val(storage.country).trigger("change.fs");

			text.val(storage.text);

			if(!("ids" in storage))
				storage.ids=[];

			if(storage.af && storage.at)
				Script( "setTimeout(function(){ jQuery('#slider').slider('values',["+storage.af+","+storage.at+"]); },1000);" );

			if(storage.times)
				times.val(storage.times).trigger("change.fs");

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

			if (storage.template)
			{
				$.each(storage.template, function (k, v) 
				{
					$("<option>").text(v).val(k+1).appendTo(template) ;
				});
				template.trigger("change.fs");
			}
			else {
				storage.template = [];
			}

			if(Array.isArray(storage.photos))
				storage.photos.forEach(function(id){
					$("#photo-"+id,plugin).addClass("checked");
				});
			else
				storage.photos=[];

			setTimeout(function(){
				//Скопировано с файла с правками
				$('.files-wrap .checked',plugin).each(function(){
					var _id = $(this,plugin).data('id');
					if(!$('.selected-files-in .mCSB_container strong[data-id="' + _id + '"]',plugin).length) {
					  if($(this,plugin).closest(".files-wrap").hasClass('audio-files')) {
						var _name = $(this,plugin).find('strong').text();
						
						$('.selected-files-in .mCSB_container',plugin).append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><span class="icon-audio-wrap"><span class="icon-audio"></span></span><span>' + _name + '</span></a></strong>');
					  } else {
						var _url = $(this,plugin).find('img').attr('src');
						var _name = $(this,plugin).find('img').data('name'),
							F=function(){
								var x=$('.selected-files-in .mCSB_container',plugin).append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><img src="' + _url + '" alt="Image"><span>' + _name + '</span></a></strong>').length==0;

								console.info(x);

								if(x)
									setTimeout(F,500);
							}

							F();
					  }
					}
				});
			},700);
			///Скопировано с файла с правками

			Status(storage.ids.length);
		}
	}
	else
		storage={black:{},writers : {}, goal:"textual", country:"",af:30,at:50,text:"",ids:[],template:[],times:0,photos:[]};

    var top,
        tos,
        runned=false,

		page=1,
		inpogress=[],

		ReStartSender = function () {
			if (runned)
				tos = setTimeout(StartSender, 5000);
		},
		PerformSend=function(v,text1,photo,add2){
			if(v.id in storage.black)
			{
				v.F(false);
				return;
			}

			v.next++;

			if(send_template)
				text.val( text1 );

			WScript('chat.chatcontacts.addToContactList('+v.id+');chat.chatconnection.sendMessage("",'+JSON.stringify(text1)+','+JSON.stringify(v.id)+');');

			tos = setTimeout(function(){
				storage.photos.forEach(function(id,i){
					if(id in photos_ids)
						setTimeout(function(){
							WScript('chat.chatconnection.sendMessage("",'+JSON.stringify(photos_ids[id])+','+JSON.stringify(v.id)+');');
						},500*(i+1));
				});

				tos = setTimeout(function(){
					if(add2 && send_template && storage.template.length>v.next)
						queue2.push(v);

					v.F( true );
					ReStartSender();
				},600*storage.photos.length);
			}, 2000);
		},
        StartSender=function()
        {

			var nextsend=true,
				time=(new Date()).getTime(),
				t=times.val();

			t=t==0 ? 20000+(Math.random()*100000) : t*60000;

            if(queue2.length>0)
			{
				$.each(queue2.slice().reverse(),function(i,v){
					if(!(v.next in storage.template))
						queue2.splice(queue2.length-1-i);
					else if(v.time<time)
					{
						var text=storage.template[v.next]
							.replace(/{country}/ig,v.country)
							.replace(/{hi\|hello\|hey}/ig, GetHiVar(hi_var++) )
							.replace(/{name}/ig,v.name).replace(/{name1}/ig, Name1(v.name)).replace(/{name2}/ig, Name2(v.name))
							.replace(/{age}/ig,v.age);

						v.time=time+t;
						PerformSend(v,text,false,false);
						nextsend=false;

						return false;
					}
				});
			}

            if (nextsend && queue.length>0)
			{
                var v=queue.shift(),
					text=(send_template ? storage.template[0] : storage.text)
						.replace(/{country}/ig,v.country)
						.replace(/{hi\|hello\|hey}/ig, GetHiVar(hi_var++) )
						.replace(/{name}/ig,v.name).replace(/{name1}/ig, Name1(v.name)).replace(/{name2}/ig, Name2(v.name))
						.replace(/{age}/ig,v.age);

				v.time=time+t;
				PerformSend(v,text,true,true);
			}
			else
				ReStartSender();
        },

        Parse4Send=function(data)
        {
            if (queue.length>0) {
                h = setTimeout(function ()
                {
					if(runned)
						Parse4Send(data);
                }, 1000);
                return;
            }

			$.each(data[0].data,function(k,v){
				v.age-=0;
				v.id-=0;

				if(isNaN(v.age) || v.age<18 || v.age>90)
					v.age=0;

				if((v.age==0 || storage.af<=v.age && v.age<=storage.at) && inpogress.indexOf(v.id)==-1 && storage.ids.indexOf(v.id)==-1 && !(v.id in storage.black) && ["",v.location].indexOf(storage.country)>-1 )
				{
					inpogress.push(v.id);

					queue.push({
						id:v.id,

						next:0,
						time:0,
						name:v.name,
						name1:Name1(v.name),
						name2:Name2(v.name),
						country:v.location,
						age:v.age,

						F:function(st)
						{
							storage.ids.push(v.id);
							SaveStorage();

							if(runned)
								Status(storage.ids.length);
						}
					});

					if(runned)
						Status(storage.ids.length);
				}
			});

            if(runned)
            {
                page=data.IsSuccess && data.Model.Users.length>=20 ? page+1 : 1;
                top=setTimeout(function(){
					$.ajax({
						url:"/apiv2/index.php?app=ajax&act=get_online_list",
						dataType:"json",
						method:"post",
						contentType:'application/json',
						data:{ids:ids},
						success:Parse4Send
					});
                },5000);
            }
        };

    run.click(function(e){
        var d=$("select",plugin).not(this);

		e.preventDefault();

        if(runned)
        {
            d.prop("disabled",false).trigger("change.fs");
            goal.change();
            country.change();
            clearTimeout(tos);
            clearTimeout(top);
            runned=false;
            queue=[];
			queue2=[];
			inpogress=[];
            run.text("Пуск");
			
			if(send_template)
				text.val( storage.text );
        }
        else
        {
            storage.text=text.val();
            storage.goal=goal.val();
            storage.country=country.val();
			storage.times=times.val();
            storage.at=at.text()-0;
            storage.af=af.text()-0;
			hi_var=0;

			//Сохранение шаблонов
			storage.template=[];
			template.find("option:gt(0)").each(function(){
				var v=$(this).val()-0;

				if(v)
					storage.template.push( $(this).text() );
			});
			send_template=storage.goal.indexOf("template")>-1;
			///Сохранение шаблонов

			ParseBlack();

			//Сохранение писателей
			storage.writers={};
			writers.find(".row-id").each(function(){
				var x=$(this).text();

				if(x)
					storage.writers[x]="";
			});
			///Сохранение писателей

            SaveStorage();

            //if(storage.text=="" && file.get(0).files.length<1)
            if(storage.text=="" && !send_template)
                alert("Введите текст сообщения!");
			else if (send_template && storage.template.length<1)
				alert("Введите шаблоны!");
			else if (storage.goal.indexOf("w-")>-1)
			{
				//$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: send_template ? storage.template.join(";") : storage.text});

				var f = writers.find(".row-id");
				if ( Object.keys(storage.writers).length < 1) {
					alert("Заполните писателей");
				}
				else
				{

					runned=true;
					d.prop("disabled",true).trigger("change.fs");
					run.text("Стоп");

					f.each(function()
					{
						var d = $(this).text()-0;

						if (!isNaN(d) && d != 0 && storage.ids.indexOf(d)==-1)
						{
							queue.push({
								id: d,

								next:0,
								time:0,
								name:"",
								name1:"",
								name2:"",
								country:"",
								age:"",

								F : function (a) 
								{
									if(a)
										storage.ids.push(d);
									
									Status(storage.ids.length);
									if (queue.length == 0) {
										alert("Рассылка завершена!");
										run.click() 
									};
									SaveStorage() 
								}
							});
						}

						Status(storage.ids.length);
					});

					StartSender();
				}
			}
            else
            {
				page=1;
                runned=true;
                d.prop("disabled",true).trigger("change.fs");
                run.text("Стоп");

				$.ajax({
					url:"/apiv2/index.php?app=ajax&act=get_online_list",
					dataType:"json",
					method:"post",
					contentType:'application/json',
					data:{ids:ids},
					success:Parse4Send
				});

                StartSender();
            }
        }
    });

	ids=$("head").html().match(/IDS: '([^']+)'/);
	ids=ids ? ids[1] : "";

	//setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\n\
Осталось "+remain+".\n\
\n\
Поддерживаются следующие переменные:\n\
{Name} - имя пользователя\n\
{City} - город (только для онлайна)\n\
{Country} - страна (только для онлайна)\n\
{age} - возраст (только для онлайна)\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

	var script=document.createElement("script");
	script.text='(function(){ postMessage({uploadfunc:io_upload.toString()},"*"); })();';
	document.head.appendChild(script).parentNode.removeChild(script);

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

(function($){

	$(function(){
		$(this).on("click","#sparner-pin",function(){
			$("#sparner").toggleClass("active");
		});
	});

	name=$("#lady-my-id").text();

	if(name)
		setTimeout(function(){
			if($("#sparner").length<1)
				$.get("//ukrainiangirls.pw/get.php",{json:1,name:name},function(data){
					if(data.remain && data.rdate)
						WorkContent(data.remain,data.rdate,data.days,jQuery);
					else if(data.expired)
						//WorkContent(23,"2020-02-20",30,jQuery);
						Expired(data.expired,jQuery);
					else
						NewAccount(jQuery);
				},"json");

		},4000);

})(jQuery);