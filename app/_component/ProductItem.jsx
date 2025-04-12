'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog'

function ProductItem({ item, onAddToCart = () => {} }) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart({ ...item, quantity: parseInt(quantity) })
      setQuantity(1) // Reset quantity after adding to cart
      alert(`${item.Name} added to cart!`)
    } else {
      alert('Please select a valid quantity.')
    }
  }

  return (
    <div className='flex flex-col border-2 p-5 rounded-2xl bg-green-50 justify-center items-center hover:scale-105 transition-all ease-in-out hover:shadow-lg w-72 h-[400px]'>
      <Image
        src={item.imgLink}
        alt={item.Name}
        width={150}
        height={150}
        className='rounded-lg'
      />
      <h2 className='pb-3 pt-3 font-semibold text-center text-lg'>{item.Name}</h2>
      <p className='text-sm text-gray-600 text-center'>{item.category}
        
      </p>
      <h2 className='font-bold text-xl text-green-600'>₹{item.price}</h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className='mt-4 border-green-400 text-green-700 hover:bg-green-100'
            variant='outline'
          >
            Add to Cart
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-xl p-6 sm:p-8">
  <DialogHeader>
    <DialogTitle className="text-lg sm:text-xl font-medium">{item.Name}</DialogTitle>
  </DialogHeader>

  <div className="flex flex-col sm:flex-row gap-6 mt-4">
    {/* Image section */}
    <div className="bg-gray-100 rounded-2xl p-4 flex justify-center items-center w-full sm:w-1/2">
      <Image
        src={item.imgLink}
        alt={item.Name}
        width={150}
        height={150}
        className="object-contain"
      />
    </div>

    {/* Info section */}
    <div className="flex flex-col justify-between w-full sm:w-1/2">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">{item.Name}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {item.desc || "Crisp, juicy red apples rich in fiber and antioxidants."}
        </p>
        <h3 className="text-xl font-bold text-black mb-2">₹{item.price}</h3>
        <p className="text-sm font-semibold text-gray-800">
          Quantity ({item.quantity})
        </p>
      </div>

      <DialogFooter className="mt-4">
        <Button onClick={handleAddToCart} className="bg-black text-white hover:bg-gray-800">
          🛒 Add to Cart
        </Button>
      </DialogFooter>
    </div>
  </div>
    </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProductItem