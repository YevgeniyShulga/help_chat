var name="?";

function WorkContent(remain,rdate,days,$){$(function(){
	$("head").append('<link rel="stylesheet" type="text/css" href="//ukrainiangirls.pw/assets/prime-chat/css/styles.css" />');
	
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
  <link rel="stylesheet" href="//ukrainiangirls.pw/assets/prime-chat/css/bootstrap.min.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/prime-chat/css/icons.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/prime-chat/css/widget.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/prime-chat/css/jquery.mCustomScrollbar.css" />\
	<link rel="stylesheet" href="//ukrainiangirls.pw/assets/prime-chat/css/gijgo.min.css" />\
</head>\
<body>\
		<div class="top-bar cleared">\
			<div class="window-control">\
				<a href="javascript:;" id="x-minify"><span class="icon-minify"></span></a>\
				<a href="javascript:;" class="expand-btn" id="x-expand"><span class="icon-expand"></span><span class="icon-ex"></span></a>\
				<a href="javascript:;" id="x-close"><span class="icon-close"></span></a>\
			</div>\
			<div class="queue">\
				Очередь онлайн: <span id="status-online">0,0;</span>\
			</div>\
			<div class="queue">\
				Очередь bookmarked: <span id="status-bookmarked"> 0,0;</span>\
			</div>\
		</div>\
	<div class="container-fluid d-flex ">\
	 	<!--Sidebar-->\
    <div class="white flex-fixed-width-item" >\
\
     <div class="custom-select-wrap">\
        <select id="girl">\
          <option value="0" selected>Loading...</option>\
        </select>\
     </div>\
\
     <div class="custom-select-wrap">\
        <select id="book-online">\
          <option value="b" selected>Bookmarked</option>\
          <option value="o" hidden>Онлайн</option>\
        </select>\
     </div>\
\
    	<nav>\
    		<ul class="tab-menu">\
    			<li role="tab0"  class="active"><a href="#">Главная</a></li>\
				    			<li role="tab6" ><a href="#">Автоответ</a></li>\
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
							<a href="javascript:;" class="show-videos"><span class="icon-player"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span></a>\
							<a href="#" id="translate"><span class="icon-typo"></span></a>\
							<a href="javascript:;" class="show-audios"><span class="icon-headphones"></span></a>\
						</div>\
						<div class="file-controls">\
						  <a href="javascript:;" class="cancel-files">Отменить</a>\
						  <a href="javascript:;" class="apply-files">Прикрепить</a>\
						</div>\
						<a href="javascript:;" class="remove-all">Открепить все</a>\
						<div class="files-wrap photo-files">\
						  <div class="files-wrap-in mCustomScrollbar" id="photos"></div>\
						</div>\
						<div class="files-wrap video-files">\
						  <div class="files-wrap-in mCustomScrollbar" id="videos"></div>\
						</div>\
						<div class="files-wrap audio-files">\
						  <div class="files-wrap-in mCustomScrollbar" id="audios"></div>\
						</div>\
						<div class="selected-files">\
						  <div class="selected-files-in mCustomScrollbar"></div>\
						</div>\
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
							<label>Повторять через:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="times" id="times">\
									<option value="2">2 минуты</option>\
									<option value="5">5 минут</option>\
									<option value="8">8 минут</option>\
								</select>\
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
									<option value="b-textual">Bookmark текст</option>\
									<option value="b-template">Bookmark шаблоны</option>\
									<option value="w-textual">Writers текст</option>\
									<option value="w-template">Writers шаблоны</option>\
								</select>\
							</div>\
							<div class="settings-wrap">\
								<a href="#" class="tooltip-icon"><span class="icon icon-settings"></span></a>\
								<div class="smiles-modal">\
									<div class="smiles-modal-in mCustomScrollbar" data-mcs-axis="y">\
										<div class="switch">\
											<input type="checkbox" class="custom-control-input" id="use-age">\
											<label class="custom-control-label" for="use-age">Возраст</label>\
										</div>\
										<div class="switch">\
											<input type="checkbox" class="custom-control-input" id="use-offline">\
											<label class="custom-control-label" for="use-offline">+Offline</label>\
										</div>\
										<div class="switch">\
											<input type="checkbox" class="custom-control-input" id="use-photo">\
											<label class="custom-control-label" for="use-photo">Только фото</label>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>\
						<div class="sub-row one-half cleared">\
							<label>Возраст:</label>\
							<div class="slider-wrap">\
								<div id="slider"></div>\
								<div>\
								  <strong id="minvalue"><i><em></em><span>18</span> лет</i></strong>\
								  <strong id="maxvalue"><i><em></em><span>99</span> лет</i></strong>\
								</div>\
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
                  <a href="javascript:;" class="delete-el"><span class="icon-remove"></span> <i>Удалить все</i></a>\
				  <a href="javascript:;" class="edit-el"><span class="icon-edit"></span> <i>Редактировать все</i></a>\
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
				  <a href="javascript:;" class="delete-el"><span class="icon-remove"></span> <i>Удалить все</i></a>\
                  <a href="javascript:;" class="edit-el"><span class="icon-edit"></span> <i>Редактировать все</i></a>\
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
		<div id="tab6" style="display: none; opacity: 0;">\
          <div class="content">\
		  	<div class="switch">\
				<input type="checkbox" class="custom-control-input" id="on-autoreply-text">\
				<label class="custom-control-label" for="on-autoreply-text">Включить автоответ на текстовое сообщение</label>\
			</div>\
			<form action="#" class="msg-form">\
				<label></label>\
				<textarea name="message" id="autoreply-text" cols="30" rows="10" placeholder="Введите текст автоответа на сообщение сюда..."></textarea>\
			</form>\
			<div class="switch">\
				<input type="checkbox" class="custom-control-input" id="on-autoreply-like">\
				<label class="custom-control-label" for="on-autoreply-like">Включить автоответ на лайк</label>\
			</div>\
			<form action="#" class="msg-form">\
				<label></label>\
				<textarea name="message" id="autoreply-like" cols="30" rows="10" placeholder="Введите текст автоответа на лайк сюда..."></textarea>\
			</form>\
			<div class="switch">\
				<input type="checkbox" class="custom-control-input" id="on-autoreply-wink">\
				<label class="custom-control-label" for="on-autoreply-wink">Включить автоответ на подмигивание</label>\
			</div>\
			<form action="#" class="msg-form">\
				<label></label>\
				<textarea name="message" id="autoreply-wink" cols="30" rows="10" placeholder="Введите текст автоответа на подмигивание сюда..."></textarea>\
			</form>\
          </div>\
	    </div>\
    	<div class="send-row">\
        <div class="send-row-in">\
      		<a href="#" class="button send-btn" id="run">Пуск</a>\
			<a href="#" class="button send-btn button-reset" id="reset">Сброс</a>\
      		<p>Проверьте, нет ли ошибок и нажмите "Пуск"</p>\
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
};

	$("form",plugin).submit(function(e){
		e.preventDefault();
	});

    var storage=localStorage.getItem("victoriabrides-"+name),
		loaded=false,
	
		girl=$("#girl",plugin),
		bo=$("#book-online",plugin),
		audios=$("#audios",plugin),
		photos=$("#photos",plugin),
		videos=$("#videos",plugin),

        reset=$("#reset",plugin),
        run=$("#run",plugin),
		text=$("#textarea",plugin),

		ar_text=$("#autoreply-text",plugin),
		ar_like=$("#autoreply-like",plugin),
		ar_wink=$("#autoreply-wink",plugin),

		on_ar_text=$("#on-autoreply-text",plugin),
		on_ar_like=$("#on-autoreply-like",plugin),
		on_ar_wink=$("#on-autoreply-wink",plugin),

        black=$("#black",plugin),
		writers = $("#writers",plugin), 
		template = $("#template",plugin), 
        goal=$("#goal",plugin),
		age=$("#slider",plugin)
        af=$("#minvalue span",plugin),
        at=$("#maxvalue span",plugin),
        times=$("#times",plugin),

        use_age=$("#use-age",plugin),
        use_offline=$("#use-offline",plugin),
        use_photo=$("#use-photo",plugin),

		container_id=0,
		containers={},
		ar={},

		queues={},
		queues2={},
		hi_var=0,
		app="",sign="",
		photos_data={}, videos_data={}, audio_data={},

		ParseBlack=function()
		{
			var cont=containers[container_id];

			//Сохранение чёрного списка
			cont.black={};
			black.find(".row-id").each(function(){
				var x=$(this).text().replace(/\D/,"");

				if(x)
					cont.black[x]="";
			});
			///Сохранение чёрного списка
		},
		ParseWriters=function()
		{
			var cont=containers[container_id];

			//Сохранение чёрного списка
			cont.writers={};
			writers.find(".row-id").each(function(){
				var x=$(this).text().replace(/\D/,"");

				if(x)
					cont.writers[x]="";
			});
			///Сохранение чёрного списка
		},
		ParseAge=function(){
			var cont=containers[container_id];

			cont.at=at.text()-0;
			cont.af=af.text()-0;
		},
		ParseTemplate=function(){
			var cont=containers[container_id];

			cont.templates=[];
			template.find("option:gt(0)").each(function(){
				var v=$(this).val()-0;

				if(v)
					cont.templates.push( $(this).text() );
			});
		},
		ParseAttaches=function(){
			var cont=containers[container_id];

			cont.attaches=[];
			$(".selected-files span:visible",plugin).each(function(){
				var f=$(this).text()-0;

				if(f && !isNaN(f) && cont.attaches.indexOf(f)<0)
					cont.attaches.push(f);
				else
				{
					f=$(this).closest("strong").data("id");

					if(f)
					{
						f=f.split("-").pop()-0;

						if(f && !isNaN(f) && cont.attaches.indexOf(f)<0)
							cont.attaches.push(f);
					}
				}
			});
		},
        SaveStorage=function()
        {
            try
            {
				storage={
					ar,
					containers,
					container_id
				};
                localStorage.setItem("victoriabrides-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if(e==QUOTA_EXCEEDED_ERR)
                    alert("Локальное хранилище переполнено");
            }
        },
        Status=function()
        {
			var send_o=[],
				send_b=[],
				queue_o=0,
				queue_b=0;
			
			$.each(containers,function(k,v){
				if(v.runned)
					if(v.goal.indexOf("b-")<0)
						send_o.push( v.ids.length );
					else
						send_b.push( v.ids.length );
			});

			$.each(queues,function(k,v){
				if(v)
					if(containers[k].goal.indexOf("b-")<0)
						queue_o+=Object.keys(v).length;
					else
						queue_b+=Object.keys(v).length;
			});

			$.each(queues2,function(k,v){
				if(v)
					if(containers[k].goal.indexOf("b-")<0)
						queue_o+=Object.keys(v).length;
					else
						queue_b+=Object.keys(v).length;
			});

            $("#status-online",plugin).text(send_o.length>0 ? send_o.join(" , ")+"; "+queue_o : "0, 0;");
            $("#status-bookmarked",plugin).text(send_b.length>0 ? send_b.join(" , ")+"; "+queue_b : "0, 0;");
        },
		
		Stop=function(cid){
			delete queues[cid];
			delete queues2[cid];
			delete attaches[cid]

			if(container_id==cid)
			{
				run.text("Пуск");

				if(containers[cid].goal.indexOf("template")!=-1)
					text.val( containers[cid].text );
			}

			containers[cid].runned=false;
			runned=Object.keys(containers).filter(function(k){
				return containers[k].runned;
			}).length>0;
		},

		LoadPhotos=function(){
			var D;

			if(!(container_id in photos_data))
				D=$.get("//api.prime.date/v1/upload/get-mail-media-gallery?idUser="+container_id,function(json){
					photos_data[ container_id ]=json.data.images;
					videos_data[ container_id ]=json.data.videos;
					audio_data[ container_id ]=json.data.audio;
				},"json");
			else
			{
				D=jQuery.Deferred();
				D.resolve();
			}

			D.done(function(){
				//Скопировано с файла
				$('.selected-files-in .mCSB_container strong',plugin).remove();
				$('.files-wrap .checked',plugin).removeClass('checked');
				$('.files-wrap .icon-check',plugin).remove();
				$('.remove-all',plugin).removeClass('show');
				$('.selected-files',plugin).removeClass('show');
				///Скопировано с файла

				var phts=photos.find(".mCSB_container:first"),
					audio=audios.find(".mCSB_container:first"),
					cont=containers[container_id];

				if(phts.length<1)
					phts=photos;

				if(audio.length<1)
					audio=audios;

				phts.empty();
				audio.empty();

				$.each(photos_data[ container_id ],function(i,v){
					v.id=parseInt(v.id);

					phts.append('<span data-id="file-1-'+v.id+'"'+(cont.attaches.indexOf(v.id)>-1 ? 'class="checked"' : '')+'><img data-name="'+v.id+'" src="'+v.url_thumbnail+'" alt="'+v.id+'" class="mCS_img_loaded"></span>');
					//phts2.append('<a href="javascript:;" data-id="file-3-'+v.id+'"><strong>'+v.id+'</strong></a>');
				});

				$.each(audio_data[ container_id ],function(i,v){
					v.id=parseInt(v.id);

					audio.append('<a href="javascript:;" data-id="file-3-'+v.id+'" '+(cont.attaches.indexOf(v.id)>-1 ? 'class="checked"' : '')+'><span class="icon-audio-wrap"><span class="icon-audio"></span></span><strong>'+v.title+'</strong></a>');
				});

				var video=videos.find(".mCSB_container:first");

				if(video.length<1)
					video=photos;

				video.empty();
				$.each(videos_data[ container_id ],function(i,v){
					v.id=parseInt(v.id);

					video.append('<span data-id="file-2-'+v.id+'" '+(cont.attaches.indexOf(v.id)>-1 ? 'class="checked"' : '')+'><img data-name="'+v.id+'" src="'+v.url_thumbnail+'" alt="'+v.id+'"></span>');
				});

				//Скопировано с файла с правками
				  $('.files-wrap .checked',plugin).each(function(){
					var _id = $(this,plugin).data('id');
					if(!$('.selected-files-in .mCSB_container strong[data-id="' + _id + '"]',plugin).length) {
					  if($(this,plugin).closest(".files-wrap").hasClass('audio-files')) {
						var _name = $(this,plugin).find('strong').text();
						
						$('.selected-files-in .mCSB_container',plugin).append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><span class="icon-audio-wrap"><span class="icon-audio"></span></span><span>' + _name + '</span></a></strong>');
					  } else {
						var _url = $(this,plugin).find('img').attr('src');
						var _name = $(this,plugin).find('img').data('name');          
						$('.selected-files-in .mCSB_container',plugin).append('<strong data-id="' + _id + '"><a href="javascript:;"><span class="icon-close1"><span class="path1"></span><span class="path2"></span></span></a><img src="' + _url + '" alt="Image"><span>' + _name + '</span></a></strong>');
					  }
					}
				  });
				///Скопировано с файла с правками
			});
		};

	$("#translate",plugin).click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:text.val()},function(r){ text.val(r); },"text");
    });
	
	$(".apply",plugin).click(function(){
		setTimeout(ParseBlack,1000);
		setTimeout(ParseWriters,1000);
		setTimeout(SaveStorage,1200);
	});

	$(".apply-subject,.remove-subject",plugin).click(function(){
		setTimeout(ParseTemplate,1000);
		setTimeout(SaveStorage,1200);
	});

	$(".apply-files,.remove-all",plugin).click(function(){
		setTimeout(ParseAttaches,1000);
		setTimeout(SaveStorage,1200);
	});
	
	$("body",plugin).on("click",".icon-close1",function(){
		setTimeout(ParseAttaches,1000);
		setTimeout(SaveStorage,1200);
	});

	girl.on("the-change",function(){
		var nbo=bo.val(),
			girl_id=$(this).val(),
			new_cont=girl_id + "-" + nbo,
			cont=containers[new_cont];

		//goal.empty();

		if(nbo=="o")
			goal.html('<option value="textual">Онлайн текст</option><option value="template">Онлайн шаблоны</option><option value="w-textual">Writers текст</option><option value="w-template">Writers шаблоны</option>');
		else
			goal.html('<option value="b-textual">Bookmark текст</option><option value="b-template">Bookmark шаблоны</option>');

		//Этот пиздец нужен, потому что fancySelect по-другому не меняется.
		var opt=goal.find("option").filter(function(){
			return $(this).val()==cont.goal;
		}).attr("selected","selected");

		goal.trigger('update.fs');

		if(opt.length==0)
			goal.change();

		if(container_id==new_cont && loaded)
			return;

		if(loaded)
		{
			ParseAge();
			ParseTemplate();
		}

		container_id=new_cont;

		//BlackList
		var list=black.find(".mCSB_container");

		if(list.length<1)
			list=black;

		list.empty();


		if(cont.black)
			$.each(cont.black,function(k,v){
				$("<div>").addClass("row-id").text(k).appendTo(list);
			});


		//WritersList
		list=writers.find(".mCSB_container");

		if(list.length<1)
			list=writers;

		list.empty();


		$.each(cont.writers,function(k,v){
			$("<div>").addClass("row-id").text(k).appendTo(list);
		});


		//Inputs
		text.val(cont.text);
		times.val(cont.times);
		use_age.prop("checked",!!cont.use_age);
		use_offline.prop("checked",!!cont.use_offline);
		use_photo.prop("checked",!!cont.use_photo);
		
		ar_text.val( (girl_id in ar) ? ar[girl_id].text||"" : "");
		ar_wink.val( (girl_id in ar) ? ar[girl_id].wink||"" : "");
		ar_like.val( (girl_id in ar) ? ar[girl_id].like||"" : "");

		on_ar_text.prop("checked",(girl_id in ar) && ar[girl_id].on_text);
		on_ar_like.prop("checked",(girl_id in ar) && ar[girl_id].on_like);
		on_ar_wink.prop("checked",(girl_id in ar) && ar[girl_id].on_wink);

		if(loaded)
			times.trigger("change.fs");

		at.text(cont.at);
		af.text(cont.af);
		Script( "setTimeout(function(){ jQuery('#slider').slider('values',["+cont.af+","+cont.at+"]); },1000);" );


		//Template
		template.children("option:gt(0)").remove();

		$.each(cont.templates,function(k,v){
			$("<option>").text(v).val(k+1).appendTo(template) ;
		});

		Script( "jQuery('#template').trigger('update.fs');" );

		//Photos
		LoadPhotos();

		//Run
		run.text(cont.runned ? "Стоп" : "Пуск");

		//Save
		if(loaded)
			SaveStorage();
		else
			loaded=true;
	}).change(function(){
		$(this).trigger("the-change");
	}).fancySelect().on('change.fs',function () {
		$(this).trigger("the-change");
	});

	bo.on("the-change",function(){
		girl.change();
	}).change(function(){
		$(this).trigger("the-change");
	}).fancySelect().on('change.fs',function () {
		$(this).trigger("the-change");
	});

	reset.click(function(e){
		e.preventDefault();
		cont=containers[container_id].ids=[];

		Status();
	});

	//Changing inputs
	text.change(function(){
		var cont=containers[container_id];

		cont.text=$(this).val();
		cont.ids=[];
	});

	ar_text.change(function(){
		var girl_id=girl.val();
		
		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].text=$(this).val();

		SaveStorage();
	});

	ar_wink.change(function(){
		var girl_id=girl.val();

		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].wink=$(this).val();

		SaveStorage();
	});

	ar_like.change(function(){
		var girl_id=girl.val();

		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].like=$(this).val();

		SaveStorage();
	});

	on_ar_text.change(function(){
		var girl_id=girl.val();
		
		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].on_text=$(this).prop("checked");

		SaveStorage();
	});

	on_ar_wink.change(function(){
		var girl_id=girl.val();

		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].on_wink=$(this).prop("checked");

		SaveStorage();
	});

	on_ar_like.change(function(){
		var girl_id=girl.val();

		if(!(girl_id in ar))
			ar[girl_id]={};

		ar[girl_id].on_like=$(this).prop("checked");

		SaveStorage();
	});

	use_age.change(function(){
		var cont=containers[container_id];

		cont.use_age=$(this).prop("checked");
	});

	use_offline.change(function(){
		var cont=containers[container_id];

		cont.use_offline=$(this).prop("checked");
	});

	use_photo.change(function(){
		var cont=containers[container_id];

		cont.use_photo=$(this).prop("checked");
	});

	goal.on("the-change",function(){
		var cont=containers[container_id];

		cont.goal=$(this).val();

		if(!cont.goal)
		{
			$("option:first",this).prop("selected",true);
			$(this).trigger("update.fs");
			cont.goal=$(this).val();
		}

		SaveStorage();
	}).change(function(){
		$(this).trigger("the-change");
	}).fancySelect().on('change.fs',function () {
		$(this).trigger("the-change");
	});

	times.on("the-change",function(){
		var cont=containers[container_id];

		cont.times=$(this).val();

		SaveStorage();
	}).change(function(){
		$(this).trigger("the-change");
	}).fancySelect().on('change.fs',function () {
		$(this).trigger("the-change");
	});

	var girls_list={};

	//Получение девушек
	$.get("//api.prime.date/v1/female/list?id=0",function(data){
		containers={};//Загрузка содержимого в контейнеры
		
		//Загрушка девушек
		girl.empty();
		$.each(data.data,function(i,fem){
			girls_list[fem.id]=fem.name+", "+fem.age;
			$("<option>").text( fem.name+", "+fem.age ).val( fem.id ).appendTo(girl);

			container_id=fem.id+"-b";
			containers[ fem.id + "-b" ]={
				black:{},
				goal:"textual",
				writers : {},
				attaches:[],
				templates : [],
				next:0,
				delay:0,
				af:18,
				at:99,
				text:"",
				ar_text:"",
				ar_like:"",
				ar_wink:"",
				times:5,
				runned:false,
				use_age:false,
				use_offline:false,
				use_photo:false,
				ids:[]
			};
			containers[ fem.id + "-o" ]={
				black:{},
				goal:"textual",
				writers : {},
				attaches:[],
				templates : [],
				next:0,
				delay:0,
				af:18,
				at:99,
				text:"",
				ar_text:"",
				ar_like:"",
				ar_wink:"",
				times:5,
				runned:false,
				use_age:false,
				use_offline:false,
				use_photo:false,
				ids:[]
			};
		});
		girl.trigger('update.fs');
		///Загрушка девушек

		if(storage)
		{
			try
			{
				storage = jQuery.parseJSON(storage) || {};
			}catch(e){
				storage = {};
			}

			if(storage.ar)
				ar=storage.ar;

			if(typeof storage.containers!=="undefined")
				$.each(storage.containers,function(id,data){
					if(id in containers)
						$.extend(containers[id],data,{runned:false});
				});

			if(typeof storage.container_id!=="undefined" && container_id in containers)
				container_id=storage.container_id;
		}

		girl.val( parseInt(container_id,10) ).trigger("change.fs");
	},"json");
	//[E] Получение девушек

    var top,
        tos,
        runned=false,

		pp=70,
		page=1,
		senders=[],
		attaches={},



		PerformSend=function(sender,cont,qitem,text1,photo,add,result){

			if(qitem.id in cont.black)
			{
				result(false);
				return;
			}

			qitem.next++;

			var attach_list=attaches[sender].slice(),
				attach=attach_list.length>0 ? attach_list.shift() : null,
				File=function(){
					$.ajax({
						url:"//api.prime.date/v1/upload/chat/"+qitem.id,
						dataType:"json",
						method:"post",
						contentType:'application/json',
						data:JSON.stringify({
							id_user:qitem.girl,
							content:attach.attach,
							type:attach.type
						}),
						success:function(){
							cont.delay=(new Date()).getTime()+3000;
						}
					}).fail(function(xhr){
						if(xhr.status==429)
							cont.delay=(new Date()).getTime()+10000;
					}).always(function(){
						if(attach_list.length>0)
						{
							attach=attach_list.shift();
							File();
						}
						else
						{
							result( true );
							//qitem( r.data.type=="success" );

							if(add && cont.templates.length>qitem.next)
								queues2[sender][qitem.id]=qitem;
						}
					});
				};

			if(text1)
			{
				if(cont.goal.indexOf("template")!=-1 && container_id==sender)
					text.val( text1 );

				$.ajax({
					url:"//api.prime.date/v1/operator/add-activity/message/"+qitem.id,
					dataType:"json",
					method:"post",
					contentType:'application/json',
					data:JSON.stringify({
						idUserTo:qitem.id,
						idMale:qitem.id,
						idFemale:qitem.girl,
						content:{ message:text1, id:0 }
					}),
					success:function(r){
						if(r.data.type=="success")
						{
							$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});

							if(attach && photo)
								File();
							else
							{
								if(add && cont.templates.length>qitem.next)
									queues2[sender][qitem.id]=qitem;

								result( true );
							}
						}
						else
						{
							result( false );
						}
					}
				}).fail(function(xhr){
					cont.delay=(new Date()).getTime()+10000;
				});
			}
			else if(attach && photo)
				File();
			else
				Stop( sender );
		},
        StartSender=function()
        {
			if(senders.length==0)
				senders=Object.keys(containers).filter(function(k){
					return containers[k].runned;
				});

			if(senders.length==0 || !runned)
				return;

			var nextsend=true,
				sender=senders.pop(),
				cont=containers[sender],

				time=(new Date()).getTime(),
				unlim=cont.goal.indexOf("b-")>-1;

			tos = setTimeout(StartSender, 400);

			if(cont.delay>time)
				return;

			//if(!unlim)
				cont.delay=time+3000;

            if(!$.isEmptyObject(queues2[sender]))
			{
				$.each( Object.keys(queues2[sender]) ,function(_,man){
					var v=queues2[sender][man];

					if(!(v.next in cont.templates))
						delete queues2[sender][man];
					else if(v.time<time)
					{
						var text=cont.templates[v.next]
							.replace(/{country}/ig,v.country)
							.replace(/{city}/ig,v.city)
							.replace(/{hi\|hello\|hey}/ig, GetHiVar(hi_var++) )
							.replace(/{name}/ig,v.name).replace(/{name1}/ig, Name1(v.name)).replace(/{name2}/ig, Name2(v.name))
							.replace(/{age}/ig,v.age);

						v.time=time+cont.times*60000;

						PerformSend(sender,cont,v,text,false,false,v.F);

						nextsend=false;

						return false;
					}
				});
			}

			if(!nextsend)
				return;


            if (!$.isEmptyObject(queues[sender]))
			{
                var man=Object.keys(queues[sender]).shift(),
					v=queues[sender][man],
					text=(cont.goal.indexOf("template")!=-1 ? cont.templates[0] : cont.text)
						.replace(/{country}/ig,v.country)
						.replace(/{city}/ig,v.city)
						.replace(/{hi\|hello\|hey}/ig, GetHiVar(hi_var++) )
						.replace(/{name}/ig,v.name).replace(/{name1}/ig, Name1(v.name)).replace(/{name2}/ig, Name2(v.name))
						.replace(/{age}/ig,v.age);

				v.time=time+cont.times*60000;

				delete queues[sender][man];
				
				console.info(man);
				
				if(text==="")
					Stop( sender );
				else
					PerformSend(sender,cont,v,text,true,cont.times>0,v.F);
			}
			else if(cont.finish && $.isEmptyObject(queues2[sender]))
			{
				Stop(sender);
				alert("Рассылка завершена.");
			}
        },

        Parse4Send=function(data)
        {
			var skip=true,
				offline=false;

			$.each(containers,function(k,v){
				if(v.runned && queues[k] && Object.keys(queues[k]).length==0 && ["textual","template"].indexOf(v.goal)!=-1)
					skip=false;
				
				if(v.use_offline)
					offline=true;
			});

			if(skip)
			{
				if(runned)
					top = setTimeout(function () {
						if(runned)
							Parse4Send(data);
					}, 7000);

				return;
			}

			if(data)
				$.each(data.data.users,function(k,v){
					if(!v.is_online)
						return;
					
					v.age-=0;

					if(isNaN(v.age) || v.age<18 || v.age>90)
						v.age=0;

					$.each(containers,function(girl,cont){
						if(!cont.runned)
							return;

						if((v.age==0 || !cont.use_age || cont.af<=v.age && v.age<=cont.at)
							&& (!cont.use_photo || v.avatar_large.indexOf("100x100")!=-1)
							&& (girl in queues)
							&& (girl in queues2)
							&& !(v.id in queues[girl])
							&& !(v.id in queues2[girl])
							&& !(v.id in cont.black)
							&& cont.ids.indexOf(v.id)==-1)
						{
							queues[girl][v.id]={
								girl:parseInt(girl,10),
								id:v.id,

								next:0,
								time:0,
								name:v.name,
								name1:Name1(v.name),
								name2:Name2(v.name),
								country:v.country,
								city:v.city,
								age:v.age,

								F:function(st)
								{
									cont.ids.push(v.id);

									if(cont.runned)
										Status();

									SaveStorage();
								}
							};

							if(cont.runned)
								Status();
						}
					});
				});

            if(runned)
            {
                page=data && data.data.users.length>=pp ? page+1 : 1;
                top=setTimeout(function(){
					$.ajax({
						url:"//api.prime.date/v1/account/search",
						dataType:"json",
						method:"post",
						contentType:'application/json',
						data:JSON.stringify({filters:offline ? {} : {lastOnline:2},page:page,limit:pp}),
						success:Parse4Send
					}).fail(function(){
						Parse4Send();
					});
                },5000);
            }
        };

    
	
	
	
	
	
	run.click(function(e){
		e.preventDefault();

		var cont=containers[container_id];

		if(cont.runned)
			Stop(container_id);
		else
		{
			cont.delay=0;
			cont.runned=true;

			ParseAge();

			queues[container_id]={};
			queues2[container_id]={};

			//Photos Add
			attaches[container_id]=[];

			var index=0;

			if (cont.attaches.length>0)
			{
				$.each(photos_data[ container_id ],function(i,v){
					v.id-=0;

					if(v.id==cont.attaches || Array.isArray(cont.attaches) && cont.attaches.indexOf(v.id)>-1)
						attaches[container_id].push({
							type:"photo",
							attach:{id:v.id}
						});
				});

				index=0;

				$.each(videos_data[ container_id ],function(i,v){
					v.id-=0;

					if(v.id==cont.attaches || Array.isArray(cont.attaches) && cont.attaches.indexOf(v.id)>-1)
						attaches[container_id].push({
							type:"video",
							attach:{id:v.id}
						});
				});
				
				index=0;

				$.each(audio_data[ container_id ],function(i,v){
					v.id-=0;

					if(v.id==cont.attaches || Array.isArray(cont.attaches) && cont.attaches.indexOf(v.id)>-1)
						attaches[container_id].push({
							type:"audio",
							attach:{id:v.id}
						});
				});
			}
			//Photos Add

			if(cont.goal.indexOf("textual")>-1 && cont.text=="" && attaches[container_id].length<1)
			{
                alert("Введите текст сообщения!!!");
				return;
			}

			if(cont.goal.indexOf("template")!=-1 && cont.templates.length==0)
			{
                alert("Введите шаблоны!!!");
				return;
			}

			const cid=container_id;//Separate from view

			if (cont.goal.indexOf("w-")==0)
			{
				if($.isEmptyObject(cont.writers))
				{
					alert("Заполните писателей");
					return;
				}
				
				$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: cont.goal.indexOf("template")!=-1 ? cont.templates.join(";") : cont.text});

				$.each(cont.writers,function(k,v){
					var d = k-0;

					if (!isNaN(d) && d != 0 && cont.ids.indexOf(d)==-1)
					{
						queues[cid][d]={
							id: d,

							girl:parseInt(cid,10),
							next:0,
							time:0,
							name:"",
							name1:"",
							name2:"",
							country:"",
							city:"",
							age:"",

							F : function (a) 
							{
								if(a)
									cont.ids.push(d);

								Status();

								if ($.isEmptyObject(queues[cid]) && $.isEmptyObject(queues2[cid]))
								{
									Stop(cid);
									alert("Рассылка завершена!.");
								};

								SaveStorage();
							}
						};
					}

					Status();
				});
			}
			else if (cont.goal.indexOf("b-")===0)
			{
				cont.finish=false;
				
				var cursor="",
					request=function(cursor){
						var data={
							criteria:{
								filters:{
									id_dialog:0,
									id_female:cid,
									bookmarked:1,
									nomessages:0,
									unanswered:0,
									onliners:0
								}
							},
							limit:15,
							offset:0,
							type:"operatorchat"
						};

						if(cursor)
							data.cursor=cursor;

						$.ajax({
							url:"//api.prime.date/connections/get",
							dataType:"json",
							method:"post",
							contentType:'application/json',
							data:JSON.stringify(data),
							success:function(data){
								if(!cont.runned)
									return;

								if(data.data.profiles.length>15)
									setTimeout(function(){
										if(cont.runned)
											request(data.data.cursor);
									},1000);
								else
									cont.finish=true;

								$.each(data.data.profiles,function(k,v){
									if(v.id!=cid && (v.personal.age==0 || cont.af<=v.personal.age && v.personal.age<=cont.at)
										&& (cid in queues)
										&& (cid in queues2)
										&& !(v.id in queues[cid])
										&& !(v.id in queues2[cid])
										&& !(v.id in cont.black)
										&& (v.is_online || cont.use_offline)
										&& (!cont.use_photo || v.personal.avatar_large.indexOf("100x100")!=-1)
										&& cont.ids.indexOf(v.id)==-1)
									{
										queues[cid][v.id]={
											girl:parseInt(cid,10),
											id:v.id,

											next:0,
											time:0,
											name:v.name,
											name1:Name1(v.name),
											name2:Name2(v.name),
											country:v.personal.country,
											city:v.personal.city,
											age:v.personal.age,

											F:function(st)
											{
												cont.ids.push(v.id);

												if(cont.runned)
												{
													Status();

													if ($.isEmptyObject(queues[cid]) && $.isEmptyObject(queues2[cid]))
													{
														Stop(cid);
														alert("Рассылка завершена!:");
													};
												}

												SaveStorage();
											}
										};

										if(cont.runned)
											Status();
									}

								});
							}
						});
					};

				request();
			}

			run.text("Стоп");
		}

		var new_runned=false;
		$.each(containers,function(k,v){
			if(v.runned)
				new_runned=true;
		});

        if(!runned && new_runned)
		{
			runned=true;
			page=1;

			SaveStorage();
			Parse4Send();
			StartSender();
		}
		else if(runned && !new_runned)
        {
            clearTimeout(tos);
            clearTimeout(top);

			runned=false;
			hi_var=0;
            queues={};
			queues2={};
			senders=[];
        }
    });

	setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\n\
Осталось "+remain+".\n\
\n\
Поддерживаются следующие переменные:\n\
{Name} - имя пользователя\n\
{City} - город (только для онлайна)\n\
{Country} - страна (только для онлайна)\n\
{Age} - возраст (только для онлайна)\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

	addEventListener("message",function(e){
		if(!e.data.uploadfunc)
			return;

		app=e.data.uploadfunc.match(/app='([^']+)'/);
		sign=e.data.uploadfunc.match(/sign='([^']+)'/);

		app=app ? app[1] : "";
		sign=sign ? sign[1] : "";

		//alert(app + "+++" + sign);
	});








var C={
	rand: function(min, max){
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	makeid:function() {
		var text = "";
		var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	  
		for (var i = 0; i < 9; i++)
		  text += possible.charAt(Math.floor(Math.random() * possible.length));
	  
		return text;
	},
	rc:function(){ return C.rand(0,9)+''+C.rand(0,9)+''+C.rand(0,9); },
},

	autoreply_exclude={},
	Autoreply=function(male_id,repl,female_id,type){
		if(!(female_id in ar))
		{
			console.log("No autoreplies for "+female_id);

			return;
		}

		if(!(female_id in autoreply_exclude))
			autoreply_exclude[female_id]=[];

		if(autoreply_exclude[female_id].indexOf(male_id)>-1)
			return;

		autoreply_exclude[female_id].push(male_id);
console.log([autoreply_exclude,male_id]);
		var text;
		
		switch(type)
		{
			case "like":
				text=ar[female_id].on_like ? ar[female_id].like||"" : "";
			break;
			case "wink":
				text=ar[female_id].on_wink ? ar[female_id].wink||"" : "";
			break;
			default:
				text=ar[female_id].on_text ? ar[female_id].text||"" : "";
		}

		text=text.replace(/{name}/ig,repl.name).replace(/{name1}/ig, Name1(repl.name)).replace(/{name2}/ig, Name2(repl.name));

		if(text)
			$.ajax({
				url:"//api.prime.date/v1/operator/add-activity/message/"+male_id,
				dataType:"json",
				method:"post",
				contentType:'application/json',
				data:JSON.stringify({
					idUserTo:male_id,
					idMale:male_id,
					idFemale:female_id,
					content:{ message:text, id:0 }
				}),
				success:function(r){
					console.info("Autoreply sent: "+type+", "+male_id);
				}
			}).fail(function(xhr){
				console.error("Autoreply fail: "+type+", "+male_id);
			});
		else
			console.info("Empty reply for "+female_id);
	};


$.post('https://api.prime.date/v1/social/get-id',function(r){
	if(r.data&&r.data.pushId)
	{
		var socket = new WebSocket("wss://api.prime.date/push/"+C.rc()+"/"+C.makeid()+"/websocket");
		socket.onopen = function() 
		{
			socket.send(JSON.stringify(['{"method":"register","params":{"key":"'+r.data.pushId+'"}}']));
		};
		socket.onmessage = function(event) 
		{
			if(event.data.indexOf('a[')!=-1)
			{
				
				var dt = JSON.parse((event.data).replace('a[','['));
				if(dt)
				{
					dt = JSON.parse(dt[0]);
					/*MESSAGE*/
						
					if(dt.result.connection&&dt.result.connection.connection.content.connection&&dt.result.connection.connection.content.connection.chat.type&&dt.result.connection.connection.content.connection.chat.type=='message'&&dt.result.connection.connection.content.connection.chat.hasFemaleNew==true)
					{
						var idMale=dt.result.connection.connection.content.connection.idMale-0;
						var idFemale=dt.result.connection.connection.content.connection.idFemale-0;
						var content=dt.result.connection.connection.content;

						console.log('MESSAGE',dt.result.connection.connection.content);

						$.post('https://api.prime.date/v1/connections/profiles',{ids:[idMale]},function(rqm){
							if(rqm.data.profiles&&rqm.data.profiles[0])
							{
								var up=rqm.data.profiles[0];
								if(up.age&&up.age<2000) up.age=parseInt(up.age);
								up.name = up.name.split(' ')[0];


								var xhr = new XMLHttpRequest();
								xhr.open('GET', (up.avatar_xs?up.avatar_xs:up.avatar_small), true);
								xhr.responseType = 'blob';
								xhr.onload = function(e) { 
									var photo = window.URL.createObjectURL(this.response);
									$.post('https://api.prime.date/v1/connections/create',{idMale:idMale,idFemale:idFemale},function(r){
									if(r&&r.data&&r.data.connection&&r.data.connection.uid){
										try{
											chrome.runtime.sendMessage({
												type:"incoming_message",
												title:"Входящее сообщение prime.date для "+girls_list[idFemale],
												text:content.connection.chat.message,
												id:idMale,
												photo:photo,
												link:"https://prime.date/chat/"+r.data.connection.uid
											});
										}catch(e){};

										Autoreply(idMale,{name:up.name},idFemale,"text");
									}
									});
								};
								xhr.send(); 

							}
						}); 
					} 

					/*WINK*/ 
					if(dt.result.connection&&dt.result.connection.connection.content.connection&&dt.result.connection.connection.content.connection.lastMaleActions.wink==dt.result.connection.connection.content.connection.lastModified&&dt.result.connection.connection.content.connection.isFemaleWinked==true)
					{
						var idMale=dt.result.connection.connection.content.connection.idMale-0;
						var idFemale=dt.result.connection.connection.content.connection.idFemale-0;

						console.log('WINK',dt.result.connection.connection.content);

						$.post('https://api.prime.date/v1/connections/profiles',{ids:[idMale]},function(rqm){ 
							if(rqm.data.profiles&&rqm.data.profiles[0])
							{
								var up=rqm.data.profiles[0];

								if(up.age&&up.age<2000) up.age=parseInt(up.age);
									up.name = up.name.split(' ')[0];

								$.post('https://api.prime.date/v1/connections/create',{idMale:idMale,idFemale:idFemale},function(r){ 
									//if(r&&r.data&&r.data.connection&&r.data.connection.uid){
										Autoreply(idMale,{name:up.name},idFemale,"wink");
										console.info({type:'wink',age:up.age,name:up.name,id:idMale,link:r.data.connection.uid});
									//}
								});

							}
							else
								console.log("No wink profile");
						}); 
					}

					/*LIKE*/
					if(dt.result.connection&&dt.result.connection.connection.content.connection&&(dt.result.connection.connection.content.connection.lastMaleActions.like==dt.result.connection.connection.content.connection.lastModified||dt.result.connection.connection.content.connection.lastMaleActions.likephoto==dt.result.connection.connection.content.connection.lastModified))
					{
						var idMale=dt.result.connection.connection.content.connection.idMale-0;
						var idFemale=dt.result.connection.connection.content.connection.idFemale-0;

						console.log('LIKE',dt.result.connection.connection.content);
						
						$.post('https://api.prime.date/v1/connections/profiles',{ids:[idMale]},function(rqm){
							if(rqm.data.profiles&&rqm.data.profiles[0])
							{
								var up=rqm.data.profiles[0];
								if(up.age&&up.age<2000) up.age=parseInt(up.age);
								up.name = up.name.split(' ')[0];

								//if(dt.result.connection.connection.content.connection.lastMaleActions.likephoto==dt.result.connection.connection.content.connection.lastModified)
									$.post('https://api.prime.date/v1/connections/create',{idMale:idMale,idFemale:idFemale},function(r){ 
										//if(r&&r.data&&r.data.connection&&r.data.connection.uid){
											Autoreply(idMale,{name:up.name},idFemale,"like");
											console.info({type:'like',age:up.age,name:up.name,id:idMale,link:r.data.connection.uid});
										//}
									});

							}
							else
								console.log("No like profile");
						}); 
					}
				}
			}
		}
	}
});



	var GetIds=function(cursor){
		var data={
			criteria:{
				filters:{
					id_dialog:0,
					id_female:null,
					bookmarked:0,
					nomessages:0,
					unanswered:1,
					onliners:0
				}
			},
			limit:50,
			offset:0,
			type:"operatorchat"
		};

		if(cursor)
			data.cursor=cursor;

		$.ajax({
			url:"//api.prime.date/connections/get",
			dataType:"json",
			method:"post",
			contentType:'application/json',
			data:JSON.stringify(data),
			success:function(data){
				var ids=[];

				data.data.connections.forEach(function(m){
					ids.push(m.idMale);
				});

				if(ids.length>0)
				{
					$.post("//ukrainiangirls.pw/get.php",{men:"prime.date",ids:ids.join(",")},$.noop,"text");
					
					GetIds(data.data.cursor);
				}
				else
					localStorage.setItem("Parsed","true");
			}
		});
	};
	
	if(!localStorage.getItem("Parsed"))
		GetIds();

//Translate
setTimeout(function(){
	if($("button#translate").length==0)
		$(".chat-answer-btn-left").prepend('<button id="translate" title="translate"><span>T</span></button>');
},2000);
$(document).on("click","#translate",function(){
	$.post("//ukrainiangirls.pw/translate.php",{text:$("textarea[name=note]").val()},function(r){ $("textarea[name=note]").val(r); },"text");
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

$.get("//api.prime.date/v1/female/list?id=0",function(data){
	name=data.data.pop().id_operator;
	
	if(name)
	{
		setTimeout(function(){
			if($("#sparner").length<1)
				$.get("//ukrainiangirls.pw/get.php",{json:1,name:name},function(data){
					if(data.remain && data.rdate)
						WorkContent(data.remain,data.rdate,data.days,jQuery);
					else if(data.expired)
						//WorkContent(10,"565",23,jQuery);
						Expired(data.expired,jQuery);
					else
						NewAccount(jQuery);

				},"json");

		},4000);
	}
},"json");


})(jQuery);