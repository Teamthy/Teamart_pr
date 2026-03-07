import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "@/components/layout/Navbar"

export const metadata = {
    title: "Teamart",
    description: "Production ready ecommerce"
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}