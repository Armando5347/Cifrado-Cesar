/*
    vamos a crear una función con el uso de JS6
    que se encargue de cifrado y decifrado del texto de área
    considerando utilizar funciones anonimas y callback
*/

var cesar =  (function(){
    /*tenemos que entender que para poder cifrar o descifrar
    son necesarios 3 parametros
        texto
        desp
        accion
        */
    let doStaff = function(txt, desp, action){
        
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','ñ','o','p','q','r','s',
            't','u','v','w','x', 'y','z']
        var l = abc.length;
        //tenemos que crear una function que se encargue de poder realizar el cambio de las posiciones de las letras para el cifrado
        return function(c){
            var i =0
            i = abc.indexOf(c.toLowerCase());
            //reemplazo de las posiciones o el movimiento
            //primero tenemos que saber si el texto está vacio
            if(i != -1){
                //movimiento de las posiciones
                var pos = i;
                if(action){
                    //cifrado
                    pos = ((pos%27)+(desp%27))%27;
                    //pos -= (pos>=1)?1:0;
                }else{
                    //descifrado
                    pos = ((pos%27)-(desp%27))%27;
                    //como no veo que le gustan los modulos negativos, vamos a hacer un ajuste
                    if(pos<0){
                        pos = (27+pos)%27
                    }
                    //pos += (pos<0)?1:0;
                }
                return abc[pos];
                
            };
            pos = 0
            return c;
        };

    })();
    //vamos a necesitar regresar el reemplazo de la acadena
    var re = (/[a-zA-ZñÑ]/ig);
    return String(txt).replace(re, function(match){
        //se encarga de buscar las coincidencia entre la
        //expresión regular y el textarea
        return replace(match);
    });

    };

    //necesito enviar si vamos a cifrar o desifrar

    return {
        //cuando se cifra
        encode : function(text,desp){
            return doStaff(text,desp, true);
        },
        decode: function(text,desp){
            return doStaff(text,desp, false);
        }
    };

})();

//crear las funciones codificar y decodificar

function codificar(){
    let avance = 0;
    try{
        avance = document.getElementById("avance").value;
    }catch{
        alert("Ingreso invalido del avance");
        document.getElementById("avance").value = 0;
        return;
    }
    document.getElementById("resultado").value =
    cesar.encode(document.getElementById("cadena").value, avance);

}

function decodificar(){
    let avance = 0;
    try{
        avance = document.getElementById("avance").value;
        document.getElementById("avance") = 0;
    }catch{
        alert("Ingreso invalido del avance");
        return;
    }
    document.getElementById("resultado").value =
    cesar.decode(document.getElementById("cadena").value, avance);

}

