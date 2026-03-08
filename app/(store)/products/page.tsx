// app/(store)/products/page.tsx
import ProductGrid from '@/components/products/productGrid'

export default function ProductsPage() {
    return (
        <div className="container py-8">
            <h1 className="text-2xl font-semibold mb-4">Products</h1>
            {/* server component product grid */}
            <ProductGrid />
        </div>
    )
}