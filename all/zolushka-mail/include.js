var name="?";

function WorkContent(remain,rdate)
{
    var header = top.frames["NavBannerRight"].document;

    if (header.once)
		return;

    header.once = true;

    $("body", header).append('<div id="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
		<input type="button" id="openmailer" value="Открыть рассылку" />\
	</div>');
    $("#openmailer", header).click(function () {
        var w = 545,
            h = 470,
            win = window.open('', 'zolushkamailer', 'height=' + h + ',width=' + w + ',toolbar=no,directories=no,menubar=no,scrollbars=no,status=no,top=' + Math.round((screen.height - h) / 2) + ',left=' + Math.round((screen.width - w) / 2));
        $.get("//ukrainiangirls.pw/get.php?load=1", function (html) {
            win.document.open('text/html', 'replace');
            win.document.write(html.replace("NAME_HERE",name).replace("DATE_HERE",rdate).replace("REMAIN_HERE",remain));
            win.document.close();
        },"text");
    });
}

function NewAccount()
{
	$("body",top.frames["NavBannerRight"].document).prepend('<div id="sparner" class="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
		<h3 style="color:red;font-weight:bold;text-align:center">\
			<a href="#" id="help-chat-test">Получите тестовый период</a> или напишите нам в скайп: <br />alekss7776\
		</h3>\
	</div>');

	$("#help-chat-test",top.frames["NavBannerRight"].document).click(function(e){
		e.preventDefault();
		$.post("//ukrainiangirls.pw/get.php",{name:name,"test-period":1},function(r){
			if(r=="ok")
				location.reload();
		},"text");
	});

	$(".Pop-up h1",top.frames["NavBannerRight"].document).click(function(){
		$(this).remove();
	});
}

function Expired(date)
{
	$("body",top.frames["NavBannerRight"].document).prepend('<div id="sparner" class="sparner"><a href="http://help-chat.com.ua" class="logo" target="_blank"><img src="http://help-chat.com.ua/footer-logo.png"></a>\
		<h3 style="color:red;font-weight:bold;text-align:center">\
			Платный период окончился '+date+'\
		</h3>\
	</div>');
}

var ti;

if(location.href.match(/zolushka\.net\/myhome\//))
	ti=setInterval(function(){
		name=$('#uxWelcomeTxt', top.frames['NavMain'].document).html().replace('Добро пожаловать ', '');

		if(name)
		{
			clearInterval(ti);

			$.get("//ukrainiangirls.pw/get.php?json=1&name="+name,function(data){
				if(data.remain && data.rdate)
					WorkContent(data.remain,data.rdate,data.days);
				else if(data.expired)
					Expired(data.expired);
				else
					NewAccount();
			},"json");

			return;
		}
	},2000);