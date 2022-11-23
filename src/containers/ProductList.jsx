import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';
// import axios from 'axios'; // estan en el nuevo archivo del hokk 

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	// const [products, setProducts] = useState([]);

	// useEffect(async ()=>{
	// 	const response = await axios(API);  // Se paso al Hook modificado para llamarlo cuantas veces sea necesario
	// 	setProducts(response.data);
	// },[])

	// console.log(products);

	const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((element, index)=>(
					<ProductItem titulo={element.title} precio={element.price} imagen={element.images[0]} id={element.id} key={`producto-${index}`}/>  // key concatenada para que no se vaya a cruzar con otro elemento de otro array con la misma key 
				))}
			</div>
		</section>
	);
}

export default ProductList;
