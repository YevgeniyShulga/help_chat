
import 'typeface-roboto';
import React, { Component } from 'react';
import {connect} from 'react-redux'
//import { rootStore } from './store/index';
import {setActiveUser} from "./../../../../actions/site"
import Grid from "@material-ui/core/Grid"
import PrimaryTabs from "../../../../components/Site/PrimaryTabs";

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


class Accounts extends Component {

    state = {
        users: [[]],
        site: {id: 0, url: '', name: ''}
    }

    componentDidMount() {
        this.setState({users: this.props.users, site: this.props.site})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.users.length !== this.props.users.length) {
            this.setState({users: this.props.users})
        }
    }

    render() {

        const {site, users, accountsTotal} = this.props;


        let views = accountsTotal > 0 && users[site.id].map(function (elem) {
            return (
                <webview id={site.id} src={site.url} style={{width:'100%', height:'500px'}} name={elem.name}></webview>
            );
        })

        return (
            <div>
                <PrimaryTabs tabs={views} typePanel={'account'}/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        users: store.sites.users,
        accountsTotal: store.sites.accountsTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActiveUser: (e) => dispatch(setActiveUser(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
