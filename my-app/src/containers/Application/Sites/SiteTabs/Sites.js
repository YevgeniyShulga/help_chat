
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setActiveSite} from "../../../../actions/site";

import Accounts from "../UserTabs/Accounts";
import PrimaryTabs from "../../../../components/Site/PrimaryTabs";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Sites extends Component {


    render() {

        let {addedSites} = this.props;
        let sites = this.props.activeTotal > 0 && addedSites.map(function (elem) {
            return (
                <Accounts site={elem} id={elem.id} name={elem.name}/>
            );
        })

        return (
            <div>
                <PrimaryTabs tabs={sites} typePanel={'site'} ident={'site'}/>
            </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => {

    return {
        addedSites: store.sites.addedSites,
        currentSite: store.sites.currentSite,
        activeTotal: store.sites.activeTotal,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveSite: (e) => dispatch(setActiveSite(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sites)
