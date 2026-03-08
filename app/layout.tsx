import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
    title: "Teamart",
    description: "Modern ecommerce store",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en" className={cn("font-sans", inter.variable)}>
                <body className="min-h-screen flex flex-col">

                    <Navbar />

                    <main className="flex-1">
                        {children}
                    </main>

                    <Footer />

                </body>
            </html>
        </ClerkProvider>
    )
}