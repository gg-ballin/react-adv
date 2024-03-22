import { useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";
import { products } from "../data/products";

interface ProductInCart extends Product {
	count: number;
}

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCart) => {
			if (count === 0) {
				const { [product.id]: removed, ...rest } = oldShoppingCart;
				return rest;
			}
			return {
				...oldShoppingCart,
				[product.id]: {
					...product,
					count,
				},
			};
		});
	};

	return { shoppingCart, products, onProductCountChange };
};
