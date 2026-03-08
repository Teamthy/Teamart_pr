// app/api/stripe/webhook/route.ts
import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export const runtime = 'edge' // optional

export async function POST(req: Request) {
    const sig = req.headers.get('stripe-signature') || ''
    const body = await req.arrayBuffer()
    try {
        const event = stripe.webhooks.constructEvent(Buffer.from(body), sig, process.env.STRIPE_WEBHOOK_SECRET!)
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            // TODO: fulfill order (create order record in DB, email receipt, decrement stock in Sanity)
            console.log('Checkout completed:', session)
        }
        return NextResponse.json({ received: true })
    } catch (err) {
        console.error('Webhook error:', err)
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
    }
}