import { useRouter } from "next/router"
import Header from "../components/Header"
import {CheckCircleIcon} from "@heroicons/react/24/solid"

function success() {

  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg mx-auto">
            <div className="flex flex-col p-10 bg-white">
                <div className="flex items-center space-x-2 mb-5">
                    <CheckCircleIcon className="text-green-600 h-10" />
                    <h1 className="text-xl sm:text-2xl">Your order has been confirmed!</h1>
                </div>
                <p className="text-base text-gray-600 px-12">Thank you for shopping with us, we'll send a confirmation email once the order is shipped, to check orders and order details, click the link below!</p>
                <button onClick={() => router.push('/orders')} className="myOrdersButton mt-8">Go to My Orders</button>
            </div>
        </main>
    </div>
  )
}

export default success