// components/home/Features.tsx
export default function Features() {
    return (
        <section className="container py-10">
            <h3 className="text-xl font-semibold mb-4">Why Teamart</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border rounded">Fast checkout • Stripe</div>
                <div className="p-4 border rounded">Real-time content • Sanity</div>
                <div className="p-4 border rounded">Try-on (future) • Vision-AI</div>
            </div>
        </section>
    )
}