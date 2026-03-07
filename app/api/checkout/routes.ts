import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
    const body = await req.json()

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: body.items,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart`
    })

    return Response.json({ url: session.url })
}