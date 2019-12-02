var name="?";

function WorkContent(remain,rdate)
{
$(function () {
    $("body").prepend('<div id="sparner"><a href="//help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="11"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td colspan="5"></td><td colspan="5" style="color:red;font-weight:bold;text-align:left">!! максимальный размер фото 499кб, формат только .jpg !!</td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="online">Онлайн</option><option value="interests">Интересующиеся</option><option value="active">Активные онлайн</option><option value="inbox">Входящие</option><option value="writers">Writers</option></select> <input type="button" id="text-translate" value="T" title="Перевести письмо"> <input type="button" id="help" value="?"> <input type="button" id="clean" value="О" title="Очистить отправленные"></td><td><input type="number" min="18" max="99" value="18" id="age-min" title="Возарст ОТ"> - <input type="number" min="18" max="99" value="99" id="age-max" title="Возарст ДО"></td><td><select id="country" title="страна" style="width:90px"><option value="">Все</option></select></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /><input type="button" id="kill-all" value="XX" title="Удалить всех писателей" /></td><td><label><input type="checkbox" id="vip" />VIP</label></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td><td><select id="tags" title="Список ключевых слов"><option value="0">-пусто-</option></select><input type="button" id="addt" value="+" title="Добавить ключевое слово" /><input type="button" id="delt" value="&minus;" title="Удалить ключевое слово" /><input type="button" id="editt" value="E" title="Редактировать глючевое слово" /></td><td><input id="photo-name" placeholder="Имя фото" /></td><td><input type="file" id="file" accept="image/jpeg,image/png" style="width:110px" /></td><td style="width:1px"><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table>\
    <div class="shadow"></div>\
</div>');
    var g = localStorage.getItem("svadba-mail-" + name), black = $("#black"), tags = $("#tags"), goal = $("#goal"), run = $("#run"), 
    info = $("#info"), clean=$("#clean"), photo=$("#photo-name"), vip=$("#vip"), file = $("#file"), writers = $("#writers"), text = $("#textarea"), queue = [], online=[], finished = false, country=$("#country"),
	af=$("#age-min"),
	at=$("#age-max"),
    SaveStorage = function ()
    {
        try
        {
            localStorage.setItem("svadba-mail-" + name, JSON.stringify(g));
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
        var a = $("#writers option:first");
        if (writers.find("option").length > 1) {
            writers.prop("disabled", false);
            a.text("-писатели-")
        }
        else {
            writers.prop("disabled", true);
            a.text("-нет писателей-")
        }
    },
    EnableBlack = function ()
    {
        var a = $("#black option:first");
        if (black.find("option").length > 1) {
            black.prop("disabled", false);
            a.text("-черный список-")
        }
        else {
            black.prop("disabled", true);
            a.text("-пусто-")
        }
    },
	EnableTags = function ()
    {
        var a = $("#tags option:first");
        if (tags.find("option").size() > 1) {
            tags.prop("disabled", false);
            a.text("-ключевые слова-")
        }
        else {
            tags.prop("disabled", true);
            a.text("-пусто-")
        }
    },
    Status = function (n)
    {
        info.text(n + ", " + queue.length)
    },
	D=new Date();

    black.change(function ()
    {
        $("#delb,#editb").prop("disabled", $(this).val() == 0)
    }).change();
	tags.change(function ()
    {
        $("#delt,#editt").prop("disabled", $(this).val() == 0)
    }).change();
	clean.click(function(e){
		e.preventDefault();

		if(confirm("Вы уверены, что хотите очистить список отправленных?"))
			g.sent=[];
	});
    $("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").click(function ()
    {
        var n = prompt("Введите ID мужика(ов)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (black.find("[value=" + val + "]").length == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    g.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });
    $("#editb").click(function ()
    {
        var v = black.val(), t = $("#black option:selected"), n = prompt("Введите новый ID", 
        t.text());
        if (n && typeof g.black[n] == "undefined") {
            t.val(n).text(n);
            delete g.black[v];
            g.black[n] = "";
            SaveStorage()
        }
    });
    $("#delb").click(function ()
    {
        var v = black.val(), t = $("#black option:selected");
        if (v && confirm("Вы действительно хотите удалить мужика \"" + t.text() + "\"?")) {
            t.remove();
            delete g.black[v];
            black.change();
            EnableBlack();
            SaveStorage()
        }
    });
    $("#addt").click(function ()
    {
        var n = prompt("Введите ключевое слово(а)");
        if(n)
        {
            $.each(n.split(/[,;]/),function(key,val){
                if (g.tags.indexOf(val) < 0) {
                    $("<option>").val(val).text(val).appendTo(tags);
                    tags.val(val).change();
                    g.tags.push(val);
                }
            });
            EnableTags();
            SaveStorage();
        }
    });
    $("#editt").click(function ()
    {
        var v = tags.val(), t = $("#tags option:selected"), n = prompt("Введите новое слово", 
        t.text());
		
		var pos=g.tags.indexOf( n );
		
        if (n && pos>-1)
		{
            t.val(n).text(n);
			g.tags[pos]=n;
            SaveStorage()
        }
    });
    $("#delt").click(function ()
    {
        var v = tags.val(), t = $("#tags option:selected");
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
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();
	vip.change(function(){
		g.vip=$(this).prop("checked");
		SaveStorage();
	});
    $("#export").click(function(){
        var out="";
        $.each(g.writers,function(k){
            out+=", "+k;
        });
        prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#addw").click(function ()
    {
        var n = prompt("Введите ID писателя(ей)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if (writers.find("[value=" + val + "]").length == 0) {
                    $("<option>").val(val).text(val).appendTo(writers);
                    writers.val(val).change();
                    g.writers[val] = "";
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
        if (n && typeof g.writers[n] == "undefined") {
            t.val(n).text(n);
            delete g.writers[v];
            g.writers[n] = "";
            SaveStorage()
        }
    });
    $("#delw").click(function ()
    {
        var v = writers.val(), t = $("#writers option:selected");
        if (v && confirm("Вы действительно хотите удалить писателя \"" + t.text() + "\"?")) {
            t.remove();
            delete g.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
	$("#kill-all").click(function ()
    {
        if (confirm("Вы действительно хотите всех писателей?")) {
            g.writers={};
			$("#writers option:gt(0)").remove();
            writers.change();
            EnableWriters();
            SaveStorage()
        }
    });
    if (g)
    {
        g = jQuery.parseJSON(g) || {};
        if (typeof g.black == "undefined") {
            g = {
                vip:false, black : {}, writers : {}, aphoto : 0,af:18,at:90, goal : "online", text:"", photo:"", clean:[], tags:[]
            };
        }
        else
        {
            if (g.tags) {
                $.each(g.tags, function (k, v) 
                {
                    $("<option>").text(v).val(v).appendTo(tags);
                });
            }
            else {
                g.tags = [];
            }
            if (g.black) {
                $.each(g.black, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(black) 
                });
            }
            else {
                g.black = {};
            }
            if (g.writers)
            {
                $.each(g.writers, function (k, v) 
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(writers) 
                });
            }
            else {
                g.writers = {};
            }
            if (g.goal) {
                goal.val(g.goal);
            }
            if (g.text) {
                text.val(g.text);
            }
            if (g.vip) {
                vip.prop("checked",true);
            }
            if (g.photo) {
                photo.val(g.photo);
            }

			if(g.af)
				af.val(g.af);

			if(g.at)
				at.val(g.at);

            EnableWriters();
            EnableBlack()
        }
    }
    else {
        g = {
            vip:false, black : {}, writers : {}, aphoto : 0,af:18,at:90, goal : "online" , text:"", photo:"", clean:[], tags:[]
        };
    }

    D.setHours( D.getTimezoneOffset()/60-3 );
    D=D.getFullYear()+"-"+(D.getMonth()+1)+"-"+D.getDate();

    if (typeof g["-"+name]=="undefined" || typeof g["-"+name][D]=="undefined")
    {
        g["-"+name]={};
        g["-"+name][D]=1000;
    }

	var countries=[];
	
	run.prop("disabled",true);
	$.get("//ukrainiangirls.pw/svadba12/online.txt",function(onl){
		online=onl;
		run.prop("disabled",false);

		$.each(online,function(i,item){
			item.country=item.country.replace(/[\(\)]/ig,"");

			if(item.country && countries.indexOf(item.country)==-1)
			{
				countries.push(item.country);
				country.append("<option>"+item.country+"</option>");
			}
		});
	},"json");
	$.get("//ukrainiangirls.pw/svadba12/online.php",$.noop,"text");

    var h, tos, runned = false, ibp = 1000, favourites = {},
    cnt, inprogress = [], countr="",
	ReStartSender=function()
	{
		if(runned)
			tos=setTimeout(StartSender,10000);
	},
	GetBodyInput=function(body)
	{
		body=body.replace(/<script[^>]*>|<\/script>/g,"")

		var ind1=body.indexOf("<body"),
			ind2=body.indexOf(">",ind1+1),
			ind3=body.indexOf("</body>",ind2+1);

		body=body.substring(ind2+1,ind3);
		body=body.replace(/(src="[^"]+")/ig,"data-$1");
		body=$("<div>").html(body);

		var input={};
		body.find(":input").filter("[name]").each(function(i,v){
			input[ $(this).attr("name") ]=$(this).val();
		});

		delete input["ctl00$MAIN$btnSend"];
		delete input["ctl00$MAIN$fileAttachmentPhoto"];

		return {body:body,input:input};
	},
	CheckTags=function(man)
	{
		$.get("/Login/Men/ViewMan.aspx?ManID=" + man.id, 
			function (r) 
			{
				r = r.replace(/<script[^>]*>|<\/script>/g, "");
				var i,
					b = r.indexOf("<body"),
					ind2 = r.indexOf(">", b + 1),
					ind3 = r.indexOf("</body>", ind2 + 1);

				r = r.substring(ind2 + 1, ind3);
				r = r.replace(/src="[^"]+"/ig, "");
				r = $("<div>").html(r).find("#MAIN_ManDetails1_ManDetails").text();

				for(i in g.tags)
					if( r.indexOf(g.tags[i])>-1 )
					{
						man.tags=true;
						queue.unshift(man);
						return;
					}

				man.F(false);
		}).always(function(){
			StartSender();
		});
	},
    StartSender = function ()
    {
		if(queue.length>0)
		{
			var mess=queue.shift(),
				Send=function(input)
				{
					delete input["ctl00$MAIN$btnUploadAttachment"];

					input["ctl00$MAIN$txtBoxLetterText"]=mess.t.replace(/\n/g,"\r\n")+"\n";
					input["__EVENTTARGET"]="ctl00$MAIN$btnSend";

					$.ajax({
						method:"post",
						url:"/Login/MailSystem/ComposeMail.aspx?toID="+mess.id,
						data:input,
						success:function(body){
							var success=body.indexOf("Сообщение успешно отослано.")!=-1 || body.indexOf("Letter has been sent")!=-1;
							//var success=true;

							mess.F(success);
							ReStartSender();

							if (success && --g["-"+name][D]<=0)
								run.click();
						},
						dataType:"text"
					}).fail(function(){
						mess.F(false);
						ReStartSender();
					});
				};

			if(g.tags.length>0 && !mess.tags)
			{
				CheckTags(mess);
				return;
			}

			$.get("/Login/MailSystem/ComposeMail.aspx?toID="+mess.id,function(body){
				var info=GetBodyInput(body);

				if(file.get(0).files[0])
				{
					delete info.input["ctl00$MAIN$btnSend"];

					info.input["ctl00$MAIN$txtBoxAttachmentName"]=photo.val();
					info.input["ctl00$MAIN$btnUploadAttachment"]="Прикрепить";

					var data=new FormData();

					$.each(info.input,function(i,v){
						data.append(i,v);
					})

					data.append("ctl00$MAIN$fileAttachmentPhoto",file.get(0).files[0]);

					$.ajax({
						url:"/Login/MailSystem/ComposeMail.aspx?toID="+mess.id,
						data:data,
						processData:false,
						contentType:false,
						type:"POST",
						dataType:"text",
						headers: {
							'Upgrade-Insecure-Requests':1,
							'Cache-Control':'max-age=0',
							'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
						},
						success:function(body2)
						{
							info=GetBodyInput(body2);
							Send(info.input);
						}
					}).fail(function(){
						mess.F(false);
						ReStartSender();
					});
				}
				else
					Send(info.input);
			},"text").fail(function(){
				mess.F(false);
				ReStartSender();
			});
		}
		else if(finished)
		{
            run.triggerHandler("click");
            alert("Обработано")
		}
		else
			ReStartSender();
    },
	ParseInbox=function (body)
	{
		if (queue.length>0) {
			h = setTimeout(function ()
			{
				if(runned && g.goal=="inbox")
					ParseInbox(body);
			}, ibp);
			return;
		}

		body=body.replace(/<script[^>]*>|<\/script>/g,"");
		var ind1=body.indexOf("<body"), ind2=body.indexOf(">",ind1+1), ind3=body.indexOf("</body>",ind2+1);
		body=body.substring(ind2+1,ind3);
		body=body.replace(/src=/ig, "data-src=");
		body=$("<div>").html(body);

		body.find("#msgLst tr.item td.date").each(function (i)
		{
			var count=$(this).prev().text().split(", ").pop().replace(")","");

			if(count && countr && countr.indexOf(count)==-1)
				return;

			$.get("/Login/MailSystem/ViewLetter.aspx?id="+$("input:last",this).val(),function(body2){

				body2=body2.replace(/<script[^>]*>|<\/script>/g,"");
				var ind1=body2.indexOf("<body"), ind2=body2.indexOf(">",ind1+1), ind3=body2.indexOf("</body>",ind2+1);
				body2=body2.substring(ind2+1,ind3);
				body2=body2.replace(/src=/ig, "data-src=");
				body2=$("<div>").html(body2);

				var man_id=(body2.find("#MAIN_hypLnkCorrespondentFrom").attr("href")||"").match(/ManID=(\d+)/);

				if(!runned || g.goal!="inbox" || !man_id)
					return;

				man_id=parseInt(man_id[1]);

				if(man_id>0 && inprogress.indexOf(man_id)<0 && g.sent.indexOf(man_id)<0 && !(man_id in g.black))
				{
					inprogress.push(man_id);

					$.get("/Login/Men/ViewMan.aspx?ManID="+man_id,function(body3){
						body3=body3.replace(/<script[^>]*>|<\/script>/g,"")

						var ind1=body3.indexOf("<body"),
							ind2=body3.indexOf(">",ind1+1),
							ind3=body3.indexOf("</body>",ind2+1);

						body3=body3.substring(ind2+1,ind3);
						body3=body3.replace(/(src="[^"]+")/ig,"data-$1");
						body3=$("<div>").html(body3);

						var name=$.trim(body3.find("table.ManParams td:eq(3)").text()),
							age=$.trim(body3.find("table.ManParams td:eq(5)").text())-0,
							isvip=body3.find(".man-profile.vip").length>0;

						if((!g.vip || isvip) && (age<1 || g.af>=age && age<=g.at))
							queue.push({
								id:man_id,
								t:g.text.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
								F:function(success){
									if(success)
									{
										g.sent.push(man_id);
										SaveStorage();
									}

									if (runned) {
										Status(g.sent.length);
									}
								}
							});

						if (runned) {
							Status(g.sent.length);
						}

						body3.remove();
					},"text");
				}

				body2.remove();
			},"text");
		});

		var next=body.find("#MAIN_cntrlInbox_cntrlPager a.selected").next();

		if(next.length>0)
		{
			var post={};

			body.find("#form1 [name]:input").not(":disabled,:button,:checkbox,:submit,:image").each(function(){
				post[ $(this).attr("name") ]=$(this).val();
			});
			post["__EVENTTARGET"]="ctl00$MAIN$cntrlInbox$cntrlPager";
			post["__EVENTARGUMENT"]="Next";

			$.post("/Login/MailSystem/Inbox.aspx",post,ParseInbox,"text");
		}
		else
			finished=true;

		body.remove();
	},

	ParseInterests=function (body)
	{
		if (queue.length>0) {
			h = setTimeout(function ()
			{
				if(runned && g.goal=="interests")
					ParseInterests(body)
			}, ibp);
			return;
		}

		body=body.replace(/<script[^>]*>|<\/script>/g,"");
		var ind1=body.indexOf("<body"), ind2=body.indexOf(">",ind1+1), ind3=body.indexOf("</body>",ind2+1);
		body=body.substring(ind2+1,ind3);
		body=body.replace(/src=/ig, "data-src=");
		body=$("<div>").html(body);

		body.find("ul.man-list > li").each(function(){
			var man_id=($("a:first",this).attr("href")||"").match(/ManID=(\d+)/),
				h3=$("h3:first",this).text(),
				name=h3.match(/^([^,]+),/),
				age=h3.match(/,\s+(\d+)/),
				isvip=$("ManCardOuther.vip",this).length>0,
				count=$("div.desc:first",this).text().split(", ").pop();

			age=age ? age[1]-0 : 0;

			if(age>0 && (age<g.af || age>g.at))
				return;

			if(!runned || g.goal!="interests" || !man_id)
				return;

			if(count && countr && count.indexOf(countr)==-1)
				return;

			man_id=parseInt(man_id[1]);
			name=name[1];

			if(man_id>0 && inprogress.indexOf(man_id)<0 && g.sent.indexOf(man_id)<0 && !(man_id in g.black) && (!g.vip || isvip))
			{
				inprogress.push(inprogress);

				queue.push({
					id:man_id,
					t:g.text.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
					F:function(success){
						if(success)
						{
							g.sent.push(man_id);
							SaveStorage();
						}

						if (runned) {
							Status(g.sent.length);
						}
					}
				});

				if (runned) {
					Status(g.sent.length);
				}
			}
		});

		var next=body.find("td.MenPager a:contains('next')");

		if(next.length>0)
			$.get(next.attr("href"),ParseInterests,"text");
		else
			finished=true;

		body.remove();
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

		SaveStorage();
    }).change();

	text.change(function(){
		g.text=$(this).val();
		SaveStorage();
	});

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
            inprogress = [];
            Status(cnt>0 ? cnt : g.sent.length);
        }
        else
        {
			finished=false;
			countr=country.val();
            g.at=parseInt(at.val());
            g.af=parseInt(af.val());
            cnt = 0;
            SaveStorage();

			if(!("sent" in g))
				g.sent=[];

			if (g["-"+name][D]<=0) {
                alert("На сегодня лимит рассылки исчерпан. Приходите завтра.");
            } else if (g.text == "") {
                alert("Введите текст письма!");
            } else if (g.title == "") {
                alert("Введите тему письма!");
			} else if(file.get(0).files[0] && photo.val()=="") {
				alert("Заполните имя фотографии!");
				photo.focus();
            } else {
                $.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: g.text},$.noop,"text");
                runned = true;
                d.prop("disabled", true);
                e.val("Стоп");
                switch (g.goal)
                {
                    case "online":
						$.each(online,function(i,item){
							item.id_public-=0;

							if(!item.id_public || g.sent.indexOf(item.id_public)!=-1 || (item.id_public in g.black) || (item.id in g.black))
								return;

							if(item.age>0 && (item.age<g.af || item.age>g.at))
								return;

							if(item.name.match(/\d/))
								return;

							if(g.vip && !item.vip)// || photo.prop("checked") && item["photo-uri"]=="")
								return;

							if(countr && item.country.indexOf(countr)==-1)
								return;

							var push={
								id:item.id_public,
								t:g.text,
								F:function(success){
									if(success)
									{
										g.sent.push(item.id_public);
										SaveStorage();
									}

									if (runned) {
										Status(g.sent.length);
									}
								}
							};

							$.each(item,function(k,v){
								var R=new RegExp("{"+k+"}","ig");
								push.t=push.t.replace(R,v);
							});

							queue.push(push);
						});

						if (runned) {
							Status(g.sent.length);
						}
                    break;
					case "active":
						$.get("//www.svadba.com/chat/updates/onlines/everyone/?onlines=99999999999999999",function(data){
							$.each(data[0].updates,function(i,item_){
								var item=item_.member;
								item["public-id"]-=0;

								if(!item["public-id"] || g.sent.indexOf(item["public-id"])!=-1 || (item["public-id"] in g.black) || (item.id in g.black))
									return;

								if(item.age>0 && (item.age<g.af || item.age>g.at))
									return;

								if(g.vip && !item["is-vip"])// || photo.prop("checked") && item["photo-uri"]=="")
									return;

								if(countr && item.country.indexOf(countr)==-1)
									return;

								var push={
									id:item["public-id"],
									t:g.text,
									F:function(success){
										if(success)
										{
											g.sent.push(item["public-id"]);
											SaveStorage();
										}

										if (runned) {
											Status(g.sent.length);
										}
									}
								};

								$.each(item,function(k,v){
									var R=new RegExp("{"+k+"}","ig");
									push.t=push.t.replace(R,v);
								});

								queue.push(push);
							});

							if (runned) {
								Status(g.sent.length);
							}
						},"json");
                    break;
					case "inbox":
						$.get("/Login/MailSystem/Inbox.aspx",ParseInbox,"text");
					break;
					case "interests":
						$.get("/Login/Men/Interested.aspx",ParseInterests,"text");
					break;
                    default:
                        var f = writers.find("option");
                        if (f.length < 2) {
                            alert("Заполните писателей");
                            run.click()
                        }
                        else
                        {
                            Status(0, 0);
							var count=0;
							
                            f.each(function ()
                            {
                                var d = $(this).val();

                                if (d != 0 && !(d in g.black))
                                {
									count++;
									$.get("/Login/Men/ViewMan.aspx?ManID="+d,function(body){
										body=body.replace(/<script[^>]*>|<\/script>/g,"")

										var ind1=body.indexOf("<body"),
											ind2=body.indexOf(">",ind1+1),
											ind3=body.indexOf("</body>",ind2+1);

										body=body.substring(ind2+1,ind3);
										body=body.replace(/(src="[^"]+")/ig,"data-$1");
										body=$("<div>").html(body);

										var name=$.trim(body.find("table.ManParams td:eq(3)").text()),
											count=$.trim(body.find("table.ManParams td:eq(27)").text()),
											isvip=body.find(".man-profile.vip").length>0;

										if((!g.vip || isvip) && (!count || !countr || count.indexOf(countr)>-1))
											queue.push({
												id:d,
												t:g.text.replace(/{name}/ig, name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)), 
												F:function(success){
													if(success)
														++cnt;

													Status(cnt);

													if(queue.length==0)
													{
														run.click();
														alert("Рассылка завершена");
													}
												}
											});

										body.remove();

										if(--count==0)
											finished=true;
									},"text");
								}
                            })
                        }
                }

                StartSender();
            }
        }
    });
    $("#help").click(function ()
    {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\n\nПоддерживаются следующие переменные:\n{Name} - имя пользователя\n{Age} - возраст\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob")
    });
    //setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}, $.noop, "text"); },120000);//Every 2 minutes
});
}

function NewAccount()
{
	$("body").prepend('<div id="sparner"><a href="//help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
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
	$("body").prepend('<div id="sparner"><a href="//help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
<h3 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date+'\
</h3>\
</div>');
}

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});

	name=$(".user-id:first").text().match(/\d+/)[0];

	if(name)
		$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
			if(data.remain && data.rdate)
				WorkContent(data.remain,data.rdate);
			else if(data.expired)
				Expired(data.expired);
			else
				NewAccount();
		},"json");
});