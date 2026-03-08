import ProductCard from "./ProductCard"

const products = [
    {
        id: 1,
        name: "Minimal Desk Lamp",
        price: 89,
        image: "/products/lamp.png",
    },
    {
        id: 2,
        name: "Ergonomic Chair",
        price: 249,
        image: "/products/chair.png",
    },
    {
        id: 3,
        name: "Workspace Organizer",
        price: 39,
        image: "/products/organizer.png",
    },
]

export default function ProductGrid() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">

            <h2 className="text-3xl font-bold mb-10">
                Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </section>
    )
}