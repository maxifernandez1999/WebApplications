"use strict";
///<reference path="../../node_modules/@types/jquery/index.d.ts" />
///<reference path="./Calculator.ts" />
var Main;
(function (Main) {
    var Manager = /** @class */ (function () {
        function Manager() {
        }
        Manager.prototype.AddEvent = function () {
            var first_number = $(".number1").val();
            var second_number = $(".number2").val();
            var calculator = new Main.Calculator(first_number, second_number);
            console.log(calculator.Add());
        };
        return Manager;
    }());
    Main.Manager = Manager;
    Main.objManager = new Main.Manager();
})(Main || (Main = {}));
//# sourceMappingURL=Main.js.map