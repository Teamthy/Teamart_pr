type Product = {
    id: number
    name: string
    price: number
    image: string
}

export default function ProductCard({ product }: { product: Product }) {

    return (
        <div className="border rounded-2xl overflow-hidden hover:shadow-lg transition">

            <div className="h-56 bg-gray-100 flex items-center justify-center">
                <span className="text-4xl">📦</span>
            </div>

            <div className="p-5">

                <h3 className="font-semibold text-lg">
                    {product.name}
                </h3>

                <p className="text-indigo-600 font-bold mt-2">
                    ${product.price}
                </p>

            </div>

        </div>
    )
}