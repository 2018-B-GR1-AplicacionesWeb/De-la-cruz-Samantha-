// 07-promesas.js

const fs = require('fs');

const nuevaPromesaLectura = new Promise(
    (resolve, reject) => {
        fs.readFile('06-texto.txt', 'utf-8',
            (err, contenidoArchivo) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(contenidoArchivo);
                }
            });
    }
);


const nuevaPromesaEscritura = (contenidoLeido) => {
    return new Promise(
        (resolve, reject) => {

            const contenido = contenidoLeido ? contenidoLeido + 'Otro ola' : 'Otro ola';

            fs.writeFile('06-texto.txt', contenido,
                (err,) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('LO QUE SEA');
                    }
                });
        }
    );
};

nuevaPromesaLectura
    .then(
        (resultadoOk) => {
            console.log('Todo bien', resultadoOk);
            return nuevaPromesaEscritura(contenidoArchivo)

        }
    )
    .then(
        (contenidoCompleto) => {
            console.log('Contenido Completo',contenidoCompleto);

        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );

const nuevaPromesaAppendFile = (nombreArchivo,contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo,'utf-8',
                (error,contenidoArchivoLeido)=>{
                    if (error){
                        fs.writeFile(nombreArchivo,contenidoArchivo,
                            (err)=>{
                                if (err) {
                                    reject(console.error('Error escribiendo'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );

                    }else{
                        fs.writeFile(nombreArchivo,contenidoArchivoLeido+contenidoArchivo,
                            (err)=>{
                                if (err) {
                                    reject(console.error('Error escribiendo'));
                                } else {
                                    resolve(contenidoArchivo);
                                }
                            }
                        );
                    }

                }


            );

        }
    );
};

nuevaPromesaAppendFile('06-texto3.text','\n Adios Mundo')
    .then(
        (resultadoOk) => {
            console.log('Todo bien', resultadoOk);
            return nuevaPromesaAppendFile(contenidoArchivo,contenidoArchivo)

        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );


const nuevaPromesaForEach = (arregloStrings,callback) => {
    return new Promise(
        (resolve, reject) => {
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


nuevaPromesaForEach('06-texto3.text','callback')
    .then(
        (resultadoOk) => {
            console.log('Todo bien', resultadoOk);
            return nuevaPromesaForEach(contenidoArchivo,contenidoArchivo)

        }
    )
    .catch(
        (resultadoError) => {
            console.log('Algo malo paso', resultadoError);
        }
    );}