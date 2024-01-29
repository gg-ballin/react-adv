import { createContext } from "react";
import { Product, ProductCardProps } from "../../interfaces/interfaces";
import { useProduct } from "../../hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { ProductButtons, ProductImage, ProductTitle } from "./ProductElements";

export interface ProcuctContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}

export const ProductContext = createContext({} as ProcuctContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { counter, increaseBy } = useProduct();

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={styles.productCard}>
				{children}
			</div>
		</Provider>
	);
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
