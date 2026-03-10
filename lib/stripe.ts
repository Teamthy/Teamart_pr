// lib/stripe.ts
import Stripe from 'stripe'

let stripeClient: Stripe | null = null

export function getStripe() {
    if (stripeClient) return stripeClient
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
        throw new Error('STRIPE_SECRET_KEY is not set')
    }
    stripeClient = new Stripe(secretKey, { apiVersion: '2026-02-25.clover' })
    return stripeClient
}

export function buildLineItems(items: { name: string; price: number; quantity: number }[]) {
    return items.map(it => ({
        price_data: {
            currency: 'usd',
            product_data: { name: it.name },
            unit_amount: Math.round(it.price * 100)
        },
        quantity: it.quantity
    }))
}
