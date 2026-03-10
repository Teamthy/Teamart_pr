export default function Footer() {
    return (
        <footer className="bg-white border-t py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white italic font-bold">T</div>
                    <span className="font-bold tracking-tighter text-xl">TEAMART</span>
                </div>
                <div className="flex gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Shipping</a>
                    <a href="#" className="hover:underline">API Docs</a>
                </div>
                <p className="text-xs text-gray-400">© {new Date().getFullYear()} Teamart Labs. Built with Next.js & Sanity.</p>
            </div>
        </footer>
    )
}
