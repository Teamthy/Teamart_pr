import Image from 'next/image'

const categories = [
    {
        title: 'Electronics',
        subtitle: 'Latest tech essentials',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop',
    },
    {
        title: 'Fashion',
        subtitle: 'Style that defines you',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop',
    },
    {
        title: 'Home & Living',
        subtitle: 'Comfort meets design',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop',
    },
    {
        title: 'Fitness',
        subtitle: 'Gear for your best self',
        image: 'https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=600&auto=format&fit=crop',
    },
    {
        title: 'Accessories',
        subtitle: 'Small things that matter',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    },
]

export default function Categories() {
    return (
        <section className="bg-white border border-gray-200 rounded-3xl px-8 py-12 md:px-12 md:py-16">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Category</h2>
                <p className="mt-3 text-gray-500">
                    Discover premium products at unbeatable prices curated for quality, comfort and style.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-6">
                {categories.map((cat) => (
                    <div key={cat.title} className="text-center">
                        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center justify-center h-28">
                            <Image src={cat.image} alt={cat.title} width={120} height={90} className="object-contain mix-blend-multiply" />
                        </div>
                        <p className="mt-4 text-sm font-semibold text-gray-900">{cat.title}</p>
                        <p className="text-xs text-gray-500">{cat.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
