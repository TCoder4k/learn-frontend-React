import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";
import type { CartItem, LoadCart, Product } from "../../types";

interface HomePageProps {
  cart: CartItem[];
  loadCart: LoadCart;
}

export function HomePage({ cart, loadCart }: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get<Product[]>("/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    }

    void fetchProducts();
  }, []);

  return (
    <>
      <title>HomePage</title>
      <Header cart={cart || []} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}