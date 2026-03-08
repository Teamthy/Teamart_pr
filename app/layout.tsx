import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/footer"
import { ClerkProvider } from "@clerk/nextjs"

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
            <html lang="en">
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