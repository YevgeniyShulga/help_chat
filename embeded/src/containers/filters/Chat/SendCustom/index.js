import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getFilter, getCallback} from "../../../../utils/functions";
import {setAgeRange, setTextToSend } from "./../../../../actions/parserActions";
import {startSending } from "./../../../../actions/chatActions";
import {TextField, Grid, Paper, withStyles, Typography} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Sender from "../../../../utils/Sender";

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


class SendCustom extends Component {

    startSending() {

    }

    render() {
        let filters = [];
        if (this.props.site) {
            filters = this.props.site.filters.chat.map((elem) => {
                console.log(elem)
                return getFilter(elem, getCallback(elem, this.props));
            })
        }


        return (
            <Grid container xl={12} xs={12} md={12} lg={12}>
                <Grid item xl={8} xs={8} md={8} lg={8}>
                    <TextField
                        multiline={true}
                        onChange={(e) => {this.props.setTextToSend(e.target.value)}}
                        label="Введите текст для отправки"
                        variant="outlined"
                        style={{marginLeft: '20px', marginRight:'20px', width: '90%'}}
                        rows={3}
                    />
                </Grid>
                <Grid item xl={4} xs={4} md={4} lg={4}>
                    {filters}
                </Grid>

                {this.props.site && <Sender />}
            </Grid>

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SendCustom))