/*
 *   functions for printing results in the console (developer tools)
 */

function printResults(arr){
    //    for(var i=0; i<arr.length; i++){                                     
    for(var i=0; i<1; i++){
        console.log(""+arr[i].pairs);
        console.log(""+arr[i].contract);
        console.log(""+arr[i].result);
        console.log(""+arr[i].NSscore);
        console.log(""+arr[i].EWscore);
        console.log(""+arr[i].NSpts);
        console.log(""+arr[i].EWpts);
    }
}
//printResults(RES);                                                           
function printHands(arr){
    //    for(var i=0; i<arr.length; i++){                                     
    for(var i=0; i<1; i++){
        console.log("info: "+arr[i]["info"]);
        console.log("north:\n" + arr[i]["n"]);
        console.log("east:\n" + arr[i]["e"]);
        console.log("south:\n" + arr[i]["s"]);
        console.log("west:\n" + arr[i]["w"]);
        console.log("bids:\n"+ arr[i]["bids"]);
    }
}
//printHands(nesw);   