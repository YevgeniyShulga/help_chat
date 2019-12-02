import $ from 'jquery';
import config from '../constants/sitesconfig'
const PATTERN_ACCOUNT = 'account';
const PATTERN_SITE = 'site';

class WebViewHandler
{


    addContentToWebViews() {
        let webviews = $('webview').get();
        console.log(webviews);
        webviews.forEach((current) => {
            console.log(current);
            current.addEventListener('loadcommit', (e) => {

                console.log(e);
                console.log(current);
                WebViewHandler.removeAllTargetBlank(current);
                current.executeScript({file: "/embeded/dist/bundle.js"});
                current.executeScript({code: "console.log(window.location.href)"});
                let id = current.id;
                let str = PATTERN_ACCOUNT + ' ' + PATTERN_SITE;
                let frameNumber = id.charAt(str.length);
                console.log(config[frameNumber] ,config[frameNumber].onlineSender, config[frameNumber].onlineSender.content, frameNumber)

            })
        })
    }

    static removeAllTargetBlank(elem) {
        elem.executeScript({code: 'setTimeout(() => {console.log("remove target");let link = document.getElementsByTagName("a"); [].forEach.call(link, (elem) => {elem.removeAttribute("target")})}, 3000)'});
        elem.executeScript({code: 'setTimeout(() => {console.log("remove fixed");let link = document.getElementsByTagName("header"); [].forEach.call(link, (elem) => {elem.style.position="";})}, 3000)'});
    }
}

export default WebViewHandler