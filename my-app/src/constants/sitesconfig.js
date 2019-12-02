const sites = [
    {
        name: 'SVADBA',
        id: 0,
        url: "http://www.google.com/",
        onlineSender:
            {
                filters: [],
                method: '',
                timeInterval: 0,
            }
    },

    {
        name: 'Jump 4 Love',
        id: 1,
        url: "https://j4l.com/",
        onlineSender:
            {
                filters: [],
                method: '',
                timeInterval: 0,
                content:{
                    name: "Parser",
                    css: {files: [ "/all/jump4love-chat/css.css" ]},
                    js: {files: [
                            "/all/jquery.js",
                            "/all/names.js",
                            "/all/jump4love-chat/include-4-clicker.js",
                            "/all/notification.js"
                        ],
                        code: 'console.log("injected")'},
                    matches: /*[ "*://j4l.com/chatv4*",  "*://!*.j4l.com/chatv4*", "http://ukrainiangirls.pw/!*" ]*/["<all_urls>"],
                    run_at: "document_end"
                }
            }
    },

    {
        name: 'Romance',
        id: 2,
        url: "https://romancecompass.com/",
        onlineSender:
            {
                filters: [],
                method: '',
                timeInterval: 0,
            }
    }
];

export default sites