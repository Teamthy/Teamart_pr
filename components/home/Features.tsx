import { Camera, RotateCcw, ShieldCheck, Truck } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <ShieldCheck className="text-emerald-400" size={32} />
                    <h3 className="text-lg font-bold">Secure Stripe Payments</h3>
                    <p className="text-gray-400 text-sm">Every transaction is encrypted and secured by industry-standard Stripe technology.</p>
                </div>
                <div className="space-y-4">
                    <Truck className="text-sky-400" size={32} />
                    <h3 className="text-lg font-bold">Global Fast Shipping</h3>
                    <p className="text-gray-400 text-sm">Vercel-optimized edge delivery ensures our storefront reaches you instantly anywhere.</p>
                </div>
                <div className="space-y-4">
                    <RotateCcw className="text-amber-400" size={32} />
                    <h3 className="text-lg font-bold">Easy Returns</h3>
                    <p className="text-gray-400 text-sm">Not happy? Send it back within 30 days for a full refund, no questions asked.</p>
                </div>
                <div className="space-y-4">
                    <Camera className="text-rose-400" size={32} />
                    <h3 className="text-lg font-bold">Vision Try-On</h3>
                    <p className="text-gray-400 text-sm">Coming soon: Use computer vision to see how items fit before you hit checkout.</p>
                </div>
            </div>
        </section>
    )
}
