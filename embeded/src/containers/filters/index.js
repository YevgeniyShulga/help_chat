
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';

import Chat from "./Chat/Chat";
import Mail from "./Mail/Mail";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Filters extends Component {

    render() {
        return (
            <div>
                {this.props.sender === 'chat' && <Chat/>}
                {this.props.sender !== 'chat' && <Mail/>}
            </div>
        )

    }
}

const mapStateToProps = store => {
    return {
        site: store.sender.currentSite,
        sender: store.sender.currentSender
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
