"use strict";
///<reference path="../../node_modules/@types/jquery/index.d.ts" />
$(function () {
    Show();
    $("#searcher").on("keyup", Searcher);
});
var objVerbs = [
    { "word": "hello" },
    { "word": "World" },
    { "word": "Hi" },
    { "word": "Waaa" }
];
function Show() {
    var result = "";
    for (var _i = 0, objVerbs_1 = objVerbs; _i < objVerbs_1.length; _i++) {
        var Word = objVerbs_1[_i];
        result += Word.word + "<br>";
    }
    $("#result").html(result);
}
function Searcher() {
    var keyPressed = $("#searcher").val();
    console.log(keyPressed.toLowerCase());
    var result = "";
    $("#result").html("");
    for (var _i = 0, objVerbs_2 = objVerbs; _i < objVerbs_2.length; _i++) {
        var verb = objVerbs_2[_i];
        var Word = verb.word.toLowerCase();
        if (Word.indexOf(keyPressed.toLowerCase()) !== -1) {
            result += Word + "<br>";
        }
    }
    if (result == "") {
        result = "No se encuentra el verbo...";
    }
    $("#result").html(result);
}
//# sourceMappingURL=searcher.js.map