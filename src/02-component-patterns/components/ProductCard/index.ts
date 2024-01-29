import { ProductCardHOCProps } from "../../interfaces/interfaces";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons, ProductImage, ProductTitle } from "./ProductElements";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});

export default ProductCard;
