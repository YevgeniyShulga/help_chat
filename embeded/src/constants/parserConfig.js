export const parserConfiguration = {
    jump4love: {
        filters: {
            mail: ['age', 'online', 'show_more'],
            chat: ['age', 'online', 'show_more']
        },
        actions: {
            list: {
                url: "https://j4l.com/api/v4/chat/online/list/?start={offset}&count={page}",
                fullList: false,
                offset: function (list, step = 12, page = 1) {
                    return list.length
                },
                page: function (list, step = 12, page = 1) {
                    return step;
                },
                step: 12,
                listParam: 'data'
            }
            
        },
        methods: {
            mail: {
                method: 'AJAX',
                url: '',
                params: {

                }
            },
            chat: {
                method: 'AJAX',
                dataType: 'json',
                contentType:'application/json',
                requestMethod: 'POST',
                url : location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/"+"{id}"+"/message/send/",
                params: {
                    inputTextParam: {
                        name: 'text',
                    },
                    text: '',
                },
                interval: 5000,
                messagesPerMinute: (interval) => {
                    return interval + Math.random() * 5000;
                }
            }
        }
    },

    svadba: {
        filters: {
            mail: ['age', 'online'],
            chat: ['age', 'online']
        },
        actions: {
            list: {
                url: "https://j4l.com/api/v4/chat/online/list/?start={offset}&count={page}",
                fullList: false,
                offset: function (list, step = 12, page = 1) {
                    return list.length
                },
                page: function (list, step = 12, page = 1) {
                    return step;
                },
                step: 12,
                listParam: 'data'
            }

        },
        methods: {
            mail: {
                method: 'AJAX',
                url: '',
                params: {

                }
            },
            chat: {
                method: 'AJAX',
                dataType: 'json',
                contentType:'application/json',
                requestMethod: 'POST',
                url : location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/"+"{id}"+"/message/send/",
                params: {
                    inputTextParam: {
                        name: 'text',
                    },
                    text: '',
                },
                interval: 5000,
                messagesPerMinute: (interval) => {
                    return interval + Math.random() * 5000;
                }
            }
        }
    },

    localhost: {
        filters: {
            mail: ['age', 'online', 'show_more'],
            chat: ['age', 'online', 'show_more']
        },
        actions: {
            list: {
                url: "https://j4l.com/api/v4/chat/online/list/?start={offset}&count={page}",
                fullList: false,
                offset: function (list, step, page) {
                    return list.length
                },
                page: function (list, step = 9, page) {
                    return step;
                },
                step: 9,
                listParam: 'data'
            }

        },
        methods: {
            mail: {
                method: 'AJAX',
                url: '',
                params: {

                }
            },
            chat: {
                method: 'AJAX',
                requestMethod: 'POST',
                url : location.protocol + "\x2f\x2f" + location.hostname + "/api/v4/chat/"+"{id}"+"/message/send/",
                params: {
                    text: '',
                }
            }
        }
    }
}