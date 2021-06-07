///<reference path="../../node_modules/@types/jquery/index.d.ts" />

$(function(){
    Show();
    $("input").on("keyup", Searcher);
    
});
var objVerbs:any[] = [
    {"infinitive":"arise"},            
    {"infinitive":"awake"},
    {"infinitive":"be"},
    {"infinitive":"bear"},
    {"infinitive":"beat"},
    {"infinitive":"become"},
    {"infinitive":"begin"},
    {"infinitive":"bend"},
    {"infinitive":"bet"},
    {"infinitive":"bind"},
    {"infinitive":"bite"},
    {"infinitive":"bleed"},
    {"infinitive":"blow"},
    {"infinitive":"break"},
    {"infinitive":"bring"},
    {"infinitive":"broadcast"},
    {"infinitive":"build"},
    {"infinitive":"buy"}
    
];


function Show(){
    let result:string = "";
    for (const Word of objVerbs) {
        result += `<tr class="menu"><td class="verb">${Word.infinitive}</td><td>Nombre</td><td>Username 4</td></tr>`; 
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
function Searcher(){
    let keyPressed:any = $("input").val();
    console.log(keyPressed.toLowerCase());
    let result:any = "";
    $(".menu").remove();
    for (const verb of objVerbs) {
        let Word:string = verb.infinitive.toLowerCase();
        if (Word.indexOf(keyPressed.toLowerCase()) !== -1) { 
            let keyPosition:number = keyPressed.length-1;   
            for (const leter of Word) {
                    if (Word.indexOf(leter) == keyPosition) {
                        if (leter == keyPressed[keyPosition]) {
                                result += `<tr class="menu"><td class="verb">${verb.infinitive}</td><td>Nombre</td><td>Username 4</td></tr>`;
                        }
                    }
                }   
        }
    }
    if (result == "") {
        if (!($(".menu").empty())) {
            $(".menu").empty();
        }
        result = `<tr class="menu"><td>No se encuentra el verbo</td></tr>`;
    }
    
    $(".table").append(result);
}


function RepeatWords(verb:string):boolean{
    let arrayWords:any = $(".verb").val;
    for (const word of arrayWords) {
        if (word == verb) {
            return true;
        }       
    }
    
    return false;
}