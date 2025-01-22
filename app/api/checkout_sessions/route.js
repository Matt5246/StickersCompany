const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null); // Gracefully handle invalid JSON
    console.log(body);
    // if (!body || !body.lineItems) {
    //   return new Response(JSON.stringify({ error: 'Invalid request body' }), {
    //     status: 400,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // }
    const baseUrl = req.headers.origin || 'http://localhost:3000';
    console.log(baseUrl);
    const session = await stripe.checkout.sessions.create({
      customer_email: 'customer@example.com',
        submit_type: 'donate',
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US', 'PL', 'DE', 'FR', 'ES', 'IT', 'GB', 'CA', 'AU'],
        },
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1QkCJ7GhSqjflw2PJ1MfFmLw',
            quantity: 1,
          },
        ],
      mode: 'payment',
      success_url: `${baseUrl}/?success=true`,
      cancel_url: `${baseUrl}/?canceled=true`,
      automatic_tax: {enabled: true},
    });

    return new Response(null, {
      status: 303,
      headers: { 'Location': session.url },
    });
  } catch (err) {
    console.error('Stripe API Error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
