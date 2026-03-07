'use client';
import React from 'react';
import AppShell from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import AppContent from '@/components/AppContent';

export default function StoreHome() {
    return (
        <>
            <AppShell />
            <main className="pt-20">
                <Hero />
                <AppContent />
                <Features />
            </main>
        </>
    );
}
