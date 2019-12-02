var name="?";

function getCookie(name) {
	var pattern = "(?:; )?" + name + "=([^;]*);?";
	var regexp  = new RegExp(pattern);
	
	if (regexp.test(document.cookie))
	return RegExp["$1"];
	
	return false;
}

function WorkContent(remain,rdate)
{
$(function () {
    $("body").prepend('<div id="sparner"><div class="messageBox"><textarea id="textarea" placeholder="Введите текст сообщения">Hi, {firstname}!</textarea></div><input type="button" id="help" value="?"><input type="button" id="text-translate" value="T" value="Перевести"><input type="button" id="run" value="Пуск"><span id="age">Возраст: <input type="number" id="agef" min="18" max="90" value="18" title="от" /> - <input type="number" id="aget" min="18" max="90" value="90" title="до" />. Скорость <select id="speed"><option value="3">Медленно</option><option value="2" selected>Средне</option><option value="1">Быстро</option></select></span><select id="select"><option value="1">По списку онлайн (бесконечно)</option><option value="2">По не ответившим</option><option value="3">По активным диалогам</option></select><select id="black"><option value="0">Черный список</option></select><input type="button" id="bm" value="&minus;" title="Удалить" /><input type="button" id="bpid" value="+ID" title="Добавить по ID" /><input type="button" id="bp" value="+" title="Добавить" /><input type="button" id="remchl" value="Удалить чатлист"><label id="v2-label"><input type="checkbox" id="v2"> V2</label><br><br><br><br>\
    <div class="error"><font color="0000ff">Появилась возможность просмотра статистики для директора агентства подробнее <a href="http://forum.help-chat.com.ua/index.php?/topic/3177/" target="_blank">здесь</a></font><span id="infos" style="margin-left:25px"></span>\
</div>\
    </div>');
    var key = "zolushka-" + name,
		speed = $("#speed"),
		speed = $("#speed"),
		middle_hash="",
		v2=$("#v2"),
		ta = $("#textarea"),
        agef = $("#agef").change(function(){
            localStorage.setItem(name+"-agef", $(this).val());
        }),
        aget = $("#aget").change(function(){
            localStorage.setItem(name+"-aget", $(this).val());
        }),
        UpdateBL = function () {
            var r = "";
            $("#black option:gt(0)").each(function () {
                r += $(this).val() + "," + $(this).text() + "|";
            });
            try {
                localStorage.setItem(key, r.substring(0, r.length - 1));
            } catch (e) {}
        }, blacks = localStorage.getItem(key),
        speed_val=localStorage.getItem(name+"-speed"),
		text_val=localStorage.getItem(name+"-text"),
        agefv=localStorage.getItem(name+"-agef"),
        agetv=localStorage.getItem(name+"-aget");

	if(speed_val>0 && speed_val<4)
		speed.val(speed_val);

	speed.change(function(){
		localStorage.setItem(name+"-speed", $(this).val());
	});

	if(text_val)
		ta.val(text_val);

	ta.change(function(){
		localStorage.setItem(name+"-text", $(this).val());
	});

    if (agefv) {
        agef.val(agefv);
    }
    if (agetv) {
        aget.val(agetv);
    }
    if (blacks) $.each(blacks.split("|"), function (k, v) {
        v = v.split(",");
        $("<option>").text(v[1]).val(v[0]).appendTo("#black");
    });
	$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea").val()},function(r){ $("#textarea").val(r); },"text");
    });
    $("#bm").click(function () {
        $("#black option:selected").filter("[value!=0]").remove();
        UpdateBL();
    });
    $("#bpid").click(function () {
        var n = prompt("Введите ID мужика(ов)");
        if(n)
        {
            $.each(n.split(/\D+/),function(key,val){
                if ($("#black [value=" + val + "]").length == 0)
                    $("<option>").val(val).text(val).appendTo("#black");
            });
            UpdateBL();
        }
    });
    $("#bp").click(function () {
        var text = $(".input-area .username").text(),
            m = $(".input-area .thumbnail").attr("data-background-image").match(/\/(\d+)\//);
        if (text == "") alert("Веберите мужика с фоткой для начала чата и только потом жмите эту кнопку");
        else if (m) {
            if ($("#black option[value=" + m[1] + "]").length == 0) $("<option>").text(text).val(m[1]).appendTo("#black");
            UpdateBL();
        } else alert("В черный список возможно добавление мужиков только с фотками");
    });
    var to, text = "",
        runned = false,
        onlineexclude = "",
		sent=0,
        SendOnline = function () {
            if (text == "") return;

            var af=parseInt(agef.val()),
                at=parseInt(aget.val()),
				max=200;

			if(v2.prop("checked"))
			{
				var X=function(){
					if (runned)
						to = setTimeout(SendOnline, 15000);
				};
				
				$.post("/services/im/"+middle_hash+"/GetOnlineList",{sort:0, sortDirection:"DESC"},function(online_json){
					var json=null,
						mess = text;

					while(json=online_json.pop())
						if(onlineexclude.indexOf("," + json.AccountNumber + ",") > -1 || json.Age<af || json.Age>at)
							json=null;
						else
							break;

					if(json)
					{
						$.each(json, function (k, v) {
							mess = mess.replace(new RegExp("{" + k + "}", "ig"), v);
						});

						$.post("/services/im/"+middle_hash+"/PostMessage",
							{
								toAccountNumber: json.AccountNumber,
								message: mess,
								autoReply: "false",
								isClose: "false"
							},function(r){
								if (r && r.ResponseText)
								{
									r=r.ResponseText.split("|--|").pop();
									
									if($("#" + json.AccountNumber + "_ChatListEntry").length<1)
										$("#Chat_RightPanel_ChatList_FemaleRequests").show().prepend('\n            <div id="' + json.AccountNumber + '_ChatListEntry" class="chatlistentry" \n                data=\'' + r + '\'\n                onmouseover="Chat_ChatList_onmouseover(this, event);"\n                 onmouseout="Chat_ChatList_onmouseout(this, event);"\n                  onclick="Chat_ChatListEntry_onclick(this);"\n                   contextmenu="ContextMenu_ChatList"\n                    contextdata=\'' + r + '\'\n                     oncontextmenu="Chat_ChatList_ContextMenu_SetUp(this); ContextMenu_Show(this, event);"\n             ><table border="0" cellspacing="0" cellpadding="0" class="chatlistentry-maintable">\n\t\t\t<tbody><tr>\n\t\t\t\t<td align="left" valign="middle" class="chatlistentry-maintable-icon"><img src="/images/chatapp_msg.gif" id="' + json.AccountNumber + '_ChatListEntry_Icon"></td>\n\t\t\t\t<td align="left" valign="middle">' + json.FirstName + '</td>\n\t\t\t\t<td class="chatlistentry-maintable-accountnumber" align="right" valign="middle">' + json.AccountNumber + "</td>\n\t\t\t</tr>\n\t\t</tbody></table>\n\t\t</div>");

									$("#infos").text("Отправлено: "+ ++sent);

									$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
									onlineexclude += json.AccountNumber + ",";
								}
							}
						,"json").always(X);
					}
					else
						X();

				},"json").fail(X);

				return;
			}

            while ($("#Chat_SearchPanel_Pager_Previous").is(":visible") && max-->0)
				$("#Chat_SearchPanel_Pager_Previous").click();

            var F = function () {
                var added = 0,
					num=$("#Chat_SearchPanel_MemberCards").children().each(function () {
						if (!runned) return false;
						var mess = text,
							th = $(this),
							json,age;

							try{
								json = $.parseJSON(th.attr("data"));
							}
							catch(e){
								return;
							}
							age = parseInt(json.Age);

						if (onlineexclude.indexOf("," + json.AccountNumber + ",") == -1 && age>=af && age<=at) {
							$.each(json, function (k, v) {
								mess = mess.replace(new RegExp("{" + k + "}", "ig"), v);
							});



							/*var script=document.createElement("script");
							json.LastMessageAccount=$("#myAN").val();
							json.IsTwoWayChat=false;
							mess=mess.replace(/"/g,"\\\"");
							mess=mess.replace(/\r\n/g,"\n");
							mess=mess.replace(/\r/g,"\n");
							mess=mess.replace(/\n/g,"\\\n\r");
							script.text="(function(){Chat_SendMessage("+json.AccountNumber+",'"+json.FirstName+"','"+json.Thumbnail+"',\""+mess+"\")})();";
							document.head.appendChild(script).parentNode.removeChild(script);*/


							th.click();
							var script=document.createElement("script");
							mess=mess.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n\r");
							script.text="(function(){ $('#Chat_ClientPanel_TypeArea_Message').val(\""+mess+"\"); setTimeout(function(){ $('#Chat_ClientPanel_TypeArea_SubmitButton').click(); },100); })();";
							document.head.appendChild(script).parentNode.removeChild(script);


							/*var script=document.createElement("script");
							mess=mess.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n\r");
							script.text="(function(){ $('#MessageTextarea').scope().message=\""+mess+"\"; setTimeout(function(){ $('div.send-area').click(); },100); })();";
							document.head.appendChild(script).parentNode.removeChild(script);*/

							$("#infos").text("Отправлено: "+ ++sent);

							$.get("//ukrainiangirls.pw/get.php", {name: name, stat:"sent"});
							onlineexclude += json.AccountNumber + ",";
							added++;
							return false;
						}
					}).length;

				/*if(num<1)
					setTimeout(function(){
						if(!runned)
							return;

						localStorage.setItem("autostart",text);
						localStorage.setItem("sent",sent);
						location.reload();
					},5000);
				else */if (runned)
                    if(added>0)
                        setTimeout(F, 3500 * speed.val());
                    else if ($("#Chat_SearchPanel_Pager_Next").is(":visible")) {
                        $("#Chat_SearchPanel_Pager_Next").click();
                        setTimeout(F, 3500 * speed.val());
                        //if (added < 2) F();
                        //else setTimeout(F, 15000);
                    } 
                    else to = setTimeout(SendOnline, 15000);
            };
            F();
        }, GetOnlineExclude = function () {
            onlineexclude = ",";
            $("#Chat_RightPanel_ChatList div.chatlistentry,#Chat_RightPanel_ChatList div.chatlistentry-active").each(function () {
                var json = $.parseJSON($(this).attr("data"));
                onlineexclude += json.AccountNumber + ",";
            });
            $("#black option:gt(0)").each(function () {
                onlineexclude += $(this).val() + ",";
            });
        }, SendChatList = function (type) {
			//All
			//$("#Chat_RightPanel_ChatList div.chatlistentry,#Chat_RightPanel_ChatList div.chatlistentry-active")
            var toids = $("na" ? "#Chat_RightPanel_ChatList_FemaleRequests > div" : "#Chat_RightPanel_ChatList_MaleSentChats div,#Chat_RightPanel_ChatList_FemaleSentChats > div"),
                cnt = toids.length,
                inf = $("#infos"),
                to2, EndF = function () {
                    clearTimeout(to2);
                    if (cnt == sent) {
                        alert("Рассылка завершена!");
                        $("#run").click();
                    }
                    to2 = setTimeout(function () {
                        inf.text("")
                    }, 2000);
                };
            if (toids.length > 0) inf.text("Отправлено: 0 из " + cnt);
            toids.each(function (i) {
                var th = $(this);
                setTimeout(function () {
                    if (!runned) return false;
                    var mess = text,
                        json = $.parseJSON(th.attr("data")),
						script;
                    $.each(json, function (k, v) {
                        mess = mess.replace(new RegExp("{" + k + "}", "ig"), v);
                    });
                    mess = mess.replace(/\{(Employment|Age|Country|Height|Weight)\}/ig, "");



					/*var script=document.createElement("script");
					json.LastMessageAccount=$("#myAN").val();
					json.IsTwoWayChat=false;
					mess=mess.replace(/"/g,"\\\"");
					mess=mess.replace(/\r\n/g,"\n");
					mess=mess.replace(/\r/g,"\n");
					mess=mess.replace(/\n/g,"\\\n\r");
					script.text="(function(){Chat_SendMessage("+json.AccountNumber+",'"+json.FirstName+"','"+json.Thumbnail+"',\""+mess+"\")})();";
					document.head.appendChild(script).parentNode.removeChild(script);*/


					if(v2.prop("checked"))
					{
						$.post("/services/im/"+middle_hash+"/PostMessage",
							{
								toAccountNumber: json.AccountNumber,
								message: mess,
								autoReply: "false",
								isClose: "false"
							}
						);
						/*var script=document.createElement("script");
						script.text="Chat_ChatList();";
						document.head.appendChild(script).parentNode.removeChild(script);*/
					}
					else
					{
						th.click();
						var script=document.createElement("script");
						mess=mess.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n\r");
						script.text="(function(){ $('#Chat_ClientPanel_TypeArea_Message').val(\""+mess+"\"); setTimeout(function(){ $('#Chat_ClientPanel_TypeArea_SubmitButton').click(); },100); })();";
							document.head.appendChild(script).parentNode.removeChild(script);
					}

					/*var script=document.createElement("script");
					mess=mess.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n\r");
					script.text="(function(){ $('#MessageTextarea').scope().message=\""+mess+"\"; setTimeout(function(){ $('div.send-area').click(); },100); })();";
					document.head.appendChild(script).parentNode.removeChild(script);*/

                    sent++;
                    inf.text("Отправлено: "+sent + " из " + cnt);
                    EndF();
                }, i * 100 * speed.val());
            });
        };
    $("#run").click(function () {
        var th = $(this);
			
        if (th.is(".runned")) {
            th.removeClass("runned").val("Пуск");
            ta.add("#select").prop("disabled", false);
            runned = false;
            clearTimeout(to);
        } else {
            text = ta.val();
            if (text == "") {
                alert("Введите текст для рассылки!");
                return;
            }
			sent = 0;
            ta.add("#select").prop("disabled", true);
            $.post("//ukrainiangirls.pw/get.php", {name: name, stat:"text", text: text});
            runned = true;
            th.addClass("runned").val("Стоп");
            switch ($("#select").val()) {
            case "3":
                SendChatList("a");
                break;
            case "2":
                SendChatList("na");
                break;
            default:
                GetOnlineExclude();
                SendOnline();
            }
        }
    });

    $("#help").click(function () {
        alert("Учетная запись оплачена до " + rdate + ".\nОсталось " + remain + ".\nПоддерживаются следующие переменные:\n{FirstName} - имя пользователя\n{Age} - возраст\n{Country} - страна\n{Employment} - работа\n{Height} - рост \n{Weight} - вес");
    });
    
    $("<a>").prop("href","#").text("Перевести").click(function(){        var s=$("#Chat_ClientPanel_TypeArea_Message").val();
        if(s.match(/[а-я]+/i))
            $.post("//ukrainiangirls.pw/translate.php",{text:s},function(r){ $("#Chat_ClientPanel_TypeArea_Message").val(r); },"text");
        else            alert("В тексте нет русских символов!");
        return !1;
    }).insertAfter("#Chat_ClientPanel_ShowMeSelect");

    $("#remchl").click(function(){
		//http://www.zolushka.net/services/v2/PrivateChatService.asmx/CloseChat
		//aboutId:255666

        $("#Chat_RightPanel_ChatList div.chatlistentry,#Chat_RightPanel_ChatList div.chatlistentry-active").each(function(){
			try{
				var json=$.parseJSON($(this).attr("data"));
			}
			catch(e){
				return;
			}

            $.ajax({
				url: "/services/v2/ChatMessageService.asmx/CloseChat",
				method: 'post',
				data: {
					toAccountNumber: json.AccountNumber
				},
				headers: {
					'X-SessionId': getCookie("ASPSessionID")
				}
			});
        }).remove();

		/*var script=document.createElement("script");
		script.text="Chat_OnlineList();";
		document.head.appendChild(script).parentNode.removeChild(script);*/
    });
	
	var mh_s=$("script[src$='chat.js']").attr("src");

	$.get(mh_s,function(s){
		middle_hash=s.split('nr="')[1].split('"')[0] + "/" + s.split('dt="')[1].split('"')[0];
	},"text");
	
    setInterval(function(){ $.get("//ukrainiangirls.pw/get.php", {name: name, stat:"online"}); },120000);//Every 2 minutes

	var date0=rdate.split(/\D0?/),
        date1=new Date(date0[0],date0[1]-1,date0[2],date0[3],date0[4]),
        date2=new Date();

    date0=date1.getTime()-date2.getTime();
    date0=Math.floor(date0/1000/60/60/24);

	setTimeout(function(){
		if(localStorage.getItem("autostart"))
		{
			sent=parseInt(localStorage.getItem("sent"));
			$("#textarea").val(localStorage.getItem("autostart"));

			$("#run").click();
			$("#infos").text("Отправлено: "+sent);

			localStorage.removeItem("autostart");
			localStorage.removeItem("sent");
	}
		else if(date0<2)
			alert("Пожалуйста, продлите подписку. Осталось менее 2х дней.");
	},500);
});
}

function NewAccount()
{
	$(function(){
		$("body").prepend('<div id="sparner">\
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
	});
}

function Expired(date)
{
	$(function(){

		$("body").prepend('<div id="sparner">\
	<h3 style="color:red;font-weight:bold;text-align:center">\
		Платный период окончился '+date+'\
	</h3>\
</div>');

	});
}

$.get("/profile/myProfile.aspx",function(text){
	text=text.match(/<th colspan="2">([^<]+)</i);

	if(text)
	{
		name=text[1];
		$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
			if(data.remain && data.rdate)
				WorkContent(data.remain,data.rdate,data.days);
			else if(data.expired)
				//WorkContent(data.expired);
				Expired(data.expired);
			else
				NewAccount();
		},"json");
	}
},"text");
