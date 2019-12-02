var name="?",
	is_mobile=location.host=="m.charmdate.com";

function Map() {
    var struct = function(key, value) {
        this.key = key;
        this.value = value;
    };

    var put = function(key, value) {
        for ( var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                this.arr[i].value = value;
                return;
            }
        }
        this.arr[this.arr.length] = new struct(key, value);
    };

    var get = function(key) {
        for ( var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].key === key) {
                return this.arr[i].value;
            }
        }
        return null;
    };

    var remove = function(key) {
        var v;
        for ( var i = 0; i < this.arr.length; i++) {
            v = this.arr.pop();
            if (v.key === key) {
                continue;
            }
            this.arr.unshift(v);
        }
    };

    var top = function(key,value) {
        var v;
        var l = this.arr.length;
        for ( var i = 0; i < l; i++) {
            v = this.arr.pop();
            if (v.key === key) {
                continue;
            }
            this.arr.unshift(v);
        }
        this.arr.unshift( new struct(key, value) );
    };

    var size = function() {
        return this.arr.length;
    };

    var isEmpty = function() {
        return this.arr.length <= 0;
    };
    this.arr = new Array();
    this.get = get;
    this.put = put;
    this.remove = remove;
    this.top = top;
    this.size = size;
    this.isEmpty = isEmpty;
}


function Flash()
{
	if($("#flashContent,#charm-flash").length>0)
		return;

	var swfVersionStr = "11.1.0",
		data=is_mobile ? $("head").html().match(/loginUserPwd = "([^"]+)";/) : $("param[name='flashvars'][value*='sid=']").val(),
		d = new Date,
		xiSwfUrlStr = "//www.adobe.com/go/getflashplayer",
		flashurl = '//ukrainiangirls.pw/charm/charmdate-min.swf?ver=' + d.getTime(),
		flashvars = {},
		params = {},
		attributes = {};

	flashvars.memberid = is_mobile ? name : data.split('memberid=')[1].split('&')[0];
	flashvars.targetid = "";
	flashvars.inviteid = "";
	flashvars.sid = is_mobile ? data[1] : data.split('sid=')[1].split('&')[0];
	flashvars.video = "1";
	flashvars.autochat = "1";
	flashvars.m = "";
	flashvars.ps = "1";

	params.movie = flashurl;
	params.quality = "high";
	params.bgcolor = "#ebebe3";
	params.allowscriptaccess = "always";
	params.allowfullscreen = "true";

	attributes.id = "charm-flash";
	attributes.name = "charm-flash";
	attributes.align = "middle";

	$('body').append('<div id="flashContent" align="right"></div>');
	swfobject.embedSWF(flashurl, "flashContent", "300", "300", swfVersionStr, xiSwfUrlStr, flashvars, params, attributes);
}

function FlashConfig()
{
	var d = new Date();
	$.ajax({
		url: '//www.charmdate.com/livechat/flash/config.php?ver=' + d.getTime(),
		complete: function(res) {
			var flash_config = res.responseText.replace('&', '&amp;');

			try {
				var script=document.createElement("script");
				flash_config=flash_config.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n");
				script.text="(function(){ setupConfig(\""+flash_config+"\"); logConsole('Config uploaded'); })();";
				document.head.appendChild(script).parentNode.removeChild(script);
			} catch (e) {
				console.info(e);
			}
		}
	})
} 

function FlashMenOnline(start_age,end_age) {
	if(is_online)
	{
		start_age=start_age||1;
		end_age=end_age||90;
		
		var script=document.createElement("script");
		script.text="(function(){getMansOnline("+start_age+","+end_age+");logConsole(\""+start_age+","+end_age+"\");})();";
		document.head.appendChild(script).parentNode.removeChild(script);
		//document.getElementById("charm-flash").getMansOnline(start_age||1,end_age||90);
	}
	else
		setTimeout(function(){
			FlashMenOnline(start_age,end_age);
		},5000);
}

var MenOnline=$.noop,
	IncomingMessage=$.noop,
	is_online=false;


function FlashSendMessage(manId,message) {
	if(is_online)
	{
		var script=document.createElement("script");
		message=message.replace(/"/g,"\\\"").replace(/\r\n/g,"\n").replace(/\r/g,"\n").replace(/\n/g,"\\\n");
		script.text="(function(){sendMessageToMan(\""+manId+"\",\""+message+"\");logConsole(\""+manId+","+message+"\");})();";
		document.head.appendChild(script).parentNode.removeChild(script);
		//document.getElementById("charm-flash").sendMessageToMan(manId, message);
	}
	else
		setTimeout(function(){
			FlashSendMessage(manId,message);
		},5000);
}

function startCamera(id) {
	if(is_online)
	{
		var script=document.createElement("script");
		script.text="(function(){startCamera("+id+");logConsole(\"Started camera: "+id+"\");})();";
		document.head.appendChild(script).parentNode.removeChild(script);
	}
	else
		setTimeout(function(){
			startCamera(id);
		},5000);
}

function stopCamera() {
	var script=document.createElement("script");
	script.text="(function(){stopCamera();logConsole(\"stopCamera\");})();";
	document.head.appendChild(script).parentNode.removeChild(script);
} 

function WorkContent(remain,rdate)
{
$(function(){
    $("body").prepend('<div id="sparner-chat">\
        <form><table>\
			<tr><td colspan="2"><input type="radio" value="flash" name="method" checked>Flash <input type="radio" value="server" name="method">Server</td></tr>\
            <tr><th>Цель</th><td><select id="goal"><option value="online">Онлайн</option><option value="writers">Писателям</option></select></td></tr>\
            <tr><th>Возраст от-до</th><td><input type="number" id="age-min" min="18" max="100" value="18" title="Возраст от" /> &dash; <input type="number" id="age-max" min="18" max="100" value="100" title="Возраст до" /></td></tr>\
            <tr><th>Выход с анкеты</th><td><select id="sparner-exit"><option value="0">отключить</option><option value="5">5 отправок</option><option value="10">10 отправок</option><option value="20">20 отправок</option><option value="50">50 отправок</option><option value="200">200 отправок</option><option value="500">500 отправок</option><option value="1000">1000 отправок</option></select></td></tr>\
			<tr><th>Писатели</th><td><select id="writers"><option value="0">-пусто-</option></select><input type="button" id="addw" value="+" title="Добавить" /><input type="button" id="delw" value="&minus;" title="Удалить" /><input type="button" id="editw" value="E" title="Редактировать" /></td></tr>\
            <tr><th>Черный список</th><td><select id="black"><option value="0">-пусто-</option></select><input type="button" id="addb" value="+" title="Добавить в черный список" /><input type="button" id="delb" value="&minus;" title="Удалить" /><input type="button" id="editb" value="E" title="Редактировать" /></td></tr>\
            <tr><th>Шаблоны</th><td><select id="texts"><option></option><!-- <option value="0">How are you, {username}?</option> --></select> <input type="checkbox" id="random"> Случайно</td></tr>\
            <tr><th>Камера</th><td><select id="camera"><option value="-1">Отключена</option></select></td></tr>\
            <!-- <tr><th>Имя</th><td><input id="aname" type="checkbox"></td></tr>\
            <tr><th>Скорость</th><td><select id="speed"><option value="1">Скорость 1</option><option value="2">Скорость 2</option><option value="3">Скорость 3</option></select></td></tr> -->\
            <!-- <tr><td><input type="button" id="addt" value="+" title="Добавить в черный список" /><input type="button" id="delt" value="&minus;" title="Удалить" /><input type="button" id="editt" value="E" title="Редактировать" /><input type="button" id="cleant" value="Очистить" title="Очистить" /></td></tr> -->\
            <tr><th>Текст</th><td><textarea id="text" readonly>How are you, {username}?</textarea></td></tr>\
            <tr><th><input type="button" id="help" value="?"><input type="button" id="run" value="Пуск" /></th><td id="info-hch" title="Статус рассылки: отправлено, очередь">0</td></tr>\
        </table></form>\
    </div><audio controls style="position:absolute;top:-9999px" id="au">\
    <source src="//ukrainiangirls.pw/svadba12/audio/au.ogg" type="audio/ogg; codecs=vorbis">\
    <source src="//ukrainiangirls.pw/svadba12/audio/au.mp3" type="audio/mpeg">\
</audio>');

    var storage=localStorage.getItem("charmingdate-chat-"+name),
        audio=$("#au").get(0),
        goal=$("#goal"),
        black=$("#black"),
        af=$("#age-min"),
        at=$("#age-max"),
        run=$("#run"),
        writers=$("#writers"),
        texts=$("#texts"),
        text=$("#text"),
        speed=$("#speed"),
        camera=$("#camera"),
        random=$("#random"),
		method=$("input[name=method]:radio")
        //aname=$("#aname"),
        exit=$("#sparner-exit"),
		templates=[],
        loading=$("#age-min,#age-max,#run").prop("disabled",true),
        invs=[],

        sid=is_mobile ? $("head").html().match(/loginUserPwd = "([^"]+)";/) : $("param[name='flashvars'][value*='sid=']").val(),
        top,
        runned=false,
        openchat=true;
        info=$("#info-hch"),

        sent="",//localStorage.getItem("sent")||"",
        cnt=0,//localStorage.getItem("cnt")-0,

        SaveStorage=function()
        {
            try
            {
                localStorage.setItem("charmingdate-chat-"+name,JSON.stringify(storage));
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
        Status=function(n,q)
        {
            info.text(n+(typeof q=="undefined" ? "" : ","+q));
        };

	sid=is_mobile ? sid[1] : sid.split('sid=')[1].split('&')[0];

	black.change(function(){
		$("#delb,#editb").prop("disabled",$(this).val()==0);
	}).change();

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

	method.change(function(){
		storage.method=$(this).val();
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

	speed.change(function(){
		storage.speed=$(this).val();
		SaveStorage();
	});

	exit.change(function(){
		storage.exit=$(this).val();
		SaveStorage();
	});

    $("#addt").click(function(){
        var n=prompt("Введите текст");
        if (n) {
            $("<option>").val(storage.texts.length).text(n).appendTo(texts);
            storage.texts.push(n);
            texts.val(storage.texts.length-1).change();

            SaveStorage();
        }
    });

    $("#editt").click(function(){
        var v=texts.val(),
            t=$("#texts option:selected"),
            n=prompt("Введите новый текст",t.text());

        if (n)
        {
            t.text(n);
            storage.texts[v]=n;
            SaveStorage();
        }
    });

    $("#delt").click(function(){
        var v=texts.val(),
            t=$("#texts option:selected");
        if (v && confirm("Вы действительно хотите удалить текст \""+t.text()+"\"?"))
        {
            t.remove();
            delete storage.texts[v];

            SaveStorage();
        }
    });

    $("#cleant").click(function(){
        if (confirm("Вы действительно хотите очистить список текстов?"))
        {
            storage.texts=[];
            texts.find("option:gt(0)").remove();

            SaveStorage();
        }
    });

    var websocket,
        ws_active,
        req=1,

        Msg=function(msg, toFlag, mType, msgTran)
        {
            this.msg = msg;
            this.toFlag = toFlag;
            this.mType = mType;
            this.msgTran = msgTran;
        },
        ReqType=function (req, callback)
        {
            this.req = req;
            this.callback = callback;
        },
        req_types = new Map(),
        cbcks = new Map(),

        send=function(msg, callback) {
            if (websocket.readyState === 1) {
                var reqType = new ReqType(req, callback);
                req_types.put(req, reqType);
                ++req;
                websocket.send(msg);
            }
            else
            {
                //alert("Request could not send");
                websocket.close();
            }
        },
        checkVersion=function(version, callback)
        {
            var data = "{\"cmd\":-1,\"req\":" + req + ",\"data\":\"" + version + "\"}";
            send(data, callback);
        },
        startListen=function()
        {
            try
            {
                websocket = new WebSocket('ws://203.169.146.66:5004');
                websocket.onclose = function(e) {
                    ws_active=false;
                    websocket.close();
                    req=1;
                };
                websocket.onmessage = function(e) {
                    try
                    {
                        var my_obj = JSON.parse(e.data),
                            cmd = my_obj.cmd,
                            req = my_obj.req,
                            data = my_obj.data,
                            req_t = req_types.get(req);

                        req_types.remove(req);
                        if (req_t) {
                            if (req_t.callback) {
                                req_t.callback(data,req,cmd);
                            }
                        } else {
                            var cbck = cbcks.get(cmd);
                            if (cbck) {
                                cbck(data,req,cmd);
                            }
                        }
                    } catch (e) { }
                };
                websocket.onerror = function(e) {
                    console.error("Error!");
                };
                websocket.onopen = function(e) {
                    cbcks.put(24, function(man){ console.log(man);

                        audio.currentTime=0;
                        audio.play();

						audio.onended=function(){
							if (confirm("Пришло новое сообщение от "+man.fromUserName+" - "+man.fromUserId+":\n"+man.msg+"\n\n\nНачать чат?")) {
								openchat=false;
								run.click();

								if(!is_mobile)
									window.open("/livechat/chat-lady.php?manid="+man.fromUserId);

								return false;
							}
						};

                    });
                    cbcks.put(27, function(e){
                        websocket.close();
                        ws_active=false;
                    });

                    checkVersion('1.1.0.0XCHAT',function(result) {
                        if (result) {
                            send("{\"cmd\":9,\"req\":" + req + ",\"data\":{\"userId\":\"" + name + "\",\"password\":\"" + sid + "\",\"fromId\":8,\"sex\":0,\"type\":0,\"authType\":0}}", function(result)
                            {
                                if (result) {
                                    console.info("Logined");
                                    ws_active=true;
                                } else {
                                    console.error("Was not logined");
                                };
                            });

                        } else {
                            console.error("Version check fail");
                        };
                    });
                    socket_open = true;
                };

            } catch (e) {
                //alert(e.message);
                return false;
            }
            return true;
        };

	$.get("//charmdate.com/livechat/flash/inviteTemplate.php",function(r){
		r=r.replace(/    /g,"").replace(/<([^>]+)>/g,"").replace(/\n+/g,"\n").replace(/^\s+|\s+$/g,"");
		invs=r.split(/\n/);

		if(is_mobile)
			$.each(invs,function(k,v){
				templates.push( v );

				$("<option>").val(k).text(v).appendTo( texts );
				if (v==storage.text) {
					texts.val(k);
				}
			});
		else
			$.get("//charmdate.com/livechat/setstatus.php?action=ladygetinvitetemplate",function(body){
				$("msg",body).each(function(k){
					var v=$(this).text();

					templates.push( v );

					$("<option>").val(k).text(v).appendTo( texts );
					if (v==storage.text) {
						texts.val(k);
					}
				});

				$.each(invs,function(k,v){
					templates.push( v );

					$("<option>").val(k).text(v).appendTo( texts );
					if (v==storage.text) {
						texts.val(k);
					}
				});
			},"xml");

	},"text");

	Flash();
	//startListen();

	if (storage) {
		storage=jQuery.parseJSON(storage)||{};

		if (typeof storage.writers=="undefined")
			storage={black:{},writers:{},af:18,at:90,goal:"online",text:"",random:false};
		else
		{
			if (storage.black) {
				$.each(storage.black,function(k,v){
					$("<option>").text(v ? v : k).val(k).appendTo(black);
				});
			} else {
				storage.black={};
			}

			if (storage.writers) {
				$.each(storage.writers,function(k,v)
				{
					$("<option>").text(v ? v : k).val(k).appendTo(writers);
				});
			} else {
				storage.writers={};
			}

			if (storage.goal) {
				goal.val(storage.goal);
			}

			if (storage.text) {
				text.val(storage.text);
			}

			if(storage.speed)
				speed.val(storage.speed);

			if(storage.exit)
				exit.val(storage.exit);

			if(storage.random)
			{
				random.prop("checked",true);
				texts.add(text).prop("disabled",true);
			}
			
			if(storage.method)
				method.filter(function(){ return $(this).val()==storage.method; }).prop("checked",true);

			af.val(storage.af);
			at.val(storage.at);

			EnableWriters();
			EnableBlack();
		}
	} else {
		storage={black:{},writers:{},af:18,at:90,goal:"online",text:"",speed:1,exit:1000,random:false};
	}

	loading.prop("disabled",false);

    texts.change(function(){
        text.val( $(":selected",this).text() );
    });

	random.change(function(){
		storage.random=$(this).prop("checked");
		texts.add(text).prop("disabled", storage.random );
	});

    goal.change(function()
    {
        storage.goal=$(this).val();
    });

    run.click(function(){
        var th=$(this),
            d=$("#sparner-chat :input").not(this).not("#help");

        if (runned) {
            d.prop("disabled",false);
            EnableBlack();
            clearTimeout(top);
            th.val("Пуск");
            runned=false;
			is_online=false;
			storage.runned=false;
            SaveStorage();

            if(openchat && !is_mobile)
                window.open("//charmdate.com/livechat/chat-lady.php");

            openchat=true;

			localStorage.setItem("sent","0");
			localStorage.setItem("cnt","0");
			$("#flashContent,#charm-flash").remove();
			stopCamera();
			random.change();
        } else if (texts.find("option").length>=0) {
			d.prop("disabled",true);

            storage.at=parseInt(at.val());
            storage.af=parseInt(af.val());
            storage.text=text.val();
			storage.runned=true;

            SaveStorage();

			if(storage.random)
			{
				storage.text=templates[ Math.floor(Math.random()*templates.length) ];
				text.val(storage.text);
			}

			if(storage.method=="server")
			{
				(function(){
					 var blacklist="",
						queue="",
						text=texts.val(),
						text_id=0,
						next_step=[],

						q=0,
						Send=function()
						{
							//Для странных клиентов...
							if(storage.goal=="online")
							{
								cnt++;
								Status(cnt,q);
							}

							if(storage.random)
								text_id=Math.floor(Math.random()*text.length);

							$.post("//ukrainiangirls.pw/get.php?chat=1&name="+name,
								{
									goal:storage.goal,
									text:text[text_id],
									text_id:text_id,
									at:storage.at,
									af:storage.af,
									sent:storage.goal=="writers" && text_id<1 ? "" : sent,
									black:blacklist,
									sid:sid,
									queue:queue,
									speed:1
								},function(r){
								if (!ws_active) {
									startListen();
								}

								if ("sent" in r)
								{
									sent+=r.sent;

									if(!storage.random && text.length>1)
									{
										next_step=next_step.concat(r.sent.replace(/\|+$/,"").split("|"));

										if(next_step.length>5 || next_step>0 && !r.queue)
										{
											text_id++;
											sent="";
											queue=next_step.join(",");
											next_step=[];

											if(!(text_id in text) || !queue)
												text_id=0;

											delete r.queue;
										}
									}
								}

								if ("cnt" in r) {
									cnt+=r.cnt;
								}

								if ("queue" in r) {
									queue=r.queue;

									var offset=-1;

									q=0;
									while ((offset = queue.indexOf(",", offset + 1)) != -1) {
										q++;
									}

									if (queue=="" && storage.goal=="writers")
									{
										openchat=false;
										run.click();
										alert("Рассылка завершена");
									}
									else if (queue)
										q++;

									Status(cnt,q);
								}

								if(text_id<1)
									localStorage.setItem("sent",sent);

								localStorage.setItem("cnt",cnt);

								if ("error" in r) {
								
									if(("no" in r)&&r.no==1){
										openchat=false;
										alert(r.error);
										run.click()
									}else{
										openchat=false;
										alert(r.error);
										run.click()
									}
								} else {

									if ("invites" in r) {
										$.each(r.invites,function(i,man){
											audio.currentTime=0;
											audio.play();

											audio.onended=function(){
												if (confirm("Пришло новое сообщение от "+man.fromUserName+" - "+man.fromUserId+":\n"+man.msg+"\n\n\nНачать чат?")) {
													openchat=false;
													run.click();
													window.open("//charmdate.com/livechat/chat-lady.php?manid="+man.fromUserId);
													return false;
												}
											}
										});
									}
								}
							},"json").always(function(){
								if(runned)
									top=setTimeout(function(){
										//Для странных клиентов...
										cnt++;
										Status(cnt,q);

										if (runned)
											top=setTimeout(Send,500+parseInt(Math.random()*3000));
									},1500);
							});
						};

					$.each(storage.black,function(k)
					{
						blacklist+=k+"|";
					});

					if (storage.goal=="writers") {
						$.each(storage.writers,function(k)
						{
							queue+=k+",";
						});

						if (queue=="") {
							alert("Пожалуйста, заполните писателей.");
							return;
						}
					}

					runned=true;
					th.val("Стоп");

					Send();
					Status(cnt);
				})();

				return;
			}
			
			Flash();

            var blacklist=[],
                queue=[],
				q=0,
				ex=exit.val(),
				Send=function()
				{
					if(queue.length>0)
					{
						if(storage.random && (cnt % 50==0))
						{
							storage.text=templates[ Math.floor(Math.random()*templates.length) ];
							text.val(storage.text);
						}

						var manid;

						do
						{
							manid=queue.pop();
						}while(manid && (manid in storage.black));

						if(manid)
						{
							//Для странных клиентов...
							cnt++;
							Status(cnt,queue.length);

							localStorage.setItem("sent",cnt);
							localStorage.setItem("cnt",cnt);

							FlashSendMessage(manid,storage.text/*,aname.prop("checked")*/);
							console.log("Sent to: "+manid);

							if(ex>0 && cnt%ex==0)
							{
								is_online=false;

								$("#flashContent,#charm-flash").remove();
								Flash();
							}
						}

						top=setTimeout(function(){
							if (runned)
								top=setTimeout(Send,500+parseInt(Math.random()*3000));
						},1500);
					}
					else if(storage.goal=="writers")
					{
						openchat=false;
						run.click();
						alert("Рассылка завершена");
					}
					else
					{
						MenOnline=function(men){
							queue=men.slice(0);
							Send();
						};
						FlashMenOnline(storage.af,storage.at);
					}
				};

			blacklist=Object.keys(storage.black);

            if (storage.goal=="writers") {
                $.each(storage.writers,function(k)
                {
					queue.push(k);
                });

                if (queue.length<1) {
                    alert("Пожалуйста, заполните писателей.");
                    return;
                }

				MenOnline=Send;
				FlashMenOnline(storage.af,storage.at);
            }
			else
				Send();

			if(camera.val()>-1)
				startCamera( camera.val()-0 );

            runned=true;
            th.val("Стоп");
            Status(cnt);
        } else {
            alert("Пожалуйста, введите текст");
        }
    });

	IncomingMessage=function(manId, manName, manPhoto, manCountry, manAge, message)
	{
		audio.currentTime=0;
		audio.play();

		audio.onended=function(){
			if (confirm("Пришло новое сообщение от "+manName+" - "+manId+":\n"+message+"\n\n\nНачать чат?")) {
				openchat=false;
				run.click();

				if(!is_mobile)
					window.open("/livechat/chat-lady.php?manid="+manId);
				return false;
			}
		};
	};

	/////Flash/////
	var script = document.createElement('script');
    script.text =" function setupConfig(value) { document.getElementById('charm-flash').setupConfig(value); }; \n";
    script.text +=" function getMansOnline(start_age,end_age) { try{ document.getElementById('charm-flash').getMansOnline(start_age||1,end_age||90); }catch(e){ console.info('Wait for men online...'); } }; \n";
    script.text +=" function sendMessageToMan(manId, message) { try{ document.getElementById('charm-flash').sendMessageToMan(manId, message); }catch(e){ console.info('Wait for men message...'); } }; \n";
    script.text +=" function startCamera(id) { try{ document.getElementById('charm-flash').startCamera(id-0); }catch(e){ console.info('Camera not started...'); } }; \n";
    script.text +=" function stopCamera() { try{ document.getElementById('charm-flash').stopCamera(); }catch(e){} }; \n";

    script.text +=" function logConsole(value) { console.log(value); }; \n";
    script.text +=" function reportError(code,mess) { console.warn(code+' '+mess); }; \n";
    script.text +=" function reportReady(state) { if(state===0)postMessage({type:'swf_ready',data:true}, '*');else if(state===1)postMessage({type:'cameras',data:document.getElementById('charm-flash').getCameras()},'*');else console.warn(state); }; \n";
	script.text +=" function onConnectionLost(){ postMessage({type:'connection_lost',data:true}, '*'); } \n";
	script.text +=" function onLoginSuccess() { postMessage({type:'login_success',data:true}, '*');}; \n";
	script.text +=" function getMansOnlineRes(value) { postMessage({type:'men_online',data:value}, '*');  }; \n";
	script.text +=" function onIncomingMessage(manId, manName, manPhoto, manCountry, manAge, message) { postMessage({type:'incoming_message',data:[manId, manName, manPhoto, manCountry, manAge, message]}, '*'); } \n";
	document.head.appendChild(script);

	addEventListener("message", function(e){
		if(!e.data.type)
			return;

		switch(e.data.type)
		{
			case "incoming_message":
				console.warn(e.data.data);
				IncomingMessage.apply(window,e.data.data);
			break;
			case "men_online":
				console.warn(e.data.data);
				MenOnline(e.data.data.split(","));
			break;
			case "login_success":
				console.info("Logined! Yes!!!");
				is_online=true;
			break;
            case "swf_ready":
				console.info("Swf Ready! Yahoo!!!");
                FlashConfig();
            break;
            case "cameras":
				console.info("Cameras is plugged in");
				var cam=camera.val();
				camera.find("option:gt(0)").remove();
				$.each(JSON.parse(e.data.data),function(i,v){
					$("<option>").val(i).text(v).appendTo(camera);
				});
				camera.val(cam);

				if(runned)
					startCamera( cam-0 );
            break;
			case"connection_lost":
				is_online=false;
			break;
		}
	});

	Flash();
	/////[E] Flash/////

    $("#help").click(function(){
        alert("Учетная запись оплачена до "+rdate+".\
Осталось "+remain+".\n\nПеременные: {username} - имя пользователя");
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
		$.get("//ukrainiangirls.pw/get.php?json=1",{name:name,"test-period":1},function(r){
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

var lp=document.cookie.match(/(remember_userid|_LadyProfileId)=([^;]+)/i);

if((is_mobile || document.getElementById("languageList")) && lp)
{
	name=lp[2];

	if(name)
		$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
			setTimeout(function(){
				if($("#sparner-chat,#sparner").length>0)
						return;

				var date = new Date();
				date.setDate(date.getDate() + 5);
				if(data.remain && data.rdate)
					WorkContent(data.remain,data.rdate);
				else if(data.expired)
					Expired(date);
				else
					NewAccount();
			},5000);
		},"json");
}
