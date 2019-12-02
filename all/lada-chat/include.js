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
							<div class="smiles">\
								<a href="#"><span class="icon-smiles"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span></a>\
								<div class="smiles-modal">\
								  <div class="smiles-modal-in mCustomScrollbar" data-mcs-axis="y">\
									<img data-emotion="#smile#" src="/images/smileys/smile.svg" alt="Smile">\
									<img data-emotion="#wink#" src="/images/smileys/wink.svg" alt="Wink">\
									<img data-emotion="#happy#" src="/images/smileys/happy.svg" alt="Smile">\
									<img data-emotion="#kiss#" src="/images/smileys/kiss.svg" alt="Smile">\
									<img data-emotion="#love#" src="/images/smileys/love.svg" alt="Smile">\
									<img data-emotion="#feelings#" src="/images/smileys/feelings.svg" alt="Smile">\
									<img data-emotion="#surprised#" src="/images/smileys/surprised.svg" alt="Smile">\
									<img data-emotion="#bored#" src="/images/smileys/bored.svg" alt="Smile">\
									<img data-emotion="#suspicious#" src="/images/smileys/suspicious.svg" alt="Smile">\
									<img data-emotion="#mad#" src="/images/smileys/mad.svg" alt="Smile">\
									<img data-emotion="#angry#" src="/images/smileys/angry.svg" alt="Smile">\
									<img data-emotion="#unhappy#" src="/images/smileys/unhappy.svg" alt="Smile">\
									<img data-emotion="#cry#" src="/images/smileys/cry.svg" alt="Smile">\
									<img data-emotion="#confused#" src="/images/smileys/confused.svg" alt="Smile">\
									<img data-emotion="#rose#" src="/images/smileys/rose.svg" alt="Smile">\
									<img data-emotion="#heart#" src="/images/smileys/heart.svg" alt="Smile">\
									<img data-emotion="#dance#" src="/images/smileys/dance.svg" alt="Smile">\
									<img data-emotion="#banan#" src="/images/smileys/banan.svg" alt="Smile">\
									<img data-emotion="#cherries#" src="/images/smileys/cherries.svg" alt="Smile">\
									<img data-emotion="#cocktail#" src="/images/smileys/cocktail.svg" alt="Smile">\
									<img data-emotion="#coffee#" src="/images/smileys/coffee.svg" alt="Smile">\
									<img data-emotion="#wine#" src="/images/smileys/wine.svg" alt="Smile">\
									<img data-emotion="#gift#" src="/images/smileys/gift.svg" alt="Smile">\
								  </div>\
								</div>\
							  </div>\
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
									<option value="f-fav">Фавориты текст</option>\
									<option value="f-fav">Фавориты шаблоны</option>\
								</select>\
							</div>\
						</div>\
						<div class="sub-row one-half cleared">\
							<label>Страна:</label>\
							<div class="custom-select-wrap small-input">\
								<select name="country" id="country">\
<option value="">нет</option>\
<option value="AU">Австралия</option>\
<option value="AT">Австрия</option>\
<option value="AZ">Азербайджан</option>\
<option value="AX">Аландские острова</option>\
<option value="AL">Албания</option>\
<option value="DZ">Алжир</option>\
<option value="VI">Виргинские Острова (США)</option>\
<option value="AS">Американское Самоа</option>\
<option value="AI">Ангилья</option>\
<option value="AO">Ангола</option>\
<option value="AD">Андорра</option>\
<option value="AQ">Антарктида</option>\
<option value="AG">Антигуа и Барбуда</option>\
<option value="AR">Аргентина</option>\
<option value="AM">Армения</option>\
<option value="AW">Аруба</option>\
<option value="AF">Афганистан</option>\
<option value="BS">Багамские Острова</option>\
<option value="BD">Бангладеш</option>\
<option value="BB">Барбадос</option>\
<option value="BH">Бахрейн</option>\
<option value="BZ">Белиз</option>\
<option value="BY">Белоруссия</option>\
<option value="BE">Бельгия</option>\
<option value="BJ">Бенин</option>\
<option value="BM">Бермуды</option>\
<option value="BG">Болгария</option>\
<option value="BO">Боливия</option>\
<option value="BQ">Бонэйр, Синт-Эстатиус и Саба</option>\
<option value="BA">Босния и Герцеговина</option>\
<option value="BW">Ботсвана</option>\
<option value="BR">Бразилия</option>\
<option value="IO">Британская территория в Индийском океане</option>\
<option value="VG">Виргинские Острова (Великобритания)</option>\
<option value="BN">Бруней</option>\
<option value="BF">Буркина-Фасо</option>\
<option value="BI">Бурунди</option>\
<option value="BT">Бутан</option>\
<option value="VU">Вануату</option>\
<option value="VA">Ватикан</option>\
<option value="GB">Великобритания</option>\
<option value="HU">Венгрия</option>\
<option value="VE">Венесуэла</option>\
<option value="UM">Внешние малые острова (США)</option>\
<option value="TL">Восточный Тимор</option>\
<option value="VN">Вьетнам</option>\
<option value="GA">Габон</option>\
<option value="HT">Гаити</option>\
<option value="GY">Гайана</option>\
<option value="GM">Гамбия</option>\
<option value="GH">Гана</option>\
<option value="GP">Гваделупа</option>\
<option value="GT">Гватемала</option>\
<option value="GF">Гвиана</option>\
<option value="GN">Гвинея</option>\
<option value="GW">Гвинея-Бисау</option>\
<option value="DE">Германия</option>\
<option value="GG">Гернси</option>\
<option value="GI">Гибралтар</option>\
<option value="HN">Гондурас</option>\
<option value="HK">Гонконг</option>\
<option value="GD">Гренада</option>\
<option value="GL">Гренландия</option>\
<option value="GR">Греция</option>\
<option value="GE">Грузия</option>\
<option value="GU">Гуам</option>\
<option value="DK">Дания</option>\
<option value="JE">Джерси</option>\
<option value="DJ">Джибути</option>\
<option value="DM">Доминика</option>\
<option value="DO">Доминиканская Республика</option>\
<option value="Ев">опейский ДР Конго	CDФлаг ЕС</option>\
<option value="EG">Египет</option>\
<option value="ZM">Замбия</option>\
<option value="EH">САДР</option>\
<option value="ZW">Зимбабве</option>\
<option value="IN">Израиль	ILИндия Индия</option>\
<option value="ID">Индонезия</option>\
<option value="JO">Иордания</option>\
<option value="IQ">Ирак</option>\
<option value="IE">Иран	IRФлаг Ирландии Ирландия</option>\
<option value="IS">Исландия</option>\
<option value="ES">Испания</option>\
<option value="IT">Италия</option>\
<option value="YE">Йемен</option>\
<option value="CV">Кабо-Верде</option>\
<option value="KZ">Казахстан</option>\
<option value="KY">Острова Кайман</option>\
<option value="KH">Камбоджа</option>\
<option value="CM">Камерун</option>\
<option value="CA">Канада</option>\
<option value="QA">Катар</option>\
<option value="KE">Кения</option>\
<option value="CY">Кипр</option>\
<option value="KG">Киргизия</option>\
<option value="KI">Кирибати</option>\
<option value="TW">Китайская Республика</option>\
<option value="KP">КНДР (Корейская Народно-Демократическая Республика)</option>\
<option value="CN">Китай (Китайская Народная Республика)</option>\
<option value="CC">Кокосовые острова</option>\
<option value="CO">Колумбия</option>\
<option value="KM">Коморы</option>\
<option value="CR">Коста-Рика</option>\
<option value="CI">Кот-д’Ивуар</option>\
<option value="CU">Куба</option>\
<option value="KW">Кувейт</option>\
<option value="CW">Кюрасао</option>\
<option value="LA">Лаос</option>\
<option value="LV">Латвия</option>\
<option value="LS">Лесото</option>\
<option value="LR">Либерия</option>\
<option value="LB">Ливан</option>\
<option value="LY">Ливия</option>\
<option value="LT">Литва</option>\
<option value="LI">Лихтенштейн</option>\
<option value="LU">Люксембург</option>\
<option value="MU">Маврикий</option>\
<option value="MR">Мавритания</option>\
<option value="MG">Мадагаскар</option>\
<option value="YT">Майотта</option>\
<option value="MO">Макао</option>\
<option value="MK">Северная Македония</option>\
<option value="MW">Малави</option>\
<option value="MY">Малайзия</option>\
<option value="ML">Мали</option>\
<option value="MV">Мальдивы</option>\
<option value="MT">Мальта</option>\
<option value="MA">Марокко</option>\
<option value="MQ">Мартиника</option>\
<option value="MH">Маршалловы Острова</option>\
<option value="MX">Мексика</option>\
<option value="FM">Микронезия</option>\
<option value="MZ">Мозамбик</option>\
<option value="MD">Молдавия</option>\
<option value="MC">Монако</option>\
<option value="MN">Монголия</option>\
<option value="MS">Монтсеррат</option>\
<option value="MM">Мьянма</option>\
<option value="NA">Намибия</option>\
<option value="NR">Науру</option>\
<option value="NP">Непал</option>\
<option value="NE">Нигер</option>\
<option value="NG">Нигерия</option>\
<option value="NL">Нидерланды</option>\
<option value="NI">Никарагуа</option>\
<option value="NU">Ниуэ</option>\
<option value="NZ">Новая Зеландия</option>\
<option value="NC">Новая Каледония</option>\
<option value="NO">Норвегия</option>\
<option value="AE">ОАЭ</option>\
<option value="OM">Оман</option>\
<option value="BV">Остров Буве</option>\
<option value="IM">Остров Мэн</option>\
<option value="CK">Острова Кука</option>\
<option value="NF">Остров Норфолк</option>\
<option value="CX">Остров Рождества</option>\
<option value="PN">Острова Питкэрн</option>\
<option value="SH">Острова Святой Елены, Вознесения и Тристан-да-Кунья</option>\
<option value="PK">Пакистан</option>\
<option value="PW">Палау</option>\
<option value="PS">Государство Палестина</option>\
<option value="PA">Панама</option>\
<option value="PG">Папуа — Новая Гвинея</option>\
<option value="PY">Парагвай</option>\
<option value="PE">Перу</option>\
<option value="PL">Польша</option>\
<option value="PT">Португалия</option>\
<option value="PR">Пуэрто-Рико</option>\
<option value="CG">Республика Конго</option>\
<option value="KR">Республика Корея</option>\
<option value="RE">Реюньон</option>\
<option value="RU">Россия</option>\
<option value="RW">Руанда</option>\
<option value="RO">Румыния</option>\
<option value="SV">Сальвадор</option>\
<option value="WS">Самоа</option>\
<option value="SM">Сан-Марино</option>\
<option value="ST">Сан-Томе и Принсипи</option>\
<option value="SA">Саудовская Аравия</option>\
<option value="SZ">Эсватини</option>\
<option value="MP">Северные Марианские Острова</option>\
<option value="SC">Сейшельские Острова</option>\
<option value="BL">Сен-Бартелеми</option>\
<option value="MF">Сен-Мартен</option>\
<option value="PM">Сен-Пьер и Микелон</option>\
<option value="SN">Сенегал</option>\
<option value="VC">Сент-Винсент и Гренадины</option>\
<option value="KN">Сент-Китс и Невис</option>\
<option value="LC">Сент-Люсия</option>\
<option value="RS">Сербия</option>\
<option value="SG">Сингапур</option>\
<option value="SX">Синт-Мартен</option>\
<option value="SY">Сирия</option>\
<option value="SK">Словакия</option>\
<option value="SI">Словения</option>\
<option value="SB">Соломоновы Острова</option>\
<option value="SO">Сомали</option>\
<option value="SD">Судан</option>\
<option value="SR">Суринам</option>\
<option value="US">США</option>\
<option value="SL">Сьерра-Леоне</option>\
<option value="TJ">Таджикистан</option>\
<option value="TH">Таиланд</option>\
<option value="TZ">Танзания</option>\
<option value="TC">Теркс и Кайкос</option>\
<option value="TG">Того</option>\
<option value="TK">Токелау</option>\
<option value="TO">Тонга</option>\
<option value="TT">Тринидад и Тобаго</option>\
<option value="TV">Тувалу</option>\
<option value="TN">Тунис</option>\
<option value="TM">Туркмения</option>\
<option value="TR">Турция</option>\
<option value="UG">Уганда</option>\
<option value="UZ">Узбекистан</option>\
<option value="UA">Украина</option>\
<option value="WF">Уоллис и Футуна</option>\
<option value="UY">Уругвай</option>\
<option value="FO">Фареры</option>\
<option value="FJ">Фиджи</option>\
<option value="PH">Филиппины</option>\
<option value="FI">Финляндия</option>\
<option value="FK">Фолклендские острова</option>\
<option value="FR">Франция</option>\
<option value="PF">Французская Полинезия</option>\
<option value="TF">Французские Южные и Антарктические Территории</option>\
<option value="HM">Херд и Макдональд</option>\
<option value="HR">Хорватия</option>\
<option value="CF">ЦАР</option>\
<option value="TD">Чад</option>\
<option value="ME">Черногория</option>\
<option value="CZ">Чехия</option>\
<option value="CL">Чили</option>\
<option value="CH">Швейцария</option>\
<option value="SJ">Швеция	SEФлаг Шпицбергена и Ян-Майена Шпицберген и Ян-Майен</option>\
<option value="LK">Шри-Ланка</option>\
<option value="EC">Эквадор</option>\
<option value="GQ">Экваториальная Гвинея</option>\
<option value="ER">Эритрея</option>\
<option value="EE">Эстония</option>\
<option value="ET">Эфиопия</option>\
<option value="ZA">ЮАР</option>\
<option value="GS">Южная Георгия и Южные Сандвичевы Острова</option>\
<option value="SS">Южный Судан</option>\
<option value="JM">Ямайка</option>\
<option value="JP">Япония</option>\
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
{Age} - возраст (только для онлайна)<br>\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose<br>\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob\
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
};

	$("form",plugin).submit(function(e){
		e.preventDefault();
	});

    var storage=localStorage.getItem("victoriabrides-"+name),

		reset=$("#reset",plugin),
        run=$("#run",plugin),
		text=$("#textarea",plugin),

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
		app="",sign="",

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
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("victoriabrides-"+name,JSON.stringify(storage));
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


	if(storage)
	{
		try
		{
			storage = jQuery.parseJSON(storage) || {};
		}catch(e){
			storage = {};
		}

		if(typeof storage.black=="undefined")
			storage={black:{},goal:"textual",country:"",writers : {}, af:30,at:50,text:"",ids:[]};
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

			Status(storage.ids.length);
		}
	}
	else
		storage={black:{},writers : {}, goal:"textual", country:"",af:30,at:50,text:"",ids:[],template:[],times:0};

    var top,
        tos,
        runned=false,

		page=1,
		inpogress=[],
		userType="online",

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

			if(text1)
			{
				if(send_template)
					text.val( text1 );

				$.post("/chat-send",{ id:v.id, body:text1, },function(r){
						if(r.IsSuccess)
						{
							//$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});

								if(add2 && send_template && storage.template.length>v.next)
									queue2.push(v);

								v.F( true );
								ReStartSender();
						}
						else
						{
							v.F( false );
							ReStartSender();
						}
				},"json").fail(ReStartSender);
			}
			else
				File();
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
							.replace(/{city}/ig,v.city)
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
						.replace(/{city}/ig,v.city)
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

			if(data.IsSuccess)
				$.each(data.Model.Users,function(k,v){
					v.Age-=0;
					v.AccountId-=0;

					if(isNaN(v.Age) || v.Age<18 || v.Age>90)
						v.Age=0;

					if((v.Age==0 || storage.af<=v.Age && v.Age<=storage.at) && inpogress.indexOf(v.AccountId)==-1 && storage.ids.indexOf(v.AccountId)==-1 && !(v.AccountId in storage.black) && ["",v.CountryCode].indexOf(storage.country)>-1 )
					{
						inpogress.push(v.AccountId);

						queue.push({
							id:v.AccountId,

							next:0,
							time:0,
							name:v.Name,
							name1:Name1(v.Name),
							name2:Name2(v.Name),
							country:v.CountryCode,
							city:v.City,
							age:v.Age,

							F:function(st)
							{
								storage.ids.push(v.AccountId);
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
						url:"/chat-users",
						dataType:"json",
						method:"post",
						contentType:'application/json',
						data:JSON.stringify({page:page,userType: userType}),
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
			
			userType=storage.goal.indexOf("fav")>-1 ? "online-contacts" : "online";

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
				if (f.length < 2) {
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

						if (!isNan(d) && d != 0 && storage.ids.indexOf(d)==-1)
						{
							queue.push({
								id: d,

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
					url:"/chat-users",
					dataType:"json",
					method:"post",
					contentType:'application/json',
					data:JSON.stringify({page:1,userType: userType}),
					success:Parse4Send
				});

                StartSender();
            }
        }
    });

	//setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

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

if(location.href.indexOf("/chat")>-1)
{
	$(function(){
		$(this).on("click","#sparner-pin",function(){
			$("#sparner").toggleClass("active");
		});
	});

	$.get("/my-profile-preview",function(data){
		var name_=data.match(/<div class="value_row pull\-right text\-right">(\d+)<\/div>/);

		if(name_)
		{
			name=name_[1];

			setTimeout(function(){
				if($("#sparner").length<1)
					$.get("//ukrainiangirls.pw/get.php",{json:1,name:name},function(data){
						if(data.remain && data.rdate)
							WorkContent(data.remain,data.rdate,data.days,jQuery);
						else if(data.expired)
							Expired(data.expired,jQuery);
						else
							NewAccount(jQuery);
					},"json");

			},4000);
		}
	},"text");
}

})(jQuery);