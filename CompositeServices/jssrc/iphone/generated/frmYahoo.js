//Form JS File
function addWidgetsfrmYahoo() {
    var lblYahoo = new kony.ui.Label({
        "id": "lblYahoo",
        "isVisible": true,
        "text": "Yahoo!! News",
        "skin": "sknLblBoldFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [24, 20, 24, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var segYahoobox = new kony.ui.Box({
        "id": "segYahoobox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 16
    }, {});
    var segYahoo = new kony.ui.SegmentedUI2({
        "id": "segYahoo",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "PubDate": "PubDate",
            "Title": "Title"
        },
        "rowTemplate": segYahoobox,
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
        "margin": [2, 0, 2, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var Title = new kony.ui.Label({
        "id": "Title",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var PubDate = new kony.ui.Label({
        "id": "PubDate",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [6, 2, 6, 2],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segYahoobox.add(
    Title, PubDate);
    frmYahoo.add(
    lblYahoo, segYahoo);
};

function frmYahooGlobals() {
    var MenuId = [];
    frmYahoo = new kony.ui.Form({
        "id": "frmYahoo",
        "title": "Yahoo News",
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmYahoo
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
        "titleBarLeftSideView": "button",
        "imageLeftSideView": "back.png",
        "labelLeftSideView": "Composite Service",
        "footerOverlap": false,
        "headerOverlap": false,
        "needAppLevelMenu": true,
        "enabledForIdleTimeout": false,
        "formType": constants.FORM_TYPE_NATIVE,
        "transitionEffect": "none",
        "transitionDirection": "none"
    });
};