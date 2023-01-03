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



// const addToCart = () => {
        
//     setContexto({...contexto.cart, carrito: true, cart: [{adultos: cantidadAdulto, niños: contadorChild, tipoHabitacion: tipoHabitacion, precio: parseInt(precio) * contadorAdultos + parseInt(informacionChild.Amount) * contadorChild, tipoMoneda: tipoMoneda}]})
    
//     //   setCarrito({
//     //         cart: [...carrito.cart, {adultos: cantidadAdulto, niños: contadorChild, tipoHabitacion: tipoHabitacion, precio: parseInt(precio) * contadorAdultos + parseInt(precio) * contadorChild, tipoMoneda: tipoMoneda}],
//     //       });
//         console.log(carrito);
//         console.log(contexto.cart);
// };


// /* 16 */ const [cotizacion, setCotizacion] = useState([]);

// /* 27 */ const handleCotizar = () => {
//     setContexto({ ...contexto, /* informacionDetalle: true, */ personas: personas, tipoHabitacion: tipoHabitacion, precio: parseInt(precio) * cantidadAdulto, tipoMoneda: tipoMoneda });
// }

// const addToCart = () => {
    
//     setCotizacion(...cotizacion, {adultos: cantidadAdulto, niños: contadorChild, tipoHabitacion: tipoHabitacion, precio: precioTotal, tipoMoneda: tipoMoneda})
//     console.log(cotizacion)
//     setContexto({...contexto, cotizacion})
//     console.log(contexto);
    
// };

// /* 52 */ const precioTotal = `${formatterPeso.format((parseInt(precio) * cantidadAdulto) +
//     (informacionChild !== undefined && informacionChild ? (parseInt(informacionChild?.Amount) * contadorChild) : 0) +
//     (informacionAdultoAdicional !== undefined && informacionAdultoAdicional ? (parseInt(informacionAdultoAdicional.Amount) * nochesAdicionales * cantidadAdulto) : 0) +
//     (informacionChildAdicional !== undefined && informacionChildAdicional ? (parseInt(informacionChildAdicional.Amount) * nochesAdicionales * cantidadChild) : 0))} ${tipoMoneda}`

// /* 165 */ <button className='btn-secondary_submit px-14 mb-4' onClick={addToCart}>Agregar</button>






/* 14 */ // console.log(informacionPackages); acomodacion


