import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('route res:',body);
    if (!body) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const baseUrl = req.headers.get('origin') || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      customer_email: body.email,
      submit_type: 'donate',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['PL'],
      },
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1QqgJXGbYVPFwzc50BHUyAjb',
          quantity: 1,
        },

      ],
      mode: 'payment',
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
      automatic_tax: { enabled: true },
    });
    return new NextResponse(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Stripe API Error:', err);
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
