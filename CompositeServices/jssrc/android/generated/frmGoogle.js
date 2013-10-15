//Form JS File
function addWidgetsfrmGoogle() {
    var lblGoogle = new kony.ui.Label({
        "id": "lblGoogle",
        "isVisible": true,
        "text": "Google News",
        "skin": "sknLblBoldFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [24, 20, 24, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var segGooglebox = new kony.ui.Box({
        "id": "segGooglebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 19
    }, {});
    var segGoogle = new kony.ui.SegmentedUI2({
        "id": "segGoogle",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "PubDate": "PubDate",
            "Title": "Title"
        },
        "rowTemplate": segGooglebox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 19
    }, {});
    var Title = new kony.ui.Label({
        "id": "Title",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 33
    }, {});
    var PubDate = new kony.ui.Label({
        "id": "PubDate",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 34
    }, {});
    segGooglebox.add(
    Title, PubDate);
    frmGoogle.add(
    lblGoogle, segGoogle);
};

function frmGoogleGlobals() {
    var MenuId = [];
    frmGoogle = new kony.ui.Form({
        "id": "frmGoogle",
        "title": "Google News",
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmGoogle
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "needAppLevelMenu": true,
        "enabledForIdleTimeout": false,
        "formType": constants.FORM_TYPE_NATIVE,
        "formAnimation": 0
    });
};