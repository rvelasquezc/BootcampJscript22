
/*let prefix = 'hola '

function saludar(texto){
    return prefix + texto;
}

console.log(saludar('mundo'));
prefix = 'Adios ';
console.log(saludar('mundo'));*/

//------- Funcion deveuleve Funcion -----------

/*function mensaje(prefijo)
{
    return function(texto)
    {
        return prefijo + ' ' + texto;
    }
}

const bienvenida = mensaje('hola');
const despedida = mensaje('adios');

console.log(bienvenida('mundo'));
console.log(despedida('mundo'));*/

//------- Funcion recibe Funcion parametro ------

/*function mensaje(prefijo, formateador)
{
    return function(texto)
    {
        return formateador(prefijo, texto);
    }
}

const formatoBienvenida = function(prefijo, texto)
{
    return "!" + prefijo + " " + texto + "!";
}

const formatoDespedida = function(prefijo, texto)
{
    return prefijo + " " + texto + ".. :(";
}


const bienvenida = mensaje('hola', formatoBienvenida);
const despedida = mensaje('adios', formatoDespedida);

console.log(bienvenida('mundo'));
console.log(despedida('mundo')); */

//------------- Uso de Arrow functions ------------

/*function mensaje(prefijo, formateador)
{
    return function(texto)
    {
        return formateador(prefijo, texto);
    }
}
const formatoBienvenida = (prefijo, texto) =>"!" + prefijo + " " + texto + "!";
const formatoDespedida = (prefijo, texto) => prefijo + " " + texto + ".. :(";*/


/**const mensaje = (prefijo, formato) => texto => formato(prefijo,texto);
const bienvenida = mensaje('hola', (a, b) =>"!" + a + " " + b + "!");
const despedida = mensaje('adios', (a, b) => a + " " + b + ".. :(");

console.log(bienvenida('mundo'));
console.log(despedida('mundo')); **/

//-------------- Arrow function tratamiento strings -----------------

const mensaje = (prefijo, formato) => texto => formato(prefijo,texto);
const bienvenida = mensaje('hola', (a, b) => `! ${a} ${b}!`);
const despedida = mensaje('adios', (a, b) => `${a} ${b}.. :(`);

console.log(bienvenida('mundo'));
console.log(despedida('mundo')); 