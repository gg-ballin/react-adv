import React, { CSSProperties,  createContext } from "react";
import {
	InitialValues,
	ProductContextProps,
	Product,
	onChangeArgs,
	ProductCardHandlers,
} from "../../interfaces/interfaces";
import { useProduct } from "../../hooks/useProduct";
import styles from "../../styles/styles.module.css";
import { ProductButtons, ProductImage, ProductTitle } from "./ProductElements";

export interface Props {
	product: Product;
	// children?: ReactElement | ReactElement[]; // component-compound
	children: (args: ProductCardHandlers) => JSX.Element; //state-initialization
	className?: string;
	style?: CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy, maxCount, reset, isMaxCountReached } =
		useProduct({
			onChange,
			product,
			value,
			initialValues,
		});
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				maxCount,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
