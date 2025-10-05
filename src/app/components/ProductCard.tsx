'use client'
import { ProductsType } from '@/types'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useCardStore from '../store/CardStore'
import { toast } from 'react-toastify'
const ProductCard = ({ product } : {product: ProductsType}) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0]
  })

  const {addToCart} = useCardStore()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productType.size,
      selectedColor: productType.color, 

    })
    toast.success("Product added to cart")
    
  }

  const handleProductType = ({type, value}: {type: "size" | "color", value: string}) => {
    setProductType(prev => ({
      ...prev,
      [type]: value
    }))
  }

  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
      {/* Image */}
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[2/3]">
            <Image src={product.images[productType.color]} alt={product.name} fill className='object-cover hover:scale-105 transition-all duration-300' />
          </div>
        </Link>
        {/* product details */}
        <div className="flex flex-col gap-4 p-4">
          <h1 className='font-medium'>{product.name}</h1>
          <p className='text-sm text-gray-500'>{product.shortDescription}</p>
          {/* product types */}
          <div className="flex items-center gap-4 text-xs">
            {/* Size */}
          <div className="flex flex-col gap-1">
              <span className="text-gray-500">Size</span>
              <select 
                  onChange={e => handleProductType({type:"size", value: e.target.value})} 
                  name='size' 
                  id='size' 
                  className="ring ring-gray-300 rounded-md px-2 py-1">
                {
                  product.sizes.map((size) => (
                    <option key={size} value={size}>{size.toUpperCase()}</option>
                  ))
                }
              </select>
            </div>        
              {/* color */}
            <div className="flex flex-col gap-1">
              <spna className="text-gray-500">Color</spna>
              <div className="flex item-center gap-2">
                {
                  product.colors.map((color) => (
                    <div className={`cursor-pointer border-1 ${productType.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} key={color} onClick={() => handleProductType({type: "color", value:color})} >
                      <div  className="w-[14px] h-[14px] rounded-full" style={{backgroundColor: color}} ></div>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* Price & add to card */}
          </div>
            <div className="flex items-center justify-between">
              <p className='font-medium'>${product.price.toFixed(2)}</p>
              <button onClick={handleAddToCart} className='ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2'>
                <ShoppingCart className='w-4 h-4'  />

                Add To Card
              </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
