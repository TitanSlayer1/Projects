"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { getGroceryItems } from "../FirebaseAPI";

function ProductList({selectedCat}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getGroceryItems().then(setItems);
  }, []);

  return (
    <div className="mt-10">
      <h2 className="font-bold text-4xl text-green-700 pb-7">Popular Products</h2>
      <div className="grid grid-cols-4 gap-10">
        {selectedCat ? items.map((item, i) => selectedCat == item.type && (
          <ProductItem key={i} item={item} />
        )):
        items.map((item, i) => i <12 &&(
          <ProductItem key={i} item={item}/>  
        ))
      }
        
      </div>
    </div>
  );
}

export default ProductList;