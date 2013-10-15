//startup.js file
var appConfig = {
    appId: "CompositeService",
    appName: "CompositeService",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.106",
    serverPort: "8080",
    secureServerPort: null,
    url: "http://10.10.12.106:8080/middleware/MWServlet",
    secureurl: "https://10.10.12.106/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmCompositeGlobals();
    frmGoogleGlobals();
    frmHomeGlobals();
    frmYahooGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};