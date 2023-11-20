/* DEFAULT SETTING PARAMETERS */

var k=0;
do {
var tabCount = 4;
var moveJunk;
var markFlagCount = 2;
var notJunkCount = 3;
var openCount = notJunkCount;
var keyword = "Attached";
var loopCount=5;

/* SCRIPT BEGIN HERE DO NOT CHANGE AFTER THIS LINE */
for (var z = 1,currentTab=1; z <= tabCount; z++) {

    moveJunk = "CODE:";
    moveJunk += "VERSION BUILD=8970419 RECORDER=FX " + "\n";
    moveJunk += "SET !ERRORIGNORE YES " + "\n";
    moveJunk += "SET !TIMEOUT_PAGE 6 " + "\n";
    moveJunk += "TAB T=" + currentTab + " " + "\n";
    moveJunk += "URL GOTO=https://outlook.live.com/mail/junkemail" + "\n";
    moveJunk += "WAIT SECONDS=1.5 " + "\n";

    iimPlay(moveJunk);


    var loopJunk = "CODE:";


    loopJunk += "WAIT SECONDS=1.5 " + "\n";
    loopJunk += "TAG POS=1 TYPE=DIV ATTR=ARIA-LABEL:*Unread* " + "\n";
    loopJunk += "WAIT SECONDS=1.5 " + "\n";
    loopJunk += "TAG POS=1 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";
    loopJunk += "WAIT SECONDS=1.5 " + "\n";
    loopJunk += "TAG POS=2 TYPE=BUTTON ATTR=NAME:Not<SP>junk " + "\n";
    loopJunk += "WAIT SECONDS=1.5 " + "\n";
    for (var i = 1; i <= notJunkCount; i++) {
        iimPlay(loopJunk);
    }


    var moveInbox = "CODE:";
    moveInbox += "SET !ERRORIGNORE YES " + "\n";
    moveInbox += "SET !TIMEOUT_PAGE 5 " + "\n";
    moveInbox += "URL GOTO=https://outlook.live.com/mail/inbox" + "\n";
    moveInbox += "WAIT SECONDS=1.5 " + "\n";
    iimPlay(moveInbox);

    var markFlag = "CODE:";
    for (var k = 1, j = 1; j <= markFlagCount; j++) {
        markFlag += "TAG POS=" + k + " TYPE=BUTTON ATTR=TYPE:button&&TITLE:Flag<SP>this<SP>message&&ARIA-LABEL:Flag<SP>this<SP>message&&DATA-IS-FOCUSABLE:true&&TXT: " + "\n";
        markFlag += "WAIT SECONDS=2 " + "\n";
    }

    iimPlay(markFlag);

    var openMail = "CODE:";
    for (var i = 1; i <= openCount; i++) {
        openMail += "TAG POS=" + i + " TYPE=SPAN ATTR=TXT:*" + keyword + "*" + "\n"
        openMail += "WAIT SECONDS=2 " + "\n";
    }
    var temp=tabCount;
    if (z == tabCount && tabCount==2) {
        openMail += "TAB  T=0 " + "\n";
        currentTab=0;
    }
    
    if(z!=tabCount && tabCount>2) {
    	//openMail += "TAB  T=2"+ +" \n";
    	currentTab=2;
    }
       
    if (z == tabCount && tabCount>2) {
    	currentTab=tabCount -2;
        openMail += "TAB  T=-"+currentTab+" \n";
        
    }
    
    iimPlay(openMail);
}
}while(k++<10);
