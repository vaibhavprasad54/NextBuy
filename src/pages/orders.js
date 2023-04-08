import React from 'react'
import Header from '../components/Header'
import { getSession, useSession } from 'next-auth/react';
import moment from "moment";
import db from '../../firebase';
import Order from '../components/Order';

function Orders({ orders }) {

    const { data: session } = useSession();
    console.log(orders);

  return (
    <div>
        <Header />

        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-xl sm:text-2xl border-b mb-2 pb-1 border-blue-400'>Your orders</h1>
            {session ? (
                <h2> {orders.length} Orders </h2>
            ):(
                <h2>Please sign in to view orders</h2>
            )}

            <div className='mt-5 space-y-4'>
                {orders?.map(({  id, amount, items, timestamp, images  }
                ) => (
                    <Order
                        key={id}
                        id={id}
                        amount={amount}
                        items={items}
                        timestamp={timestamp}
                        images={images}
                    />
                ))}
            </div>
        </main>
    </div>
  )
}

export default Orders

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // Get logged in users's credentials
    const session = await getSession(context);
    if(!session) {
        return {
            props: {},
        };
    }

    // Fetching order details from Firestore Database 
    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders')
                         .orderBy('timestamp', 'desc').get();

    // Fetching order details from stripe by mapping through all the array items in firestore and finding corresponding stripe info.
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            // amountShipping: order.data().amount_shiping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),                  // Converting date into required format using "moment" library
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {                // An async call that returns the info and then we access the data and mapping it to "items" key
                    limit: 100,
                })
            ).data,
        }))
    )

    return {
        props: {
            orders,
        }
    }
}