import React,{ useState } from "react";

const initialState = {
    cart : [],
}

const useInitialState=()=>{
    const [state,setState]=useState(initialState);

    const addToCart =(payload)=>{
        // console.log(payload)
        setState({
            ...state,
            cart: [...state.cart, {...payload, idCart:state.cart.length+1}]
        });
    };
    console.log(state);  //Para ver que elementos hemos añadido al carrito y todos los objetos que se agregaron por medio del handleclick
   
    const removeFromCart = (payload) => {
        setState ({
            ...state,
            cart: state.cart.filter(items => items.idCart !==payload.idCart )
        }) 
    } 
    return {
        state,
        addToCart,
        removeFromCart,
    };
} 

export default useInitialState;