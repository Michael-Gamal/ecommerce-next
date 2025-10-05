import {z} from 'zod';
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
};
export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
    quantity: number;
    selectedSize: string;
    selectedColor: string;
};
export type CartItemsType = CartItemType[];
export const ShippingFormSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    phone: z.string().min(7, {message: "Phone number must be between 7 and 15 digits"})
    .min(7, {message: "Phone number must be between 7 and 10 digits"})
    .max(15, {message: "Phone number must be between 7 and 10 digits"})
    .regex(/^[0-9]+$/, {message: "Phone number must contain only digits"}),
    address: z.string().min(1, {message: "Address is required"}),
    city: z.string().min(1, {message: "City is required"}),
})

export type ShippingFormInputs = z.infer<typeof ShippingFormSchema>;

export const PaymentFormSchema = z.object({
    cardHolder: z.string().min(1, {message: "Card Holder is required"}),
    cardNumber: z.string()
    .min(16, {message: "Card number must be 16 digits"})
    .max(16, {message: "Card number must be 16 digits"}),
    expirationDate: z.string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {message: "Expiration date must be in MM/YY format"}),
    cvv: z.string().min(3, {message: "City is required"}).max(3, {message: "City is required"}),
})

export type PaymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
}

export type CartStoreActionsType = {
    addToCart: (product:CartItemType) => void;
    removeFromCart: (product:CartItemType) => void;
    clearCart: () => void;
}