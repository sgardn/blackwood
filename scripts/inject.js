function somefun(){
    
    function buttonScript(){
	console.log("buttonScript");
	console.log(this);
	
    }
    //    buttonScript();
    var links = $("a");
    console.log(links);    
}

//var divs = $('div > div table');
//var boards = $('table.bchd');

var divs = $('table');
var bets = $(".bcdda");

$("#bcrecap").append("<a href='data:application/octet-stream,field1%2Cfield2%0Afoo%2Cbar%0Agoo%2Cgai%0A'>Download</a>");


    //"<form method='get' action='blah.txt'><button type='submit'>Download!</button></form>");


//"<p>SHIT HAPPENS YO</p>");
//console.log(bets);
//console.log(bets.length);
console.log(bets[0].innerText);
//console.log(divs);



var injectedScript = document.createElement('script');
injectedScript.type = 'text/javascript';

console.log(somefun);                              //console.log(somefun());
injectedScript.text = '('+somefun+')("")';

(document.body || document.head).appendChild(injectedScript);
console.log("ScRiPt . . . ");
console.log(injectedScript);
console.log(" . . . injected");