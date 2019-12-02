import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';
import {getFilter, getCallback} from "../../../utils/functions";
import {setAgeRange, setTextToSend } from "./../../../actions/parserActions";
import {startSending } from "./../../../actions/chatActions";
import {TextField, Grid, Paper, withStyles, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import Sender from "../../../utils/Sender";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        height: '100%',
        justifyContent: 'center',
        margin: theme.spacing(1),
        padding: theme.spacing(3),
    }
})


class Chat extends Component {

    startSending() {
        
    }

    render() {
        let filters = this.props.site && this.props.site.filters.chat.map((elem) => {
            return getFilter(elem, getCallback(elem, this.props));
        })
        
        return (
            <Paper>
            <Grid className={this.props.classes.root} container  item xl={12} xs={12} md={12}>

                {filters}
                <Grid item>
                <TextField
                    multiline={true}
                    onChange={(e) => {this.props.setTextToSend(e.target.value)}}
                    label="Введите текст для отправки"
                    variant="outlined"
                    style={{marginLeft: '20px'}}
                />
                </Grid>
                <Grid item style={{ display: 'flex', marginLeft: '20px'}}>
                    <Typography  variant="h6" noWrap>
                        Начать рассылку
                    </Typography>
                    <Fab style={{marginLeft: '20px', width:"36px", height:"30px"}} color="primary" aria-label="Send message" onClick={() => this.props.startSending()}>
                        <SendIcon />
                    </Fab>
                    {this.props.site && <Sender />}
                </Grid>
            </Grid>
            </Paper>
        )
    }
}

const mapStateToProps = store => {
    return {
        site: store.sender.currentSite,
        sender: store.sender.currentSender,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAgeRange: (range) => dispatch(setAgeRange(range)),
        setTextToSend: (text) => dispatch(setTextToSend(text)),
        startSending: () => dispatch(startSending()),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Chat))