import { Button } from '@/components/ui/button'
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='h-[80px] p-5  justify-between shadow-lg flex items-center'>
      <div className='flex items-center gap-8'>
        <Image src={'/logo.png'} alt='logo' width={170} height={50} />
        <Link href={"#"} className='flex gap-2 items-center cursor-pointer border px-10 py-2 rounded-2xl bg-slate-50 hover:bg-lime-50 transition-normal'>
        <LayoutGrid className='h-5 w-5' />
        Category</Link>
        <div className='flex justify-center border rounded-2xl px-10 py-2 gap-2'>
          <Search />
          <input type='text' placeholder='Search' className='outline-none'/>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <Link href={"/checkout"} className='flex border text-md px-10 py-2 rounded-2xl gap-2 bg-white border-slate-200 hover:bg-yellow-100 transition-normal'>
        <ShoppingBag />
        Checkout</Link>
        <Link href={"/login"} className='border px-8 py-2 rounded-lg font-semibold :*: bg-white text-black hover:bg-green-400 transition-normal '>Login</Link>
      </div>
    </div>
  )
}

export default Header