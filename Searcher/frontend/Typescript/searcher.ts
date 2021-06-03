///<reference path="../../node_modules/@types/jquery/index.d.ts" />

$(function(){
    Show();
    $("#searcher").on("keyup", Searcher);
    
});
var objVerbs:any[] = [
    {"word":"hello"},
    {"word":"World"},
    {"word":"Hi"},
    {"word":"Waaa"}
];
function Show(){
    let result:string = "";
    for (const Word of objVerbs) {
        result += `${Word.word}<br>`; 
    }
    $("#result").html(result);
    
}
function Searcher(){
    let keyPressed:any = $("#searcher").val();
    console.log(keyPressed.toLowerCase());
    let result:any = "";
    $("#result").html("");
    for (const verb of objVerbs) {
        let Word:string = verb.word.toLowerCase();
        if (Word.indexOf(keyPressed.toLowerCase()) !== -1) {
            result += `${Word}<br>`; 
        }
    }
    if (result == "") {
        result = "No se encuentra el verbo...";
    }
    $("#result").html(result);
  
}