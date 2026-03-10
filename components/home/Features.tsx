import { ShieldCheck, Truck, RotateCcw } from 'lucide-react'

export default function Features() {
    return (
        <section className="bg-white border border-gray-200 rounded-3xl px-8 py-12 md:px-12 md:py-16">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Powerful Features</h2>
                <p className="mt-3 text-gray-500">
                    Everything you need to manage, track, and grow your store securely and efficiently.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-indigo-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                        <ShieldCheck size={20} />
                    </div>
                    <h3 className="mt-4 font-semibold text-gray-900">Real-Time Analytics</h3>
                    <p className="mt-2 text-sm text-gray-500">Get instant insights with live dashboards and KPIs.</p>
                </div>
                <div className="border border-emerald-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <Truck size={20} />
                    </div>
                    <h3 className="mt-4 font-semibold text-gray-900">Bank-Grade Security</h3>
                    <p className="mt-2 text-sm text-gray-500">End-to-end encryption and 2FA built in.</p>
                </div>
                <div className="border border-amber-200 rounded-2xl p-8 text-center bg-white">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                        <RotateCcw size={20} />
                    </div>
                    <h3 className="mt-4 font-semibold text-gray-900">Customizable Reports</h3>
                    <p className="mt-2 text-sm text-gray-500">Export professional reports for tax and review.</p>
                </div>
            </div>
        </section>
    )
}
