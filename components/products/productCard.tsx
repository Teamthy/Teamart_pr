"use client"

import { Product } from "@/types/product"
import { useCartStore } from "@/store/cartStore"

export default function ProductCard({ product }: { product: Product }) {
    const addToCart = useCartStore(state => state.addToCart)

    return (
        <div className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} />

            <h2 className="font-semibold mt-2">
                {product.name}
            </h2>

            <p>${product.price}</p>

            <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-4 py-2 mt-2"
            >
                Add to Cart
            </button>
        </div>
    )
}