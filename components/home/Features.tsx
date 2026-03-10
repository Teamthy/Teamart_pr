import { Truck, ShieldCheck, RotateCcw } from "lucide-react"

export default function Features() {
    return (
        <section className="bg-white border border-gray-200 rounded-3xl px-8 py-12 md:px-12 md:py-16">

            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Why Shop With Us
                </h2>

                <p className="mt-3 text-gray-500">
                    Enjoy a seamless shopping experience with fast delivery,
                    secure checkout, and hassle-free returns.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Fast Delivery */}
                <div className="border border-indigo-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                        <Truck size={20} />
                    </div>

                    <h3 className="mt-4 font-semibold text-gray-900">
                        Fast & Reliable Delivery
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Get your orders delivered quickly with our trusted shipping partners.
                    </p>
                </div>

                {/* Secure Payment */}
                <div className="border border-emerald-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <ShieldCheck size={20} />
                    </div>

                    <h3 className="mt-4 font-semibold text-gray-900">
                        Secure Payments
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Your transactions are protected with encrypted and secure checkout.
                    </p>
                </div>

                {/* Easy Returns */}
                <div className="border border-amber-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                        <RotateCcw size={20} />
                    </div>

                    <h3 className="mt-4 font-semibold text-gray-900">
                        Easy Returns
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                        Not satisfied? Return products easily within 30 days.
                    </p>
                </div>

            </div>

        </section>
    )
}