'use client';
import React from 'react';

export default function SignInPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow">
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                <p className="text-sm text-gray-500">Integrate your auth provider here (Clerk, NextAuth, etc.).</p>
            </div>
        </main>
    );
}
