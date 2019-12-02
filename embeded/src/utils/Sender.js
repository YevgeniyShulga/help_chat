import {connect} from 'react-redux';
import React, { Component } from 'react';
import {addUsers, addUserToReceived} from "../actions/chatActions";
import $ from 'jquery';

class Sender extends Component
{



    getOnline() {
        console.log(this.props);
        let {site} = this.props;
        let link = site.actions.list.url;
        if (!site.actions.list.fullList && !this.props.closed) {
            link = link.replace('{offset}', site.actions.list.offset(this.props.onlineList))
            console.log(link.replace('{offset}', site.actions.list.offset(this.props.onlineList)));
            link = link.replace('{page}', '' + site.actions.list.page(this.props.onlineList))
            console.log('requested link', link);
            fetch(link).then((res) => res.json()).then(res => {
                console.log(res)
                this.props.addUsers(res[site.actions.list.listParam])
            })
        }
    }

    startSending() {
        const {onlineList, alreadyReceived, site, textToSend, addUserToReceived} = this.props;
        setInterval(() => {
            let needToBeSent = onlineList.filter((elem) => {
                return !alreadyReceived.includes(elem.id) || !elem.sent;
            });
            console.log(needToBeSent.length);
            let user = needToBeSent[0];

            if (!user.sent) {
                user.sent = true;
                let params = {};

                params[site.methods.chat.params.inputTextParam.name] = textToSend;
                $.ajax({
                    url: site.methods.chat.url.replace('{id}', user.id),
                    dataType: site.methods.chat.dataType,
                    contentType: site.methods.chat.contentType,
                    method: site.methods.chat.requestMethod,
                    data: JSON.stringify(params),
                    success: (data) => {
                        if (data.result === 'ok' || data.result === 'waitAccept')
                            addUserToReceived(user.id);
                    },
                    error: () => {
                        console.log('There was an error');
                    },
                    complete: function () {
                        console.log('Iteration is complete');
                    },

                })
            } else {
                addUserToReceived(user.id);
            }
        }, 10000);
    }

    componentDidMount() {
        this.getOnline();
    }
    
    componentDidUpdate(prevProps) {
        console.log(this.props);
        if (!this.props.closed) {
            this.getOnline()
        }
        if (!prevProps.sendingStarted && this.props.sendingStarted){
            this.startSending();
        }
    }
    
    render() {
        return null;
    }
}

const mapStateToProps = store => {
    return {
        onlineList: store.chat.onlineList,
        alreadyReceivedLength: store.chat[store.chat.type].alreadyReceived.length,
        alreadyReceived: store.chat[store.chat.type].alreadyReceived,
        closed: store.chat.closed,
        totalUsersOnline: store.chat.onlineList.length,
        site: store.sender.currentSite,
        sendingStarted: store.chat.sendingStarted,
        textToSend: store.sender.textToSend,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUsers: (list) => {dispatch(addUsers(list))},
        addUserToReceived: (id) => {dispatch(addUserToReceived(id))} ,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sender)