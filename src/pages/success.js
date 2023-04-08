import { useRouter } from "next/router"
import Header from "../components/Header"
import {CheckCircleIcon} from "@heroicons/react/24/solid"
import { getSession } from "next-auth/react";

function success() {

  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg h-[85vh] mx-auto flex items-center justify-center">
            <div className="flex flex-col p-10 bg-white">
                <div className="flex items-center justify-center space-x-2 mb-5">
                    <img className="h-10" src="https://i.ibb.co/0V363RY/5290058.png" alt="" />
                    <h1 className="text-xl sm:text-2xl text-green-700 font-bold">Your order has been confirmed!</h1>
                    <img className="h-8 pl-2" src="https://i.ibb.co/WBnqVLS/fast-delivery.png" alt="" />
                </div>
                <p className="text-sm sm:text-base text-center text-gray-600 px-12">Thank you for shopping with us, we'll send a confirmation email once the order is shipped, to check orders and order details, click the link below!</p>
                <button onClick={() => router.push('/orders')} className="myOrdersButton mt-8">Go to My Orders</button>
            </div>
        </main>
    </div>
  )
}

export default success


// SERVER-SIDE-RENDERING USING NEXTJS
export async function getServerSideProps(context) {

  const session = await getSession(context);

  return{ props: {                
      session
    } }
}