import AddProduct from "@/components/AddProduct";

import NavBar from "@/components/NavBar";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {

  return (
    <div className="p-5">
      <NavBar/>
      <AddProduct/>
      <ProductList/>
  
    </div>
  );
}
