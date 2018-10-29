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
                (error,contenidoArchivo)=>{
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
                        fs.writeFile(nombreArchivo,contenidoArchivo+contenidoArchivo,
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

nuevaPromesaAppendFile()
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

nuevaPromesaAppendFile('06-texto3.text','\n ',
    (contenidoArchivo,error)=>{
        if(error){
            console.log('Error',error)
        }else{
            console.log(contenidoArchivo)
        }
    }
);