import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductCard/ProductElements/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductCard/ProductElements/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductCard/ProductElements/ProductButtons";

export interface ProcuctContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: Product;
}
export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): ReactElement;
	Title: (Props: ProductTitleProps) => ReactElement;
	Image: (Props: ProductImageProps) => ReactElement;
	Buttons: (Props: ProductButtonsProps) => ReactElement;
}
