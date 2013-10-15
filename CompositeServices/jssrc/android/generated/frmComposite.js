//Form JS File
function frmComposite_segCompoYahoo_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    yahoo.call(this);
};

function frmComposite_segCompoGoogle_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    google.call(this);
};

function addWidgetsfrmComposite() {
    var lblComposite = new kony.ui.Label({
        "id": "lblComposite",
        "isVisible": true,
        "text": "Composite Service: Yahoo!! News and Google News",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [16, 15, 16, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var lblYMain = new kony.ui.Label({
        "id": "lblYMain",
        "isVisible": true,
        "text": "Yahoo!! News",
        "skin": "sknLblBoldFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [24, 10, 24, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var segCompoYahoobox = new kony.ui.Box({
        "id": "segCompoYahoobox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 15
    }, {});
    var segCompoYahoo = new kony.ui.SegmentedUI2({
        "id": "segCompoYahoo",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblCDate": "lblCDate",
            "lblCTitle": "lblCTitle",
            "hbxDate": "hbxDate",
            "imgArrow": "imgArrow"
        },
        "rowTemplate": segCompoYahoobox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmComposite_segCompoYahoo_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    var lblCTitle = new kony.ui.Label({
        "id": "lblCTitle",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 41
    }, {});
    var lblCDate = new kony.ui.Label({
        "id": "lblCDate",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 81
    }, {});
    var imgArrow = new kony.ui.Image({
        "id": "imgArrow",
        "isVisible": true,
        "src": null
    }, {
        "widgetAlignment": 5,
        "vExpand": false,
        "hExpand": false,
        "containerWeight": 19
    }, {
        "imageWhenFailed": null,
        "imageWhenDownloading": null,
        "scaleMode": 1
    });
    var hbxDate = new kony.ui.Box({
        "id": "hbxDate",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxDate.add(
    lblCDate, imgArrow);
    segCompoYahoobox.add(
    lblCTitle, hbxDate);
    var lblGMain = new kony.ui.Label({
        "id": "lblGMain",
        "isVisible": true,
        "text": "Google News",
        "skin": "sknLblBoldFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [24, 10, 24, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "containerWeight": 6
    }, {});
    var segCompoGooglebox = new kony.ui.Box({
        "id": "segCompoGooglebox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 13
    }, {});
    var segCompoGoogle = new kony.ui.SegmentedUI2({
        "id": "segCompoGoogle",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "imgNext": "imgNext",
            "lblPublish": "lblPublish",
            "lblGIntro": "lblGIntro",
            "hbxNext": "hbxNext"
        },
        "rowTemplate": segCompoGooglebox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmComposite_segCompoGoogle_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {});
    var lblGIntro = new kony.ui.Label({
        "id": "lblGIntro",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 0],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 37
    }, {});
    var lblPublish = new kony.ui.Label({
        "id": "lblPublish",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "containerWeight": 82
    }, {});
    var imgNext = new kony.ui.Image({
        "id": "imgNext",
        "isVisible": true,
        "src": null
    }, {
        "widgetAlignment": 5,
        "vExpand": false,
        "hExpand": false,
        "containerWeight": 18
    }, {
        "imageWhenFailed": null,
        "imageWhenDownloading": null,
        "scaleMode": 1
    });
    var hbxNext = new kony.ui.Box({
        "id": "hbxNext",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 58,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 0, 2, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxNext.add(
    lblPublish, imgNext);
    segCompoGooglebox.add(
    lblGIntro, hbxNext);
    frmComposite.add(
    lblComposite, lblYMain, segCompoYahoo, lblGMain, segCompoGoogle);
};

function frmCompositeGlobals() {
    var MenuId = [];
    frmComposite = new kony.ui.Form({
        "id": "frmComposite",
        "title": "Composite Service",
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmComposite
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