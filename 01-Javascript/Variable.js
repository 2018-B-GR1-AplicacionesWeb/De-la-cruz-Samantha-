//Tipados Int edad=1;
// Javascript es un lenguaje no tipado
var edad = 1; //number
var sueldo = 1.01;//number
var nombre = "Samy";//string
var nombre = 'Samy';//string
var nombre = `Samy`;//string

var casado="false";//boolean
var hijos="null";//objeto
var cuatroBrazos;// undefined
//console.log('cuatroBrazos',cuatroBrazos);//undefined

var fecha=new Date();//Las clases (objetos) no se pueden heredar en JS.
console.log('fecha',fecha);//object
console.log(typeof  fecha);

var adrianJSON={"nombre":"Adrian",
    "edad":12,
    "sueldo":12.2,
    "casado":false,
    "hijos":null,
    "mascota":{
        "nombre":"Cachetes"
    }
};//object

var samantha ={
    nombre:'Samantha',
    edad:29,
    sueldo:12.2,
    casado:false,
    hijos:null,
    deberes:undefined,
    mascota: {
        nombre:"Cachetes"
    },//Buena practica poner coma

};//object

console.log(samantha.nombre);

if(undefined){
    console.log("Si");//Truethy
}else{
    console.log("No");//Falsy

}