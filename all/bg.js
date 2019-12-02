chrome.webRequest.onHeadersReceived.addListener(details => {

	if(details.initiator && details.initiator.indexOf("chrome-extension://")==0)
		details.responseHeaders.map(item => {
			if (item.name.toLowerCase() == 'Access-Control-Allow-Origin'.toLowerCase()) {
				item.value = '*'
			}
		});

	details.responseHeaders.map(item => {
		if (item.name.toLowerCase() == 'referrer-policy'.toLowerCase()) {
			item.value = 'unsafe-url';
		}
		else if (item.name.toLowerCase() == 'Content-Security-Policy'.toLowerCase()) {
			item.value = "script-src * 'unsafe-eval' 'unsafe-inline'";
		}
	});

	return {responseHeaders:details.responseHeaders};
}, {urls: ["*://api.prime.date/*", "*://ladadate.com/*"]}, ["blocking", "responseHeaders", "extraHeaders"]);


var notify_id_to_tab={};

chrome.runtime.onMessage.addListener(function(msg,sender){
	if(msg.type=="incoming_message")
	{
		notify_id_to_tab[ msg.id ]={
			link:msg.link,
			tab:sender.tab
		};

		chrome.notifications.create(msg.id.toString(),{
			title:msg.title,
			message:msg.text,
			type:"basic",
			iconUrl:msg.photo||"/assets/images/smile.png"
		},function(id){
			console.log("Notify:",id);
		});
	}
});

chrome.notifications.onClicked.addListener(function(id){
	if(id in notify_id_to_tab)
	{
		var tab=notify_id_to_tab[id];

		chrome.tabs.update(tab.tab.id,{active:true,url:tab.link});
	}

	chrome.notifications.clear(id);
});

var last=localStorage.getItem("notification-news")||0,
	n_url=null,
	Notify=function(){
		$.get("https://ukrainiangirls.pw/get.php?notification=0&name=1",function(json){
			if(!json.ts)
				return;

			if(!last || last<json.ts)
			{
				last=json.ts;
				localStorage.setItem("notification-news",json.ts);

				n_url=json.text.match(/https:\/\/[a-z\d\-\.\/]+/);
				n_url=n_url ? n_url[0] : null;

				//https://developer.chrome.com/extensions/notifications
				chrome.notifications.create("news-"+(new Date()).getTime(),{
					title:"НОВОСТИ!",
					message:json.text,
					type:"basic",
					iconUrl:json.photo||chrome.extension.getURL("/2048.png")
				},function(id){
					console.log("Notify:",id);
				});
			}
		},"json");
	};

setInterval(Notify,3600000);
Notify();

chrome.notifications.onClicked.addListener(function(){
	if(n_url)
		open(n_url);
});