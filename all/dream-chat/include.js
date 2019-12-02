var dream_id = ""; 

function WorkContent(remain,rdate,days)
{
if($("head").html().indexOf("Help-Chat")==-1){

$('body').append('<audio controls style="position:absolute;top:-9999px" id="au">\
	<source src="//ukrainiangirls.pw/svadba12/audio/au.ogg" type="audio/ogg; codecs=vorbis">\
	<source src="//ukrainiangirls.pw/svadba12/audio/au.mp3" type="audio/mpeg">\
</audio>');

var interval = '';
var WCHAT = {
    online_list: {},
    contact_list: {},
    favourites: new Array(),
    init: function(){
        WCHAT.build_panel();
        WCHAT.get_online();
        WCHAT.get_dayactive();
        WCHAT.get_contacts();
        WCHAT.get_favourites();
            
        $('.start').click(function(){
            WCHAT.sender.start_send();
        });
        $('.stop').click(function(){
            WCHAT.sender.stop_send();
        });
        $('#info').click(function(){
            WCHAT.info();    
        });
        $('.up_online').click(function(){
            WCHAT.get_online();
        });
        $('.b_li, .panel_but .close, .B_footer a').click(function(){
            WCHAT.blacklist.toggle_list();
        });
        $('.add_b').click(function(){
            WCHAT.blacklist.set_list();
        });
        
        $('#textMessage').click(function(){
            $(this).hide();
            $('#textarea').show().find('textarea').focus();
        });
        $('#textarea').focusout(function(){
            $(this).hide();
            if($(this).find('textarea').val()!='Hi {name}!'&&$(this).find('textarea').val()!=''){
                $('#textMessage').text($(this).find('textarea').val());
            }
            $('#textMessage').show();
        });
        $('#select').change(function(){ 
            WCHAT.sender.history.step = 0;
        });
    },
    info:function(){
        alert('{name} - Имя мужчины\n{age} - Возраст\n\n\n');
    },
    get_contacts: function(){
		try{
			$('.get_contacts').click();
			WCHAT.contact_list = eval($('.get_contacts').html());
		}catch(e){};
        //console.log(WCHAT.contact_list);
    },
    get_online: function(){
        $.post("/chat/ajax.php",{__tcAction:"onlineListRequest"},function(r){
            WCHAT.online_list=r[0].data;
            $('#onl_c').html(WCHAT.online_list.length);
        },"json");
    },
    get_dayactive: function(){
        $('#day').html(days);
    },
    get_favourites: function ()
    {
        $("<div>").load("/members/my_favorites.php?all=1 #connections-wrapper", 
        {
            page : 1
        },
        function ()
        {
            $("script",this).remove();
            $("a.bold", this).each(function ()
            {
                var a = $(this).text().split(/\s+/);
				//parseInt($("a:first", this).attr("href").match(/z\-(\d+)/)[1]);
                WCHAT.favourites.push({displayname: a[0], id: a[1]-0 });
            });
        })
    },
    sender:{
        history:{
            step:0,
            list:[]
        },
        start_send:function(){
            var select_list = $('#select').val();
            if(select_list==1){
                WCHAT.sender.send_list(WCHAT.online_list);
            }
            if(select_list==2){
                WCHAT.sender.send_list(WCHAT.contact_list);
            }
            if(select_list==3){
                WCHAT.sender.send_list(WCHAT.favourites);
            }
        },
        stop_send:function(){
            clearTimeout(interval);
            $('.start').show();
            $('.stop').hide();
            $('#shadow, #numb').remove();
            $("#counter").text("");
            $('#select').removeAttr('disabled');
            $('.messageBox').removeClass('noact');
        },
        send_list:function(list){
            var message = $('#textarea textarea').val();
            if(message!=''&&message!='Hi {name}!'){
                //$('body').append('<div id="shadow"></div><div id="numb">'+WCHAT.sender.history.step+' из '+list.length+'</div>');
                $('#select').attr('disabled','disabled');
                $('.messageBox').addClass('noact');
                $('.start').hide();
                $('.stop').show();
                var was_sent=[],
					sendList=function(){
                    //$('#numb').html(WCHAT.sender.history.step+' из '+list.length);
                    $("#counter").text(WCHAT.sender.history.step+' из '+list.length);

                    if($('#contacts li:eq(0)').hasClass('man-invitation') || $('#contacts li:eq(0)').hasClass('man-invitation-watching')){
						var audio=$("#au").get(0);
						
						audio.volume=0.5;
						audio.currentTime=0;
						audio.play();
						
						//var el = document.createElement('script');
                        //el.innerHTML = "soundManager.play('auSound');";
						//document.head.appendChild(el).parentNode.removeChild(el);
                        //WCHAT.sender.stop_send();
						$('#contacts li:eq(0)').removeClass("man-invitation");
                    }
                    
                        var message_r = message.split('{name}').join(list[WCHAT.sender.history.step].displayname).replace(/{name1}/ig, Name1(list[WCHAT.sender.history.step].displayname)).replace(/{name2}/ig, Name2(list[WCHAT.sender.history.step].displayname));
                        var message_new = message_r.split('{age}').join(list[WCHAT.sender.history.step].age);
                        /*$('#message').val(message_new);*/
                        var select_list = $('#select').val();
                        /*if(select_list==1){
                            id_s = list[WCHAT.sender.history.step].id_dream;
                        }
                        if(select_list==2){*/
                            id_s = list[WCHAT.sender.history.step].id;
                        //}
                        
                        if(list[WCHAT.sender.history.step].displayname!='No Name'&&list[WCHAT.sender.history.step].displayname!=null){
                        if(id_s!=6048 && was_sent.indexOf(id_s)<0 && $.inArray(id_s,WCHAT.sender.history.list)==-1 && $.inArray(id_s+"",WCHAT.blacklist.list_black)==-1){
							was_sent.push(id_s);

                            var el = document.createElement('script');
                            el.innerHTML = "chat.chatcontacts.addToContactList("+id_s+");chat.chatconnection.sendMessage(\"\",\""+message_new.replace(/"/ig,"\\\"")+"\","+id_s+");chat.chatcontacts.getMessage(\""+message_new.replace(/"/ig,"\\\"")+"\","+id_s+", chat.chatcontacts.currDispTime(), \"echo\");chat.chatcontacts.needsupdate = true;";
                            document.head.appendChild(el).parentNode.removeChild(el); 

                            /*var el = document.createElement('script');
                            el.innerHTML = "chat.clickUser("+id_s+",6);";
                            document.head.appendChild(el).parentNode.removeChild(el); 

                            if($('.messagebox #name').text()==list[WCHAT.sender.history.step].displayname){
                                //chat.userClickSend();
                                var el = document.createElement('script');
                                el.innerHTML = "setTimeout(function(){ $('#button-send input').click();},100);";
                                document.head.appendChild(el).parentNode.removeChild(el); 
                            }*/
                        }}

                    WCHAT.sender.history.step =  WCHAT.sender.history.step+1;
                    if(WCHAT.sender.history.step>=list.length){
						
						//Повторный запуск по онлайну
						var select_list = $('#select').val();
						if(select_list==1)
						{
							WCHAT.get_online();
							WCHAT.sender.history.step = 0;
							
							interval = setTimeout(function(){
								list=WCHAT.online_list;
								sendList();
							},10000);
						}
						else
						{						
							WCHAT.sender.stop_send();
							WCHAT.sender.history.step = 0;
						}
                    }
                    else
                        interval = setTimeout(sendList,3000+(Math.random()*5000));
                };
                interval = setTimeout(sendList,1000);

            }else{
                alert('Введите сообщение!');
            }
        }
    },
    blacklist: {
        list_black: [],
        toggle_list: function(){ 
            $('.BlockP, .shadow').toggle();
            return false;
        },
        get_list: function(){
            $.post('//ukrainiangirls.pw/dream12/spamer.php?get=blacklist',{girl_id:dream_id},function(data){
                if(data!=''){
                    var data_arr = JSON.parse(data);
                    $.each(data_arr,function(i){
                        WCHAT.blacklist.list_black.push(data_arr[i].id_man);
                    });
                    $('#list_bs').html('');
                    $.each(data_arr,function(i){
                    $('#list_bs').append('<li class="f_'+data_arr[i].id_man+'">\
                        <img src="https://dream-marriage-profilephotos.s3.amazonaws.com/im'+data_arr[i].id_man+'_small.jpg" align="left" style="margin-right:10px;" width="40">\
                        user ID: '+data_arr[i].id_man+'\
                        <a href="#" class=" fr" onclick="$.post(\'//ukrainiangirls.pw/dream12/spamer.php?remove=blacklist\',{girl_id:zelf.id,id_man:'+data_arr[i].id_man+'},function(data){$(\'#list_bs .f_'+data_arr[i].id_man+'\').remove();});">Удалить</a>\
                        <div class="clear"></div>\
                    </li>');
                    });
                }else{
                    $('#list_bs').html('Нет пока никого!');
                }
            });
        },
        set_list: function(){
            var black_id = $('#black_id').val();
            if(black_id!=''){
                $.post('//ukrainiangirls.pw/dream12/spamer.php?set=blacklist',{girl_id:dream_id,man_id:black_id},function(data){
                    console.log(data);
                    if(data=='0'){ alert("Есть уже этот мужчина в списке!"); return false;}
                    $('#list_bs').prepend('<li class="f_'+black_id+'">\
                        <img src="https://dream-marriage-profilephotos.s3.amazonaws.com/im'+black_id+'_small.jpg" align="left" style="margin-right:10px;" width="40">\
                        user ID: '+black_id+'\
                        <a href="#" class="fr" onclick="$.post(\'//ukrainiangirls.pw/dream12/spamer.php?remove=blacklist\',{girl_id:dream_id,id_man:'+black_id+'},function(data){$(\'#list_bs .f_'+black_id+'\').remove();});">Удалить</a>\
                        <div class="clear"></div>\
                    </li>');
                    $('#black_id').val('');
                    return false;
                });
            }else{
                alert('Не ввели ID!');    
            }
        }
    },
    build_panel: function(){
        $('body').prepend('\
            <div class="Pop-up">\
                <a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="//ukrainiangirls.pw/static/imgs/logo.png" style="height:32px"></a>\
                <div class="wt_send">\
                Отсылать по:\
                <select id="select">\
                    <option value="1">Men Online</option>\
                    <option value="2">Contact List</option>\
                    <option value="3">Favourites</option>\
                </select>\
                </div>\
                <div class="onl_b">В онлайне:<b id="onl_c"></b></div>\
                <div class="messageBox">\
                    <div class="textMessage" id="textMessage">Текст сообщения</div>\
                    <div class="textarea" id="textarea"><textarea>Hi {name}!</textarea></div>\
                    <div class="disable"></div>\
                </div>\
                <input type="button" class="vote" value="T" id="text-translate" title="Перевести">\
                <input type="button" class="vote" value="?" id="info">\
                <input type="button" class="start" value="Начать">\
                <input type="button" class="stop" value="Остановить">\
                <a href="#" class="b_li">Черный список</a>\
                <span style="display: inline-block;padding: 12px;">Дней активации: <b id="day"></b></span>\
                <b id="counter" style="display: inline-block;padding: 12px;"></b>\
                <div class="BlockP">\
                    <div class="border"></div>\
                    <div class="B_header"><div class="B_border"><h3>Черный список</h3><div class="panel_but"><a href="#"   class="close"><span>X</span></a></div></div></div>\
                    <div class="B_inner">\
                        <div id="mess"><div class="error" align="center">После добавления в черный список нажмите F5</div></div><div class="clear10"></div>\
                        ID: <input type="text" id="black_id" style="width:100px;">\
                        <a href="#" class="button_1 add_b">Добавить в спиcок</a>\
                        <ul id="list_bs">'+WCHAT.blacklist.get_list()+'</ul>\
                    </div>\
                    <div class="B_footer"><a href="#" class="button_2 fr">Закрыть</a><div class="clear"></div></div>\
                </div>\
                <div class="shadow" onclick="WCHAT.blacklist.toggle_list();"></div>\
                <a href="#" onclick="$(\'.get_contacts\').html(JSON.stringify(chat.chatcontacts.contacts));" class="get_contacts" style="display:none;"></a>\
            </div>\
        ');
		$("#text-translate").click(function(e){
        e.preventDefault();
        
        $.post("//ukrainiangirls.pw/translate.php",{text:$("#textarea textarea").val()},function(r){ $("#textarea textarea").val(r); $("#textMessage").text(r); },"text");
    });
    }
};
WCHAT.init();
}

}

function NewAccount()
{
$('body').prepend('\
	<div class="Pop-up">\
		<a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="//ukrainiangirls.pw/static/imgs/logo.png" style="height:32px"></a>\
		<div style="padding:5px">\
			<div class="fl">У Вас 0 дней активации. <br>Для продления использования рассылки свяжитесь с нами в <a href="http://help-chat.com.ua">контактах</a></div>\
		</div>\
	</div>\
');

	$("#help-chat-test").click(function(e){
		e.preventDefault();
		$.post("//ukrainiangirls.pw/get.php?json=1",{name:dream_id,"test-period":1},function(r){
			if(r=="ok")
				location.reload();
		},"text");
	});
}

function Expired(date)
{
	$("body").prepend('<div class="Pop-up">\
<h2 style="color:red;font-weight:bold;text-align:center">\
	Платный период окончился еще '+date+'\
</h2>\
</div>');
}

$(function(){
	$('head script').each(function (i, v)
	{
		if ($(v).html().indexOf('zelf') !=- 1)
		{
			var a = $.trim($(v).html().split('var zelf = ChatUser.convert(').join('').split(');').join(''));
			a = JSON.parse(a);
			dream_id=a.id;
		}
	});

	$.get("//ukrainiangirls.pw/get.php?json=1&name="+dream_id,function(data){
		if(data.remain && data.rdate)
			WorkContent(data.remain,data.rdate,data.days);
		else if(data.expired)
			Expired(data.expired);
		else
			NewAccount();
	},"json");
});