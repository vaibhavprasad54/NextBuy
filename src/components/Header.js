import Image from "next/image"
import { MagnifyingGlassIcon, Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

    const { data: session } = useSession()                                  //Accessing the session state using "useSession" hook.
    const router = useRouter();                                             // This gives us the router object
    const items = useSelector(selectItems);                                 // Fetching items in the basket from Global store using selector

  return (
    <header>
        {/* Top Nav */}
        <div className="flex items-center bg-[#0d1b31] flex-grow py-2 px-5 sm:px-10">

            <div className="m-1 flex items-center flex-grow">
                <Image onClick={() => router.push("/")} src="https://i.ibb.co/hY1PwXm/Nextbuy-1-removebg-preview.png" width={130} height={20} 
                    className="object-contain cursor-pointer mr-3 w-32" />
            </div>

            {/* <div className="hidden sm:flex items-center h-10 bg-blue-300 hover:bg-blue-400 rounded-md flex-grow cursor-pointer">
                <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4" />
                <MagnifyingGlassIcon className="h-12 p-4" />
            </div> */}

            <div className="text-white flex items-center text-xs space-x-3 sm:space-x-10 ml-6 mr-2 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="cursor-pointer link">                 {/* If there is nothing in session, sign in, otherwise sign out */}
                    <p className="md:text-sm">
                        {session ? `Hello,` : "Welcome,"}              {/* Displaying user name from database */} 
                    </p>
                    <p className="font-bold md:text-base">
                        {session ? `${session.user.name}` : "Sign in"}
                    </p>
                </div>
                <div onClick={() => router.push('/orders')} className="link">
                    <p className="md:text-sm">Returns</p>
                    <p className="md:text-sm">& Orders</p>
                </div>
                <div onClick={() => router.push("/checkout")} className="relative flex items-center link">
                    <span className="absolute -top-1 right-0 md:right-6 h-4 w-4 bg-blue-300 text-black rounded-full text-center font-bold">
                        {items.length} 
                    </span>
                    <ShoppingCartIcon className="h-6 sm:h-8" />
                    <p className="hidden md:inline font-bold md:text-sm">Cart</p>
                </div>
            </div>
        </div>

        {/* Bottom Nav */}
        {/* <div className="flex items-center p-2 pl-6 space-x-3 bg-[#ddbcdc] text-sm">
            <p className="link flex items-center">
            <Bars3Icon className="h-6 mr-1" />
                All
            </p>
            <p className="link">Today's Deals</p>
            <p className="link">Gift Cards</p>
            <p className="link">Pet Supplies</p>
            <p className="link hidden lg:inline-flex">Electronics</p>
            <p className="link hidden lg:inline-flex">Baby</p>
            <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            <p className="link hidden lg:inline-flex">Amazon Business</p>
            
    
        </div> */}
    </header>
  )
}

export default Header
