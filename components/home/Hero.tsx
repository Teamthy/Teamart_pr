'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Camera, Zap } from 'lucide-react'

export default function Hero() {
    return (
        <section className="bg-white border border-gray-200 rounded-3xl px-10 py-12 md:px-14 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                        AI-powered <br /> influencer marketing <br /> made simple.
                    </h1>
                    <p className="mt-4 text-gray-600 text-base md:text-lg max-w-lg">
                        Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors">
                            Get started
                        </button>
                        <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-colors">
                            Watch demo
                        </button>
                    </div>
                </motion.div>

                <div className="relative flex justify-center">
                    <div className="relative w-[260px] md:w-[320px] lg:w-[360px]">
                        <div className="absolute -inset-3 rounded-[40px] border border-gray-200 bg-white shadow-lg" />
                        <div className="relative rounded-[36px] overflow-hidden border border-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop"
                                alt="Teamart creator"
                                width={720}
                                height={900}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="absolute -left-12 top-20 bg-white rounded-2xl shadow-md border border-gray-200 px-4 py-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">50</div>
                            <div>
                                <p className="text-xs text-gray-500">Happy clients</p>
                                <p className="text-sm font-semibold">+1.2k this month</p>
                            </div>
                        </div>

                        <div className="absolute -right-10 top-8 bg-white rounded-full shadow-md border border-gray-200 p-2">
                            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                                <Camera size={18} />
                            </div>
                        </div>

                        <div className="absolute right-0 -bottom-6 bg-white rounded-2xl shadow-md border border-gray-200 px-4 py-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Zap size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Instant launch</p>
                                <p className="text-sm font-semibold">Ready in 24h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
