// lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-08-16' })

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