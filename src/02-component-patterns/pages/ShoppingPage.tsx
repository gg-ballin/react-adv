import React from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components/ProductCard/ProductElements";
const product = {
	id: "1",
	title: "Coffee Mug - Card",
	img: "./coffee-mug.png",
};
export default function ShoppingPage() {
	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title="Cafe" />
                    <ProductCard.Buttons />
				</ProductCard>
                
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle title="Cafe" />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
}
