import { ProductCard } from "../components/ProductCard/ProductCard";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components/ProductCard/ProductElements";
import { products } from "../data/products";

const product = products[0];

export default function ShoppingPage() {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCard
				key={product.id}
				product={product}
				initialValues={{ count: 4, maxCount: 10 }}
			>
				{({
					reset,
					increaseBy,
					isMaxCountReached,
					count,
					maxCount,
				}) => (
					<>
						<ProductImage />
						<ProductTitle />
						<ProductButtons />
					</>
				)}
			</ProductCard>
		</div>
	);
}
