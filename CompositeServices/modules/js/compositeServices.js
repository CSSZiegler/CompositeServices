/*****************************************************************
*	Name    : compositeServices_fn
*	Author  : Kony 
*	Purpose : To invoke composite service
******************************************************************/
function compositeServices_fn(){
		var composite_inputparam = {};
	    composite_inputparam["serviceID"] = "NewsComposite";
	   	kony.application.showLoadingScreen("sknLoadingScreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null); 
	    var compositevar = appmiddlewareinvokerasync(composite_inputparam, compositecallback);	    
}


/*****************************************************************
*	Name    : compositecallback
*	Author  : Kony 
*	Purpose : call back function of composite service, it will map output data with segment 
******************************************************************/
function compositecallback(status, NewsComposite){
		kony.print("********************"+JSON.stringify(NewsComposite)+"**************************");
		if (status == 400){
			if (NewsComposite["opstatus"] == 0){
				if (NewsComposite != null && NewsComposite != undefined ){
							globalGoogle = NewsComposite[ kony.decrement("NewsType") ];
							globalService = NewsComposite[ kony.decrement("News") ];
							frmComposite.segCompoYahoo.setData ([ { lblCTitle : "" + globalService[ kony.decrement(1) ][ kony.decrement("Title") ], lblCDate : "" + globalService[ kony.decrement(1) ][ kony.decrement("PubDate") ], imgArrow : "" } ,
                               { lblCTitle : "" + globalService[ kony.decrement(2) ][ kony.decrement("Title") ], lblCDate : "" + globalService[ kony.decrement(2) ][ kony.decrement("PubDate") ], imgArrow : "" } ,
                               { lblCTitle : "" + globalService[ kony.decrement(3) ][ kony.decrement("Title") ], lblCDate : "" + globalService[ kony.decrement(3) ][ kony.decrement("PubDate") ], imgArrow : "" } ,
                               { lblCTitle : "", lblCDate : "MORE", imgArrow : "arwrightd.png" }  ]);
                               
                            frmComposite.segCompoGoogle.setData ([ { lblGIntro : "" + globalGoogle[ kony.decrement(1) ][ kony.decrement("Title") ], lblPublish : "" + globalGoogle[ kony.decrement(1) ][ kony.decrement("PubDate") ], imgNext : "" } ,
                                { lblGIntro : "" + globalGoogle[ kony.decrement(2) ][ kony.decrement("Title") ], lblPublish : "" + globalGoogle[ kony.decrement(2) ][ kony.decrement("PubDate") ], imgNext : "" } ,
                                { lblGIntro : "" + globalGoogle[ kony.decrement(3) ][ kony.decrement("Title") ], lblPublish : "" + globalGoogle[ kony.decrement(3) ][ kony.decrement("PubDate") ], imgNext : "" } ,
                                { lblGIntro : "", lblPublish : "MORE", imgNext : "arwrightd.png" }  ]);
				}
			}
			frmComposite.show();
			kony.application.dismissLoadingScreen();
		}
		else 
			kony.print("\n"+status+"\n");

}


/*****************************************************************
*	Name    : yahoo
*	Author  : Kony 
*	Purpose : to map data to segment and call frmYahoo
******************************************************************/
function yahoo() {
	if(frmComposite.segCompoYahoo.selectedIndex[1] == 3)
	{
		frmYahoo.segYahoo.setData(globalService);
		frmYahoo.show();
	}
}


/*****************************************************************
*	Name    : google
*	Author  : Kony 
*	Purpose : to map data to segment and call frmGoogle
******************************************************************/
function google() {
	if(frmComposite.segCompoGoogle.selectedIndex[1] == 3)
	{
		frmGoogle.segGoogle.setData(globalGoogle);
		frmGoogle.show();
	}
}
