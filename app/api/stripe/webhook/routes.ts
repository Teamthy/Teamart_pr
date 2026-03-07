import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' });

export async function POST(req: Request) {
    const payload = await req.text();
    const sig = (req.headers.get('stripe-signature') || '');
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

    try {
        const event = webhookSecret ? stripe.webhooks.constructEvent(payload, sig, webhookSecret) : JSON.parse(payload);
        // Handle events
        switch (event.type) {
            case 'checkout.session.completed':
                // fulfill order
                break;
            default:
                break;
        }
        return NextResponse.json({ received: true });
    } catch (err: any) {
        console.error('Webhook error', err);
        return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
    }
}
