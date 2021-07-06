


// $(function(){
//     var data:any = new Main.GetData();
//     data.GetDataFile();
//     $("input").on("keyup", data.GetDataFile);
    
// });

namespace Main{
    export class Calculator{
        public first_number:number;
        public second_number:number;

        constructor(first_number:number,second_number:number){
            this.first_number = first_number;
            this.second_number = second_number;
        }

        public Add():number{
            return this.first_number + this.second_number;
        }
        public Subtract():number{
            return this.first_number - this.second_number;
        }
        public Multiply():number{
            return this.first_number * this.second_number;
        }
        public Divide():number{
            return this.NotZero() === true ? this.first_number / this.second_number : 0;
        }
        public NotZero(){
            return this.second_number != 0 ? true : false;
        }

    }
}