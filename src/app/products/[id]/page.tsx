import ProductInteraction from "@/app/components/ProductInteraction";
import { CartItemType } from "@/types"
import Image from "next/image";


const Product: CartItemType = {
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
  }


export const generateMetadata = async ({
  params
}: {
  params: {id:string};
}) => {
  return {
    title: Product.name,
    describe: Product.description,
  }
}



const page = async ({params,searchParams}:{params:Promise<{id:string}>;searchParams:Promise<{color:string; size:string}>}) => {
  const {size,color} = await searchParams;
  const selectedColor = color || Product.colors[0] as string;
  const selectedSize = size || Product.sizes[0] as string;
  
    return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
        <div className="w-full lg:w-5/12 relative aspect-[2/3]">
            <Image 
                src={Product.images[selectedColor]} 
                alt={Product.name} 
                fill 
                className="object-content rounded-md" 
            />
        </div>
        {/* Details */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
            <h1 className="text-2xl font-medium">{Product.name}</h1>
            <p className="text-gray-500">{Product.description}</p>
            <p className="text-2xl font-semibld">${Product.price.toFixed(2)}</p>
            <ProductInteraction product={Product} selectedSize={selectedSize} selectedColor={selectedColor} />
            {/* card info */}
            <div className="flex items-center gap-2 mt-4">
                <Image src="/klarna.png" alt="Klarna Logo" width={50} height={25} className="rounded-md" />
                <Image src="/cards.png" alt="cards Logo" width={50} height={25} className="rounded-md" />
                <Image src="/stripe.png" alt="stripe Logo" width={50} height={25} className="rounded-md" />
            </div>
            <p className="text-gray-500 text-xs">
                By cliking pay now, You agree our <span className="underline hover:text-black">
                    Terms and Conditions and Privacy Policy
                </span>. our authorization us to selcted payment method for the total amount shown. All sales are subjuct to our return and 
                <span className="underline hover:text-black">Refund Policies</span>
            </p>
        </div>
    </div>
  )
}

export default page
