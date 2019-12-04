import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'

import {setAgeRange, setTextToSend } from "./../../../actions/parserActions";
import {startSending, activateSendingByTemplate } from "./../../../actions/chatActions";
import {TextField, Grid, Paper, withStyles, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';

import MenuButtons from "../../../components/Filters/MenuButton";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        height: '100%',
        justifyContent: 'center',
        margin: theme.spacing(2),
        padding: theme.spacing(1),
    }
})


class Writers extends Component {

    startSending() {

    }

    render() {

        let buttonTitle = this.props.template ? 'Рассылка' : 'Шаблон';
        let tooltipTitle = this.props.template ? "Переключиться на обычную рассылку" : "Переключиться на отправку по шаблону";


        return (
                <Tooltip title={tooltipTitle}>
                    <MenuButtons title="writers" additionalStyles={{ width: '150px'}}/>
                </Tooltip>
        )
    }
}

const mapStateToProps = store => {
    return {
        site: store.sender.currentSite,
        sender: store.sender.currentSender,
        template: store.chat.chat.template
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAgeRange: (range) => dispatch(setAgeRange(range)),
        setTextToSend: (text) => dispatch(setTextToSend(text)),
        activateSendingByTemplate: () => dispatch(activateSendingByTemplate()),
        startSending: () => dispatch(startSending()),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Writers))