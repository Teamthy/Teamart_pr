import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative w-full h-[600px]">

            {/* Background Image */}
            <Image
                src="/hero.jpg"
                alt="hero"
                fill
                className="object-cover"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1280px] mx-auto px-6">

                    <div className="max-w-xl text-white">

                        <h1 className="text-6xl font-bold leading-tight">
                            Big Deals. <br />
                            Bigger Savings.
                        </h1>

                        <p className="mt-6 text-lg text-gray-200">
                            Discover premium products at unbeatable prices curated for
                            quality, comfort and style.
                        </p>

                        <div className="flex gap-4 mt-8">

                            <button className="bg-white text-black px-6 py-3 rounded-md font-medium">
                                Get Started
                            </button>

                            <button className="border border-white px-6 py-3 rounded-md font-medium">
                                See Demo
                            </button>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}