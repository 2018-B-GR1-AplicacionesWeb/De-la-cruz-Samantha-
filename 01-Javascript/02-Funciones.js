function  holaMundo() {
    console.log('hola mundo ')
}
holaMundo();

function  sumarDosnumeros(numUno, numDos) {
    var esNumberNumeroUno= typeof numUno=='number';
    var esNumbernumeroDos =typeof  numDos=='number';
    if(esNumberNumeroUno && esNumbernumeroDos)
    {
        return numUno+numDos;
    } else {
     console.error('no envia numeros');
        return 0;
    }
    return numUno+numDos
}
function sumarNNumeros(...numeros) {
    var tieneUnParametroDiferenteDeNumber = false;
    var resultado = 0;
    for (var i = 0; i < numeros.length; i++) {
        var esNumeroNumber = typeof numeros[i] == 'number';
        if (!esNumeroNumber) {
            tieneUnParametroDiferenteDeNumber = true;
        } else{
            resultado = resultado + numeros[i]
        }
    }
    if(tieneUnParametroDiferenteDeNumber){
        console.error('No envia numeros');
        return 0;
    }else{
        return resultado;
    }
}

function sumarNumerosDesdeUnArreglo(numeros) {
    var tieneUnParametroDiferenteDeNumber = false;
    var resultado;
    for (var i = 0; i < numeros.length; i++) {
        var esNumeroNumber = typeof numeros[i] == 'number';
        if (!esNumeroNumber) {

            function sumarNNumeros(...numeros) {
                resultado = resultado + numeros[i]
            }
        }
        if (tieneUnParametroDiferenteDeNumber) {
            console.error('No envia numeros');
            return 0;
        } else {
            return resultado;
            return {
                noEsNumber: tieneUnParametroDiferenteDeNumber,
                resultado: resultado
            }
        }
    }


    console.log(sumarDosnumeros(1, 2));
    console.log(sumarDosnumeros(false, true, 3, 4, 5, 6, 7));
    console.log(sumarNNumeros(false, true, 3, 4, 5, 6, 7));

    function saludarenUperCase() {
        return ` Hola ${nombre.toUpperCase()}`;
    }

    console.log(saludarenUperCase("samy"));
}