var nl = "%0A";   //var sp = "%20";
var cm = "%2C";   // CONSTANTS FOR comma , and newline \n
var table =  $('table.bcct'); // useless, just the table image

var results = $('table.bcst');
var hands = $('table.bchd');
var bids = $('div.bcdda');

var header = $('pre');
//console.log(header[0].textContent);
var headerInfo = header[0].textContent;
//console.log("how many rows:" +hands[0].rows.length);
//console.log("each row has "+hands[0].rows[0].cells.length+" cells");

var len = hands.length;
var nesw = new Array(len);

console.log("number of tables: "+len);
for(var a=0; a<len; a++){
    var i = hands[a].rows.length;
    nesw[a] = [];
    for(var j=0; j<i; j++){
	var k = hands[a].rows[j].cells.length;    
	for(var l=0; l<k; l++){
	    if(j == 0 && l == 0)
		nesw[a]["info"] = hands[a].rows[j].cells[l].innerText;
	    else if(j == 0 && l == 1) 
		nesw[a]["n"] = hands[a].rows[j].cells[l].innerText;
	    else if(j == 1 && l == 0)
		nesw[a]["w"] = hands[a].rows[j].cells[l].innerText;
	    else if(j == 1 && l == 2)
		nesw[a]["e"] = hands[a].rows[j].cells[l].innerText;
	    else if(j == 2 && l == 1)
		nesw[a]["s"] = hands[a].rows[j].cells[l].innerText;
	    else if(j == 2 && l == 0)
		nesw[a]["bids"] = bids[a].innerText;
	    //  console.log(hands[0].rows[j].cells[l].innerText);
	}
    }   
}

var len2 = results.length;
console.log("number of records: "+len2);
var resultTable = new Array(len2);
for(var b=0; b<len2; b++){
    var c = results[b].rows.length;
    //    console.log("rows per record: "+ c);
    resultTable[b] = [];
    for(var d=2; d<c; d++){
	var e=results[b].rows[d].cells.length;
	//	console.log("td per row: "+e);
	resultTable[b][d-2] = [];
	for(var f=0; f<e; f++){
	    var cell = results[b].rows[d].cells[f];
	    if(f == 0) resultTable[b][d-2].contract = cell.innerText;
	    //.contract = cell.innerText;
	    if(f == 1) resultTable[b][d-2].result = cell.innerText;
	    if(f == 2) resultTable[b][d-2].NSscore = cell.innerText;
	    if(f == 3) resultTable[b][d-2].EWscore = cell.innerText;
	    if(f == 4) resultTable[b][d-2].NSpts = cell.innerText;
	    if(f == 5) resultTable[b][d-2].EWpts = cell.innerText;
	    if(f == 6) resultTable[b][d-2].pairs = cell.innerText;
	    //  if(b==1); console.log(cell.innerText);
	    //		console.log(b+": ["+d+"]["+f+"]");
	    //		console.log(cell.innerText);
	    
	}
    }
}

function resultData(arr, i){
    var result = "";
    for(var j = 0; j<arr[i].length; j++){
	result += "pair:"   + arr[i][j].pairs + cm
	    + "contract:"+ arr[i][j].contract + cm
	    + "result:"  + arr[i][j].result + cm
	    + "NSscore:" + arr[i][j].NSscore + cm
	    + "EWscore:" + arr[i][j].EWscore + cm
	    + "NSpts:"   + arr[i][j].NSpts + cm
	    + "EWpts:"   + arr[i][j].EWpts + nl;
	
    }
    return result;
}

function boardData(arr, i){
    return "info: "+arr[i].info + nl
	+ "makable: "+arr[i].bids + nl
	+ "nwes: n:" + arr[i].n +cm+" w:"+ arr[i].w +cm+" e:"+ arr[i]["e"]
	+ cm+" s:"+ arr[i]["s"] + nl;
}

var total = headerInfo + nl + nl;
for(var i=0; i<nesw.length; i++){
    total += nl+"game: "+(i+1) +nl;
    total += boardData(nesw, i);
    total += resultData(resultTable, i);
}

$("#bcrecap").append("<a href='data:application/octet-stream,"
		     + total
		     +"'>Download</a>");