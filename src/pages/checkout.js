import Image from "next/image"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);


function Checkout() {

  const items = useSelector(selectItems);                   // Pulling items from the Redux store
  const { data: session } = useSession()
  const total = useSelector(selectTotal); 

  const createCheckoutSession = async() => {
    const stripe = await stripePromise;

    // Call the backend to create a checkout session...
    const checkoutSession = await axios.post('/api/create-checkout-session',                // Making a POST request using Axios
    {
      items: items,                                                                        // Sending items and user email id as "body" of the API Req.
      email: session.user.email
    });

    //Redirect the use/customer to Stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,                           // Taking session id from data
    });

    if(result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="bg-gray-100">
        <Header />
        
        <main className="lg:flex max-w-screen-2xl mx-auto sm:px-6">
            
            <div className="flex-grow shadow-sm">
                <Image className="object-contain" src="https://i.ibb.co/DYHhHqz/Swiss-Books-1.png" width={1020} height={200} />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-xl font-semibold sm:text-2xl border-b pb-4">
                      {items.length===0 ? "You cart is empty!" : "Your Cart"}
                    </h1>
                    
                    {items.map((item, i) => (
                      <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        sameDayDelivery={item.sameDayDelivery}
                      />
                    ))}

                </div>
            </div>

            {/* Right Checkout Section */}
            <div className="flex flex-col bg-white p-10 shadow-md">
                { items.length > 0 && (
                  <>
                    <h2 className="whitespace-nowrap">Subtotal ({items.length}) items: {" "} 
                      <span className="font-bold">
                        <Currency quantity={total} currency="INR" />
                      </span>
                    </h2>

                    <button 
                      role="link"
                      onClick={createCheckoutSession}
                      disabled={!session}
                      className={`mt-2 ${!session ? 'bg-gray-500 text-sm px-2 py-2 rounded-[4px] border-gray-200 text-gray-300 cursor-not-allowed' : "checkoutButton text-base"}`}>
                      {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
                    </button>
                  </>
                )}
            </div>

        </main>
    </div>
  )
}

export default Checkout