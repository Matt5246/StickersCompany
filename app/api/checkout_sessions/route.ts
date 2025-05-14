import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
import { NextResponse } from "next/server";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY || '');



export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('route res:', body);
    if (!body) {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const baseUrl = req.headers.get('origin') || 'http://localhost:3000';

    const { cartItems, email }: { cartItems: { name: string; amount: number; quantity: number }[]; email: string } = body;

    const line_items = cartItems.map((item: { name: string; amount: number; quantity: number }) => {
      const product = productData.find((product) => product.Name === item.name && parseFloat(product.Amount) === item.amount / item.quantity);
      if (!product) {
        throw new Error(`Product not found for item: ${item.name}`);
      }
      return {
        price: product["Price ID"],
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      submit_type: 'donate',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['PL'],
      },
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
      automatic_tax: { enabled: true },
    });

    
    // return new NextResponse(JSON.stringify({ url: session.url }), {
    //   status: 200,
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // Send the URL to the frontend
    const response = new NextResponse(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

    (async () => {
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'stickersschop@gmail.com',
        subject: 'New customer order',
        html: `
          <h1>New Checkout Session Created</h1>
          <p><strong>Email:</strong> ${body.email}</p>
          <h2>Cart Items:</h2>
          <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Shape</th>
            <th>Quantity</th>
            <th>Custom Size</th>
            <th>Image</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          ${body.cartItems.map((item: { id: string; name: string; amount: number; shape: string; quantity: number; customSize: string; image: string; size: string }) => `
            <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.amount}</td>
          <td>${item.shape}</td>
          <td>${item.quantity}</td>
          <td>${item.customSize}</td>
          <td><img src="${item.image}" alt="${item.name}" style="max-width: 50px; max-height: 50px;" /></td>
          <td>${item.size}</td>
            </tr>
          `).join('')}
        </tbody>
          </table>
        `
      });
    })();
   
    return response;

  } catch (err: unknown) {
    console.error('Stripe API Error:', err);
    return new NextResponse(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

const productData = [
  {
    "Price ID": "price_1R95cjQtoFX6E6hK5m0aldr5",
    "Product ID": "prod_S3C0duzieiuDYY",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:17",
    "Amount": "6.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3C0duzieiuDYY",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:17",
    "Description": "Naklejka do 8cm, 25szt."
  },
  {
    "Price ID": "price_1R95cGQtoFX6E6hKamtYANf0",
    "Product ID": "prod_S3C0Q72lkTRaUT",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:16",
    "Amount": "7.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3C0Q72lkTRaUT",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:16",
    "Description": "Naklejka do 8cm, 10szt."
  },
  {
    "Price ID": "price_1R95bmQtoFX6E6hKlPVj4yRL",
    "Product ID": "prod_S3BzBUZWaTS2p3",
    "Product Name": "Duża naklejka",
    "Created (UTC)": "2025-04-01 14:16",
    "Amount": "8.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BzBUZWaTS2p3",
    "Name": "Duża naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:16",
    "Description": "Naklejka do 8cm, 5szt."
  },
  {
    "Price ID": "price_1R95avQtoFX6E6hKI1N7a41y",
    "Product ID": "prod_S3ByvsyiFyLXrc",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:15",
    "Amount": "2.70",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3ByvsyiFyLXrc",
    "Name": "Średnia naklajka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:15",
    "Description": "Naklejka do 6cm, 50szt."
  },
  {
    "Price ID": "price_1R95a4QtoFX6E6hKw3ceEdus",
    "Product ID": "prod_S3By3fc8zZyTTo",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:14",
    "Amount": "3.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3By3fc8zZyTTo",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:14",
    "Description": "Naklejka do 6cm, 25szt."
  },
  {
    "Price ID": "price_1R95Z7QtoFX6E6hKOczI0Lny",
    "Product ID": "prod_S3BxSrd91h0AOa",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:13",
    "Amount": "3.50",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BxSrd91h0AOa",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:13",
    "Description": "Naklejka do 6cm, 10szt."
  },
  {
    "Price ID": "price_1R95YRQtoFX6E6hKIzsODDL4",
    "Product ID": "prod_S3BwJ2gxW94VJF",
    "Product Name": "Średnia naklejka",
    "Created (UTC)": "2025-04-01 14:12",
    "Amount": "3.70",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BwJ2gxW94VJF",
    "Name": "Średnia naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:12",
    "Description": "Naklejka do 6cm, 5szt."
  },
  {
    "Price ID": "price_1R95PsQtoFX6E6hKEY9pp9K2",
    "Product ID": "prod_S3BnzaUYBmseZe",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:03",
    "Amount": "1.20",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BnzaUYBmseZe",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:03",
    "Description": "Naklejka do 3cm, 100szt."
  },
  {
    "Price ID": "price_1R95POQtoFX6E6hKbetBNmh1",
    "Product ID": "prod_S3Bm6PVTWf5DjG",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:03",
    "Amount": "1.40",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3Bm6PVTWf5DjG",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:03",
    "Description": "Naklejka do 3cm, 50szt."
  },
  {
    "Price ID": "price_1R95OwQtoFX6E6hKrPAYa055",
    "Product ID": "prod_S3BmqkqTOswmBR",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:02",
    "Amount": "2.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BmqkqTOswmBR",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:02",
    "Description": "Naklejka do 3cm, 25szt."
  },
  {
    "Price ID": "price_1R95O0QtoFX6E6hKzgK94h7d",
    "Product ID": "prod_S3BlWpks19D2Wm",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 14:01",
    "Amount": "2.50",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BlWpks19D2Wm",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 14:01",
    "Description": "Naklejka do 3cm, 10szt."
  },
  {
    "Price ID": "price_1R95IaQtoFX6E6hKhpwLkS0k",
    "Product ID": "prod_S3BflBzWW5Ewju",
    "Product Name": "Mała naklejka",
    "Created (UTC)": "2025-04-01 13:56",
    "Amount": "3.00",
    "Currency": "pln",
    "Billing Scheme": "per_unit",
    "Tax Behavior": "unspecified",
    "id": "prod_S3BflBzWW5Ewju",
    "Name": "Mała naklejka",
    "Type": "service",
    "Date (UTC)": "2025-04-01 13:56",
    "Description": "Naklejka do 3cm, 5szt."
  }
]
