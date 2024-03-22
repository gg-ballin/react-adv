import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductCard/ProductElements/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductCard/ProductElements/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductCard/ProductElements/ProductButtons";

export interface Product {
	id: string;
	title: string;
	img?: string;
}
export interface ProductContextProps {
	counter: number;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): ReactElement;
	Title: (Props: ProductTitleProps) => ReactElement;
	Image: (Props: ProductImageProps) => ReactElement;
	Buttons: (Props: ProductButtonsProps) => ReactElement;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;
	increaseBy: (value: number) => void;
	reset: () => void;
}
