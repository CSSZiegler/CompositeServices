//Form JS File
function frmHome_btnContinue_onClick_seq0(eventobject) {
    compositeServices_fn.call(this);
};

function addWidgetsfrmHome() {
    var lblApp = new kony.ui.Label({
        "id": "lblApp",
        "isVisible": true,
        "text": "Sample App to showcase Composite Service.",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnContinue = new kony.ui.Button({
        "id": "btnContinue",
        "isVisible": true,
        "text": "Continue",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmHome_btnContinue_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": false
    });
    frmHome.add(
    lblApp, btnContinue);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form({
        "id": "frmHome",
        "title": "Home",
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmHome
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "renderTitleText": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "needAppLevelMenu": true,
        "enabledForIdleTimeout": false,
        "formType": constants.FORM_TYPE_NATIVE,
        "transitionEffect": "none",
        "transitionDirection": "none"
    });
};