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

        return (
            <div>
                <DenseAppBar withFilters={true} siteHandler={this.addSiteTo}/>
                <Grid container>
                    <Grid item xl={3} xs={3} md={3}>
                        <Switch
                            checked={true}
                            // onChange={handleChange('checkedB')}
                            value="checkedB"
                            color="primary"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <RangeSlider/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <Selects />
                    </Grid>
                    <Grid item xl={9} xs={9} md={9}>
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
    };
}

export default Main
