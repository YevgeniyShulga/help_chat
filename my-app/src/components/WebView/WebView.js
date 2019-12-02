// adapted from https://github.com/keokilee/react-electron-webview

import React, { Component} from 'react'
import * as format from '../../utils/format'

import WebViewHandler from "../../utils/WebViewHandler";

const EVENTS = [
    'close',
    'console-message',
    'crashed',
    'destroyed',
    'did-fail-load',
    'did-finish-load',
    'did-frame-finish-load',
    'did-get-redirect-request',
    'did-get-response-details',
    'did-navigate',
    'did-start-loading',
    'did-stop-loading',
    'dom-ready',
    'enter-html-full-screen',
    'gpu-crashed',
    'ipc-message',
    'leave-html-full-screen',
    'load-commit',
    'new-window',
    'page-favicon-updated',
    'page-title-set',
    'page-title-updated',
    'plugin-crashed'
]

export class WebView extends Component {
    constructor (props) {
        super(props)
        this.state = {loaded: false, webview: null}
    }

    componentDidMount () {
        const node = this.refs.webview;

        console.log(document.getElementsByTagName('webview')[0]);

        
        this._bindEvents(node);
        this._assignMethods(node);


        if (!this.state.loaded) {
            let handler = new WebViewHandler();
            handler.addContentToWebViews();
            this.setState({loaded: true, webview: node})
        }

    }

    render () {
        console.log('our partition prop: ', this.props.partition)
        return (<webview {...this.props} ref='webview'></webview>)
    }

    // Private methods
    _bindEvents (node) {
        EVENTS.map((ev) => {
            const listenerName = format.camelify(ev)
            node.addEventListener(ev, this.props[listenerName])
        })
    }

    _assignMethods (node) {
        console.log('putting dom-ready')
        node.addEventListener('dom-ready', () => {
            // console.log('got dom-ready, assigning methods')
            Object.getOwnPropertyNames(node)
                .filter((prop) => typeof prop === 'function')
                .map((method, key) => {
                    console.log(method);
                    console.log('assigning method', key);
                    this[method] = node[method]
                })
        })
    }
}



export default WebView