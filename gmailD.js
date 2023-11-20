var gmailNS;

var runCode;
runCode = "CODE:";
gmailNS = "CODE:";
    gmailNS += "VERSION BUILD=8970419 RECORDER=FX " + "\n";
    gmailNS += "SET !ERRORIGNORE YES " + "\n";
    gmailNS += "SET !TIMEOUT_STEP 7 " + "\n";
    gmailNS += "SET !TIMEOUT_PAGE 7" + "\n";
    gmailNS += "WAIT SECONDS=2.2" + "\n";
    
    for (var z = 1; z <= 4; z++) {
    	gmailNS += "URL GOTO=https://accounts.google.com/SignOutOptions?continue=https://mail.google.com" + "\n";
		gmailNS += "WAIT SECONDS=4" + "\n";
		gmailNS += "TAB T=1" + "\n";
		gmailNS += "TAG POS=1 TYPE=BUTTON ATTR=ID:choose-account-"+ z + "\n";
		gmailNS += "WAIT SECONDS = 2.2" + "\n";
		iimPlay(gmailNS);
    }
	
	
	data-onclick-arg="287"
	
	
List [] 
touple() immutable
Set {}
