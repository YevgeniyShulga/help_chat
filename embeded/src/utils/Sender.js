import {connect} from 'react-redux';
import React, { Component } from 'react';
import {addUsers} from "../actions/chatActions";

class Sender extends Component
{
    getOnline() {
        console.log(this.props)
        let {site} = this.props;
        let link = site.actions.list.url;
        if (!site.actions.list.fullList && !this.props.closed) {
            link = link.replace('{offset}', site.actions.list.offset(this.props.onlineList))
            console.log(link.replace('{offset}', site.actions.list.offset(this.props.onlineList)));
            link = link.replace('{page}', '' + site.actions.list.page(this.props.onlineList))
            console.log('requested link', link)
            fetch(link).then((res) => res.json()).then(res => {
                console.log(res)
                this.props.addUsers(res[site.actions.list.listParam])
            })
        }
    }

    componentDidMount() {
        this.getOnline()
    }
    
    componentDidUpdate() {
        if (!this.props.closed) {
            this.getOnline()
        }
    }
    
    render() {
        return null;
    }
}

const mapStateToProps = store => {
    return {
        onlineList: store.chat.onlineList,
        closed: store.chat.closed,
        totalUsersOnline: store.chat.onlineList.length,
        site: store.sender.currentSite,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (list) => {dispatch(addUsers(list))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sender)