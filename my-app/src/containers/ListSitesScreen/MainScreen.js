import DenseAppBar from "./../../components/Top/DenseAppBar";
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect, Provider} from 'react-redux'
import {setActiveSite, addActiveSite, isChoosen, setActiveUser, addUser} from "../../actions/site";
//import { rootStore } from './store/index';

import PortalsList from "./../../components/List/PortalsList";
import BottomLinks from "./../../components/Bottom/BottomLinks";
import siteList from "./../../constants/sitesconfig"

console.log(siteList);
// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class MainScreen extends Component {

    render() {
        return (

            <div>
                <DenseAppBar  />
                <PortalsList />
                {/*<BottomLinks/>*/}
            </div>
        );
    }
}


const mapStateToProps = store => {
    return {};
}

export default MainScreen;
