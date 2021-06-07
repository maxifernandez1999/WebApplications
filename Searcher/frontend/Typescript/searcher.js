"use strict";
///<reference path="../../node_modules/@types/jquery/index.d.ts" />
$(function () {
    Show();
    $("input").on("keyup", Searcher);
});
var objVerbs = [
    { "infinitive": "arise" },
    { "infinitive": "awake" },
    { "infinitive": "be" },
    { "infinitive": "bear" },
    { "infinitive": "beat" },
    { "infinitive": "become" },
    { "infinitive": "begin" },
    { "infinitive": "bend" },
    { "infinitive": "bet" },
    { "infinitive": "bind" },
    { "infinitive": "bite" },
    { "infinitive": "bleed" },
    { "infinitive": "blow" },
    { "infinitive": "break" },
    { "infinitive": "bring" },
    { "infinitive": "broadcast" },
    { "infinitive": "build" },
    { "infinitive": "buy" }
];
function Show() {
    var result = "";
    for (var _i = 0, objVerbs_1 = objVerbs; _i < objVerbs_1.length; _i++) {
        var Word = objVerbs_1[_i];
        result += "<tr class=\"menu\"><td class=\"verb\">" + Word.infinitive + "</td><td>Nombre</td><td>Username 4</td></tr>";
    }
    $(".table").append(result);
}
//version 1.0.0
// function Searcher(){
//     let keyPressed:any = $("input").val();
//     console.log(keyPressed.toLowerCase());
//     let result:any = "";
//     $(".menu").remove();
//     for (const verb of objVerbs) {
//         let Word:string = verb.infinitive.toLowerCase();
//         if (Word.indexOf(keyPressed.toLowerCase()) !== -1) {
//             result += `<tr class="menu"><td>${verb.infinitive}</td><td>Nombre</td><td>Username 4</td></tr>`;
//         }
//     }
//     if (result == "") {
//         if (!($(".menu").empty())) {
//             $(".menu").empty();
//         }
//         result = `<tr class="menu"><td>No se encuentra el verbo</td></tr>`;
//     }
//     $(".table").append(result);
// }
//version 1.0.1
function Searcher() {
    var keyPressed = $("input").val();
    console.log(keyPressed.toLowerCase());
    var result = "";
    $(".menu").remove();
    for (var _i = 0, objVerbs_2 = objVerbs; _i < objVerbs_2.length; _i++) {
        var verb = objVerbs_2[_i];
        var Word = verb.infinitive.toLowerCase();
        if (Word.indexOf(keyPressed.toLowerCase()) !== -1) {
            var keyPosition = keyPressed.length - 1;
            for (var _a = 0, Word_1 = Word; _a < Word_1.length; _a++) {
                var leter = Word_1[_a];
                if (Word.indexOf(leter) == keyPosition) {
                    if (leter == keyPressed[keyPosition]) {
                        result += "<tr class=\"menu\"><td class=\"verb\">" + verb.infinitive + "</td><td>Nombre</td><td>Username 4</td></tr>";
                    }
                }
            }
        }
    }
    if (result == "") {
        if (!($(".menu").empty())) {
            $(".menu").empty();
        }
        result = "<tr class=\"menu\"><td>No se encuentra el verbo</td></tr>";
    }
    $(".table").append(result);
}
function RepeatWords(verb) {
    var arrayWords = $(".verb").val;
    for (var _i = 0, arrayWords_1 = arrayWords; _i < arrayWords_1.length; _i++) {
        var word = arrayWords_1[_i];
        if (word == verb) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=searcher.js.map