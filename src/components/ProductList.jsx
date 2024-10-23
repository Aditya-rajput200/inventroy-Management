"use client"

import React, { useEffect, useState } from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);
    const GetProduct = async()=>{
        const responce = await fetch('http://localhost:3000/api/products');
        const data = await responce.json();
        setProducts(data);
        console.log(data);

    }
    useEffect(()=>{
        GetProduct();
    },[])
  return (
    // <div>
    //   {products.map((data)=>{
    //     return(
    //         <div key={data.id}>
    //             <h1>{data.name}</h1>
    //             <p>{data.price}</p>
    //             <p>{data.quantity}</p>
    //             <p>
                  
    //                     <img src={data.url} alt={data.name} />
                    
    //             </p>
    //             <p>{data.discription}</p>
    //         </div>
    //     )
    //   })}
    // </div>
    <>
    <div className="main">
        
    </div>
    
    </>
  )
}

export default ProductList
