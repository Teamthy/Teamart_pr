// app/api/checkout/route.ts
import { NextResponse } from 'next/server'
import { getStripe, buildLineItems } from '@/lib/stripe'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        // body.items: [{ id, name, price, quantity }]
        if (!Array.isArray(body.items) || body.items.length === 0) {
            return NextResponse.json({ error: 'No items' }, { status: 400 })
        }

        const stripe = getStripe()
        const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3001'
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: buildLineItems(body.items),
            mode: 'payment',
            success_url: `${baseUrl}/checkout?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/cart`,
        })

        return NextResponse.json({ url: session.url })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}
