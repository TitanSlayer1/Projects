"use client";
import React, { useEffect, useState } from "react";
import { getCategories } from "../FirebaseAPI";
import Link from "next/link";
import Image from "next/image";

function CategoryList({selected}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    fetchCategories();
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-green-700 font-bold text-2xl mb-4">Shop by Category</h2>
      
      <div className="flex flex-row overflow-x-auto gap-7 no-scrollbar ">
        {categories.map((category, index) => (
          <Link
            href={`/category/${category?.name}`}
            key={index}
            className={`group flex flex-col w-55 h-40  items-center justify-center rounded-xl shadow-md p-20 bg-green-50 hover:bg-green-200 transition-all duration-100 
              ${selected === category.name ? "bg-green-500" : ""
            }`}
          >
            <Image
              src={category?.imgLink}
              width={50}
              height={50}
              alt={category.name}
              className="transition-transform duration-100 group-hover:scale-130"
            />
            <h2 className="mt-5 text-xl font-bold text-green-800 text-center">
              {category?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;