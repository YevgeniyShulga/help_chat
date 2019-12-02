import DenseAppBar from "./../../components/Top/DenseAppBar";
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect, Provider} from 'react-redux'
import {setActiveSite, addActiveSite, isChoosen, addUser, setActiveUser} from "../../actions/site";
//import { rootStore } from './store/index';

import PortalsList from "./../../components/List/PortalsList";
import BottomLinks from "./../../components/Bottom/BottomLinks";
import Grid from "@material-ui/core/Grid"
import Switch from "@material-ui/core/Switch"
import Sites from "./Sites/SiteTabs/Sites";
import RangeSlider from "../../components/Filters/Range";
import Selects from "../../components/Filters/Selects";
import {TextField} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';


// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Main extends Component {

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevProps, prevState, this.props)
    //     if (prevProps.sites.length !== this.props.sites.length) {
    //         this.setState({sites: this.props.sites})
    //     }
    // }

    render() {
        console.log(this.props)
        const newUser = {id: this.props.users[this.props.currentSite.id].length + 1, name: 'Girl' + this.props.users[this.props.currentSite.id].length + 1};


        return (
            <div>
                <DenseAppBar addButtons={true} currentSite={this.props.currentSite} withFilters={true} siteHandler={this.addSiteTo} newUser={newUser} addUser={this.props.addUser}/>
                <Grid container>

                    <Grid item xl={12} xs={12} md={12}>
                        <Sites />
                    </Grid>
                </Grid>
                {/*<BottomLinks/>*/}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        users: store.sites.users,
        sites: store.sites.addedSites,
        currentSite: store.sites.currentSite,
        accountsTotal: store.sites.accountsTotal,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (site, user) => dispatch(addUser(site, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
