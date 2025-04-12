import CategoryList from '@/app/_component/CategoryList'
import ProductList from '@/app/_component/ProductList'
import React from 'react'

function page({params}) {
  return (
    <div className='lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 sm:pl-5 sm:pr-5'>
      
    <CategoryList selected={params.categoryName} />
    <div className="text-green-700 font-bold text-4xl mb-4 pl-148 pt-5 ">{params.categoryName}</div>
    <ProductList selectedCat={params.categoryName} />
    </div>
  )
}

export default page