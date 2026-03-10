'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Camera, Zap } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative h-[85vh] w-full bg-[#f3f4f6] overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop"
                    alt="Hero"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <span className="inline-block bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6 rounded">
                        Summer Drop 2025
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black text-black leading-none mb-6">
                        STYLE MEETS <br />{' '}
                        <span
                            className="text-transparent border-t-2 border-b-2 border-black px-2 inline-block py-1"
                            style={{ WebkitTextStroke: '1px black' }}
                        >
                            PRECISION
                        </span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 max-w-lg">
                        Experience the future of fashion with Teamart. Production-ready, performance-driven, and designed for the modern creator.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                            Shop Collection <ArrowRight size={20} />
                        </button>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold border border-black/10 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                            <Camera size={20} /> Try-On Virtual (Beta)
                        </button>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-10 right-10 flex flex-col gap-4">
                <div className="bg-white/80 backdrop-blur p-4 rounded-2xl border border-white shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                        <Zap size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold">Fast Delivery</p>
                        <p className="text-sm font-bold">Ships in 24 Hours</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
