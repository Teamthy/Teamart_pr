import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });

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
            <html lang="en" className={cn("font-sans", manrope.variable)}>
                <body className="min-h-screen">
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
