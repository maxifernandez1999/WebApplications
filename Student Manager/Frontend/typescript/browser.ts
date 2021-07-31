///<reference path="../../node_modules/@types/jquery/index.d.ts" />
$(function(){
    Principal.Browser.GetDataFile();
    $("input").on("keyup", Principal.Browser.Searcher);
    
});
namespace Principal{
    export class Browser{
        
        public static GetDataFile(){
            $.ajax({
                type: 'POST',
                url: "../../Backend/Read.php",
                dataType: "text",
                data: "",
                async: true
            })
            .done(function (resultado:string) {
                localStorage.setItem("data",resultado);
                console.log("ok");
                console.log(resultado);
                Browser.Show(Browser.ToJSON(resultado));
                //Searcher(response);
        
            }).fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            }); 
        }
        public static ToJSON(resultado:string){
            return JSON.parse(resultado);
        }
        public static Show(datos:any){
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
        public static Searcher(){
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
    }
}