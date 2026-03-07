'use client';
import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Camera } from 'lucide-react';

export default function Features() {
    return (
        <section className="py-12 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-2">
                    <ShieldCheck className="text-emerald-400" size={28} />
                    <h3 className="text-lg font-bold">Secure Stripe Payments</h3>
                    <p className="text-gray-400 text-sm">Encrypted payments via Stripe.</p>
                </div>
                <div className="space-y-2">
                    <Truck className="text-sky-400" size={28} />
                    <h3 className="text-lg font-bold">Global Fast Shipping</h3>
                    <p className="text-gray-400 text-sm">Edge-optimized delivery.</p>
                </div>
                <div className="space-y-2">
                    <RotateCcw className="text-amber-400" size={28} />
                    <h3 className="text-lg font-bold">Easy Returns</h3>
                    <p className="text-gray-400 text-sm">30-day returns policy.</p>
                </div>
                <div className="space-y-2">
                    <Camera className="text-rose-400" size={28} />
                    <h3 className="text-lg font-bold">Vision Try-On</h3>
                    <p className="text-gray-400 text-sm">Try before you buy with Vision AI.</p>
                </div>
            </div>
        </section>
    );
}
