
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
    }

    
})

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