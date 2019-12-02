var name="?";

function WorkContent(remain,rdate)
{
$(function (){

    $("body").prepend('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a><table><tr><td colspan="5"><textarea id="textarea" rows="3" placeholder="Введите текст сообщения">Hi, {Name}</textarea></td></tr><tr><td><img src="//ukrainiangirls.pw/static/knopka.png" id="sparner-pin" alt="" /></td><td><select id="goal" title="Цель"><option value="search">Поиск</option><option value="sentsmile">Приславшие смайл</option><option value="smiles">Посылать смайлы</option><option value="writers">Writers</option><option value="pay">Платники</option><option value="hotlist">Добавлять в хотлист</option></select><input type="button" id="help" value="?"><input type="button" id="text-translate" value="T" title="Перевести"></td><td><select id="black" title="Черный список"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /><input type="button" id="expb" value="Эк" title="Экспорт" /></td><td style="display:none"><select id="writers" title="Писатели"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /><input type="button" id="export" value="Эк" title="Экспорт писателей" /></td><td><input type="button" id="run" value="Пуск"></td><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr></table></div>');

    var storage=localStorage.getItem("natashaclub-mail-"+name), black=$("#black"), run=$("#run"), goal=$("#goal"), text=$("#textarea"), queue=[], writers = $("#writers"),

        SaveTemplate=function ()
        {
            storage.text = text.val();
        },
        SaveStorage=function ()
        {
            try
            {
                localStorage.setItem("natashaclub-mail-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if (e==QUOTA_EXCEEDED_ERR) {
                    alert("Локальное хранилище переполнено");
                }
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
		},
        EnableBlack=function ()
        {
            var no=$("#black option:first");
            if (black.find("option").size()>1) {
                black.prop("disabled",false);
                no.text("-черный список-");
            } else {
                black.prop("disabled",true);
                no.text("-пусто-");
            }
        },
        Status=function (n)
        {
            $("#info").text(n+", "+queue.length);
        };

        black.change(function ()
        {
			var b=$(this).val();
            $("#delb,#editb").prop("disabled",!storage.black || !(b in storage.black));
        });
    $("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#addb").click(function ()
    {
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/\D+/),function (key,val){
                if (black.find("[value=" + val + "]").size() == 0) {
                    $("<option>").val(val).text(val).appendTo(black);
                    black.val(val).change();
                    storage.black[val] = "";
                }
            });
            EnableBlack();
            SaveStorage();
        }
    });

    $("#editb").click(function ()
    {
        var v=black.val(), t=$("#black option:selected"), n=prompt("Введите новый ID",t.text());
        if (n && typeof storage.black[n]=="undefined") {
            t.val(n).text(n);
            delete storage.black[v];
            storage.black[n]="";
            SaveStorage();
        }
    });

    $("#delb").click(function ()
	{
        var v=black.val(), t=$("#black option:selected");
        if ((v in storage.black) && confirm("Вы действительно хотите удалить мужика \""+t.text()+"\"?")) {
            t.remove();
            delete storage.black[v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
    }); 
	$("#expb").click(function(e){
		e.preventDefault();

		var out="";

		$.each(storage.black,function(k){
			out+=", "+k;
		});

		SaveTextFile(out.substr(2),"blacklist.txt");
	});

    writers.change(function ()
    {
        $("#delw,#editw").prop("disabled", $(this).val() == 0)
    }).change();

    $("#export").click(function (){
        var out="";
        $.each(storage.writers,function(k){
            out+=", "+k;
        });
		
		SaveTextFile(out.substr(2),"writers.txt");
        //prompt("Сохраните список писаталей:",out.substr(2));
        return false;
    });
    $("#addw").click(function ()
    {
        var n = prompt("Введите NAME писателя(ей)");
        if (n)
        {
            $.each(n.split(/\s+/),function(key,val){
				val=$.trim(val);
                if (val && writers.find("[value=" + val + "]").size() == 0) {
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
        var v = writers.val(), t = $("#writers option:selected"), n = prompt("Введите новый NAME", 
        t.text());
		n=$.trim(n);
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
	
    if (storage)
    {
        storage=jQuery.parseJSON(storage)||{};
        if (typeof storage.text=="undefined") {
            storage={black : {}, writers : {}, goal : "search", text : ""};
        } else {
            if (storage.black) {
                $.each(storage.black,function (k,v)
                {
                    $("<option>").text(v ? v : k).val(k).appendTo(black);
                });
            } else {
                storage.black={};
            }
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
            if (storage.goal) {
                goal.val(storage.goal);
            }
            if (storage.text) {
                text.val(storage.text);
            }
			EnableWriters();
            EnableBlack();
        }
    }
    else
        storage={black : {}, writers : {}, goal : "search", text : ""};

	black.change();
    goal.change(function()
    {
        var v = $(this).val();
        storage.goal=v;
        text.prop("disabled",v == "smiles" || v == "hotlist");

        var a = black.closest("td"), tdw = writers.closest("td");
        if (v == "writers") {
            tdw.show();
            a.hide();
            EnableWriters()
        } else {
            tdw.hide();
            a.show();
            EnableBlack()
        }
    }).change();

    var top, tos, runned = false, ibp = 1000, iws = 1000, cnt = 0, ended = false, hotlist = {}, smiles = {}, sent = ",", hotlistready = false, smilesready = false, ReStartSender, inprogress=[], paid=[],

        StartSender=function ()
        {
			if (queue.length==0) {
				ReStartSender();
				return;
			}

			if (queue.length>0)
			{
                var v=queue.shift();

                $.post(
                        "/compose.php?ID="+v.id,
                        {
                            ID : v.l,
                            text : v.t.replace(/{Name}/ig,""),
                            sendto : "both",
                            SEND_MESSAGE : "YES"
                        },
                        function (pr)
                        {
                            if (pr.indexOf("Sorry, but you've reached your limit for today.")!=-1 || pr.indexOf("Извините, но вы достигли своего лимита на сегодня.")!=-1) {
                                v.F(false);
                                run.triggerHandler("click");
                                alert("Лимиты отправки исчерпаны");
                            } else {
                                v.F(pr.indexOf("Message has been successfully sent.")!=-1 || pr.indexOf("Сообщение было успешно отправлено.")!=-1);
                            }
                        }
                    );
            }

            if (storage.goal=="search" && ended && cnt==0 && runned) {
                run.triggerHandler("click");
                alert("Поисковая выдача обработана");
            } else if (runned) {
                tos=setTimeout(StartSender,iws);
            }
        },
		ReStartSender = function ()
		{
			if (runned) {
				tos = setTimeout(StartSender, iws);
			}
		},
        ParsePaid=function()
        {
			if (queue.length>0) {
				top = setTimeout(ParsePaid,5000);
				return;
			}

			if(paid.length<1)
			{
				run.triggerHandler("click");
                alert("Платники обработаны");
				return;
			}

			var login=paid.pop()+"";

			$.get("/" + login + ".html",function (r) {
				if(r.indexOf("Извините, но вы достигли своего лимита на сегодня")>-1)
				{
					run.triggerHandler("click");
					alert("Извините, но вы достигли своего лимита на сегодня");
					return;
				}
				
				
				var name = r.match(/<td><h1><span>[^:]+: ([^:]+):/i),
				country = r.match(/<li>([a-z,\s]+)<\/li>/i), age = r.match(/<li>(\d+) (y\/o|лет)/),
				id=r.match(/ID: (\d+)/);

				if(id)
					id=id[1]-0;
				else
					return;

				age = age ? age[1]-0 : 62;
				country = country ? country[1].match(/,(.+?)$/) :"";
				country = country ? $.trim(country[1]) :"";

				if ( sent.indexOf(","+id+",")==-1 && (name || !text.val().match(/{Name}/i)) ) {
					name = $.trim(name[1]);
					queue.push({
						id : id,
						l : login,
						t : text.val().replace(/{login}/ig,login).replace(/{age}/ig,age).replace(/{country}/ig,country).replace(/{name}/ig,name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
						F : function (st)
						{
							if (st) {
								sent += id+",";
								cnt++;
								SaveStorage();
							}

							Status(cnt);
						}
					});

					Status(cnt);
				}
			}).always(function(){
				if(runned)
					top = setTimeout(ParsePaid,5000);
			});
		},
		Parse4Send=function (r)
        {
			if (queue.length>0) {
				top = setTimeout(function ()
				{
					Parse4Send(r)
				}, ibp);
				return;
			}

            body=r.replace(/<script[^>]*>|<\/script>/g,"");
            var ind1=body.indexOf("<body"), ind2=body.indexOf(">",ind1+1), ind3=body.indexOf("</body>",ind2+1);
            body=body.substring(ind2+1,ind3);
            body=body.replace(/src=/ig, "data-src=");
            body=$("<div>").html(body);

            body.find(".SearchRowTable").each(function (i)
            {
                var id = parseInt($(".SearchRowLinksDiv a:first",this).prop("href").match(/(\d+)$/)[1]), login = $.trim($(".SearchRowNameText",this).text()), country = $.trim($(".SearchRowUnderNameText",this).text().match(/,(.+?)$/)[1]), age=parseInt($(".SearchRowUnderNameText",this).text());

                    if( typeof storage.black[id]=="undefined" )
                    {
                        if( storage.goal == "smiles" ) {
                            if ( !(id in smiles) ) {
                                $.get("/vkiss.php?sendto="+id,function(r2)
                                {
                                    if(r2.indexOf("Virtual smile has been successfully sent.")!=-1 || r2.indexOf("Виртуальная улыбка была успешно отправлена.")!=-1) {
                                        Status(++cnt);
                                        smiles[ id ] = true;
                                    }
                                });
                            }
                        }
                        else if( storage.goal == "hotlist" ) {
                            if ( !(id in hotlist) ) {
                                $.get("/list_pop.php?action=hot&ID="+id,function(r2)
                                {
                                    if(r2.indexOf("User was added to hot list")!=-1 || r2.indexOf("Пользователь был добавлен")!=-1) {
                                        Status(++cnt);
                                        hotlist[ id ] = true;
                                    }
                                });
                            }
                        }
                        else if (sent.indexOf(","+id+",")==-1 && inprogress.indexOf(id)==-1) {
                            $.get("/"+login+".html",function (r)
                            {
								if(r.indexOf("TrustLevelDiv")>-1)
									return;

                                var name=r.match(new RegExp("<td><h1><span>"+login+": ([^:]+):"));

                                if (name || !text.val().match(/{Name}/i)) {
                                    name=$.trim(name[1]);
									inprogress.push(id);
                                    queue.push({
										id : id,
                                        l : login,
                                        t : text.val().replace(/\{login\}/ig,login).replace(/\{age\}/ig,age).replace(/\{country\}/ig,country).replace(/{name}/ig,name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
                                        F : function (st)
                                        {
                                            if (st) {
                                                sent+=id+",";
                                                cnt++;
                                                SaveStorage();
                                            }
                                            Status(cnt);
                                        }
                                    });
                                    if (runned) {
                                        Status(cnt);
                                    }
                                }
                            },"text");
                        }
                    }
            });

            if (runned)
            {
                var na = body.find("table.text2 a").filter(function()
                {
                    return $.inArray($(this).text(),["Next","Следующий"])>-1;
                });
                if (na.size()>0) {
					var F=function(){
                        $.get(na.prop("href"),function (r){
							if(r.indexOf("Just a second...")>-1)
								top=setTimeout(F,ibp);
							else
								Parse4Send(r);
                        });
                    };
					
                    top=setTimeout(F,ibp);
                } else {
                    ended=true;
                }
            }
            body.remove();
        },
        StartParser=function ()
        {
            ended=false;
            var fa=$("table.text2 a:contains('First'),table.text2 a:contains('Первый')");
            if (fa.size()>0) {
                $.get(fa.prop("href"),function (r){
                    Parse4Send(r);
                });
            } else {
                Parse4Send("<body>"+$("body").html()+"</body>");
            }
        };

    $.post("/ajax.action.php", {ajaxaction: 'cc.ShowHide', what: "ShowHotListed"}, function(r)
    {
        var body = r.replace(/<script[^>]*>|<\/script>/g,""),
        body = body.replace(/(src="[^"]+")/ig,"data-$1");
        body = $("<div>").html(body);

        body.find(":checkbox").each(function()
        {
            hotlist[ $(this).prop("name").match(/\-(\d+)$/)[1] ]=true;
        });
        body.remove();

        hotlistready = true;
    });

    $.post("/ajax.action.php", {ajaxaction: 'cc.ShowHide', what: "ShowVKissed"}, function(r)
    {
        var body = r.replace(/<script[^>]*>|<\/script>/g,""),
        body = body.replace(/(src="[^"]+")/ig,"data-$1");
        body = $("<div>").html(body);

        body.find(":checkbox").each(function()
        {
            smiles[ parseInt($(this).prop("name")) ]=true;
        });
        body.remove();

        smilesready = true;
    });

    run.click(function (){
        var th = $(this), d = $("#sparner :input").not(this).not("#help");

        if (runned) {
            d.prop("disabled",false);
            goal.change();
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            queue = [];
            th.val("Пуск");
            runned = false;
            Status(cnt);
        } else {
            cnt = 0;
            
            SaveTemplate();
            SaveStorage();

            if( storage.goal == "smiles" ) { 
                if (smilesready) {
                    runned = true;
                    d.prop("disabled", true);
                    th.val("Стоп");
                    StartParser();
                } else {
                    alert("Смайлы не готовы");
                }
            } else if( storage.goal == "hotlist" ) {
                if (hotlistready) {
                    runned = true;
                    d.prop("disabled", true);
                    th.val("Стоп");
                    StartParser();
                } else {
                    alert("Хотлист не готов");
                }
            } else if (text.val() == "") {
                alert("Введите текст письма!");
            } else {
                runned = true;
                d.prop("disabled", true);
                th.val("Стоп");

                if (storage.goal == "search")
                    StartParser();
				else if(storage.goal == "writers")
				{
					var f = writers.find("option");
					if (f.size() < 2) {
						alert("Заполните писателей");
						run.click()
					}
					else
					{
						Status(0, 0);
						f.each(function ()
						{
							var login = $(this).val();

							if (login!=0)
							{
								$.get("/" + login + ".html", 
								function (r) 
								{
									if(r.indexOf("TrustLevelDiv")>-1)
										return;

									var name = r.match(/<td><h1><span>[^:]+: ([^:]+):/i),
									country = r.match(/<li>([a-z,\s]+)<\/li>/i), age = r.match(/<li>(\d+) (y\/o|лет)/),
									id=r.match(/ID: (\d+)/);

									if(id)
										id=id[1]-0;
									else
										return;

									age = age ? age[1]-0 : 62;
									country = country ? country[1].match(/,(.+?)$/) :"";
									country = country ? $.trim(country[1]) :"";

									if (name || !text.val().match(/{Name}/i)) {
										name = $.trim(name[1]);
										queue.push({
											id : id,
											l : login,
											t : text.val().replace(/{login}/ig,login).replace(/{age}/ig,age).replace(/{country}/ig,country).replace(/{name}/ig,name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
											F : function (st)
											{
												if (st) {
													sent += id+",";
													cnt++;
													SaveStorage();
												}
												Status(cnt);
												if (queue.length==0 && runned) {
													run.triggerHandler("click");
													alert("Рассылка завершена");
												}
											}
										});

										Status(cnt);
									}
								});
							}
						})
					}
				}
				else if(storage.goal=="pay")
					$.get("//ukrainiangirls.pw/get.php?men=natasha-club",function(men){
						paid=men;

						ParsePaid();

					},"json");
                else
                    $.post(
                        "/ajax.action.php",
                        {
                            ajaxaction : "cc.ShowHide",
                            what : "ShowWasVKissed"
                        },
                        function (pr)
                        {
                            var q = 0;
                            $("<div>").html(pr).find("tr.table").each(function (){
                                var id = parseInt($("input:first",this).prop("name")), login = $("a:first",this).text();

                                    if (sent.indexOf(","+id+",") == -1 && inprogress.indexOf(id)==-1 && !(id in storage.black)) {
                                        q++;
                                        $.get("/"+login+".html",function (r){
                                            var name = r.match(/<td><h1><span>[^:]+: ([^:]+):/i),
												country = r.match(/<li>([a-z,\s]+)<\/li>/i), age = r.match(/<li>(\d+) (y\/o|лет)/);
											age = age ? age[1]-0 : 62;
                                            country = country ? country[1].match(/,(.+?)$/) :"";
                                            country = country ? $.trim(country[1]) :"";

                                            if (name || !text.val().match(/{Name}/i)) {
                                                name = $.trim(name[1]);
                                                queue.push({
													id : id,
                                                    l : login,
                                                    t : text.val().replace(/{login}/ig,login).replace(/{age}/ig,age).replace(/{country}/ig,country).replace(/{name}/ig,name).replace(/{name1}/ig, Name1(name)).replace(/{name2}/ig, Name2(name)),
                                                    F : function (st)
                                                    {
                                                        if (st) {
                                                            sent += id+",";
                                                            cnt++;
                                                            SaveStorage();
                                                        }
                                                        Status(cnt);
                                                        if (queue.length==0 && runned) {
                                                            run.triggerHandler("click");
                                                            alert("Рассылка завершена");
                                                        }
                                                    }
                                                });
                                                Status(cnt);
                                            }
                                        },"text");
                                    }
                            }).end().remove();
                            if (q==0) {
                                run.triggerHandler("click");
                                alert("Некому рассылать");
                            }
                        }
                    );

                StartSender();
            }
        }
    });

    $("#help").click(function ()
    {
        alert("Учетная запись оплачена до " + rdate + ".\n\
Осталось "+remain+".\n\
\n\
Поддерживаются следующие переменные:\n\
{Login} - логин мужика\n\
{Name} - имя мужика (если доступно)\n\
{Age} - возраст мужика\n\
{Country} - страна мужика\n{Name1} - переводит имя и его первую букву заглавной - остальные буквы маленькие: ROB ROOFER ROSE -> Rob Roofer Rose\n{Name2} - имя считывалось полностью до пробела и если там есть пробел то все что идет после пробела убиралось и оставалось только первое слово: Rob Roofer Rose -> Rob");
    });
});
}

function NewAccount()
{
	$("body").prepend('<div id="sparner">\
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
	$("body").prepend('<div id="sparner">\
<h2 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date+'\
</h2>\
</div>');
}

$.get("/member.php",function(r){
	name=r.match(/profile_edit\.php\?ID=(\d+)/)[1];

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			Expired(data.expired);
		else
			NewAccount();
	},"json");
},"text");

$(function(){
	$(this).on("click","#sparner-pin",function(){
		$("#sparner").toggleClass("active");
	});

	var GetIds=function(url){
		$.get(url,function(body){
			body=body.replace(/<script[^>]*>|<\/script>/g,"");

			var ind1=body.indexOf("<body"),
				ind2=body.indexOf(">",ind1+1),
				ind3=body.indexOf("</body>",ind2+1),
				date=new Date();

			date.setMonth( date.getMonth()-3 );
			date=date.getTime();

			body=body.substring(ind2+1,ind3);
			body=body.replace(/src=/ig, "data-src=");
			body=$("<div>").html(body);

			body.find("a[href*='profile.php?']").each(function(){
				var url=$(this).attr("href"),
					id=url.match(/\d+/);
				
				if(id)
					$.get(url,function(text){
						if(text.indexOf("женщина,")<0)
							$.post("//ukrainiangirls.pw/get.php",{men:"natasha-club",ids:parseInt(id[0])},$.noop,"text");
					},"text");
			});

			var next=body.find("a:contains('Следующий'),a:contains('Next')");

			if(next.length>0 && Date.parse( body.find("tr.table:last td:eq(3)").text().trim() )>date)
				GetIds(next.attr("href"));
			else
				localStorage.setItem("Parsed","true");

			body.remove();
		},"text");
	};

	if(!localStorage.getItem("Parsed"))
		GetIds("/inbox.php");
});