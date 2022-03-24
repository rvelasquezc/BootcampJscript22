//-- Arreglos inmutables

/*const numeros = [1, 2, 3];
const numero2 = numeros;
numero2.push(4);

console.log("numeros ", numeros);
console.log("numero2 ",numero2);*/

//--------------------------
const numeros = [1, 2, 3];
const numero2 = [0, ...numeros, 4];
//numero2.push(5);
const index = numeros.indexOf(2);
const numero3 = [
    ...numeros.slice(0, index),
        1.5,
    ...numeros.slice(index)
];
const numero4 = numeros.filter( x => x != 2)
const numero5 = numeros.map( x => x==2? 100: x);

//La exprecion en Arrow function en const numero5
function reemplazar2_x_100()
{
    if(x ==2)
    {
        return 100;
    }else
    {
        return x;
    }
}

console.log("numeros ", numeros);
//console.log("numero2 ",numero2);
//console.log("index ", index);
//console.log("numero3 ", numero3);
//console.log("numero4 ", numero4);
console.log("numero5 ", numero5);