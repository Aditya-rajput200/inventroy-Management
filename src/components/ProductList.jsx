"use client"

import React, { useEffect, useState } from 'react'
import { IoMdMore } from "react-icons/io";

function ProductList() {
    const [products, setProducts] = useState([]);

    const GetProduct = async()=>{
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
       
        

    }

    async function deleteProduct(id) {
      try {
          const response = await fetch(`/api/products`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id }),
          });

          if (response.ok) {
              const deletedProduct = await response.json();
              console.log('Product deleted:', deletedProduct);
              // Update the product list by filtering out the deleted product
              setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
          } else {
              console.error('Failed to delete product:', response.statusText);
          }
      } catch (error) {
          console.error('Error deleting product:', error);
      }

     
  }


    useEffect(() => {
        GetProduct();
    }, []);
  
  return (

    <>
    <div classNameName="main bg-gray-700 shadow-sm rounded-lg">
          
     <table className="table-auto w-full">
      <thead>
     <tr classNameName='border-b'>
      <th classNameName='p-4 text-left'>Product </th>
      <th classNameName='p-4 text-left'>Price </th>
      <th classNameName='p-4 text-left'>Stock</th>
      <th classNameName='p-4 text-left'>Created At</th>
      
     </tr>
     </thead>

       {products.map((product)=>{
        return(
          <tbody key={product.id}>


            <tr className="border-b hover:bg-gray-600">
                <td className="p-4 flex items-center">
                    <img src={product.url} alt="Product Image" className="w-10 h-10 rounded mr-4"/>
                    <div>
                        <p className="font-bold">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.discription}...</p>
                    </div>
                </td>
                <td className="p-4">₹{product.price}</td>
                <td className="p-4">

                       {product.stock > 0 ? product.stock : <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full">Out of stock</span>
}                        

                 
                </td>
                <td className="p-4">
  {new Date(product.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })}
</td>
                <td className="p-4">  <IoMdMore />
                </td>
            </tr>

          </tbody>
        )
       })}
 

 
   

     </table>
       
        
    </div>
    
    </>
  )
}

export default ProductList
