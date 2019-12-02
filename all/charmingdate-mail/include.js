var name="?";

function WorkContent(remain,rdate)
{
$(function(){

    $("body").prepend('<div id="sparner">\
        <table>\
            <tr><th>Цель</th><td><select id="goal"><option value="online">Онлайн</option><option value="submitdate">Дате регистрации</option><option value="last_login">Последнему входу</option><option value="writers">Писателям</option></select></td></tr>\
            <tr><th>Дата от-до</th><td><input type="number" id="dfy" min="2001" class="year" /><input type="number" id="dfm" min="1" max="12" /><input type="number" id="dfd" min="1" max="31" /><input type="number" id="dty" min="2001" class="year" /><input type="number" id="dtm" min="1" max="12" /><input type="number" id="dtd" min="1" max="31" /></td></tr>\
            <tr><th>Писатели</th><td><select id="writers"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /></td></tr>\
            <tr><th>Шаблон</th><td><select id="template"><option value="0">загрузка...</option></select> <input type="button" id="goto-template" value="&rarr;" title="Открыть шаблон"></td></tr>\
            <tr><th>Черный список</th><td><select id="black"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td></tr>\
            <tr><th>Возраст</th><td><input type="number" id="agef" min="18" max="90" value="30" title="Возраст от" /> - <input type="number" id="aget" min="18" max="90" value="50" title="Возраст до" /></td></tr>\
            <tr><th>Лимит</th><td><input type="number" id="limit" min="0" max="100" value="50" /></td></tr>\
            <tr><th><input type="button" id="help" value="?"><input type="button" id="run" value="Пуск"></th><td id="info" title="Статус рассылки: отправлено, очередь">0, 0</td></tr>\
        </table>\
    </div>');

    var storage=localStorage.getItem("charmingdate-"+name),
        goal=$("#goal"),
        black=$("#black"),
        af=$("#agef"),
        at=$("#aget"),
        limit=$("#limit"),
        template=$("#template"),
        dfy=$("#dfy"),
        dfm=$("#dfm"),
        dfd=$("#dfd"),
        dty=$("#dty"),
        dtm=$("#dtm"),
        dtd=$("#dtd"),
        run=$("#run"),
        writers=$("#writers"),
        loading=$("#agef,#aget,#template,#run,#limit").prop("disabled",true),
        queue=[],
        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("charmingdate-"+name,JSON.stringify(storage));
            }
            catch(e)
            {
                if (e==QUOTA_EXCEEDED_ERR)
                    alert("Локальное хранилище переполнено");
            }
        },
        EnableWriters=function()
        {
            var no=$("#writers option:first");
            if (writers.find("option").size()>1)
            {
                writers.prop("disabled",false);
                no.text("-писатели-");
            }
            else
            {
                writers.prop("disabled",true);
                no.text("-нет писателей-");
            }
        },
        EnableBlack=function()
        {
            var no=$("#black option:first");
            if (black.find("option").size()>1)
            {
                black.prop("disabled",false);
                no.text("-черный список-");
            }
            else
            {
                black.prop("disabled",true);
                no.text("-пусто-");
            }
        },
        Status=function(n)
        {
            $("#info").text(n+", "+queue.length);
        };

        black.change(function(){
            $("#delb,#editb").prop("disabled",$(this).val()==0);
        }).change();

	$("#goto-template").click(function(){
		var id=template.val().split("----").pop();

		if(id)
			open("/lady/browse.php?at_code="+id);
	});

    $("#addb").click(function(){
        var n = prompt("Введите ID мужика(ов)");
        if (n)
        {
            $.each(n.split(/[^a-z0-9_]+/i),function(key,val){
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

    $("#editb").click(function(){
        var v=black.val(),
            t=$("#black option:selected"),
            n=prompt("Введите новый ID",t.text());
        if (n && typeof storage.black[n]=="undefined")
        {
            t.val(n).text(n);
            delete storage.black[v];
            storage.black[n]="";
            SaveStorage();
        }
    });

    $("#delb").click(function(){
        var v=black.val(),
            t=$("#black option:selected");
        if (v && confirm("Вы действительно хотите удалить мужика \""+t.text()+"\"?"))
        {
            t.remove();
            delete storage.black[v];
            black.change();
            EnableBlack();
            SaveStorage();
        }
    });
    
    
    writers.change(function(){
        $("#delw,#editw").prop("disabled",$(this).val()==0);
    }).change();

    $("#addw").click(function(){
        var n = prompt("Введите ID писателя(ей)");
        if (n)
        {
            $.each(n.split(/[^a-z0-9_]+/i),function(key,val){
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

    $("#editw").click(function(){
        var v=writers.val(),
            t=$("#writers option:selected"),
            n=prompt("Введите новый ID",t.text());
        if (n && typeof storage.writers[n]=="undefined")
        {
            t.val(n).text(n);
            delete storage.writers[v];
            storage.writers[n]="";
            SaveStorage();
        }
    });

    $("#delw").click(function(){
        var v=writers.val(),
            t=$("#writers option:selected");
        if (v && confirm("Вы действительно хотите удалить писателя \""+t.text()+"\"?"))
        {
            t.remove();
            delete storage.writers[v];
            writers.change();
            EnableWriters();
            SaveStorage();
        }
    });

    $.get("/lady/admire_tpl.php",function(r){
        r=r.replace(/<script[^>]*>|<\/script>/gi,"");
        var ind1=r.indexOf("<body"),
            ind2=r.indexOf(">",ind1+1),
            ind3=r.indexOf("</body>",ind2+1),
            tpl=$("<div>").html(r.substring(ind2+1,ind3)),
			reqs=[];

        tpl.find(".blockva td > a").each(function(){
			var type=$(this).closest("tr").find("td:last").text(),
				t=$(this).text();

			reqs.push( $.get("/lady/browse.php?at_code="+t,function(text){
				var tit=text.match(/Template Title：<font class="color_grey">([^<]+)</);
				tit=tit ? tit[1]+" - " : "";

				$("<option>").val(type+"----"+t).text(tit+(type=="A" ? "Template: " : "Gift: ")+t).appendTo(template);
			},"text") );
        });
        tpl.remove();

		$.when.apply(this,reqs).then(function(){
			if (template.find("option:first").remove().end().find("option").size()>0)
				loading.prop("disabled",false);
		});

        storage=jQuery.parseJSON(storage)||{};
        if (typeof storage.black=="undefined")
            storage={black:{},writers:{},af:30,at:50,tpl:"",limit:50,goal:"online"};

        if (storage.black)
            $.each(storage.black,function(k,v){
                $("<option>").text(v ? v : k).val(k).appendTo(black);
            });
        else
            storage.black={};

        if (storage.writers)
            $.each(storage.writers,function(k,v){
                $("<option>").text(v ? v : k).val(k).appendTo(writers);
            });
        else
            storage.writers={};

        if (storage.goal)
            goal.val(storage.goal);

        af.val(storage.af);
        at.val(storage.at);
        template.val(storage.tpl);
        limit.val(storage.limit);

        var D=new Date();

        dfy.val(storage.fy ? storage.fy : D.getFullYear()-1);
        dfm.val(storage.fm ? storage.fm : D.getMonth()+1);
        dfd.val(storage.fd ? storage.fd : D.getDate());
        dty.val(storage.ty ? storage.ty : D.getFullYear());
        dtm.val(storage.tm ? storage.tm : D.getMonth()+1);
        dtd.val(storage.td ? storage.td : D.getDate());

        EnableWriters();
        EnableBlack();

        goal.change();
    });

    $("#dfy,#dfm,#dfd,#dty,#dtm,#dtd").change(function(){
        storage[ $(this).prop("id").substr(1) ]=$(this).val();
    });
    goal.change(function(){
        var trd=dfd.closest("tr"),
            trw=writers.closest("tr");

        storage.goal=$(this).val();
        switch(storage.goal)
        {
            case "online":
                trd.hide();
                trw.hide();
            break;
            case "writers":
                trd.hide();
                trw.show();
            break;
            default:
                trw.hide();
                trd.show();
        }
    });

    
    var top,
        tos,
        runned=false,
        ibp=1000,
        iws=17000,
        cnt=0,
        ended,
        inprogress=",",

        StartSender=function()
        {
            if (queue.length==0) {
                ReStartSender();
                return;
            }

            var v=queue.shift();

            if (v.id!="CM97712806" && (storage.goal=="writers" || typeof storage.writers[v.id]=="undefined"))
                $.get(
                    "/lady/send_letter.php?manid="+v.id+"&admire_category="+storage.tpl.split("----").shift(),
                    function(r)
                    {
						if(r.indexOf("You have exceeded the daily quota")>-1)
						{
							run.click();
							alert("Вы достигли лимита на сегодня");
						}
						else if (r.indexOf('<input name="" type="submit" value=" Preview Mail "/>')==-1) {
                            v.F(false);
                        } else if (runned) {
                            $.post(
                                "/lady/send_letter_preview.php",//"/lady/admire_send2.php"   ,sendmailsub:" Send "
                                {
                                    "do":"template",
                                    at_code:storage.tpl.split("----").pop(),
                                    favid:"",
                                    manid:v.id,
                                    womanid:name,
									admire_category:storage.tpl.split("----").shift()
                                },
                                function(r)
                                {
                                    var refid=r.match(/name="refid" value="([^"]+)"/);
                                    $.post(
                                        "/lady/admire_send2.php",
                                        {
                                            "do":"template",
                                            at_code:storage.tpl.split("----").pop(),
                                            favid:"",
                                            manid:v.id,
                                            womanid:name,
											admire_category:storage.tpl.split("----").shift(),
                                            refid:refid ? refid[1] : "",
                                            sendmailsub:" Send "
                                        },
                                        function(r2)
                                        {
											if(r2.indexOf("You have exceeded the daily quota")>-1)
											{
												run.click();
												alert("Вы достигли лимита на сегодня");
											}
											else
												v.F(r2.indexOf("Sorry. No admirer mail can be sent.")==-1 && r2.indexOf("Sorry")==-1 && !r2.match(/error\d+/));
                                        },
                                        "text"
                                    );
                                },
                                "text"
                            );
                        }
                    }
                );

            if (ended && queue.length==0) {
                run.triggerHandler("click");
                alert("Поисковая выдача обработана");
            } else if (runned) {
                tos=setTimeout(StartSender,iws+parseInt(Math.random()*5000));
            }
        },
        ReStartSender = function ()
        {
            if (runned) {
                tos = setTimeout(StartSender, iws);
            }
        },

        Parse4OnlineSend=function(r)
        {
            if (queue.length>0) {
                top = setTimeout(function ()
                {
                    Parse4OnlineSend(r)
                }, ibp);
                return;
            }

            r=r.replace(/<script[^>]*>|<\/script>/gi,"");
            var ind1=r.indexOf("<body"),
                ind2=r.indexOf(">",ind1+1),
                ind3=r.indexOf("</body>",ind2+1),
                men=$("<div>").html(r.substring(ind2+1,ind3)),
                next=men.find("a.bt_93:contains('Next Group')");
            next=next.size()==0 ? "/lady/online.php" : next.prop("href");
        
            men.find("div.info_ul .info_f").each(function(){
                var id=$("p:first",this).text(),
                    age=parseInt($("p:eq(2)",this).text());

                if (storage.af<=age && age<=storage.at && inprogress.indexOf(","+id+",")==-1 && typeof storage.black[id]=="undefined")
                {
                    inprogress+=id+",";
                    queue.push({
                        id:id,
                        F:function(st){
                            if (st)
                            {
                                cnt++;
                                if (storage.limit<=cnt)
                                {
                                    run.click();
                                    alert("Лимит исчерпан");
                                }
                            }
                            if (runned) {
                                Status(cnt);
                            }
                        }
                    });
                    if (runned) {
                        Status(cnt);
                    }
                }
            });

            if (runned && next)
            {
                var NextFunc=function(){
                    $.get(next,Parse4OnlineSend).fail(NextFunc);
                };
                top=setTimeout(NextFunc,ibp);
            }
            men.remove();
        },
        StartOnlineParser=function()
        {
            $.get("/lady/online.php",Parse4OnlineSend).fail(StartOnlineParser);
        },

        Parse4DateSend=function(r)
        {
            if (queue.length>0) {
                top = setTimeout(function ()
                {
                    Parse4DateSend(r)
                }, ibp);
                return;
            }

            r=r.replace(/<script[^>]*>|<\/script>/gi,"");
            r=r.replace(/(src="[^"]+")/ig,"data-$1");
            var ind1=r.indexOf("<body"),
                ind2=r.indexOf(">",ind1+1),
                ind3=r.indexOf("</body>",ind2+1),
                men=$("<div>").html(r.substring(ind2+1,ind3)),
                next=men.find(".page_cut a:contains('Next')");
            next=next.size()==0 ? men.find(".page_cut a:contains('First')").prop("href") : next.prop("href");
        
            men.find("div.info_f").each(function(){
                var id=$("p:first",this).text(),
                    age=parseInt($("p:eq(2)",this).text());

                if (storage.af<=age && age<=storage.at && inprogress.indexOf(","+id+",")==-1 && !(id in storage.black))
                {
                    inprogress+=id+",";
                    queue.push({
                        id:id,
                        F:function(st){
                            if (st)
                            {
                                cnt++;
                                if (storage.limit<=cnt)
                                {
                                    run.click();
                                    alert("Лимит исчерпан");
                                }
                            }
                            if (runned) {
                                Status(cnt);
                            }
                        }
                    });

                    if (runned) {
                        Status(cnt);
                    }
                }
            });

            if (runned && next) {
                var NextFunc=function(){
                    $.get(next,Parse4DateSend).fail(NextFunc);
                };
                top=setTimeout(NextFunc,ibp);
            }
            men.remove();
        },
        StartDateParser=function()
        {
            inprogress=",";
            $.post(
                "/lady/man/search_info_result.php",
                {
                    age1:1999,
                    age2:1957,
                    country:"",
                    dateType:storage.goal,
                    year_s:dfy.val(),
                    month_s:dfm.val()<10 ? "0"+dfm.val() : dfm.val(),
                    day_s:dfd.val(),
                    year_e:dty.val(),
                    month_e:dtm.val()<10 ? "0"+dtm.val() : dtm.val(),
                    day_e:dtd.val(),
                    photo:"N",
                    birthday:0,
                    top20:"N",
                    searchmansub:" Search>> ",
                    searchk:"adv2"
                },
                Parse4DateSend
            ).fail(StartDateParser);
        };
        
    run.click(function(){
        var th=$(this),
            d=$("#sparner :input").not(this).not("#help");

        if (runned)
        {
            
            d.prop("disabled",false);
            EnableBlack();
            clearTimeout(tos);
            clearTimeout(top);
            queue=[];
            th.val("Пуск");
            runned=false;
            Status(cnt,0);
        }
        else
        {
            cnt=0;
            
            storage.at=parseInt(at.val());
            storage.af=parseInt(af.val());
            storage.tpl=template.val();
            storage.limit=parseInt(limit.val());
            SaveStorage();

            if (storage.limit>0)
            {
                runned=true;
                d.prop("disabled",true);
                th.val("Стоп");

                switch(storage.goal)
                {
                    case "online":
                        StartOnlineParser();
                    break;
                    case "writers":
                        var wrs=writers.find("option");
                        if (wrs.size()<2)
                        {
                            alert("Заполните писателей");
                            run.click();
                            return;
                        }

                        wrs.each(function(){
                            var id=$(this).val();
                            if (id!="0")
                            {
                                queue.push({
                                    id:id,
                                    F:function(){
                                        if (runned)
                                            Status(++cnt);

                                        if (queue.length==0)
                                        {
                                            run.click();
                                            alert("Рассылка завершена!");
                                        }

                                        SaveStorage();
                                    }
                                });
                                if (runned) {
                                    Status(cnt);
                                }
                            }
                        });
                    break;
                    default:
                        StartDateParser();
                }
                StartSender();
            }
        }
    });

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\
Осталось "+remain+".");
    });

    var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

    if (date0<2)
        alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
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

var lp=document.cookie.match(/_LadyProfileId=([^;]+)/i);

if(document.getElementById("languageList") && lp)
{
	name=lp[1];
	$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate);
		else if(data.expired)
			WorkContent(21,"2022-01-01");
			//Expired(data.expired);
		else
			NewAccount();
	},"json");
}