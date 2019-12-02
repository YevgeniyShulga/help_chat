$(function(){
	$.get("//ukrainiangirls.pw/get.php?notification=0&name=1",function(json){
		if(!json.ts)
			return;

		var last=localStorage.getItem("notification_"+json.plugin);

		if(!last || last<json.ts)
		{
			$("<style>").html("#mydiv { border:1px #468284 solid; position:fixed; top:20%; left:40%; background-color:#ADD8E6; width:230px; height:230px; padding:8px; z-index: 1000; }\
#mydiv button { position:absolute; bottom:5px; left:85px; }").appendTo("head");
			$('<div id="mydiv">').html(json.text+"<button id='close-my-div'>Ознакомлен</button>").appendTo("body");
			$("#close-my-div").click(function(e){
				e.preventDefault();
				localStorage.setItem("notification_"+json.plugin,json.ts);
				$("#mydiv").remove();
			});
		}

	},"json");
});