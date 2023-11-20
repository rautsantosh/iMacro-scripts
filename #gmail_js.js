
var moveSpam="CODE:";

moveSpam +="VERSION BUILD=8970419 RECORDER=FX" + " \n";
moveSpam +="SET !ERRORIGNORE YES" + " \n";
moveSpam +="SET !TIMEOUT_STEP 5" + " \n";
moveSpam +="TAB T=1" + " \n";
moveSpam +="URL GOTO=https://mail.google.com/mail/u/0/h/7sf6dghcaevp/?&s=m" + " \n";

iimPlay(moveSpam);

var markNotSpam="CODE:";
markNotSpam +="WAIT SECONDS=2" + " \n";
markNotSpam +="VERSION BUILD=8970419 RECORDER=FX" + " \n";
markNotSpam +="SET !ERRORIGNORE YES" + " \n";
markNotSpam +="SET !TIMEOUT_STEP 5" + " \n";
markNotSpam +="TAB T=1" + " \n";
//markNotSpam +="URL GOTO=https://mail.google.com/mail/u/0/h/7sf6dghcaevp/?&s=m" + " \n";

markNotSpam +="WAIT SECONDS=2" + " \n";
markNotSpam +="TAG POS=1 TYPE=A ATTR=TXT:Spam<SP>(*)" + " \n";
markNotSpam +="WAIT SECONDS=2" + " \n";

markNotSpam +="TAG POS=1 TYPE=FONT ATTR=TXT:*-*" + " \n";
markNotSpam +="WAIT SECONDS=2" + " \n";
markNotSpam +="TAG POS=1 TYPE=A ATTR=TXT:Reply<SP>to<SP>all" + " \n";
markNotSpam +="WAIT SECONDS=1" + " \n";
markNotSpam +="TAG POS=1 TYPE=TEXTAREA FORM=NAME:f ATTR=NAME:body CONTENT= Thank<SP>You<BR>" + " \n";
markNotSpam +="WAIT SECONDS=1" + " \n";
markNotSpam +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:f ATTR=NAME:nvp_bu_send" + " \n";
markNotSpam +="WAIT SECONDS=1" + " \n";
markNotSpam +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:f ATTR=NAME:nvp_a_us" + " \n";
markNotSpam +="WAIT SECONDS=1" + " \n";

var notJunkCount=5;
var randomIndex=0;
var randomElement=null;
for(var i=1; i<=notJunkCount; i++) {
     	//iimPlay(markNotSpam);
}

var moveToInbox="CODE:";
moveToInbox +="VERSION BUILD=8970419 RECORDER=FX" + " \n";
moveToInbox +="SET !ERRORIGNORE YES" + " \n";
moveToInbox +="SET !TIMEOUT_STEP 5" + " \n";
moveToInbox +="TAB T=1" + " \n";
moveToInbox +="URL GOTO=https://mail.google.com/mail/u/0/h/"+ " \n";
moveToInbox +="TAG POS=1 TYPE=A ATTR=TXT:Inbox<SP>(*)";
iimPlay(moveToInbox);

var readInboxStar="CODE:";
readInboxStar +="VERSION BUILD=8970419 RECORDER=FX" + " \n";
readInboxStar +="SET !ERRORIGNORE YES" + " \n";
readInboxStar +="SET !TIMEOUT_STEP 5" + " \n";
readInboxStar +="TAB T=1" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";
readInboxStar +="TAG POS=1 TYPE=INPUT:TEXT FORM=ID:sbf ATTR=ID:sbq CONTENT=is:unread" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";
readInboxStar +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:sbf ATTR=NAME:nvp_site_mail" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";
readInboxStar +="TAG POS=1 TYPE=FONT ATTR=TXT:*-*" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";
readInboxStar +="TAG POS=1 TYPE=SELECT FORM=NAME:f ATTR=NAME:tact CONTENT=%st" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";
readInboxStar +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:f ATTR=NAME:nvp_tbu_go" + " \n";
readInboxStar +="WAIT SECONDS=2" + " \n";

var readInboxCount=3;

for(var i=1; i<=readInboxCount; i++) {
    iimPlay(readInboxStar);
}

