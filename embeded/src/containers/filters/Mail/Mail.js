import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Mail extends Component {

    render() {
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Mail)