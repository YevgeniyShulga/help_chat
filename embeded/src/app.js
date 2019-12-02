import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { rootStore } from './store/index';
import {addActiveSite} from "./actions/parserActions";
import Filters from "./containers/filters";

//import {rootStore} from "./store";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class App extends Component {

    componentDidMount() {
        this.props.setSite();
    }

    render() {
        return (

                <div>
                    <Filters/>
                </div>

            )
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        site: store.sender.currentSite
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSite: () => dispatch(addActiveSite())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)