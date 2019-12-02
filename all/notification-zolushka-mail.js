$(function(){
	$.get("//ukrainiangirls.pw/get.php?notification=0",function(json){
		if(!json.ts)
			return;

		var last=localStorage.getItem("notification_"+json.plugin),
			ti;

		if(!last || last<json.ts)
		{
			ti=setInterval(function(){
				var main = top.frames["NavMain"].document;

				if($("#dashboard",main).length>0)
					clearInterval(ti);
				else
					return;

				$("<style>").html("#mydiv { border:1px #468284 solid; position:fixed; top:20%; left:40%; background-color:#ADD8E6; width:230px; height:230px; padding:8px; z-index: 1000; }\
#mydiv button { position:absolute; bottom:5px; left:85px; }").appendTo( $("head",main) );
				$('<div id="mydiv">').html(json.text+"<button id='close-my-div'>Ознакомлен</button>").appendTo( $("body",main) );
				$("#close-my-div",main).click(function(e){
					e.preventDefault();
					localStorage.setItem("notification_"+json.plugin,json.ts);
					$("#mydiv",main).remove();
				});
			},1000);
		}

	},"json");
});