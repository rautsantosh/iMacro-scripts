var moveToInbox;
var processInbox;
var clickJunk;
var clickInbox;
var openLink=1;
var k=0; 


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// SEED SIGN IN DETAILS

var PROXY_PORT="181.214.139.185:3129"
var EMAIL_ID="joanblakesim198@hotmail.com"
var EMAIL_PWD="cgtglYtkfb"

// After Each loop min max junk process

randomMinJunk=3;
randomMaxJunk=6;  //12

// After Each loop min max inbox process
randomMinInbox=3;
randomMaxInbox=6;  //12

// After Each loop min max delay

randomDelayLoopMin=5; //sec    for min 2min =2*60 for 2hr=2*60*60 
randomDelayLoopMax=10; //2MIN

var loopCount=500; //Number of loops do you want
var randomDelayLoop;

var numberOfmarkAsNotJunk;
var numberOfInboxProcess;
var randomSleep=0;


var myActions = [
  "SelectArchive",
  "Delete",
  "Archive",
  "SelectArchive",
  "Delete",
  "SelectArchive",
  "Delete",
  "SelectArchive",
  "Archive",
  "Delete"
];

/*
var load;
load = "CODE:";
load += "SET !DATASOURCE Book4.csv" + "\n";
load += "SET !DATASOURCE_COLUMNS 4" + "\n";
load += "SET !LOOP "+ "{{index}}" + "\n";
load += "SET !DATASOURCE_LINE {{!LOOP}}" + "\n"; 
load += "ADD !EXTRACT {{!COL1}}" + "\n";
load += "ADD !EXTRACT {{!COL2}}" + "\n";
load += "ADD !EXTRACT {{!COL3}}" + "\n";
load += "ADD !EXTRACT {{!COL4}}" + "\n";

var seedDetails = new Array(100);

for(i=1; i<=3; i++){ 
    iimSet("index",i);
    var temp=new Array(6);
    iimPlay(load);
    var email = iimGetLastExtract(1);
    var passwd = iimGetLastExtract(2);
    var proxyIP = iimGetLastExtract(3);
    var proxyPort = iimGetLastExtract(4);
    // temp.push(email);
    // temp.push(passwd);
    // temp.push(proxyIP);
    // temp.push(proxyPort);
    // seedDetails.push(temp);    

}
//alert(seedDetails);
exit;*/
renderJS = "CODE: \n VERSION BUILD=8970419 RECORDER=FX \n SET !ERRORIGNORE YES \n SET !TIMEOUT_PAGE 6 \n TAB T=1 \n ";
signIn = renderJS

signIn += "URL GOTO=about:privatebrowsing" +"\n";
signIn += "TAB T=1" +"\n";
signIn += "PROXY ADDRESS="+PROXY_PORT+"\n";
signIn += "URL GOTO=https://outlook.live.com/mail/" +"\n";
signIn += "TAG XPATH=\".//a[text()='Sign in']\" " +"\n";
signIn += "TAG POS=2 TYPE=A ATTR=TXT:Sign<SP>in" +"\n";
signIn += "WAIT SECONDS=2" +"\n";
signIn += "TAG XPATH=\".//*[@name='loginfmt']\" CONTENT="+EMAIL_ID+"\n";
signIn += "WAIT SECONDS=3" +"\n";
signIn += "TAG XPATH=\".//*[@value='Next']\" " +" \n";
signIn += "WAIT SECONDS=3" +"\n";
signIn += "SET !ENCRYPTION NO" +"\n";
signIn += "WAIT SECONDS=2" +"\n";
signIn += "TAG XPATH=\".//*[@name='passwd']\" CONTENT="+EMAIL_PWD+"\n";
signIn += "WAIT SECONDS=3" +"\n";
signIn += "TAG XPATH=\".//*[@value='Sign in']\"" +"\n";
signIn += "WAIT SECONDS=8" +"\n";


//iimPlay(signIn);
//alert(signIn)
var myCategories = ["Green", "Red", "Yellow", "Orange", "Blue", "Purple"];



		while(1) {
					randomDelayLoop=getRndInteger(randomDelayLoopMin,randomDelayLoopMax);

					//Math.floor(Math.random() * (max - min)) + min
					// var numberOfmarkAsNotJunk=getRndInteger(randomMinJunk,randomMaxJunk);
					// var numberOfInboxProcess=getRndInteger(randomMaxInbox,randomMinInbox);
					
					if(loopCount==k) {
						//alert("Loop and k is same now")
						break;
					}
					k=k+1;
					numberOfmarkAsNotJunk=1;
					numberOfInboxProcess=1;
					randomSleep=0;

						
						//renderJS = "CODE: \n VERSION BUILD=8970419 RECORDER=FX \n SET !TIMEOUT_PAGE 6 \n TAB T=1 \n ";

						clickJunk=""
						clickJunk = renderJS;
						clickJunk += "TAG POS=1 TYPE=SPAN ATTR=TXT:Junk<SP>Email " + "\n";
						clickJunk += "WAIT SECONDS=0.5 " + "\n";

						iimPlay(clickJunk);


						for(var c=0; c<numberOfmarkAsNotJunk; c++) {
							randomSleep=getRndInteger(2,3);
							moveToInbox = renderJS;
						    //moveToInbox += "TAG POS=1 TYPE=SPAN ATTR=TITLE:*@* " + "\n";
						    moveToInbox += "CLICK X=343 Y=241" + "\n";
						    //moveToInbox += "TAG XPATH=\".//div[@aria-label='Message list']//div[@draggable='true']/div/div/div[2]/div[1]/div/span\" EXTRACT=TXT"
						    typeOfNotJunk=Math.floor((Math.random() * 5) + 1);
						    if(typeOfNotJunk==4) {
							    moveToInbox += "TAG POS=4 TYPE=I ATTR=TXT: " + "\n";
								moveToInbox += "TAG POS=3 TYPE=I ATTR=TXT: " + "\n";
								moveToInbox += "TAG POS=2 TYPE=I ATTR=TXT: " + "\n";
								moveToInbox += "TAG POS=5 TYPE=I ATTR=TXT: " + "\n";
								moveToInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";
								moveToInbox += "TAG POS=2 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";

						    }else if(typeOfNotJunk<2) {
						    	moveToInbox += "TAG POS=1 TYPE=A ATTR=TXT:It's<SP>not<SP>spam " + "\n";
							} else if(typeOfNotJunk=3){
								moveToInbox += "WAIT SECONDS="+randomSleep + " \n";
							    moveToInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";
							    moveToInbox += "WAIT SECONDS="+randomSleep + " \n";
							    moveToInbox += "TAG POS=2 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";
							    moveToInbox += "WAIT SECONDS="+randomSleep + " \n";
							}
						    moveToInbox += "WAIT SECONDS="+randomSleep + " \n";
						    
					    	//iimPlay(moveToInbox);
					    	moveToInbox="";
					    }
					    
					    clickInbox="";
					    clickInbox = renderJS;
					    clickInbox += "TAG POS=1 TYPE=SPAN ATTR=TXT:Inbox" + "\n";
						clickInbox += "WAIT SECONDS=1.0 " + "\n";

						iimPlay(clickInbox);


						for(var c=0; c<numberOfInboxProcess; c++) {
							randomSleep=getRndInteger(2,4);
							isCategory=Math.floor(Math.random() * 13) + 1;
							randomAction = myActions[Math.floor(Math.random()*myActions.length)];
							randomCategory = myCategories[Math.floor(Math.random()*myCategories.length)];
							processInbox1="";
						    processInbox1 = renderJS;
						    //processInbox += "TAG POS=1 TYPE=SPAN ATTR=TITLE:*@* " + "\n";
						    //processInbox += "TAG POS=1 TYPE=SPAN ATTR=TITLE:*@* EXTRACT=TXT" + "\n";
						    processInbox1 += "CLICK X=358 Y=200" + "\n";

						   	processInbox1 += "WAIT SECONDS=1.0 " + "\n";
							//processInbox1 += "TAG POS=1 TYPE=BUTTON ATTR=TITLE:*Mark<SP>as<SP>read*" + "\n";
							processInbox1 += "TAG XPATH=\"(.//*[contains(@title,'Mark as read')])[1]\"" + "\n";
							processInbox1 += "WAIT SECONDS=1.5" + "\n";
							processInbox1 += "TAG XPATH=\"(.//*[contains(@title,'Mark as')]/ancestor::div[3])[1]\""+"\n";
							processInbox1 += "WAIT SECONDS=1.5" + "\n";
							//processInbox1 += "PAUSE" + "\n";
							iimPlay(processInbox1);
							//iimPlay("mark_as_read.iim");
							processInbox = renderJS;

							if(isCategory%3==0) {
								processInbox += "WAIT SECONDS=0.5 " + "\n";
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Categorize" + "\n";
								processInbox += "WAIT SECONDS=2.0 " + "\n";
								processInbox += "TAG POS=1 TYPE=DIV ATTR=TITLE:"+randomCategory+"<SP>category" + "\n";
								processInbox += "WAIT SECONDS=1.0 " + "\n";
							} else {
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=TITLE:Flag<SP>this<SP>message*" + "\n";
							}

							if(openLink==1) {
								processInbox += "WAIT SECONDS=2.0 " + "\n";	
								//processInbox += "TAG XPATH=\"//div[@itemporp='name'][@class='product-card__description']//a[1]\" EXTRACT=HREF"
								//processInbox += "TAG XPATH=\".//div[@aria-label='Content pane']//div[2]//div[contains(@class,'allowTextSelection')]//a[1]\" EXTRACT=HREF"+ "\n";
								processInbox += "TAG POS=1 TYPE=A ATTR=HREF:*click.*" + "\n";
								processInbox += "WAIT SECONDS=2.0 " + "\n";	
								processInbox += "TAB T=1 "+ "\n";	
								processInbox += "TAB CLOSEALLOTHERS" + "\n";	
								processInbox += "WAIT SECONDS=2.0 " + "\n";
									
							}
							// /alert(randomAction);
							if(randomAction=="Archive"){
								processInbox += "WAIT SECONDS=0.5 " + "\n";
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Archive" + " \n";
							}else if(randomAction=="SelectArchive"){
								processInbox += "TAG POS=2 TYPE=I ATTR=TXT:" + "\n";
								processInbox += "WAIT SECONDS=0.5 " + "\n";
								processInbox += "TAG POS=3 TYPE=I ATTR=TXT:" + "\n";
								processInbox += "WAIT SECONDS=0.5 " + "\n";
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=TXT:Mark<SP>as<SP>read" + "\n";
								processInbox += "WAIT SECONDS=0.5 " + "\n";
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Archive" + " \n";
							} else {
								processInbox += "WAIT SECONDS=1.5 " + "\n";
								processInbox += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Delete" + " \n";
							}
							processInbox += "WAIT SECONDS=" +randomSleep+ " \n";
					    	iimPlay(processInbox);
					    	processInbox="";

					    }
					   // renderJS = "CODE: \n VERSION BUILD=8970419 RECORDER=FX \n SET !ERRORIGNORE YES \n SET !TIMEOUT_PAGE 6 \n TAB T=1 \n ";

					   randomDelay= renderJS
					   randomDelay += "WAIT SECONDS="+randomDelayLoop+" \n";
					   iimPlay(randomDelay);
					   randomDelay="";

			}

    