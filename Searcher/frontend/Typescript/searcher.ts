///<reference path="../../node_modules/@types/jquery/index.d.ts" />


// $(function(){
//     var data:any = new Main.GetData();
//     data.GetDataFile();
//     $("input").on("keyup", data.GetDataFile);
    
// });

// namespace Main{
//     export class GetData{
//         public datos:any = [];

//         // constructor(){
//         //     this.datos = datos;
//         // }
//         public GetDataFile(){
//             return $.ajax({
//                 type: 'POST',
//                 url: "../../backend/Read.php",
//                 dataType: "text",
//                 data: "",
//                 async: true
//             })
//             .done(function (resultado:string) {
//                 console.log(resultado);
//                 //this.datos = this.ToJSON(resultado);
//                 //Show(response);
//                 //Searcher(response);
        
//             }).fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
//                 alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
//             }); 
//         }
//         public ToJSON(resultado:string){
//             return JSON.parse(resultado);
//         }
//         public Show(datos:any){
//             let result:string = "";
//             for (const Word of this.datos) {
//                 result += `<tr class="menu"><td class="verb">${Word.id}</td><td>${Word.first_name}</td><td>${Word.last_name}</td></tr>`; 
//             }
        
//             $(".table").append(result);
            
//         }
//     }
// }
// var objVerbs:any[] = [
//     {"infinitive":"arise","pass":"arose"},          
//     {"infinitive":"awake"},
//     {"infinitive":"be"},
//     {"infinitive":"bear"},
//     {"infinitive":"beat"},
//     {"infinitive":"become"},
//     {"infinitive":"begin"},
//     {"infinitive":"bend"},
//     {"infinitive":"bet"},
//     {"infinitive":"bind"},
//     {"infinitive":"bite"},
//     {"infinitive":"bleed"},
//     {"infinitive":"blow"},
//     {"infinitive":"break"},
//     {"infinitive":"bring"},
//     {"infinitive":"broadcast"},
//     {"infinitive":"build"},
//     {"infinitive":"buy"}
    
// ];

$(function(){
    GetDataFile();
    $("input").on("keyup", Searcher);
    
});
// //var data:any = GetDataFile();
// //var response:any;
function GetDataFile(){
    $.ajax({
        type: 'POST',
        url: "../../backend/Read.php",
        dataType: "text",
        data: "",
        async: true
    })
    .done(function (resultado:string) {
        localStorage.setItem("data",resultado);
        console.log("ok");
        console.log(resultado);
        Show(ToJSON(resultado));
        //Searcher(response);

    }).fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    }); 
}
function ToJSON(resultado:string){
    return JSON.parse(resultado);
}
function Show(datos:any){
    let result:string = "";
    for (const Word of datos) {
        result += `<tr class="menu"><td class="verb">${Word.infinitive}</td><td>${Word.pass}</td><td>hola</td></tr>`; 
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
    let storage:string|null= localStorage.getItem("data");
    if(storage != null){
        var resp:any = JSON.parse(storage);
    }
    for (const verb of resp) {
        let Word:string = verb.infinitive.toLowerCase();
        let keyPressedToLowerCase:string = keyPressed.toLowerCase()
        if (Word.indexOf(keyPressedToLowerCase) !== -1) { 
            let wordSlice:string = Word.slice(0,keyPressedToLowerCase.length);
            if(wordSlice == keyPressedToLowerCase)
            {
                result += `<tr class="menu"><td class="verb">${verb.infinitive}</td><td>${verb.pass}</td><td>Username 4</td></tr>`
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