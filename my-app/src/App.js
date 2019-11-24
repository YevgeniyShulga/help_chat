import 'typeface-roboto';
import React, { Component } from 'react';
import {connect, Provider} from 'react-redux'
// import { rootStore } from './store/index';


import MainScreen from "./containers/ListSitesScreen/MainScreen";
import Main from "./containers/Application/Main";
import Button from "@material-ui/core/Button"
import {rootStore} from "./store";
import {addActiveSite, isChoosen, setActiveSite} from "./actions/site";


// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class App extends Component {

    addSite = (site) => {
        console.log(site);
        this.props.setChoosen(!this.props.showApp);
    }

    render() {
        const main = (
            <Main/>
        );
        const mainScreen = (<MainScreen />);
        return (

            <div>
                <Button onClick={this.addSite}> Switch  </Button>
                {this.props.showApp && main}
                {!this.props.showApp && mainScreen}
            </div>

        );
    }
}

const mapStateToProps = store => {
    return {
        showApp: store.sites.chosen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        setChoosen: (e) => dispatch(isChoosen(e)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
