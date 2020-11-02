function verTexto() {
    let texto = (document.getElementById("cadena").value).toLowerCase();
    let soloTexto = "abcdefghijklmnñopqrstuvWxyz ";
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        let is_letra = false;
        for (let j = 0; j < soloTexto.length; j++) {
            const verificador = soloTexto[j];
            if(letra==verificador){
                is_letra = true;
                break;
            }
        }
        if(!is_letra){
            alert("En este campo solo se aceptan letras sin acentos ni otro tipo de caracter especial")
            document.getElementById("cadena").value = "";
            return false;
        };
    }
    return true;
}
function verNumero() {
    let numero = document.getElementById("avance").value;
    let soloNumero = "0123456789";
    for (let index = 0; index < numero.length; index++) {
        const num = numero[index];
        let is_num = false;
        for (let j = 0; j < soloNumero.length; j++) {
            const verificador = soloNumero[j];
            if(num==verificador) {
                is_num = true;
                break;
            }
        }
        if(!is_num){
            alert("Aquí solo se aceptan números naturales")
            document.getElementById("avance").value = 0 ;
            return false;
        }
    }
    return true;
}
