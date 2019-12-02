var name="?",
	script;

function WorkContentM(remain,rdate,days)
{
    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="7"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td><td rowspan="2"><select id="photos" title="Фотки" multiple><option value="0">-фото-</option></select> <input type="button" id="view" title="Просмотр" value="П" /> <input type="button" id="visual" title="Визуально" value="В" /></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="writers">Писатели</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /> <input type="button" id="help" value="?"></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /><input type="button" id="exportb" value="Э" title="Экспорт чёрного списка" /></td><td><select id="girl" title="Девушка"></select></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr><tr id="visual-images" style="display:none"><td colspan="8"><fieldset id="visual-photos"><legend>Фото</legend></fieldset> <fieldset id="visual-videos"><legend>Видео</legend></fieldset></td></tr></table>\
</div>');
	$("#sparner").mouseout(function(){
		$(this).scrollTop(0);
	});
    var storage = localStorage.getItem("jump4love-mail-" + name),
        black = $("#black"),
        goal = $("#goal"),
        subject = $("#subject"),
        run = $("#run"),
        text = $("#textarea"),
        girl = $("#girl"),
        photos = $("#photos"), photos_data={}, videos_data={}, view = $("#view"),
        writers = $("#writers"),
        info = $("#info"), queue = [],

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
        }, EnableBlack = function () {
            var no = $("#black option:first");
            if (black.find("option").size() > 1) {
                black.prop("disabled", false);
                no.text("-черный список-");
            } else {
                black.prop("disabled", true);
                no.text("-пусто-");
            }
        },
    EnableWriters = function ()
    {
        var a = $("#writers option:first");
        if (writers.find("option").size() > 1) {
            writers.prop("disabled", false);
            a.text("-писатели-")
        }
        else {
            writers.prop("disabled", true);
            a.text("-нет писателей-")
        }
    }, Status = function (n) {
            info.text(n + ", " + queue.length);
        },

		LoadPhotos=function(){
			var D;

			if(!(storage.girl in photos_data))
				D=$.get("//api.prime.date/v1/upload/get-mail-media-gallery?idUser="+storage.girl,function(json){
					photos_data[ storage.girl ]=json.data.images;
					videos_data[ storage.girl ]=json.data.videos;
				},"json");
			else
			{
				D=jQuery.Deferred();
				D.resolve();
			}

			girl.prop("disabled",true);
			
			D.done(function(){
				photos.find("option:gt(0)").remove();

				$("#visual-photos img").remove();
				
				$.each(photos_data[ storage.girl ],function(i,v){
					$("<option>").text(v.id).appendTo( photos );

					$("<img>").attr("src",v.url_thumbnail).addClass("att"+v.id).data("id",v.id).appendTo("#visual-photos");
				});

				$("<option>").prop("disabled",true).text("--Video--").appendTo( photos );

				$.each(videos_data[ storage.girl ],function(i,v){
					$("<option>").text(v.id).appendTo( photos );

					$("<img>").attr("src",v.url_thumbnail).addClass("att"+v.id).data("id",v.id).appendTo("#visual-videos");
				});

				girl.prop("disabled",false);
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
        if (n)
        {
			if(!(storage.girl in storage.black))
				storage.black[storage.girl]={};

            $.each(n.split(/\D+/),function (key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    storage.black[storage.girl][val] = "";
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

		if(!(storage.girl in storage.black))
			storage.black[storage.girl]={};

        if (n && typeof storage.black[storage.girl][n] == "undefined") {
            t.val(n).text(n);
            delete storage.black[storage.girl][v];
            storage.black[storage.girl][n] = "";
            SaveStorage();
        }
    });
    $("#delb").click(function () {
        var v = black.val(),
            t = $("#black option:selected");

		if(!(storage.girl in storage.black))
			storage.black[storage.girl]={};

        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.black[storage.girl][v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
    });
    writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();
    $("#export").click(function(){
        var out="";
        $.each(storage.writers,function(k){
            out+=", "+k;
        });
        prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#exportb").click(function(){
		if(!(storage.girl in storage.black))
			storage.black[storage.girl]={};

        var out="";
        $.each(storage.black[storage.girl],function(k){
            out+=", "+k;
        });
        prompt("Сохраните чёрный список:",out.substr(2));
        return false;
    });
    $("#addw").click(function ()
    {
        var n = prompt("Введите ID писателя(ей)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (writers.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(writers);
                    writers.val(val).change();
                    storage.writers[val] = "";
                }
            });
            EnableWriters();
            SaveStorage();
        }
    });
    $("#editw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected"), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof storage.writers[n] == "undefined") {
            t.val(n).text(n);
            delete storage.writers[v];
            storage.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected");
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete storage.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });

    $("#visual").click(function ()
    {
        $("#visual-images").toggle();
    });

	photos.change(function(){
		$("#visual-photos img.selected").removeClass("selected");
		
		var val=$(this).val();
		
		$.each(Array.isArray(val) ? val : [val],function(i,v){
			$("#visual-photos img.att"+v).addClass("selected");
		});
	});

	 $("#visual-images").on("click","img",function(e){
		var val=photos.val();

		if(!Array.isArray(val))
			val=[];

		var th=$(this),
			id=th.data("id"),
			ind=val.indexOf( id );

		if(e.ctrlKey)
		{
			if(th.hasClass("selected"))
				val.splice(ind,1);
			else
				val.push(id);
		}
		else
			val=[id];

		$("#visual-photos img.selected").filter(function(){
			return val.indexOf( $(this).data("id") )<0;
		}).removeClass("selected");

		$("#visual-photos img").filter(function(){
			return val.indexOf( $(this).data("id") )>-1;
		}).addClass("selected");

		photos.val( val.length>0 ? val : null );
	 });

    subject.change(function () {
        var v = $(this).val(),
            save = storage.active != v,
            controls = $("#dels,#edits,#saves,#run");
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
    });

    $("#adds").click(function () {
        var n = prompt("Введите тему письма");
        if (n) {
            $("<option>").val(storage.last).text(n).appendTo(subject);
            storage[storage.last] = {
                title: n,
                text: text.val(),
                sent: ",",
                cnt: 0
            };
            subject.val(storage.last++).change();
        }
    });
    $("#saves").click(function () {
        SaveTemplate();
        SaveStorage();
    });
    $("#edits").click(function () {
        var v = subject.val(),
            t = $("#subject option:selected"),
            n = prompt("Введите новую тему письма", t.text());
        if (n && typeof storage[v] != "undefined") {
            t.text(n);
            storage[v].title = n;
            SaveStorage();
        }
    });
    $("#dels").click(function () {
        var v = subject.val(),
            t = $("#subject option:selected");
        if (v && (typeof storage[v] == "undefined" || confirm("Вы действительно хотите удалить письмо \"" + t.text() + "\"?"))) {
            var next = t.next().size() > 0 ? t.next() : t.prev();
            t.remove();
            delete storage[v];
            subject.val(next.val()).change();
        }
    });
	$("#eraseb").click(function(e){
		e.preventDefault();

		if(confirm("Вы действительно хотите очистить чёрный список?"))
		{
			$("#black option:gt(0)").remove();

            storage.black[storage.girl]={};
            black.change();
            EnableBlack();
            SaveStorage();
		}
	});
    goal.change(function ()
    {
        var a = black.closest("td"), tdw = writers.closest("td");
        storage.goal = $(this).val();
        if (storage.goal == "writers") {
            tdw.show();
            a.hide();
            EnableWriters()
        }
        else {
            tdw.hide();
            a.show();
            EnableBlack()
        }
    });
	
	
	
	girl.change(function(){
		storage.girl=$(this).val();

		$("#black option:gt()").remove();

		if(storage.girl in storage.black)
			$.each(storage.black[storage.girl],function(k,v){
				$("<option>").text(v ? v : k).val(k).appendTo(black);
			});

		EnableBlack();
		SaveStorage();
		LoadPhotos();
	});

    view.click(function () {
		var ph=photos.val();

		if(Array.isArray(ph))
			ph=ph.pop();

        if ( ph > 0)
		{
			$.each(photos_data[ storage.girl ],function(i,v){
				if(v.id==ph)
				{
					window.open(v.url_original);
					return false;
				}
			});

			$.each(videos_data[ storage.girl ],function(i,v){
				if(v.id==ph)
				{
					window.open("https://prime.date/#start");
					return false;
				}
			});
		}
    });
	
		//Получение девушек
	$.get("//api.prime.date/v1/female/list?id=0",function(data){
		$.each(data.data,function(i,fem){
			$("<option>").text( fem.name ).val( fem.id ).appendTo(girl);
		});

		if (storage) {
			storage = jQuery.parseJSON(storage) || {};
			if (typeof storage.last == "undefined")
			{
				storage = {
					last: 1,
					active: 0,
					black: {},
					girl: 0,
					goal: "search"
				};
				girl.change();
			}
			else {
				$.each(storage, function (k, v) {
					if (k == parseInt(k)) $("<option>").val(k).text(v.title).appendTo(subject);
				});

				if(storage.girl)
					girl.val(storage.girl);

				if(storage.girl in storage.black)
					$.each(storage.black[storage.girl], function (k, v) {
						$("<option>").text(v ? v : k).val(k).appendTo(black);
					});
				else
					storage.black = {};
				
				if (storage.goal) goal.val(storage.goal);

				if (storage.writers)
				{
					$.each(storage.writers, function (k, v) 
					{
						$("<option>").text(v ? v : k).val(k).appendTo(writers) 
					});
				}
				else {
					storage.writers = {};
				}

				EnableWriters();
				EnableBlack();
				girl.change();
			}
		}
		else
		{
			storage = {
				last: 1,
				active: 0,
				black: {}, writers : {},
				girl: 0,
				goal: "search"
			};
			girl.change();
		}

		subject.val(storage.active).change();
		goal.change();
	},"text");
	//[E] Получение девушек

    var top, tos, runned = false,
        inprogress = ",", favourites = {}, cnt = 0,
        sta,
        ReStartSender,
		attach={},
		StartSender = function ()
		{
           if (queue.length==0) {
                ReStartSender();
                return;
            }

           var v=queue.shift();

			$.post("/starter/individual",$.extend({
				idFemale:storage.girl,
				idMale:v.id,
				"content[type]":"mail",
				"content[body]":v.t
			},attach),function(json) {
				v.F(true);
				$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
				//v.F(json.name=="OK");
			},"json").fail(function() {
				v.F(false);
			}).always(function () {
				if (runned)
					ReStartSender();
			});
        },
		Parse4Send = function () {
            if (queue.length>0)
			{
                h = setTimeout(Parse4Send, 5000);
                return;
            }

			if(!(storage.girl in storage.black))
				storage.black[storage.girl]={};

			var black=","+Object.keys(storage.black).join(",")+",";

           $(".summary + table tr:has(td)").each(function () {
                var id=$("td:first",this).text().trim()-0,
					a=$("td:eq(4) a", this).text().split(","),
					name=a[0].trim(),
					age=a[1].trim()-0,
                    repl = {
                        name: name,
                        age: age ? age[0] : ""
                    };

                if (sta.sent.indexOf("," + id + ",") == -1 && inprogress.indexOf("," + id + ",") ==- 1 && !(id.toString() in storage.black) && black.indexOf(","+id+",")==-1) {
                    inprogress += id + ",";

                    var s = sta.title.replace(/{name1}/ig, Name1(repl.name)).replace(/{name2}/ig, Name2(repl.name)),
                        t = sta.text.replace(/{name1}/ig, Name1(repl.name)).replace(/{name2}/ig, Name2(repl.name));
                    
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
            });

            if (runned) {
                var next=$("a.item.next");

				if(next.length>0)
				{
					/*var el = document.createElement('script');
					el.innerHTML = '$("a.item.next").click()';
					document.head.appendChild(el).parentNode.removeChild(el);*/
					//next.click();
					next.get(0).dispatchEvent( new CustomEvent('click') );
					top = setTimeout(Parse4Send, 10000);
				}
				else
				{
					run.click();
					alert("Результаты поиска подошли к концу");
				}
            }
        };
    ReStartSender = function () {
        if (runned) tos = setTimeout(StartSender, 15000+parseInt(Math.random()*7000));
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
			storage.girl=girl.val();

            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = storage[storage.active];

			//Photos Add
			attach={};

			var ph=photos.val(),
				index=0;

			if ( ph > 0 || Array.isArray(ph))
			{
				$.each(photos_data[ storage.girl ],function(i,v){

					if(v.id==ph || Array.isArray(ph) && ph.indexOf(v.id)>-1)
					{
						$.each(v,function(ii,vv){
							ii="content[images]["+index+"]["+ii+"]";
							attach[ ii ]=vv;
						});

						index++;
					}
				});

				index=0;

				$.each(videos_data[ storage.girl ],function(i,v){
					if(v.id==ph || Array.isArray(ph) && ph.indexOf(v.id)>-1)
					{
						$.each(v,function(ii,vv){
							ii="content[videos]["+index+"]["+ii+"]";
							attach[ ii ]=vv;
						});

						index++;
					}
				});
			}
			//Photos Add

			if(!(storage.girl in storage.black))
				storage.black[storage.girl]={};
			
			if( $(".summary + table").length<1 ) alert("Нажмите кнопку 'Search males'");
            else if (sta.text == "") alert("Введите текст письма!");
            else if (sta.title == "") alert("Введите тему письма!");
            else {
				$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: sta.text});
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");
                switch (storage.goal) {
                case "writers":
					var f = writers.find("option"),
							find_black=0;

						if (f.size() < 2) {
                            alert("Заполните писателей");
                            run.click()
                        }
                        else
                        {
                            Status(0, 0);
                            f.each(function ()
                            {
                                var d = $(this).val();
                                if (d != 0 && !(d in storage.black[storage.girl]))
                                {
                                    $.get(location.protocol + "//" + location.hostname + "/operator/get-male/" + d, 
                                    function (json) 
                                    {
                                        if (json.data.name) 
                                            queue.push({
                                                id : json.data.id,
                                                s : sta.title.replace(/{age}/ig, json.data.personal.age).replace(/{name}/ig, json.data.name ).replace(/{name1}/ig, Name1(json.data.name)).replace(/{name2}/ig, Name2(json.data.name)), 
                                                t : sta.text.replace(/{age}/ig, json.data.personal.age).replace(/{name}/ig, json.data.name ).replace(/{name1}/ig, Name1(json.data.name)).replace(/{name2}/ig, Name2(json.data.name)), 
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
                                    },"json");
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
                    Parse4Send();
                }
                StartSender();
            }
        }
    });

	setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if (date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
}

function NewAccountM()
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

function ExpiredM(date)
{
	$("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
<h3 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date+
'</h3>\
</div>');
}

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});

	$("<iframe>").attr("src","https://prime.date/account").css("visibility","hidden").load(function(e){
		var interval=setInterval(function(){
			name=$(".navbar-right .navbar-link",this.contentWindow.document).text();

			if(name)
			{
				clearInterval(interval);
				setTimeout(function(){
					if($("#sparner").length<1)
						$.get("//ukrainiangirls.pw/get.php",{json:1,name:name},function(data){
							if(data.remain && data.rdate)
								WorkContentM(data.remain,data.rdate);
							else if(data.expired)
								ExpiredM(data.expired);
							else
								NewAccountM();
						},"json");

				},4000);
			}
		}.bind(this),4000);
	}).appendTo("body");
	
	var GetIds=function(offset){
		$.post("/connections/mails",{type:"inbox/all",limit:15,offset:offset},function(json){
			var men=[];

			json.data.mails.forEach(function(item){
				men.push( item.idMale );
			});

			if(men.length>0)
				$.post("//ukrainiangirls.pw/get.php",{men:"prime.date",ids:men.join(",")},$.noop,"text");

			if(json.data.mails.length>14)
				GetIds(offset+15);
			else
				localStorage.setItem("Parsed","true");
		},"json");
	};

	if(!localStorage.getItem("Parsed"))
		GetIds(0);
});