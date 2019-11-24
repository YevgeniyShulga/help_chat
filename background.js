chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('my-app/build/index.html', {
        id: "mainwin",
        innerBounds: {
            width: 700,
            height: 600
        }
    });
});