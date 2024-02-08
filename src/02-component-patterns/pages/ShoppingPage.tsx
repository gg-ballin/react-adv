import { ProductCard } from "../components/ProductCard/ProductCard";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
} from "../components/ProductCard/ProductElements";
import "../styles/custom-styles.css";

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
				<ProductCard product={product} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title
						className="text-bold"
						title="Cafe compound 1"
						activeClass="active"
					/>
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>

				<ProductCard product={product} className="bg-dark text-white">
					<ProductImage className="custom-image" style={{
						boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
					}}/>
					<ProductTitle
						className="text-white"
						title="Cafe compound 2"
						activeClass="active"
					/>
					<ProductButtons className="custom-buttons" />
				</ProductCard>
				<ProductCard product={product} style={{backgroundColor: "#70D1FB"}} >
					<ProductImage style={{
						boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
					}}/>
					<ProductTitle style={{
						fontWeight: "bold",
					}} />
					<ProductButtons style={{
						display: "flex",
						justifyContent: 'end'
					}} />
				</ProductCard>
			</div>
		</div>
	);
}
