import App from "./app";
import React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {rootStore} from "./store";

if (!document.getElementById('appHelpChat')){
    let body = document.body;
    let appBlock = document.createElement('div');
    appBlock.id = 'appHelpChat';

    body.prepend(appBlock);

    setTimeout(() => {
        ReactDOM.hydrate(<Provider store={rootStore}> <App /></Provider>, document.getElementById('appHelpChat'));
    }, 5000);

}
