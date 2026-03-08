// app/api/checkout/route.ts
import { NextResponse } from 'next/server'
import { stripe, buildLineItems } from '@/lib/stripe'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        // body.items: [{ id, name, price, quantity }]
        if (!Array.isArray(body.items) || body.items.length === 0) {
            return NextResponse.json({ error: 'No items' }, { status: 400 })
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: buildLineItems(body.items),
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/store/checkout?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/store/cart`,
        })

        return NextResponse.json({ url: session.url })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}