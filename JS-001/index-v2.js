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

const preloadedState = {
    producto:{},
    productos: []
};

const reducer = (state, action) => {
    if (action.type == "producto-agregado")
    {

        /**state.productos.push(action.payload);*/
        return { 
            ...state, 
            productos: [
                ...state.productos, 
                action.payload
            ]
        };
    }

    return state;
};
const store = Redux.createStore(reducer, preloadedState);
 //dispatch: enviar un action
 //getState: obtener estado actual
 //subscribe: suscribirnos a evento/ cambio de estado

 let latestState;

store.subscribe(() =>{
    //console.log("suscribe ejecutando");
    let currentState = store.getState();
    if(currentState != latestState)
    {
        latestState = currentState;
        console.log("estado: ", store.getState());
        renderTable(currentState.productos);
    }
})

function renderTable(productos)
{
   const filas = productos.map((item) => {

    const  tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.codigo}</td>
    <td>${item.nombre}</td>
    <td>${item.cantidad}</td>
    <td>${item.precio}</td>
    <td>${item.categoria}</td>
    <td>${item.total}</td>
    <td>
        <div class="btn-group">
            <a title ="Editar" href="#" onclick="onEdit(event)" class="btn btn-sm btn-outline-secondary"><i class="bi bi-pencil-square"></i></a> 
            <a title ="Eliminar" href="#" onclick="onDelete(event)" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></a>
        </div>
    </td>
    `;
    return tr;
    });

    filas.forEach(tr => {
        tbody.appendChild(tr);
    });
   
}

store.dispatch({
    type: "producto-agregado",
    payload: {
        id: 1,
        nombre: "prueba"
    }
})

store.dispatch({
    type: "producto-agregado",
    payload: {
        id: 2,
        nombre: "prueba2"
    }
})

store.dispatch({
    type: "producto-modificado",
    payload: {
        id: 2,
        nombre: "prueba2 v2"
    }
})

//console.log(store);