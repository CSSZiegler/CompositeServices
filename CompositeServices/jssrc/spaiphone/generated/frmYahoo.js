//Form JS File
function addWidgetsfrmYahoo() {
    var lblTitleSPA = new kony.ui.Label({
        "id": "lblTitleSPA",
        "isVisible": true,
        "text": "Yahoo News",
        "skin": "sknlblSPATitle"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    var lblYahoo = new kony.ui.Label({
        "id": "lblYahoo",
        "isVisible": true,
        "text": "Yahoo!! News",
        "skin": "sknLblBoldFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [8, 7, 8, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
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
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "groupCells": false,
        "screenLevelWidget": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR
    }, {
        "margin": [5, 0, 5, 0],
        "padding": [0, 0, 0, 0],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {});
    var Title = new kony.ui.Label({
        "id": "Title",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 1, 2, 0],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 40
    }, {});
    var PubDate = new kony.ui.Label({
        "id": "PubDate",
        "isVisible": true,
        "skin": "sknLblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 1, 2, 1],
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 41
    }, {});
    segYahoobox.add(
    Title, PubDate);
    frmYahoo.add(
    lblTitleSPA, lblYahoo, segYahoo);
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
        "dockableFooter": true,
        "dockableHeader": true,
        "dockableAppmenu": true,
        "needAppLevelMenu": true,
        "enabledForIdleTimeout": false,
        "formType": constants.FORM_TYPE_NATIVE,
        "formTransition": "None"
    });
};