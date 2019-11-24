import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import sites from './../../constants/sitesconfig'
import {addActiveSite, addUser, isChoosen, setActiveSite, setActiveUser} from "../../actions/site";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        height: '100%',
        justifyContent: 'center',
    },

    button: {
        margin: theme.spacing(1),
        width: '25%'
    },
    input: {
        display: 'none',
    },
});

class PortalsList extends Component
{

    addSite = (site) => {
        console.log(site);
        let newUser = {id: 1, name: "girl1"};
        this.props.setActiveSite(site);
        this.props.addActiveSite(site);
        this.props.setChoosen(true);
        this.props.addUser(site, newUser);
        this.props.setActiveUser(newUser);
    }

    render() {
        const {classes} = this.props

        const handler = (elem) => {this.addSite(elem);}

        let buttonsList = [];

        sites.map(function (elem) {
            buttonsList.push(
                <Button variant="outlined" color="primary" className={classes.button} onClick={() => handler(elem)}>
                    {elem.name}
                </Button>
            )
        })

        return (
            <div className={classes.root}>
                {buttonsList}
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveSite: (e) => dispatch(setActiveSite(e)),
        addActiveSite: (e) => dispatch(addActiveSite(e)),
        setChoosen: (e) => dispatch(isChoosen(e)),
        addUser: (site, newUser) => dispatch(addUser(site, newUser)),
        setActiveUser: (user) => dispatch(setActiveUser(user)),
    }
}

const mapStateToProps = store => {
    return {};
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PortalsList));