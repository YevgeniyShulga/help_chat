
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';
import {setActiveUser} from "./../../../../actions/site"
import Grid from "@material-ui/core/Grid"
import PrimaryTabs from "../../../../components/Site/PrimaryTabs";
import $ from 'jquery';
import WebView from "../../../../components/WebView/WebView";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Accounts extends Component {

    state = {
        users: [[]],
        site: {id: 0, url: '', name: ''}
    }

    componentDidMount() {
        this.setState({users: this.props.users, site: this.props.site})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users.length !== this.props.users.length) {
            this.setState({users: this.props.users});

        }

    }

    render() {

        const {site, users, accountsTotal} = this.props;


        let views = accountsTotal > 0 && users[site.id].map(function (elem) {
            // let webview = $("<webview id='" + elem.id + "' src='" + site.url + "' style='width:100%, height:500px' name='" + elem.name + "' partition='" + site.url + elem.id + "'></webview>").get();
            // webview.addContentScripts([
            //     {
            //         css: [ "/all/jump4love-chat/css.css" ],
            //         js: [ "/all/jquery.js", "/all/names.js", "/all/jump4love-chat/include-3.js", "/all/notification.js" ],
            //         matches: [ "*://j4l.com/chat_v3*",  "*://*.j4l.com/chat_v3*", "http://ukrainiangirls.pw/*" ],
            //         run_at: "document_end"
            //     },])

            let webv = <WebView id={'account' + elem.id + 'site' + site.id} src={site.url} style={{width:'100%', height:'1500px'}} name={'Parser'} partition={'persist:' + site.name + ' ' + 'Girl ' + elem.id} nodeintegrationinsubframes />;

            return (
                webv
            );
        })

        return (
            <div>
                <PrimaryTabs tabs={views} typePanel={'account'} key={'accounts' + site.id} ident={'accounts' + site.id}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        users: store.sites.users,
        accountsTotal: store.sites.accountsTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveUser: (e) => dispatch(setActiveUser(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
