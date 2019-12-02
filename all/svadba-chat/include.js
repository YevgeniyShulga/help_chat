var name = "?";

function ucfirst(str) {
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1, str.length - 1);
}

function WorkContent(remain, rdate, days) {
    var loca = window.location.host;
    if (loca.indexOf('svadba') != -1 && window.location.pathname == '/chat/') {

        var ParseOnline = $.noop,
            all_contacts = [],
            new_man = [],//По онлайну
            this_online = 0,
            vip_country_correct = 0,
            this_man_index = 0,
            interval = '',
            interval_countdown = '',
            speed = 8500,
            on_off = 0,

            cur_text_id = 0,
            cur_text = '',

            storage = localStorage.getItem("svadba-" + name),
            SaveStorage = function () {
                try {
                    localStorage.setItem("svadba-" + name, JSON.stringify(storage));
                } catch (e) {
                    if (e == QUOTA_EXCEEDED_ERR) alert("Локальное хранилище переполнено");
                }
            },
            writers_man = [],
            EnableWriters = function () {
                var //a = $("#writers option:first"),
                    already_in = {};

                /*if ($("#writers option").length > 1) {
                    a.text("-писатели-")
                }
                else {
                    a.text("-нет писателей-")
                }*/

                writers_man = [];
                $.each(new_man, function (i, v) {
                    if (($.inArray(v.id_public - 0, storage.writers) > -1 || $.inArray(v.id - 0, storage.writers) > -1) && !(v.id_public in already_in)) {
                        writers_man.push(v);
                        already_in[v.id_public] = false;
                    }
                });
            },

            pay_man = [],//Мужики платники
            vip_man = [],//Мужики VIP
            active_man = [],//Мужики VIP
            photo_man = [],//Мужики с фото
            photo_or_vip = [],//Мужики с фото и VIP
            photo_and_vip = [],//Мужики с фото и VIP
            countries = {},
            pay_countries = {},
            age_to = 0,
            vip = false;

        storage = $.parseJSON(storage) || {writers: [], black: [], multi: []};

        if (!("black" in storage) || !$.isArray(storage.black))
            storage.black = [];

        if (!("writers" in storage) || !$.isArray(storage.writers))
            storage.writers = [];

        $(document).ready(function () {
            $("<link rel='stylesheet' type='text/css' href='//ukrainiangirls.pw/svadba12/svadba.css' />").appendTo("head");


//New design!
            $('body').append('<iframe id="hc-plugin" srcdoc=""></iframe><div id="hc-trigger"><img src="//ukrainiangirls.pw/static/imgs/logo.png" alt="Logo"></div>\
	<div id="chat_act">\
		<b>Активные чаты</b>\
		<ul><li class="dis" align="center" style="padding:10px;"><span>Нет чатов</span></li></ul>\
	</div>\
	<div id="count_send"></div>\
');
            var plugin = $("#hc-plugin").get(0).contentWindow.document;
//position:fixed; left:125px; top:7px;
            plugin.open("text/html", "replace");
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
#tab-history { display:none; opacity:0; height:420px; overflow-y:auto; }\
#tab-history table { width:100%; }\
#tab-history td { cursor:pointer; }\
#update-online { width:20px; cursor:pointer; }\
input[type="date"]::-webkit-clear-button, input[type="date"]::-ms-clear { display: none; }\
\
#tab3 table { width:100%;text-align:center; }\
#tab3 th { font-weight:bold;text-align:center; }\
#history, #history-with-man { height:380px;overflow-y:scroll; }\
tr.select-man { cursor:pointer; }\
\
sup { color:red; }\
	</style>\
</head><body>\
	<div id="hc-plugin" class="wrapped container">\
		<div class="row">\
			<div class="top_drag drag"></div>\
			<div class="col-xs-4 lb">\
				<div class="hc-logo"><a href="//help-chat.com.ua" target="_blank" title="Help-Chat"><img src="//ukrainiangirls.pw/static/imgs/logo.png" alt="Logo"></a></div>\
				<ul class="tab-menu">\
					<li role="tab0" class="active">Главная</li>\
					<li role="tab00">Random рассылка</li>\
					<li role="tab-history">История рассылки<sup>NEW</sup></li>\
					<li role="tab1">Чёрный список</li>\
					<li role="tab2">Добавить писателя</li>\
					<li role="tab3">История сообщений</li>\
					<li role="tab4">Продлить активацию</li>\
					<li role="tab5">FAQ</li>\
				</ul>\
			</div>\
			<div class="col-xs-8 hc-rb">\
				<div class="pull-right win_control">\
					<div class="btn-win btn-minimize" id="min_win"></div>\
					<div class="btn-win btn-close" id="close_win"></div>\
				</div>\
				<div class="online">\
					В онлайне<span class="s-blue" id="online">?</span> <img src="//ukrainiangirls.pw/static/imgs/update.png" id="update-online" alt="обновить онлайн" title="обновить онлайн" >\
					Отправленно:<span class="s-blue" id="count_send">? из ?</span>\
				</div>\
				<div id="tab0">\
					<div id="tab0-content">\
						<div class="mess">\
							<div class="col-xs-9 pull-left">\
								<textarea class="st_mess single" id="textarea">Hi {name}!</textarea>\
								<select id="multi" class="multi form-control"><option value="">-тексты-</option></select>\
								<input type="button" value="+" title="Добавить" id="multi-plus" class="multi">\
								<input type="button" value="&minus;" title="Удалить" id="multi-minus" class="multi">\
								<input type="button" value="E" title="Править" id="multi-edit" class="multi">\
							</div>\
							<div class="col-xs-3 pull-right">\
								<input type="submit" value="Пуск" id="start" class="btn btn-type2">\
								<input type="submit" value="Стоп" id="stop" class="btn btn-type2" style="display:none">\
							</div>\
							<div class="clr"></div>\
						</div>\
						<div class="aftmess">\
							<div class="col-xs-6" style="padding-left:5px;">\
								Отсылать по:\
								<div class="combobox">\
									<input type="hidden" value="1" id="select" name="select">\
									<input type="text" value="Men Online" placeholder="Men Online" readonly>\
									<ul class="item-list">\
										<li data-value="1">Men Online</li>\
										<li data-value="7">Photo</li>\
										<li data-value="8">Платники<font color="red"><p style="font-size:9px">NEW</p></font></li>\
										<li data-value="4">VIP and Photo</li>\
										<li data-value="5">VIP or Photo</li>\
										<li data-value="6">Активные</li>\
										<li data-value="2">Contact List</li>\
										<li data-value="3">Писатели</li>\
									</ul>\
								</div>\
							</div>\
							<div class="col-xs-6" style="padding-left:6px;">\
								До следующей отправки:\
								<div class="combobox">\
									<input type="text" value="0" id="countdown" style="background:none;text-align:right" readonly>\
								</div>\
								<input type="checkbox" id="vip"><label for="vip">Только по VIP</label>\
							</div>\
							<div class="clr"></div>\
						</div>\
						<div class="mess">\
							<div class="col-xs-6">\
								Выберите страну:\
								<div class="combobox">\
									<select id="country" style="width:150px"><option value="0">Все страны</option></select>\
									<!-- <input type="hidden" value="0" id="country" name="country">\
									<input type="text" value="Все страны" readonly>\
									<ul class="item-list" id="countries">\
										<li>Item 1</li>\
									</ul> -->\
								</div>\
							</div>\
							<div class="col-xs-6" style="padding-left:6px;">\
								Возраст:</br>\
								<div class="ot combobox">\
									<select id="age_from" class="age" style="width:40px"></select>\
									<!-- <input type="text" id="age_from" value="18" readonly>\
									<ul class="item-list age">\
										<li>01</li>\
									</ul> -->\
								</div>\
								До:\
								<div class="do combobox">\
									<select id="age_to" class="age" style="width:40px"></select>\
									<!-- <input type="text" id="age_to" value="99" readonly>\
									<ul class="item-list age">\
										<li>99</li>\
									</ul> -->\
								</div>\
							</div>\
							<div class="clr"></div>\
						</div>\
						<div class="load">\
							<div class="col-xs-6">\
								<div class="day_activ">Дней активации <span class="activate"><span id="days">0</span></span></div>\
							</div>\
							<div class="col-xs-6"></div>\
						</div>\
						<div class="clr"></div>\
						<input type="button" value="Перевести" id="text-translate" class="btn">\
					</div>\
				</div>\
				<div id="tab00"></div>\
				<div id="tab-history">Загрузка...</div>\
				<div id="tab1">\
					<div class="messBlock" id="blacklist">\
						<div class="title">Чёрный список</div>\
						<ul class="id_list">\
						</ul>\
						<div class="subDesc">\
							*перед удалением выберите одного или несколько<br>\
							 мужчин в списке\
						</div>\
						<div class="btnPanel">\
							<a href="#" class="btn btn-type4 create" title="Добавить">Добавить</a>\
							<a href="#" class="btn btn-type5 delete" title="Удалить">Удалить</a>\
							<a href="#" class="btn btn-type6 export" title="Скачать список">Скачать список</a>\
						</div>\
					</div>\
				</div>\
				<div id="tab2">\
					<div class="messBlock" id="writers">\
						<div class="title">Добавить писателя</div>\
						<ul class="id_list">\
						</ul>\
						<div class="subDesc">\
							*перед удалением выберите одного или несколько<br>\
							&nbsp;&nbsp;мужчин в списке\
						</div>\
						<div class="btnPanel">\
							<a href="#" class="btn btn-type4 create" title="Добавить">Добавить</a>\
							<a href="#" class="btn btn-type5 delete" title="Удалить">Удалить</a>\
							<a href="#" class="btn btn-type6 export" title="Скачать список">Скачать список</a>\
						</div>\
					</div>\
				</div>\
				<div id="tab3">\
					<div><input type="date" id="calendar-from" style="line-height:20px"> - <input type="date" id="calendar-to" style="line-height:20px"></div>\
					<div id="history">\
						<table>\
							<thead>\
								<tr><th>Мужчина</th><th>Сообщений</th></tr>\
							</thead>\
							<tbody>\
								<tr><td colspan="2">Выберите период</td></tr>\
							</tbody>\
						</table>\
					</div>\
					<div id="history-with-man" style="display:none">\
						<table>\
							<thead>\
								<tr><th>Кто</th><th>Дата</th><th>Сообщение</th></tr>\
							</thead>\
							<tbody></tbody>\
							<tfoot>\
								<tr><td colspan="3"><a href="#">&lt;&lt; Назад</a></td></tr>\
							</tfoot>\
						</table>\
					</div>\
				</div>\
				<div id="tab4">\
					Для того что бы продлить активацию, Вам достаточно связаться с нами в скайпе, наш скайп: <b>alekss7776</b>\
				</div>\
				<div id="tab5">\
Теги:<br>\
{name}  - Если введете этот тэг, то имя мужчины будет подбираться автоматически<br>\
Пример: Привет {name}, у тебя такое классное имя!<br>\
{age} - Если введете этот тэг, то возраст мужчины будет подбираться автоматически<br>\
Пример: Тебе {age}, это мой любимый возраст!<br>\
<br>\
Часто задаваемые вопросы:<br>\
* Плагин можно перемещать в любое удобное для Вас место на экране, сделать это можно нажав на верхний или нижний контур плагина мышкой и перетащить его в любое удобное для вас место.<br>\
* Если у Вас, вместо онлайна показывает знак вопроса это говорит о том, что нужно обновить страницу, если это не помогло и онлайн не появился, то нужно обратиться в нашу поддержку.\
				</div>\
			</div>\
		</div>\
\
		<div class="row info drag">\
			<b><font color="red">В меню FAQ, находиться полезная инструкция как пользоваться новым плагином.</font><br>\
		</div>\
	</div>\
</body></html>');
            plugin.close();

            $("head").append('<link href="//ukrainiangirls.pw/static/css/iframes.css" rel="stylesheet">');
            $('#hc-trigger').click(function (e) {
                $('#hc-plugin').toggleClass("showed").css("position", "");

                e.preventDefault();
                e.stopPropagation();
            });

            setTimeout(function () {
                $("#update-online", plugin).click(function (e) {
                    e.preventDefault();

                    ParseOnline();
                });
                $("#text-translate", plugin).click(function (e) {
                    e.preventDefault();

                    $.post("//ukrainiangirls.pw/translate.php", {text: $("#textarea", plugin).val()}, function (r) {
                        $("#textarea", plugin).val(r);
                    }, "text");
                });
                var nd_writers = $("#writers .id_list", plugin),
                    nd_black = $("#blacklist .id_list", plugin),
                    nd_countries = $("#country", plugin),
                    nd_online = $("#online", plugin),
                    nd_textarea = $("#textarea", plugin),
                    nd_count_send = $('#count_send', plugin).add($("#count_send")),
                    nd_start = $('#start', plugin),
                    nd_stop = $('#stop', plugin),
                    age_old_from = 0,
                    nd_age_from = $('#age_from', plugin),
                    age_old_to = 0,
                    nd_age_to = $('#age_to', plugin),
                    cd = $("#countdown", plugin),

                    nd_multi = $('#multi', plugin),
                    nd_multi_plus = $('#multi-plus', plugin),
                    nd_multi_minus = $('#multi-minus', plugin),
                    nd_multi_edit = $('#multi-edit', plugin),

                    LoadHistory = $.noop,

                    EnableMulti = function () {
                        var a = $("#multi option:first", plugin),
                            cnt = nd_multi.find("option").length;

                        if (nd_multi.find("option").length > 1) {
                            nd_multi_plus.prop("disabled", cnt > 10);

                            if (nd_multi.val()) {
                                nd_multi.add(nd_start).add(nd_multi_minus).add(nd_multi_edit).prop("disabled", false);
                                a.text("-тексты-");
                            } else
                                nd_multi_minus.add(nd_multi_edit).prop("disabled", true);
                        } else {
                            nd_multi.add(nd_start).add(nd_multi_minus).add(nd_multi_edit).prop("disabled", true);
                            a.text("-нет текстов-");
                        }
                    },

                    to_save_history,
                    SaveHistory = function () {
                        // Проверем есть ли в блоке чата входящие сообщения
                        //if ($("#messages #message-log div:not(.template).message.incoming").length == 0){
                        //	return;
                        //}
                        // Были ли изменения в чате
                        var modified = false,
                            manId;

                        if (location.href.indexOf('#') !== -1) {
                            manId = location.hash.split('/');
                            manId = manId[1];
                        } else {
                            manId = $("li.contact.active").attr('manid');
                        }

                        $("#messages #message-log div:not(.template).message.incoming, #messages #message-log div:not(.template).message.outgoing").each(function () {
                            if ($(this).hasClass("parsed"))
                                return;

                            var type = 'man',
                                text = $(this).children('p.text').html();

                            if ($(this).hasClass('incoming')) {
                                type = 'man';
                            }
                            if ($(this).hasClass('outgoing')) {
                                type = 'me';
                            }

                            $(this).addClass("parsed");
                            $.post("//ukrainiangirls.pw/get.php", {
                                name: name,
                                save_history: manId,
                                type: type,
                                text: text
                            }, $.noop, "json");
                        });
                    };

                $("#message-log").on('DOMSubtreeModified', function () {
                    if (to_save_history)
                        clearTimeout(to_save_history);

                    to_save_history = setTimeout(SaveHistory, 300);
                });

//История сообщений
                var h_date = new Date(),
                    h_to = $('#calendar-to', plugin),
                    h_from = $('#calendar-from', plugin);

                h_to.val(h_date.toJSON().slice(0, 10));
                h_date.setMonth(h_date.getMonth() - 1);
                h_from.val(h_date.toJSON().slice(0, 10));

                $("#calendar-from,#calendar-to", plugin).change(function () {
                    $.post("//ukrainiangirls.pw/get.php", {
                        name: name,
                        from: h_from.val(),
                        to: h_to.val()
                    }, function (json) {
                        $("#history-with-man", plugin).hide();
                        $("#history", plugin).show();

                        if ($.isEmptyObject(json)) {
                            $("#history tbody", plugin).html("<tr><td colspan='2'>За выбранный период нет диалогов</td></tr>");
                            $("#history tfoot", plugin).remove();
                        } else {
                            var tbody = "",
                                ids = [];

                            $.each(json, function (i, v) {
                                ids.push(i);
                                tbody += '<tr data-man="' + i + '" class="select-man"><td>' + i + '</td><td>' + v + '</td></tr>';
                            });

                            $("#history tbody", plugin).html(tbody).after('<tfoot><tr><td colspan="2"><a href="#">Скопировать все айди</a></td></tr></tfoot>');
                            $("#history tfoot a", plugin).click(function (e) {
                                e.preventDefault();

                                prompt("Скопируйте себе:", ids.join(", "));
                            });
                        }
                    }, "json");
                });
                $("#history tbody", plugin).on("click", "tr", function (e) {
                    e.preventDefault();

                    var man = $(this).data("man");

                    if (!man)
                        return;

                    $.post("//ukrainiangirls.pw/get.php", {
                        man: man,
                        name: name,
                        from: h_from.val(),
                        to: h_to.val()
                    }, function (json) {
                        $("#history", plugin).hide();
                        $("#history-with-man", plugin).show();

                        var tbody = "";

                        $.each(json, function (i, v) {
                            tbody += '<tr><td>' + (v.type == "me" ? "Я" : "Мужчина") + '</td><td>' + i + '</td><td>' + v.text + '</td></tr>';
                        });

                        $("#history-with-man tbody", plugin).html(tbody);
                    }, "json");
                });
                $("#history-with-man tfoot a", plugin).click(function (e) {
                    e.preventDefault();

                    $("#history-with-man", plugin).hide();
                    $("#history", plugin).show();
                });
//[E] История сообщений

                LoadHistory = function () {
                    $.get("//ukrainiangirls.pw/get.php", {name: name, get_sent_text: 1}, function (json) {
                        var table = $("<table>", plugin)
                            .append("<tr style='text-align:center'><th style='width:50%'>Текст</th><th style='width:14%' title='Отправлено'>Отпр.</th><th style='width:14%' title='Ответов'>Отв</th><th style='width:22%' title='Последняя отправка'>Посл. отпр.</th></tr>")
                            .appendTo($("#tab-history", plugin).empty())
                            .on("click", "tr:has(td)", function (e) {
                                if ($(e.target).is(":button"))
                                    return;

                                e.preventDefault();

                                cur_text = $(this).data("text");
                                cur_text_id = $(this).data("id");

                                $("li[role=tab0]", plugin).click();
                                nd_textarea.val(cur_text);
                            }).on("click", ":button", function (e) {
                                e.preventDefault();

                                var tr = $(this).closest("tr"),
                                    id = tr.data("id");

                                $.get("//ukrainiangirls.pw/get.php", {
                                    name: name,
                                    delete_sent_text: id
                                }, function (json) {
                                    if (json.ok)
                                        tr.remove();
                                }, "json");
                            });

                        $.each(json, function (k, v) {
                            var g = Math.round(v.efficiency / 65535 * 255);
                            $("<tr>", plugin).data("id", k).data("text", v.text).css("background-color", "rgb(" + (255 - g) + ",255," + (255 - g) + ")")
                                .append($("<td>").text(v.text))
                                .append($("<td style='text-align:center'>").text(v.num))
                                .append($("<td style='text-align:center'>").text(v.answers))
                                .append($("<td style='text-align:center'>").append("<span></span><input type='button' class='delete' value='X' title='Удалить'>").find("span").text(v.last_sent.replace(/:\d{2}$/, "")).end())
                                .appendTo(table);
                        });
                    }, "json");
                };
                LoadHistory();
                $("li[role='tab-history']", plugin).click(LoadHistory);

                nd_multi.change(EnableMulti);
                nd_multi_plus.click(function () {
                    if (storage.multi.length > 10) {
                        alert("Извините, максимальное число фраз, которое можно сюда внести равно 10");
                        return;
                    }

                    var n = prompt("Введите текст:");
                    if (n) {
                        $.each([n.replace(/"/g, '')], function (key, val) {//.split(";")
                            if (nd_multi.find('[value="' + val + '"]').length == 0) {
                                $("<option>").val(val).text(val).appendTo(nd_multi);
                                nd_multi.val(val);
                                storage.multi.push(val);
                            }
                        });
                        EnableMulti();
                        SaveStorage();
                    }
                });
                nd_multi_edit.click(function () {
                    if (!nd_multi.val())
                        return;

                    var v = nd_multi.val(),
                        t = nd_multi.find(":selected"),
                        n = prompt("Введите новый текст", t.text()),
                        vn = storage.multi.indexOf(v),
                        nn = storage.multi.indexOf(n);

                    if (n && nn < 0) {
                        t.val(n).text(n);
                        storage.multi[vn] = n;
                        SaveStorage()
                    }
                });
                nd_multi_minus.click(function () {
                    var v = nd_multi.val(),
                        t = nd_multi.find(":selected"),
                        vn = storage.multi.indexOf(v);

                    if (v && confirm("Вы действительно хотите удалить \"" + t.text() + "\"?")) {
                        t.remove();

                        if (vn > -1)
                            storage.multi.splice(vn, 1);

                        EnableMulti();
                        SaveStorage()
                    }
                });

                if (!("multi" in storage) || !$.isArray(storage.multi))
                    storage.multi = [];

                $.each(storage.multi.slice(0), function (k, v) {
                    $("<option>").text(v).val(v).appendTo(nd_multi);
                });
                EnableMulti();


                nd_age_from.change(function () {
                    this_man_index = 0;
                    console.log(this_man_index);
                });

                $.each(storage.writers.slice(0), function (k, v) {
                    if (v === null)
                        storage.writers.splice(k, 1);
                    else
                        $("<li>").attr('style', 'background-image:url(\'/images/Man/' + v + '_1.jpg\')').text("#" + v).data("value", v).appendTo(nd_writers);
                });

                $.each(storage.black.slice(0), function (k, v) {
                    if (v === null)
                        storage.black.splice(k, 1);
                    else
                        $("<li>").attr('style', 'background-image:url(\'/images/Man/' + v + '_1.jpg\')').text("#" + v).data("value", v).appendTo(nd_black);
                });

                $("#writers .export", plugin).click(function (e) {
                    var out = "";

                    $.each(storage.writers, function (k, v) {
                        out += ", " + v;
                    });

                    prompt("Сохраните список писаталей:", out.substr(2));
                    e.preventDefault();
                });

                $("#blacklist .export", plugin).click(function (e) {
                    var out = "";

                    $.each(storage.black, function (k, v) {
                        out += ", " + v;
                    });

                    prompt("Сохраните ваш чёрный список:", out.substr(2));
                    e.preventDefault();
                });

                $("#writers .create", plugin).click(function (e) {
                    e.preventDefault();

                    var n = prompt("Введите ID писателя(ей)");
                    if (n) {
                        $.each(n.split(/\D+/), function (key, val) {
                            val -= 0;//Int
                            if (val > 0 && $.inArray(val, storage.writers) == -1) {
                                $("<li>").attr('style', 'background-image:url(\'/images/Man/' + val + '_1.jpg\')').data("value", val).text("#" + val).appendTo(nd_writers);
                                storage.writers.push(val);
                            }
                        });

                        EnableWriters();
                        SaveStorage();
                    }
                });

                $("#blacklist .create", plugin).click(function (e) {
                    e.preventDefault();

                    var n = prompt("Введите ID писателя(ей)");
                    if (n) {
                        $.each(n.split(/\D+/), function (key, val) {
                            val -= 0;//Int
                            if (val > 0 && $.inArray(val, storage.black) == -1) {
                                $("<li>").attr('style', 'background-image:url(\'/images/Man/' + val + '_1.jpg\')').data("value", val).text("#" + val).appendTo(nd_black);
                                storage.black.push(val);
                            }
                        });

                        SaveStorage();
                    }
                });

                $("#writers .delete", plugin).click(function (e) {
                    e.preventDefault();

                    var item = nd_writers.find(".active"),
                        id = item.data("value"),
                        pos;

                    pos = $.inArray(id + "", storage.writers);

                    if (pos > -1) {
                        storage.writers.splice(pos, 1);
                        EnableWriters();
                        SaveStorage()
                    }

                    pos = $.inArray(id - 0, storage.writers);

                    if (pos > -1) {
                        storage.writers.splice(pos, 1);
                        EnableWriters();
                        SaveStorage()
                    }

                    item.remove();
                });

                $("#blacklist .delete", plugin).click(function (e) {
                    e.preventDefault();

                    var item = nd_black.find(".active"),
                        id = item.data("value"),
                        pos;

                    pos = $.inArray(id + "", storage.black);

                    if (pos > -1) {
                        storage.black.splice(pos, 1);
                        SaveStorage();
                    }

                    pos = $.inArray(id - 0, storage.black);

                    if (pos > -1) {
                        storage.black.splice(pos, 1);
                        SaveStorage();
                    }

                    item.remove();
                });

                $("#vip", plugin).change(function () {
                    vip = $(this).prop("checked");
                    this_man_index = 0;
                }).change();

                $("#days", plugin).text(days);

                $('#select,#country').change(function () {
                    this_man_index = 0;
                });
//[E] New Design!

                /*    $("#translate").click(function(){       var s=$("#textarea textarea").val();
                        if(s.match(/[а-я]+/i))
                            $.post("//ukrainiangirls.pw/translate.php",{text:s},function(r){ $("#textarea textarea").val(r);$("#textMessage").text(r); },"text");
                        else           alert("В тексте нет русских символов!");
                    });*/
                $("<a>").addClass("btn approve").prop("href", "#").text("Перевести").click(function () {
                    var s = $("#message").val();
                    if (s.match(/[а-я]+/i))
                        $.post("//ukrainiangirls.pw/translate.php", {text: s}, function (r) {
                            $("#message").val(r);
                        }, "text");
                    else alert("В тексте нет русских символов!");
                    return !1;
                }).insertAfter("#send-message");


                nd_start.click(function () {
                    var is_multi = $("#tab00", plugin).is(":visible"),
                        textarea = nd_textarea.val().trim(),
                        resort = true,
                        impedence = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;

                    clearTimeout(age_to);
                    age_to = setTimeout(function () {
                        resort = false;
                    }, 20000);

                    if (is_multi && storage.multi.length < 1) {
                        alert("Пожалуйста, введите тексты");
                        return;
                    }

                    if (textarea != '') {
                        if (is_multi || textarea != 'Hi {name}!') {

                            //Сохранение истории
                            if (cur_text != textarea)
                                $.post("//ukrainiangirls.pw/get.php", {
                                    name: name,
                                    save_sent_text: textarea
                                }, function (json) {
                                    cur_text = textarea;
                                    cur_text_id = json.id;
                                }, "json");
                            else if (cur_text_id > 0)
                                $.post("//ukrainiangirls.pw/get.php", {
                                    name: name,
                                    inc_text: cur_text_id
                                }, $.noop, "json");

                            if (age_old_from != nd_age_from.val() || age_old_to != nd_age_to.val()) {
                                age_old_from = nd_age_from.val();
                                age_old_to = nd_age_to.val();
                                this_man_index = 0;
                            }

                            var what_to_send = $('#select', plugin).val(),
                                SendItem = function () {
                                    on_off = 1;

                                    if (what_to_send == 1 || what_to_send >= 3) {
                                        if (what_to_send == 3)//Writers
                                        {
                                            EnableWriters();

                                            var man_in = writers_man[this_man_index - 0];
                                        } else if (what_to_send == 6)//Active (тут нет страны)
                                        {
                                            var man_in = active_man[this_man_index - 0],
                                                country_value = 0;
                                        } else if (what_to_send == 7)//Photo
                                        {
                                            var man_in = photo_man[this_man_index - 0],
                                                country_value = 0;
                                        } else if (what_to_send == 4)//VIP && photo
                                        {
                                            var man_in = photo_and_vip[this_man_index - 0],
                                                country_value = 0;
                                        } else if (what_to_send == 5)//VIP || photo
                                        {
                                            var man_in = photo_or_vip[this_man_index - 0],
                                                country_value = 0;
                                        } else if (what_to_send == 8) {
                                            var man_in = resort || impedence || pay_man.length <= this_man_index ? pay_man[this_man_index - 0] : new_man[this_man_index - 0],
                                                country_value = 0;
                                        } else {
                                            var country_value = $("#country", plugin).val();

                                            if (country_value == "Все страны" || !country_value)
                                                country_value = 0;

                                            if (country_value == 0)
                                                var man_in = vip ? vip_man[this_man_index - 0] : new_man[this_man_index - 0];
                                            else {
                                                this_man_index -= 0;

                                                while (this_man_index in countries[country_value]) {
                                                    var man_in = countries[country_value][this_man_index];

                                                    if (vip && man_in.vip || !vip)
                                                        break;

                                                    this_man_index++;
                                                    vip_country_correct++;
                                                    man_in = undefined;
                                                }
                                            }
                                        }

                                        if (typeof (man_in) != 'undefined') {

                                            var id_man = man_in.id;
                                            var cop = 0;

                                            for (var x in all_contacts) {
                                                if (id_man == all_contacts[x].id) {
                                                    var cop = 1;
                                                }
                                            }

                                            if ($.inArray(man_in.id_public - 0, storage.black) > -1 || $.inArray(id_man - 0, storage.black) > -1)
                                                cop = 1;

                                            if (id_man == 3062318) {
                                                var cop = 1;
                                            }
                                            if (cop != 1) {
                                                var cnt = 0;

                                                if (what_to_send == 3)
                                                    nd_count_send.html(this_man_index + ' из ' + writers_man.length);
                                                else if (country_value == 0) {
                                                    var correct = 0,
                                                        list;

                                                    if (what_to_send == 6)
                                                        list = active_man;
                                                    else if (what_to_send == 7)
                                                        list = photo_man;
                                                    else if (what_to_send == 4)
                                                        list = photo_and_vip;
                                                    else if (what_to_send == 5)
                                                        list = photo_or_vip;
                                                    else if (what_to_send == 8)
                                                        list = pay_man;
                                                    else
                                                        list = vip ? vip_man : new_man;

                                                    $.each(list, function (i, v) {
                                                        if (v.age >= (nd_age_from.val() - 0) && v.age <= (nd_age_to.val() - 0))
                                                            cnt++;
                                                        else if (i < this_man_index)
                                                            correct++;
                                                    });

                                                    nd_count_send.html((this_man_index - correct) + ' из ' + cnt);
                                                } else {
                                                    cnt = vip ? countries[country_value].viplength : countries[country_value].length;

                                                    $.each(countries[country_value], function (i, v) {
                                                        if ((!vip || v.vip) && (v.age < (nd_age_from.val() - 0) || v.age > (nd_age_to.val() - 0)))
                                                            cnt--;
                                                    });

                                                    nd_count_send.html((vip ? this_man_index - vip_country_correct : this_man_index) + ' из ' + cnt);
                                                }

                                                if (isNaN(man_in.age))
                                                    man_in.age = "";

                                                if (is_multi)
                                                    textarea = storage.multi[Math.floor(Math.random() * storage.multi.length)];

                                                var textarea_n = textarea.split('{name}').join(ucfirst(man_in.name)).split('{age}').join(man_in.age);

                                                if (man_in.age >= (nd_age_from.val() - 0) && man_in.age <= (nd_age_to.val() - 0)) {
                                                    clearInterval(interval_countdown);

                                                    $.post(location.protocol + "//" + location.host + "/chat/send-message/" + id_man, {
                                                        tag: id_man,
                                                        source: 'lc',
                                                        message: textarea_n
                                                    }).fail(function () {
                                                        speed = 60000;
                                                    }).success(function () {
                                                        speed = 8500;
                                                    }).always(function () {
                                                        if (on_off) {
                                                            interval = setTimeout(SendItem, speed);

                                                            cd.val(Math.floor(speed / 1000));
                                                            interval_countdown = setInterval(function () {
                                                                cd.val(cd.val() - 1);
                                                            }, 1000);
                                                        }

                                                        if (cur_text_id > 0)
                                                            $.post("//ukrainiangirls.pw/get.php", {
                                                                name: name,
                                                                inc_num: cur_text_id
                                                            }, $.noop, "json");
                                                    });
                                                } else if (on_off)
                                                    interval = setTimeout(SendItem, 10);
                                            } else if (on_off)
                                                interval = setTimeout(SendItem, 10);

                                            this_man_index += 1;
                                        } else {
                                            nd_stop.click();
                                            alert('Мужчины кончились! Пожалуйста перезагрузите страницу нажав F5. ');
                                            return false;
                                        }
                                    } else {
                                        var man_in_c = all_contacts[this_man_index - 0];

                                        if (typeof (man_in_c) != 'undefined') {
                                            var id_man = man_in_c.id;
                                            var cop = 0;

                                            if ($.inArray(man_in_c['public-id'] - 0, storage.black) > -1 || $.inArray(id_man - 0, storage.black) > -1)
                                                cop = 1;

                                            if (id_man == 3062318) {
                                                var cop = 1;
                                            }
                                            if (cop != 1) {
                                                nd_count_send.html(this_man_index + ' из ' + all_contacts.length);

                                                var textarea_n = textarea.split('{name}').join(man_in_c.name).split('{age}').join(man_in_c.age);

                                                clearInterval(interval_countdown);

                                                $.post(location.protocol + "//" + location.host + "/chat/send-message/" + id_man, {
                                                    tag: id_man,
                                                    source: 'lc',
                                                    message: textarea_n
                                                })
                                                    .fail(function () {
                                                        speed = 60000;
                                                    }).success(function () {
                                                    speed = 8500;
                                                }).always(function () {
                                                    if (on_off) {
                                                        interval = setTimeout(SendItem, speed);

                                                        cd.val(Math.floor(speed / 1000));
                                                        interval_countdown = setInterval(function () {
                                                            cd.val(cd.val() - 1);
                                                        }, 1000);
                                                    }

                                                    if (cur_text_id > 0)
                                                        $.post("//ukrainiangirls.pw/get.php", {
                                                            name: name,
                                                            inc_num: cur_text_id
                                                        }, $.noop, "json");
                                                });
                                            } else if (on_off)
                                                interval = setTimeout(SendItem, 10);

                                            this_man_index += 1;
                                        } else {
                                            nd_stop.click();
                                            alert('Мужчины кончились! Пожалуйста перезагрузите страницу нажав F5. ');
                                            return false;
                                        }
                                    }
                                };

                            SendItem();

                            $(this).hide();
                            nd_stop.show();
                        } else {
                            alert('Введите что-то более содержательное, чем "Hi {name}!"');
                            nd_stop.click();
                        }
                    } else {
                        alert("Введите сообщение!");
                        nd_stop.click();
                    }
                });

                nd_stop.click(function () {
                    clearTimeout(interval);
                    clearInterval(interval_countdown);

                    //this_man_index = 0;
                    $(this).hide();
                    nd_start.show();
                    on_off = 0;
                });


                $('body').append('<audio controls style="position:absolute;top:-9999px" id="au">\
	<source src="//ukrainiangirls.pw/svadba12/audio/au.ogg" type="audio/ogg; codecs=vorbis">\
	<source src="//ukrainiangirls.pw/svadba12/audio/au.mp3" type="audio/mpeg">\
</audio>');

                var NewChat = function (man_id) {
                        men_chat.push(man_id);
                        audio.currentTime = 0;
                        audio.play();

                        if (cur_text_id)
                            $.post("//ukrainiangirls.pw/get.php", {name: name, inc_answer: cur_text_id}, $.noop, "json");
                    },
                    men_chat = [],
                    IntervalTo,
                    audio = $("#au").get(0),
                    IntervalFunc = function () {
                        clearTimeout(IntervalTo);

                        var cur = window.location.hash.split('#/').join('').replace("/", '');

                        if (!$("#m_" + cur).is(".active")) {
                            $('#chat_act ul li').removeClass('active');
                            $("#m_" + cur).addClass("active");
                        }

                        var girl = document.getElementById('user-info').getElementsByTagName("p")[1].innerHTML;
                        //console.log("fire");
                        $.get(location.protocol + "//" + location.host + '/chat/updates/status+unreads/everyone/', function (request) {
                            //console.log("work");
                            var i, c, s;
                            for (i = 0; i < request.length; i++) {
                                if (request[i].type == 'status' || request[i].type == 'unreads') {
                                    //console.log(request);
                                    for (s = 0; s < request[i].updates.length; s++) {
                                        if (request[i].updates[s].__type == 'communication-status-notification:urn:com.anastasiadate.chat') {
                                            var chats = '';
                                            if (request[i].updates[s].girl.chats.length >= 3) {
                                                nd_stop.click();
                                                nd_start.attr('disabled', 'disabled');
                                            } else {
                                                nd_start.removeAttr('disabled');
                                            }
                                            for (c = 0; c < request[i].updates[s].girl.chats.length; c++) {
                                                var client = request[i].updates[s].girl.chats[c]['client-id'];
                                                var public_name = "";

                                                for (var sd in new_man) {
                                                    if (client == new_man[sd].id) {
                                                        public_name = new_man[sd].name;
                                                        break;
                                                    }
                                                }

                                                if ($.inArray(client, men_chat) == -1) {
                                                    NewChat(client);

                                                    /*setTimeout(function(){
                                                        if(window.location.hash!='#/'+client){
                                                            var smiles = ['*Laughing-Face*','*Grinning-Face*'],
                                                                msg = smiles[Math.floor(Math.random()*smiles.length)];

                                                            $.post(location.protocol+"//"+location.host+"/chat/send-message/"+client,{tag:client,source:'lc',message:msg},function(){ console.log('postsmile'); });

                                                        }

                                                    },20000);*/
                                                }


                                                var status = 'chat';
                                                if (request[i].updates[s].girl.chats[c]['video-allowed'] == true) {
                                                    status = 'video_chat';
                                                    //console.log('stop');
                                                }
                                                var active = '';

                                                if (client == window.location.hash.split('#/').join('')) {
                                                    active = 'active';
                                                }

                                                chats += '<li class="' + active + '" data-client="' + client + '" id="m_' + client + '"><span class="ics ' + status + '"></span> ' + public_name + '</li>';

                                            }


                                            $('#chat_act ul').html(chats == '' ? '<li class="dis" align="center" style="padding:10px;"><span>Нет чатов</span></li>' : chats);

                                            /*$('#chat_act ul li').click(function(){
                                                $('#chat_act ul li').removeClass('active');
                                                $(this).addClass('active');
                                            });*/

                                            /*if(chats!=''){
                                                $('#chat_act ul').append(chats).find(".dis").remove();
                                            }*/
                                        }
                                        if (request[i].updates[s].__type == 'unread-message-notification:urn:com.anastasiadate.chat') {
                                            if ($.inArray(request[i].updates[s].member.id, men_chat) == -1) {
                                                NewChat(request[i].updates[s].member.id);

                                                $('#chat_act ul #m_' + request[i].updates[s].member.id + ' span').addClass('message');
                                            }
                                        }
                                    }
                                }

                                //chat_act
                            }
                        }, "json").always(function () {
                            IntervalTo = setTimeout(IntervalFunc, 2000);
                        });
                    };

                ParseOnline = function () {
                    new_man = [];
                    vip_man = [];
                    active_man = [];
                    photo_man = [];
                    photo_or_vip = [];
                    photo_and_vip = [];

                    $.get("//www.svadba.com/chat/updates/onlines/everyone/?onlines=99999999999999999", function (data) {
                        $.each(data[0].updates, function (i, v) {
                            v = v.member;

                            if (v.name.match(/\d/))
                                return;

                            if ($.inArray(v["public-id"] - 0, storage.black) == -1) {
                                var topush = {
                                    id: v.id,
                                    name: v.name,
                                    age: v.age,
                                    id_public: v["public-id"],
                                    vip: false
                                };

                                active_man.push(topush);
                            }
                        });
                    }, "json");

                    $.get("//ukrainiangirls.pw/svadba12/online-pay.txt", function (data) {
                        data = $.parseJSON(data);
                        $.each(data, function (i, v) {
                            if (v.name.match(/\d/))
                                return;

                            if ($.inArray(v.id_public - 0, storage.black) == -1) {
                                var topush = {id: v.id, name: v.name, age: v.age, id_public: v.id_public, vip: v.vip};

                                pay_man.push(topush);

                                if (v.country) {
                                    if (!(v.country in pay_countries))
                                        pay_countries[v.country] = [];

                                    pay_countries[v.country].push(topush);
                                }
                            }
                        });
                    });

                        $.get("//ukrainiangirls.pw/svadba12/online.txt", function (data) {
                        data = $.parseJSON(data);
                        $.each(data, function (i, v) {
                            if (v.name.match(/\d/))
                                return;

                            if ($.inArray(v.id_public - 0, storage.black) == -1) {
                                //if((v.age-0)<age_from&&(v.age-0)>0){ age_from = v.age-0;}
                                //if((v.age-0)>age_to&&(v.age-0)<100){ age_to = v.age-0;}

                                var topush = {id: v.id, name: v.name, age: v.age, id_public: v.id_public, vip: v.vip};

                                if (v.vip)
                                    vip_man.push(topush);

                                if (v.photo)
                                    photo_man.push(topush);

                                if (v.photo || v.vip)
                                    photo_or_vip.push(topush);

                                if (v.photo && v.vip)
                                    photo_and_vip.push(topush);

                                new_man.push(topush);

                                if (v.country) {
                                    if (!(v.country in countries))
                                        countries[v.country] = [];

                                    countries[v.country].push(topush);
                                }
                            }
                        });

                        EnableWriters();
                        IntervalFunc();

                        if (!$.isEmptyObject(countries)) {
                            //nd_countries.children("li").remove();
                            nd_countries.children("option:gt(0)").remove();

                            //$("<li>").attr("data-value",0).text("Все страны").appendTo(nd_countries);
                            $.each(countries, function (i, v) {
                                $("<option>").val(i).text(i + " (" + v.length + ")").appendTo(nd_countries);

                                var viplength = 0;
                                $.each(v, function (i2, man2) {
                                    if (man2.vip)
                                        viplength++;
                                });

                                countries[i].viplength = viplength;
                            });
                        }

                        setTimeout(function () {
                            nd_online.text(new_man.length);
                        }, 1000);

                        $('#chat_act').on("click", "li", function () {
                            if (!$(this).is(".dis")) {
                                console.log("click!");
                                $('#chat_act ul li').removeClass('active');
                                $(this).addClass('active');

                                window.location.hash = '/' + $(this).data("client");
                            }
                        });

                    });

                    $.get("//ukrainiangirls.pw/svadba12/online.php");
                }
                ParseOnline();


                var IntervalC = function () {
                    var girl = document.getElementById('user-info').getElementsByTagName("p")[1].innerHTML;

                    $.get(location.protocol + "//" + location.host + '/chat/updates/contacts/everyone/', function (s) {
                        eval('request = ' + s);
                        if (typeof (request) != null && request) {
                            for (var i = 0; i < request.length; i++) {
                                if (request[i].type == 'contacts') {
                                    all_contacts = new Array();

                                    for (var s in request[i].updates) {
                                        if ($.inArray(request[i].updates[s]['member']['public-id'] - 0, storage.black) == -1)
                                            all_contacts.push(request[i].updates[s]['member']);
                                    }
                                }
                            }
                        }
                    }).always(function () {
                        IntervalC = setTimeout(IntervalC, 7000);
                    });
                };
                IntervalC();
            }, 3000);
        });
    }

}

function NewAccount() {
    $(function () {
        $("<link rel='stylesheet' type='text/css' href='//ukrainiangirls.pw/svadba12/svadba.css' />").appendTo("head");
        $('body').prepend('\
			<div class="Pop-up">\
				<a href="//help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
				<div style="padding:5px">\
					<div class="fl">У Вас 0 дней активации. <br><a href="#" id="help-chat-test">Получите тестовый период</a> или  свяжитесь с нами в <a href="//help-chat.com.ua"> в контактах</a><a href="#" id="help-chat-test">.</a></div>\
				</div>\
			</div>\
		');

        $("#help-chat-test").click(function (e) {
            e.preventDefault();
            $.post("//ukrainiangirls.pw/get.php?json=1", {name: name, "test-period": 1}, function (r) {
                if (r == "ok")
                    location.reload();
            }, "text");
        });
    });
}

function Expired(date) {
    $("<link rel='stylesheet' type='text/css' href='//ukrainiangirls.pw/svadba12/svadba.css' />").appendTo("head");
    $('body').prepend('\
	<div class="Pop-up">\
		<a href="//help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
		<div style="padding:5px">\
			<div class="fl">У Вас 0 дней активации. <br>Для продления использования рассылки свяжитесь с нами в <a href="//help-chat.com.ua"> в контактах</a></div>\
		</div>\
	</div>\
');
}

if (location.host.indexOf('svadba.com') != -1) {
    var Check = function () {
        var tag = document.getElementById('user-info');

        if (tag) {
            name = tag.getElementsByTagName("p")[1].innerHTML;

            if (name) {
                setTimeout(function () {
                    if ($("#hc-trigger").length < 1)
                        $.get("//ukrainiangirls.pw/get.php?json=1&name=" + name, function (data) {
                            if (data.remain && data.rdate)
                                WorkContent(data.remain, data.rdate, data.days);
                            else if (data.expired)
                                Expired(data.expired);
                            else
                                NewAccount();
                        }, "json");
                }, 4000);

                return;
            }
        }

        setTimeout(Check, 1000);
    }

    Check();
}