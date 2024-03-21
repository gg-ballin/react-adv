import { ProductCard } from "../components/ProductCard/ProductCard";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components/ProductCard/ProductElements";
import { Product } from "../interfaces/interfaces";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

export interface ProductInCart extends Product {
	count: number;
}

export default function ShoppingPage() {
	const { onProductCountChange, products, shoppingCart } = useShoppingCart();

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
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className="bg-dark text-white"
						onChange={onProductCountChange}
						value={shoppingCart[product.id]?.count || 0}
					>
						<ProductImage
							className="custom-image"
							style={{
								boxShadow: "10px 10px 10px rgba(0 0 0 0.2)",
							}}
						/>
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>
			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						value={product.count}
						onChange={onProductCountChange}
						className="bg-dark text-white"
						style={{ width: "100px" }}
					>
						<ProductImage
							style={{
								boxShadow: "10px 10px 10px rgba(0 0 0 0.2)",
							}}
						/>
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>
			<div>
				<code>{JSON.stringify(shoppingCart, null, 5)}</code>
			</div>
		</div>
	);
}
