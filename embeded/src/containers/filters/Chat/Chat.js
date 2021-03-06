import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';
import {getFilter, getCallback} from "../../../utils/functions";
import {setAgeRange, setTextToSend } from "./../../../actions/parserActions";
import {startSending, activateSendingByTemplate } from "./../../../actions/chatActions";
import {TextField, Grid, Paper, withStyles, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import SendCustom from './SendCustom'
import Writers from './../Writers'
import Blacklist from "../Blacklist";
import Buttons from "../Send/Buttons";

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


class Chat extends Component {

    startSending() {
        
    }

    render() {

        let buttonTitle = this.props.template ? 'Рассылка' : 'Шаблон';
        let tooltipTitle = this.props.template ? "Переключиться на обычную рассылку" : "Переключиться на отправку по шаблону";

        
        return (

            <Grid container style={{paddingTop: '0px', paddingBottom:'0px'}} xl={12} xs={12} md={12} lg={12}>
                <Grid item xl={1} xs={1} md={1} lg={1}>
                    <Tooltip title={tooltipTitle}>
                        <Button variant="contained" color="secondary" onClick={this.props.activateSendingByTemplate}>
                            {buttonTitle}
                        </Button>
                    </Tooltip>
                </Grid>

                <Grid item xl={6} xs={6} md={6} lg={6}>
                {!this.props.template && <SendCustom />}
                </Grid>
                <Grid item xl={2} xs={2} md={2} lg={2}>
                    <Writers />
                    <Blacklist/>
                </Grid>
                <Grid item xl={2} xs={2} md={2} lg={2}>
                    <Buttons/>
                </Grid>
            </Grid>

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Chat))