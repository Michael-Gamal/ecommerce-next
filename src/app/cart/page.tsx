"use client"

import { CartItemsType, ShippingFormInputs } from "@/types"
import { ArrowRight, Trash2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import ShoppingForm from "../components/ShoppingForm"
import PaymentForm from "../components/PaymentForm"
import Image from "next/image"
import useCardStore from "../store/CardStore"

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shopping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  }
]

const cartItems: CartItemsType = [ 
    {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 2,
    selectedSize: "m",
    selectedColor: "purple",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 2,
    selectedSize: "m",
    selectedColor: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 2,
    selectedSize: "m",
    selectedColor: "black",
  }
]

const Page = () => {

  const searchParams =  useSearchParams();
  const router = useRouter();
  const [shippingFormat, setShippingForm] = useState<ShippingFormInputs>()

  const activeStep = parseInt(searchParams.get("step") || "1");

  const {cart, removeFromCart} = useCardStore();
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* Title */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center ju gap-8 lg:gap-16">
        {
          steps.map((step) => (
            <div className={`flex items-center gap-2 border-b-2 pb-4 
              ${
                step.id === activeStep 
                ? "border-gray-800" 
                : "border-gray-400"
              }`
            } key={step.id}>
              <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center 
                ${
                  step.id === activeStep 
                  ? "bg-gray-800" 
                  : "bg-gray-400"
                }`}>{step.id}</div>
              <p className={`text-sm font-medium ${
                step.id === activeStep 
                ? "text-gray-800" 
                : "text-gray-400"
              }`}>{step.title}</p>
            </div>
          ))
        }
      </div>
      {/* Steps & Details */}
      <div className=" w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 p-8 border-gray-100 rounded-lg flex flex-col gap-8">
        {
          activeStep === 1 ? (
            cart.map((item) => (
              // Single Item
              <div className="flex items-center justify-between" 
                  key={item.id + item.selectedSize + item.selectedColor} >
                {/* Image & Details */}
                <div className="flex gap-8">
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image src={item.images[item.selectedColor]} alt={item.name} fill className="object-containe"/>
                  </div>
                  {/* Item Details */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">Quantity: {item.name}</p>
                      <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>
                      <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>

                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* Delete Button */}
                <button onClick={() => removeFromCart(item)} className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShoppingForm setShippingForm={setShippingForm} />
          ) : (
            activeStep === 3 && shippingFormat 
            ? <PaymentForm /> 
            : <p className="text-sm text-gray-500"> Please fill in the shipping form to continue </p>
        )}
        </div>
        {/* Details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 p-8 border-gray-100 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm">
                <p className=" text-gray-500">Subtotal</p>
                <p className="font-medium">
                  ${  
                    cart.reduce(
                      (acc,item) => acc + item.price * item.quantity, 0
                    ).toFixed(2)
                  }
                </p>
              </div>
                <div className="flex justify-between text-sm">
                <p className=" text-gray-500">Discount(10%)</p>
                <p className="font-medium">
                  $10
                </p>
              </div>
              <div className="flex justify-between text-sm">
                <p className=" text-gray-500">Shopping Fee</p>
                <p className="font-medium">
                  $10
                </p>
              </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between ">
                <p className=" text-gray-500 font-semibold">Total</p>
                <p className="font-medium">
                  ${
                    cart.reduce(
                      (acc,item) => acc + item.price * item.quantity, 0
                    ).toFixed(2)
                  }
                </p>
              </div>
          </div>
            {
              activeStep === 1 && (
                <button onClick={() => router.push("/cart?step=2", {scroll: false})} className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                  Continue
                  <ArrowRight className="w-3 h-3" />
                </button>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default Page
