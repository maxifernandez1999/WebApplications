<?php
    class Read{
        public static function Read($nameFile,$modo){
            $archivo = fopen($nameFile,$modo);
            $datos = fread($archivo,filesize($nameFile));
            fclose($archivo);
            if($datos != null){
                return $datos;
            }else{
                return "error, no se puede leer el archivo";
            }
            
        }
        public static function FileRead($nameFile){
            if (file_exists($nameFile)) {
                if(filesize($nameFile) > 0){
                    $datos = self::Read($nameFile,"r");
                }else{
                    $datos = 'El archivo se encuentra vacio';
                }
            }
            return $datos;
        }
    }

    echo Read::FileRead("Files/file.json");


?>