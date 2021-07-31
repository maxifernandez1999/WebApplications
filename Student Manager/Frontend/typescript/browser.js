"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts" />
$(function () {
    Principal.Browser.GetDataFile();
    $("input").on("keyup", Principal.Browser.Searcher);
});
var Principal;
(function (Principal) {
    var Browser = /** @class */ (function () {
        function Browser() {
        }
        Browser.GetDataFile = function () {
            $.ajax({
                type: 'POST',
                url: "../../Backend/Read.php",
                dataType: "text",
                data: "",
                async: true
            })
                .done(function (resultado) {
                localStorage.setItem("data", resultado);
                console.log("ok");
                console.log(resultado);
                Browser.Show(Browser.ToJSON(resultado));
                //Searcher(response);
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
            });
        };
        Browser.ToJSON = function (resultado) {
            return JSON.parse(resultado);
        };
        Browser.Show = function (datos) {
            var result = "";
            for (var _i = 0, datos_1 = datos; _i < datos_1.length; _i++) {
                var Word = datos_1[_i];
                result += "<tr class=\"menu\"><td class=\"verb\">" + Word.infinitive + "</td><td>" + Word.pass + "</td><td>hola</td></tr>";
            }
            $(".table").append(result);
        };
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
        Browser.Searcher = function () {
            var keyPressed = $("input").val();
            console.log(keyPressed.toLowerCase());
            var result = "";
            $(".menu").remove();
            var storage = localStorage.getItem("data");
            if (storage != null) {
                var resp = JSON.parse(storage);
            }
            for (var _i = 0, resp_1 = resp; _i < resp_1.length; _i++) {
                var verb = resp_1[_i];
                var Word = verb.infinitive.toLowerCase();
                var keyPressedToLowerCase = keyPressed.toLowerCase();
                if (Word.indexOf(keyPressedToLowerCase) !== -1) {
                    var wordSlice = Word.slice(0, keyPressedToLowerCase.length);
                    if (wordSlice == keyPressedToLowerCase) {
                        result += "<tr class=\"menu\"><td class=\"verb\">" + verb.infinitive + "</td><td>" + verb.pass + "</td><td>Username 4</td></tr>";
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
        };
        return Browser;
    }());
    Principal.Browser = Browser;
})(Principal || (Principal = {}));
//# sourceMappingURL=browser.js.map