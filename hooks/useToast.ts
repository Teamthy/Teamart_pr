// hooks/useToast.ts
'use client'
import { useState } from 'react'

export default function useToast() {
    const [message, setMessage] = useState<string | null>(null)
    function show(msg: string, ms = 3000) {
        setMessage(msg)
        setTimeout(() => setMessage(null), ms)
    }
    return { message, show }
}