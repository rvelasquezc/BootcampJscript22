
//----------- crear nuevo objeto con propiedades de objeto principal -----
/*const juan ={
    nombre: "juan",
    apellido: "Rodriguez",
    edad: 30
};

const juan2 = Object.assign({}, juan);
juan2.apellido = "lopez";

console.log("juan",juan);
console.log("juan2",juan2);*/

//------------ formas de crear copia sin modificar el ob original --------
const juan ={
    nombre: "juan",
    apellido: "Rodriguez",
    edad: 30, 
    direccion:{
        departamento: "Guatemala",
        municipio: "Guatemala"
    }
};

/*juan2.apellido = "lopez";
const juan2 = Object.assign({}, juan, {apellido:"Arriaga"});*/
/** forma corta de hacer lo mismo */
const juan2 = {
    ...juan, 
    apellido: "Gonzales", 
    edad: 25,
    direccion:{
        ...juan.direccion,
    }
}

juan2.direccion.municipio = "Santa Catarina Pinula";

console.log("juan",juan);
console.log("juan2",juan2);