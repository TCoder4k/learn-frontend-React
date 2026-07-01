import { Header } from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { ProductGrid } from "./ProductGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data); // dữ liệu JSON đã được parse sẵn
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API:", err);
      });
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
