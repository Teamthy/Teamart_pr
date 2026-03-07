import './globals.css';
import React from 'react';

export const metadata = {
    title: 'Teamart',
    description: 'Vision-AI try-on ecommerce demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning className="min-h-screen bg-white font-sans text-black">
                {children}
            </body>
        </html>
    );
}
