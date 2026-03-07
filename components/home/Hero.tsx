'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[70vh] w-full bg-[#f3f4f6] overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Hero" />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
                    <span className="inline-block bg-black text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-6 rounded">Vision-AI Fitting Now Live</span>
                    <h1 className="text-4xl md:text-6xl font-black text-black leading-none mb-6">
                        STYLE MEETS <br /> <span className="text-transparent border-t-2 border-b-2 border-black px-2 inline-block py-1" style={{ WebkitTextStroke: '1px black' }}>PRECISION</span>
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 max-w-lg">Experience the future of fashion with Teamart. Production-ready, performance-driven, and designed for the modern creator.</p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">Shop Collection <ArrowRight size={18} /></button>
                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold border border-black/10 flex items-center gap-2 hover:bg-gray-50 transition-colors"><Camera size={18} /> Start Try-On</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
