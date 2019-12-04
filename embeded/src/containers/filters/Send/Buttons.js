import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';
import {setAgeRange, setTextToSend } from "./../../../actions/parserActions";
import {startSending, activateSendingByTemplate } from "./../../../actions/chatActions";
import {TextField, Grid, Paper, withStyles, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


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
    },
    button: {


    },
})


class Buttons extends Component {

    startSending() {

    }

    render() {

        return (

            <Grid container xl={12} xs={12} md={12} lg={12}>
                <Grid item xl={12} xs={12} md={12} lg={12} className={this.props.classes.button}>
                    <Tooltip title="Начать рассылку">
                        <Button
                            variant="contained"
                            color="primary"
                            className={this.props.classes.button}
                            endIcon={<SendIcon/>}
                            onClick={this.props.startSending}
                        >
                            Начать отправку
                        </Button>
                    </Tooltip>
                    <Tooltip title="Остановить рассылку">
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{marginTop: '20px', width: '150px'}}
                            className={this.props.classes.button2}
                            endIcon={<HighlightOff />}
                        >
                            Стоп
                        </Button>
                    </Tooltip>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Buttons))