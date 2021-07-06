//en el namespace Main poner el reference path
/// //<reference path="ajax.ts" />
class Ajax {

    private _xhr: XMLHttpRequest;

    private static DONE : number;
    private static OK : number;

    public constructor() {
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }

    public Get = (ruta: string, success: Function, params: string = "", error?: Function):void => {
    
        let parametros:string = params.length > 0 ? params : "";
        ruta = params.length > 0 ? ruta + "?" + parametros : ruta;

        this._xhr.open('GET', ruta, true);
        this._xhr.send();

        this._xhr.onreadystatechange = () => {

            if (this._xhr.readyState === Ajax.DONE) {
                if (this._xhr.status === Ajax.OK) {
                    success(this._xhr.responseText);
                } else {
                    if (error !== undefined){
                        error(this._xhr.status);
                    }
                }
            }

        };
    };

    public Post = (ruta: string, success: Function, params: string = "", error?: Function,archivo?:HTMLInputElement):void => {

        let parametros:string = params.length > 0 ? params : "";

        this._xhr.open('POST', ruta, true);
        let form : FormData = new FormData();

        //archivo != null ? form.append('archivo', archivo.files[0]): null;
        
        var array:string[] = parametros.split("?");
        for (let index = 0; index < array.length; index++) {
            var newArray:string[] = array[index].split("=");
            form.append(newArray[0], newArray[1]);    
        }

        this._xhr.setRequestHeader("enctype", "multipart/form-data");
        this._xhr.send(form);

        this._xhr.onreadystatechange = ():void => {

            if (this._xhr.readyState === Ajax.DONE) {
                if (this._xhr.status === Ajax.OK) {
                    success(this._xhr.responseText);
                } else {
                    if (error !== undefined){
                        error(this._xhr.status);
                    }
                }
            }
        };
        
    };


}