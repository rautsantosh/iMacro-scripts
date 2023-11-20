


var moveJunk;
var markFlagCount = 2;
var notJunkCount = 4;
var keyword = "need";

moveJunk = "CODE:";
moveJunk += "VERSION BUILD=8970419 RECORDER=FX " + "\n";
moveJunk += "SET !ERRORIGNORE YES " + "\n";
moveJunk += "SET !TIMEOUT_PAGE 6 " + "\n";
moveJunk += "TAB T=1 " + "\n";
moveJunk += "URL GOTO=https://outlook.live.com/mail/junkemail" + "\n";
moveJunk += "WAIT SECONDS=1.5 " + "\n";

iimPlay(moveJunk);

var loopJunk = "CODE:";


loopJunk += "WAIT SECONDS=1.5 " + "\n";
loopJunk += "TAG POS=1 TYPE=SPAN ATTR=TXT:*:* " + "\n";
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
    markFlag += "WAIT SECONDS=2.5 " + "\n";
}

iimPlay(markFlag);

var openMail = "CODE:";
for (var i = 1; i <= notJunkCount; i++) {
    openMail += "TAG POS="+i+" TYPE=SPAN ATTR=TXT:*" + keyword + "*" + "\n"
    openMail += "WAIT SECONDS=1.5 " + "\n";
}
iimPlay(openMail);

// Processing Second Tab



var moveJunk;
var markFlagCount = 2;
var notJunkCount = 4;
var keyword = "need";

moveJunk = "CODE:";
moveJunk += "VERSION BUILD=8970419 RECORDER=FX " + "\n";
moveJunk += "SET !ERRORIGNORE YES " + "\n";
moveJunk += "SET !TIMEOUT_PAGE 6 " + "\n";
moveJunk += "TAB T=2 " + "\n";
moveJunk += "URL GOTO=https://outlook.live.com/mail/junkemail" + "\n";
moveJunk += "WAIT SECONDS=1.5 " + "\n";

iimPlay(moveJunk);

var loopJunk = "CODE:";


loopJunk += "WAIT SECONDS=1.5 " + "\n";
loopJunk += "TAG POS=1 TYPE=SPAN ATTR=TXT:*:* " + "\n";
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
    markFlag += "WAIT SECONDS=2.5 " + "\n";
}

iimPlay(markFlag);

var openMail = "CODE:";
for (var i = 1; i <= notJunkCount; i++) {
    openMail += "TAG POS="+i+" TYPE=SPAN ATTR=TXT:*" + keyword + "*" + "\n"
    openMail += "WAIT SECONDS=1.5 " + "\n";
}
iimPlay(openMail);

