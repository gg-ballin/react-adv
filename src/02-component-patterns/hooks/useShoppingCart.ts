import { useState } from "react";
import { ProductInCart } from "../pages/ShoppingPage";
import { onChangeArgs } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{
		[key: string]: ProductInCart;
	}>({});

	const onProductCountChange = ({ count, product }: onChangeArgs) => {
		setShoppingCart((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[
				product.id
			] || { ...product, count: 0 };
			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}
			const { [product.id]: removed, ...rest } = oldShoppingCart;
			return rest;
		});
	};

	return { shoppingCart, products, onProductCountChange };
};
