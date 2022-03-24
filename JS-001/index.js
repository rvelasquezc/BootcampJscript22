const form = document.getElementsByTagName("form")[0];
/**@type {HTMLInputElement} */
const inputCodigo = document.getElementById("codigo");
/**@type {HTMLInputElement} */
const inputNombre = document.getElementById("nombre");
/**@type {HTMLInputElement} */
const inputCantidad = document.getElementById("cantidad");
/**@type {HTMLInputElement} */
const inputPrecio = document.getElementById("precio");
/**@type {HTMLInputElement} */
const inputCategoria = document.getElementById("categoria");

const tbody = document.getElementsByTagName("tbody")[0];

//Asignar valor por Id a Html
const cantidadTotalElement = document.getElementById("cantidad_Total"); 
const precioTotalElement = document.getElementById("precio_Total"); 
const granTotalElement = document.getElementById("gran_Total");

let indice = 0;
let cantidadTotal = 0;
let precioTotal = 0;
let granTotal = 0;
let currentRow;

form.addEventListener("submit", onSubmit);

/**
 * 
 * @param {Event} event 
 */
function onSubmit(event){
    //console.log("formulario enviado");
    //Limpia la parametros que van por la URL
    event.preventDefault();
    
    //Se obtiene el contenido del formulario
    const data = new FormData(form);
    //Array.from itera los valores 
    const values = Array.from(data.entries());
    //Se asignan valores a constantes -----------------------

     //Accede a elementos 
     const [frmCodigo, frmNombre, frmCantidad, frmPrecio, frmCategoria] = values;

    //Accediendo desde el indice
    //const nombre = values[0][1];

    let codigo = frmCodigo[1];
    const nombre = frmNombre[1];
    const cantidad = frmCantidad[1];
    const precio = frmPrecio[1];
    const categoria = frmCategoria[1];
    const total = cantidad * precio;
    //-------------------------------------------------------
    
    //Se crea elementos tr dinamicamente
   
    cantidadTotal = parseFloat(cantidad) + cantidadTotal;
    precioTotal = parseFloat(precio) + precioTotal;
    granTotal = parseFloat(total) + granTotal;
    
    let tr;
    if(!codigo){
        indice ++;
        codigo = indice;
        tr = document.createElement("tr");
        tbody.appendChild(tr);
    }else{
        tr = currentRow;
    }
  
   
    //Se asignan td dinamicamente
    /*tr.innerHTML = "<td>X</td><td>"
    + nombre +"</td><td>"
    + cantidad +"</td><td>"
    + precio +"</td><td>"
    + categoria +"</t><td>"
    + 0 +'</td><td><a href="#">Editar</a> | <a href="#">Eliminar</a></td>';*/

    //Mejor ordenado
    tr.dataset.categoria = categoria; 
    tr.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${categoria}</td>
        <td>${total}</td>
        <td>
            <div class="btn-group">
                <a title ="Editar" href="#" onclick="onEdit(event)" class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil-square"></i></a> 
                <a title ="Eliminar" href="#" onclick="onDelete(event)" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></a>
            </div>
        </td>
    `;


    cantidadTotalElement.innerText = cantidadTotal;
    precioTotalElement.innerText = precioTotal;
    granTotalElement.innerText = granTotal;
    //--------------------------------------------------------
    console.log(nombre, cantidad, precio, categoria);

    form.reset();
   
}

/**
 * 
 * @param {Event} event 
 */
function onEdit(event){
    event.preventDefault();
    /** @type {HTMLAnchorElement} */
    const anchor = event.currentTarget; /* referencia a fila a editar*/
    const tr = anchor.parentElement.parentElement.parentElement;
   const celdas = tr.getElementsByTagName("td");
   const [tdCodigo, tdNombre,tdCantidad,tdPrecio,tdCategoria,tdTotal,tdAccion] = celdas;

   inputCodigo.value = tdCodigo.innerText;
   inputNombre.value = tdNombre.innerText;
   inputCantidad.value = tdCantidad.innerText;
   inputPrecio.value = tdPrecio.innerText;
   inputCategoria.value = tr.dataset.categoria;

   currentRow = tr;

    console.log(celdas);
}

/**
 * 
 * @param {Event} event 
 */
function onDelete(event){
    event.preventDefault();
    /** @type {HTMLAnchorElement} */
    const anchor = event.currentTarget; /* referencia a fila a eliminar*/
    const tr = anchor.parentElement.parentElement.parentElement;
    tbody.removeChild(tr);
    console.log(anchor);
}