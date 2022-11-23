import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext'
import AddToCartImage from '@icons/bt_add_to_cart.svg'

const ProductItem = ({titulo, precio, imagen, id }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item =>{   // El item recibe el objeto de el handleClick de la etiquta de figure, donde en el vienen titulo precio e imagen 
		// console.log(item);
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={imagen} alt={titulo} />
			<div className="product-info">
				<div>
					<p>${precio}</p>
					<p>{titulo}</p>
				</div>
				<figure onClick={() => handleClick({titulo, precio, imagen, id })}> 
					<img src={AddToCartImage} alt="agregar" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
