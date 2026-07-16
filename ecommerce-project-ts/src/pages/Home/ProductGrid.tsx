import { Products } from "./Product";
import type { LoadCart, Product } from "../../types";

interface ProductGridProps {
  products: Product[];
  loadCart: LoadCart;
}

export function ProductGrid({ products, loadCart }: ProductGridProps) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Products key={product.id} product={product} loadCart={loadCart} />
      ))}
    </div>
  );
}