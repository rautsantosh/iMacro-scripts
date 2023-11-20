var gmailNS;

var runCode;

gmailNS = "CODE:";
    gmailNS += "VERSION BUILD=8970419 RECORDER=FX " + "\n";
    gmailNS += "SET !ERRORIGNORE YES " + "\n";
    gmailNS += "SET !TIMEOUT_STEP 7 " + "\n";
    gmailNS += "SET !TIMEOUT_PAGE 7" + "\n";
    gmailNS += "WAIT SECONDS=2.2" + "\n";
    gmailNS += "WAIT SECONDS=5" + "\n";
    gmailNS += "URL GOTO=https://accounts.google.com/SignOutOptions?continue=https://mail.google.com" + "\n";
	gmailNS += "WAIT SECONDS=5" + "\n";
	gmailNS += "TAB T=1" + "\n";
	gmailNS += "TAG POS=1 TYPE=BUTTON ATTR=ID:choose-account-0" + "\n";
	gmailNS += "WAIT SECONDS = 10" + "\n";
	gmailNS += "WAIT SECONDS = 2.2" + "\n";
	gmailNS += "TAG POS=1 TYPE=DIV ATTR=CLASS:V<SP>j<SP>zd&&TXT:" + "\n";
	gmailNS += "TAG POS=1 TYPE=DIV ATTR=CLASS:V<SP>tb&&TXT:" + "\n";
	iimPlay(gmailNS);
	var getList=[];
	for (var z = 0; z <= 9; z++) {
		var x=window.content.document.querySelectorAll("div[data-onclick='Fd']")[z].getAttribute('data-onclick-arg');
		getList.push(x);
	}
	
	
    for (var k = 0; k <= getList.length; k++) {
		var x=getList[k];
		//alert(x);
		runCode = "CODE:";
		runCode += "VERSION BUILD=8970419 RECORDER=FX " + "\n" +  "SET !ERRORIGNORE YES " + "\n" + "SET !TIMEOUT_STEP 7 " + "\n" + "SET !TIMEOUT_PAGE 7" + "\n";
		//runCode += "URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/Spam " + "\n"+"WAIT SECONDS = 2.2 ";
		runCode += "URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/Spam " + "\n"+"WAIT SECONDS = 2.2 " + "\n"+"CLICK X=13 Y=127 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=14 Y=205 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=16 Y=284 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=11 Y=368 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=14 Y=445 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1316 Y=34 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=9 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=13 Y=209 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=12 Y=287 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=15 Y=359 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1337 Y=38 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB CLOSEALLOTHERS " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 2.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"URL GOTO=https://mail.google.com/mail/mu/mp/"+ x + "/#tl/priority/^smartlabel_personal " + "\n"+"WAIT SECONDS = 3.2 " + "\n"+"CLICK X=140 Y=128 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1456 Y=80 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Welcome " + "\n"+"TAG POS=1 TYPE=A ATTR=TXT:Hi " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB T=1 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"CLICK X=1340 Y=39 " + "\n"+"WAIT SECONDS = 1.2 " + "\n"+"TAB CLOSEALLOTHERS " + "\n";
		iimPlay(runCode);
		runCode=null;
	}
	
	
	