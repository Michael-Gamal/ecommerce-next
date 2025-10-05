import { ShippingFormInputs, ShippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ShoppingForm = ({setShippingForm}:{setShippingForm:(data:ShippingFormInputs) => void}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<ShippingFormInputs>({
    resolver: zodResolver(ShippingFormSchema),
  });

  const router = useRouter();


  const handleShippingForm:SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", {scroll: false});
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)} >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">Name</label>
        <input type="text" id="name" placeholder="John Doe" {...register("name")} className="border-b border-gray-200 py-2 outline-none text-sm" />
        {errors?.name && <span className="text-xs text-red-500">{errors?.name.message}</span>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">Email</label>
        <input type="text" id="email" placeholder="JohnDoe@gmail.com" {...register("email")} className="border-b border-gray-200 py-2 outline-none text-sm" />
        {errors?.email && <span className="text-xs text-red-500">{errors?.email.message}</span>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">Phone Number</label>
        <input type="phone" id="phone" placeholder="012345678" {...register("phone")} className="border-b border-gray-200 py-2 outline-none text-sm" />
        {errors?.phone && <span className="text-xs text-red-500">{errors?.phone.message}</span>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">Address</label>
        <input type="text" id="address" placeholder="John 123" {...register("address")} className="border-b border-gray-200 py-2 outline-none text-sm" />
        {errors?.address && <span className="text-xs text-red-500">{errors?.address.message}</span>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">City</label>
        <input type="text" id="city" placeholder="Joon" {...register("city")} className="border-b border-gray-200 py-2 outline-none text-sm" />
        {errors?.city && <span className="text-xs text-red-500">{errors?.city.message}</span>}
      </div>
      <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  )
}

export default ShoppingForm
