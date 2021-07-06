///<reference path="../../node_modules/@types/jquery/index.d.ts" />
///<reference path="./Calculator.ts" />
namespace Main{
    export class Manager{
        public AddEvent(){
            let first_number:any = $(".number1").val();
            let second_number:any = $(".number2").val();

            let calculator = new Calculator(first_number,second_number);
            console.log(calculator.Add());


        }
    }

    export var objManager = new Main.Manager();
}