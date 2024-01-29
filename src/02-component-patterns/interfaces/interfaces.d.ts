export interface ProductCardProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): ReactElement;
	Title: ({ title }: { title: string }) => ReactElement;
	Image: ({ img }: { img?: string }) => ReactElement;
	Buttons: () => ReactElement;
}
