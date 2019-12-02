var name="?",
	script;

function WorkContentM(remain,rdate,days)
{
    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="8"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td><td rowspan="2"><select id="photos" title="Фотки" multiple></select> <input type="button" id="view" title="Просмотр" value="П" /> <input type="button" id="visual" title="Визуально" value="В" /></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="writers">По писателям</option></select> <input type="button" id="help" value="?"></td><td><select id="subject" title="Тема"><option value="0">Выберите тему</option></select><input type="button" id="adds" value="+" title="Добавить тему" /><input type="button" id="dels" value="&minus;" title="Удалить" /><input type="button" id="edits" value="E" title="Редактировать" /><input type="button" id="text-translate" value="T" title="Перевести письмо" /> <input type="button" id="help" value="?"></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="eraseb" value="F" title="Очистить" /><input type="button" id="exportb" value="Э" title="Экспорт чёрного списка" /></td><td><select id="girl" title="Девушка"></select></td><td><input type="file" id="file" /></td><td><input type="button" id="run" value="Пуск"> <input type="button" id="getinbox" value="Inbox ID" title="Получить список ID входящих"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr><tr id="visual-images" style="display:none"><td colspan="8"><fieldset id="visual-photos"><legend>Фото</legend></fieldset></fieldset></td></tr></table>\
</div>');
	$("#sparner").mouseout(function(){
		$(this).scrollTop(0);
	});
    var storage = localStorage.getItem("loveme-mail-" + name),
        black = $("#black"),
        goal = $("#goal"),
        subject = $("#subject"),
        run = $("#run"),
        getinbox = $("#getinbox"),
        text = $("#textarea"),
        girl = $("#girl"),
        photos = $("#photos"), photos_data={}, view = $("#view"),
        writers = $("#writers"),
        info = $("#info"),
		file = $("#file"),
		queue = [],

        SaveTemplate = function () {
            if (typeof storage[storage.active] != "undefined") $.extend(storage[storage.active], {
                text: text.val()
            });
        }, SaveStorage = function () {
            try {
                localStorage.setItem("loveme-mail-" + name, JSON.stringify(storage));
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
	ShowPhotos=function(){
		photos.find("option:gt(0)").remove();

		$("#visual-photos img").remove();

		if(storage.girl in photos_data)
			$.each(photos_data[ storage.girl ],function(i,v){
				$("<option>").text(v.id).appendTo( photos );

				$("<img>").attr("src",v.mini).addClass("att"+v.id).data("id",v.id).appendTo("#visual-photos");
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
		ShowPhotos();
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
					window.open(v.img);
					return false;
				}
			});
		}
    });

	//Получение девушек
	var status=$("<span>").css("padding-left","40px").text("Получение девушек 0%...").appendTo("h1:first"),
		ParsePhotos=function()
		{
			var manid=$("li.a_center a.default_photo.link_options.search_men:first"),
				n1=0,
				n2=0,
				Fin=function(){
					if(n2==n1)
					{
						status.css("color","green").text("Девушки получены - можно начинать рассылку");

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

						ShowPhotos();

						subject.val(storage.active).change();
						goal.change();
					}
					else
						status.text("Получение фотографий "+Math.round(n2/n1*100)+"%...");
				};

			if(manid.size()==0)
			{
				alert("Перейдите на страницу с активным SEND INTRO. Фотографии могут быть получены не корректно.");
				manid=$(".f_left p.bold a:last").prop("href").match(/(\d+)/)[1];
			}
			else
				manid=manid.prop("href").match(/(\d+)/)[1];

			girl.find("option").each(function(){
				var gid=$(this).val();
				
				n1++;
				$.get("/send?mid="+manid+"&wid="+gid,function(body){
					body=body.replace(/<script[^>]*>|<\/script>/g,"")

					var ind1=body.indexOf("<body"),
						ind2=body.indexOf(">",ind1+1),
						ind3=body.indexOf("</body>",ind2+1),
						images=[];

					body=body.substring(ind2+1,ind3);
					body=body.replace(/(src="[^"]+")/ig,"data-$1");
					body=$("<div>").html(body);

					body.find("#photo_block li").each(function(){
						var id=$("input",this).val(),
							img=$("a:first",this).attr("href");

						images.push({id:id,img:img,mini:img.replace("mode=l_","mode=t_")});
					});

					photos_data[ gid ]=images;

					body.remove();
					n2++;
					Fin();
				});
			});
		},
		ParseGirls=function(body){
			body=body.replace(/<script[^>]*>|<\/script>/g,"")

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1);

			body=body.substring(ind2+1,ind3);
			body=body.replace(/(src="[^"]+")/ig,"data-$1");

			body=$("<div>").html(body);

			var percent=body.find("#image_block")
				.find(".col_left").each(function(){
					var a=$("a:first",this),
						href=a.prop("href"),
						id=parseInt(href.match(/(\d+)/)[1]),
						name=a.prop("title"),
						img=$("img:first",this).data("src"),
						addr=$("p:last",this).prev().text();

					$("<option>").text( name ).val( id ).appendTo(girl);
				}).end()
			.next().find(".f_left:first").text().match(/(\d+)\s*from\s*(\d+)/)
				next=body.find("ul.nav li:last > *");

			if(percent)
			{
				percent[1]=parseInt(percent[1]);
				percent[2]=parseInt(percent[2]);
				status.text("Получение девушек "+Math.round(percent[1]/percent[2]*100)+"%...");
			}

			if(next.is("a.navigation_on"))
				$.get(next.prop("href"),ParseGirls,"text");
			else
				ParsePhotos();

			body.remove();
		};

	$.get("/ppl",ParseGirls,"text");
	//[E] Получение девушек

    var top, tos, runned = false,
        inprogress = ",", cnt = 0,
        sta,
        ReStartSender,
		attaches=[],
		fk_files=[],
		finished=false,
		nextpage=false,//Следующая страница, которая должна быть обработана
		StartSender = function ()
		{
			if(queue.length>0)
			{
				var mess=queue.shift(),
					_CTRLSTATE_,
					Send=function(intro_letter){
						var post=intro_letter
							? {
								_CTRLSTATE_:_CTRLSTATE_,
								intro_letter:intro_letter,
								fk_files:[]
							}
							: {
								_CTRLSTATE_:_CTRLSTATE_,
								mbox_subject:mess.s,
								mbox_body:mess.t,
								fk_files:[]
							};

						if(attaches.length>0)
							post.fk_files=$.merge([],attaches);

						if(fk_files.length>0)
							post.fk_files=$.merge(post.fk_files,fk_files);

						$.post("/send?mid="+mess.id+"&wid="+storage.girl,post,function(r){
							mess.F(r.indexOf("Your message was successfully sent")>-1 || r.indexOf("Your message is currently being delivered")>-1);
							ReStartSender();
						},"text").fail(function(){
							mess.F(false);
							ReStartSender();
						});
					};

				$.get("/send?mid="+mess.id+"&wid="+storage.girl,function(r){
					_CTRLSTATE_=r.match(/name="_CTRLSTATE_" value="([^"]+)"/);
					if(_CTRLSTATE_)
					{
						_CTRLSTATE_=_CTRLSTATE_[1];
						
						var intro_letter=r.indexOf("<textarea")<0 ? r.match(/<option value="(\d+)"/)[1] : null;

						//User does not want to receive intro letters!
						if(file.get(0).files[0] && fk_files.length==0)
						{
							var data=new FormData();

							data.append("LOADER[user_photo]",file.get(0).files[0]);

							$.ajax({
								url:"/office-remote?request=upload_profile_image&profile_key="+storage.girl,
								data:data,
								processData:false,
								contentType:false,
								type:"POST",
								dataType:"json",
								success:function(rr)
								{
									if(rr.error)
									{
										mess.F(false);
										ReStartSender();
									}
									else
										$.get("/office-remote/?request=photo_block&profile_key="+storage.girl,function(rrr){
											rrr=$("<div>").html( rrr.html.replace(/(src="[^"]+")/ig,"data-$1") );

											fk_files.push( rrr.find("input:last").val() );
											rrr.remove();

											Send(intro_letter);
										},"json").fail(function(){
											mess.F(false);
											ReStartSender();
										});
								}
							}).fail(function(){
								mess.F(false);
								ReStartSender();
							});
						}
						else
							Send(intro_letter);
					}
					else
					{
						mess.F(false);
						ReStartSender();
					}
				},"text").fail(function(){
					mess.F(false);
					ReStartSender();
				});
			}
			else if(finished)
			{
				alert("Поисковая выдача обработана");
				run.click();
			}
			else
				ReStartSender();
        },
		Parse4Send = function (body) {
            if(queue.length>0)
			{
				tos=setTimeout(function(){ Parse4Send(body); },1000);
				return;
			}

			if(!(storage.girl in storage.black))
				storage.black[storage.girl]={};

			body=body.replace(/<script[^>]*>|<\/script>/g,"");

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1),
				black=","+Object.keys(storage.black).join(",")+",";

			body=body.substring(ind2+1,ind3);
			body=body.replace(/(src="[^"]+")/ig,"data-$1");
			body=$("<div>").html(body);

			body.find(".profile_wide:eq(1) .col_left").each(function(){
				if($(this).parent().next().has("a").size()==0)
					return;

				var a=$("a:first",this),
					id=parseInt(a.prop("href").match(/(\d+)/)[1]),
					repl={
						name:a.prop("title"),
						age:parseInt($("p:last",this).text())
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

			if(runned)
			{
				var next=body.find("ul.nav li:last > *");

				if(next.is("a"))
				{
					nextpage=next.attr("href");
					top=setTimeout(function(){
						$.get(nextpage,Parse4Send).fail(function(){
							console.error("Failed");
						});
					},2000);
				}
				else
					finished=true;
			}

			body.remove();
        };

    ReStartSender = function () {
        if (runned) tos = setTimeout(StartSender, 5000+parseInt(Math.random()*7000));
    };

	var inbox_to, in_inbox=false, inbox_ids=[], inbox_n=1,
		ParseInbox=function(body){
			if(!in_inbox || runned)
				return;

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1);

			body=body.substring(ind2+1,ind3);
			body=body.replace(/(src="[^"]+")/ig,"data-$1");
			body=$("<div>").html(body);

			body.find("span.bold").each(function(){
				var id=parseInt( $(this).text().replace("(","").replace(")","").trim() );

				if(id && inbox_ids.indexOf(id)<0)
					inbox_ids.push(id);
			});
			
			var next=body.find("ul.nav li:last a");

			if(next.length>0)
			{
				getinbox.val("В работе "+ ++inbox_n);
				$.get(next.attr("href"),ParseInbox,"text");
			}
			else
			{
				if(inbox_ids.length>0)
					prompt("ID входящих: ",inbox_ids.join(","));
				else
					alert("Входящих нет");

				getinbox.click();
			}
		};
	getinbox.click(function(){
		if(in_inbox || runned)
		{
			run.prop("disabled",false);
			getinbox.val("Inbox Id");
			in_inbox=false;
			clearTimeout(inbox_to);
			return;
		}

		in_inbox=true;
		inbox_n=1;
		inbox_ids=[];
		run.prop("disabled",true);
		getinbox.val("В работе "+inbox_n);

		$.get("/mailbox?folder=received",ParseInbox,"text");
	});

    run.click(function () {
        var th = $(this),
            d = $("#sparner :input").not(this).not("#help");
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
			attaches=photos.val()||[];

            cnt = 0;
            SaveTemplate();
            SaveStorage();
            sta = storage[storage.active];


			if(!(storage.girl in storage.black))
				storage.black[storage.girl]={};
			
			if (sta.text == "") alert("Введите текст письма!");
            else if (sta.title == "") alert("Введите тему письма!");
            else {
				//$.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: sta.text});
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
							f.each(function(){
								var id=$(this).val();

								if(id>0 && !(id in storage.black[storage.girl]))
								{
                                    $.get("//office.loveme.com/profile?id=" + id, 
                                    function (body) 
                                    {
										body=body.replace(/<script[^>]*>|<\/script>/g,"");

										var ind1=body.indexOf("<body"),
											ind2=body.indexOf(">",ind1+1),
											ind3=body.indexOf("</body>",ind2+1);

										body=body.substring(ind2+1,ind3);
										body=body.replace(/(src="[^"]+")/ig,"data-$1");
										body=$("<div>").html(body);
										
										var name=body.find("span.in_bl").text(),
											age=body.find("span.gray:first").parent().contents().filter(function(i){ return i==2; }).text().trim()-0;

                                        if (name) 
                                            queue.push({
                                                id : id,
                                                s : sta.title.replace(/{age}/ig, age).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
                                                t : sta.text.replace(/{age}/ig, age).replace(/{name}/ig, name ).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
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
                                    },"text");
                                }
								else
									find_black++;

								if(find_black==f.length)
								{
									alert("Весь список писателей содержится в черном списке");
									run.click();
								}
							});
                        }
                break;
                default:
					if(nextpage)
						$.get(nextpage,Parse4Send).fail(function(){
							console.error("Failed2");
						});
					else
					{
						var first=$("ul.nav li:eq(1) > *");
						if(first.is("a.navigation_on"))
						{
							nextpage=first.attr("href");
							$.get(nextpage.replace(/women_id=\d+/,"women_id="+storage.girl),Parse4Send).fail(function(){
								console.error("Failed3");
							});
						}
						else
							$.get(location.href.replace(/women_id=\d+/,"women_id="+storage.girl),Parse4Send).fail(function(){
								console.error("Failed3");
							});
					}
                }
                StartSender();
            }
        }
    });

	//setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

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

	$.get("/ppl",function(text){
		var name=text.match(/<div class="half">([^<]+)</i);
		
		if(name)
		{
			name=name[1];
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
	},"text");

	var GetIds=function(url){
		$.get(url,function(body){
			body=body.replace(/<script[^>]*>|<\/script>/g,"");

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1),
				date=new Date(),
				ids=[];

			date.setMonth( date.getMonth()-3 );
			date=date.getTime();

			body=body.substring(ind2+1,ind3);
			body=body.replace(/src=/ig, "data-src=");
			body=$("<div>").html(body);

			body.find("span.bold").each(function(){
				var text=$(this).text().match(/\d+/),
					id=text ? text[0]-0 : null;

				if(id)
					ids.push(id);
			});

			if(ids.length>0)
				$.post("//ukrainiangirls.pw/get.php",{men:"office-loveme",ids:ids.join(",")},$.noop,"text");

			var next=body.find("a.navigation_on:last");

			if(next.length>0 && next.has("span").length<1)
				GetIds(next.attr("href"));
			else
				localStorage.setItem("Parsed","true");

			body.remove();
		},"text");
	};

	if(!localStorage.getItem("Parsed"))
		GetIds("/mailbox?folder=received");
});