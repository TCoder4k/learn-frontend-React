import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data); // dữ liệu JSON đã được parse sẵn
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <title>HomePage</title>
      <Header cart={cart || []} />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
