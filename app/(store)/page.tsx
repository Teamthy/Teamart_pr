import Hero from '@/components/home/Hero'
import Categories from '@/components/home/Categories'
import Features from '@/components/home/Features'
import ProductGrid from '@/components/products/productGrid'

export default function Home() {
    return (
        <div className="space-y-6">
            <Hero />
            <Categories />
            <ProductGrid />
            <Features />
        </div>
    )
}
