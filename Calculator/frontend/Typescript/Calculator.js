"use strict";
// $(function(){
//     var data:any = new Main.GetData();
//     data.GetDataFile();
//     $("input").on("keyup", data.GetDataFile);
// });
var Main;
(function (Main) {
    var Calculator = /** @class */ (function () {
        function Calculator(first_number, second_number) {
            this.first_number = first_number;
            this.second_number = second_number;
        }
        Calculator.prototype.Add = function () {
            return this.first_number + this.second_number;
        };
        Calculator.prototype.Subtract = function () {
            return this.first_number - this.second_number;
        };
        Calculator.prototype.Multiply = function () {
            return this.first_number * this.second_number;
        };
        Calculator.prototype.Divide = function () {
            return this.NotZero() === true ? this.first_number / this.second_number : 0;
        };
        Calculator.prototype.NotZero = function () {
            return this.second_number != 0 ? true : false;
        };
        return Calculator;
    }());
    Main.Calculator = Calculator;
})(Main || (Main = {}));
//# sourceMappingURL=Calculator.js.map