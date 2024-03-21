import React, { CSSProperties, ReactElement, createContext } from "react";
import {
	ProcuctContextProps,
	Product,
	onChangeArgs,
} from "../../interfaces/interfaces";
import { useProduct } from "../../hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { ProductButtons, ProductImage, ProductTitle } from "./ProductElements";

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductContext = createContext({} as ProcuctContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
}: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value });
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
