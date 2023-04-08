const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async(req, res) => {
    const { items, email } = req.body;                                          // Taking "items" and "email" from the API req.

    // Transforming our products data into the format in which stripe expects it to come for checkout.
    const transformedItems = items.map(item => ({
        // description: item.description,
        quantity: 1,
        price_data: {
            currency: 'INR',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                description: item.description,
                images: [item.image]
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], 
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "IN"], 
        },
        // shipping_rates: ['shr_1MtvU8SHrTPswiX0pR0u5qBR'],   
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: { 
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });


    res.status(200).json({ id: session.id })
}