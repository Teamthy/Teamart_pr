import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' });

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { items, successUrl, cancelUrl } = body;

        // Build line items from client payload (validate on server in production)
        const line_items = items.map((i: any) => ({
            price_data: {
                currency: 'usd',
                product_data: { name: i.name },
                unit_amount: Math.round(i.price * 100)
            },
            quantity: i.quantity
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/success`,
            cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/cart`
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
