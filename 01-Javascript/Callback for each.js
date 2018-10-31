function ejercicioDeArchivos(arregloStrings, callback) {

    const arregloRespuestas = [];

    arregloStrings
        .forEach(
            (string, indice) => {
                const archivo = `${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(archivo,
                    contenido,
                    (err) => {
                        const respuesta = {
                            nombreArchivo: archivo,
                            contenidoArchivo: contenido,
                            error: err
                        };
                        arregloRespuestas.push(respuesta);
                        const tamanoRespuestas = arregloRespuestas.length;
                        if (tamanoRespuestas === arregloStrings.length) {
                            callback(arregloRespuestas)
                        }
                    });
            }
            );
    const arregloStrings = ['A', 'B', 'C'];

    ejercicioDeArchivos(arregloStrings,
        (arregloRespuestas) => {
            console.log(arregloRespuestas);
        });
}
