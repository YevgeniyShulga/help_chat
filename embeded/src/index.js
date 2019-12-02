import App from "./app";
import React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {rootStore} from "./store";

let body = document.body;
let appBlock = document.createElement('div');
appBlock.id = 'appHelpChat';

body.prepend(appBlock);

ReactDOM.hydrate(<Provider store={rootStore}> <App /></Provider>, document.getElementById('appHelpChat'));