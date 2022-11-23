import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@context/AppContext';

import close from '@icons/icon_close.png';

const OrderItem = ( {item} ) => {
	const { removeFromCart }= useContext (AppContext);

	const handleRemove = item =>{
		removeFromCart(item);
	} 

	return (
		<div className="OrderItem">
			<figure>
				<img src={item.imagen} alt={item.titulo} />
			</figure>
			<p>{item.titulo}</p>
			<p>${item.precio}</p>
			<img src={close} alt="close" onClick={()=>handleRemove(item)} className="removeItem" />
		</div>
	);
}

export default OrderItem;
