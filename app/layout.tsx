import "./globals.css"
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
                <body className="min-h-screen">
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
