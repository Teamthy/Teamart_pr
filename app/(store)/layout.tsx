import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#f6f7fb]">
            <div className="max-w-6xl mx-auto px-6 py-6">
                <Navbar />
                <main className="mt-6">{children}</main>
                <Footer />
            </div>
            <CartDrawer />
        </div>
    )
}
