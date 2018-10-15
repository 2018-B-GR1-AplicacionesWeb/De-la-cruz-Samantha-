var arreglo = [];
arreglo = [
    1,
    "Samy",
    false,
    null,
    new Date(),
    {
        nombre:"Vicente"
    },
    [1,2,false,true]
];
console.log(arreglo);
arreglo.push(3);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

var arregloNmeros =[1,2,3,4,5];
arregloNmeros.splice(1,0,1.1);
console.log(arregloNmeros);
arregloNmeros.splice(4,1);
console.log(arregloNmeros);
var indicedelnumero2 = arregloNmeros.indexOf(2);
console.log(indicedelnumero2);
arregloNmeros.splice(indicedelnumero2,0,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9);
console.log(arregloNmeros);
var indiceunosiete = arregloNmeros.indexOf(1.7);
console.log(arregloNmeros[indiceunosiete]); //1,7
console.log(arregloNmeros[0]);
var posicioinicialunouno= arregloNmeros.indexOf(1.1);
var posicioinicialunonueve= arregloNmeros.indexOf(1.9);
var desdeelunounoalunonueve=
    (posicioinicialunonueve-posicioinicialunouno)+1;
arregloNmeros.splice(
    posicioinicialunouno,desdeelunounoalunonueve
);
console.log(arregloNmeros);

var arregloUno=[1,2,3];
var arregloDos=[4,5,6];

//destructuracion de arreglos
console.log(...arregloUno);
var arregloCompleto= [...arregloUno,...arregloDos];
console.log(arregloCompleto);

//Destructuración de Objetos
var samy = {
    nombre: "samy",
    apelldo: "de la cruz ",
    direccion: "gregorio de bobadilla",
    casado: false,
    edad:26
};
var usuarios= {
    ...samy,
    ...michelle
};
var michelle ={
    mascota: {
        nombre: "Cachetes"
    },
    fechaNacimiento: new Date('1989-06-10')
};
console.log(usuarios);

var atributosDelObjeto = Object.keys(usuarios);
usuarios['nombre']
console.log(atributosDelObjeto);
console.log(usuarios['nombre']);
