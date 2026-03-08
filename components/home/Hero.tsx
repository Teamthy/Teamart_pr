// components/home/Hero.tsx
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative h-[70vh]">
            <img src="/hero.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 container h-full flex items-start">
                <div className="pt-16 max-w-lg">
                    <p className="text-sm">VISION-AI FITTING NOW LIVE</p>
                    <h1 className="text-5xl font-bold leading-tight mt-3">STYLE MEETS<br />PRECISION</h1>
                    <p className="mt-4 text-gray-700">Experience the future of fashion with Teamart. Production-ready, performance-driven, and designed for the modern creator.</p>
                    <div className="mt-6 flex gap-4">
                        <Link href="/store/products" className="px-6 py-3 bg-black text-white rounded-full">Shop Collection</Link>
                        <Link href="/(auth)/sign-in" className="px-6 py-3 border rounded-full">Start Try-On</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}