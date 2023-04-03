import Image from "next/image"
import { useState } from "react"
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";


const Product = ({ id, title, price, description, category, image }) => {

    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING               // Generating a random number between max and min ratings
    );

    const [sameDayDelivery] = useState( Math.random() < 0.5 );

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 cursor-pointer">
        {/* Category, Image and Title */}
        <p className="absolute top-2 right-2 text-xs italic text-yellow-600">{category}</p>
        <div className="flex items-center justify-center">
            <Image src={image} width={150} height={150}  className="object-contain w-36 h-36" />
        </div>
        <h1 className="my-3 line-clamp-1">{ title }</h1>

        {/* Rating section */}
        <div className="flex">
            {Array(rating).fill().map((_, i) => (
                <StarIcon className="h-5 text-green-600" />
            ))}
        </div>
        
        {/* Description and Price */}
        <p className="text-sm my-2 line-clamp-2">{ description }</p>
        <div className="mb-1 font-semibold text-lg">
            <Currency quantity={price} currency="INR" />
        </div>

        {/* Same day delivery */}
        { sameDayDelivery && (
            <div className="flex items-center space-x-2 my-2">
                <img className="w-8 h-7" src="https://cdn-icons-png.flaticon.com/512/3900/3900787.png" alt="" />
                <p className="text-xs text-gray-500">FREE- Same Day Delivery</p>
            </div>
        )}

        {/* Add Button */}
        <button className="mt-auto button flex items-center justify-center space-x-2"> 
            <p> Add to Cart </p>
        <   ShoppingBagIcon className="h-5 text-white" /> 
        </button>
        
    </div>
  )
}

export default Product