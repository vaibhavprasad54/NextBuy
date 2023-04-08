import Image from "next/image"
import { useEffect, useState } from "react"
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";


const Product = ({ id, title, price, description, category, image }) => {
    
    const dispatch = useDispatch();

    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating, setRating] = useState(1);
    const [sameDayDelivery, setSameDayDelivery] = useState(true);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setSameDayDelivery(Math.random() < 0.5);
  }, []);

    const addItemToCart = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            sameDayDelivery
        };
        // Sending the product as an action to the REDUX STORE.
        dispatch(addToBasket(product));
    }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 px-7 py-9 sm:p-9 cursor-pointer rounded-[5px]">
        {/* Category, Image and Title */}
        <p className="absolute top-2 right-2 text-xs italic text-white bg-yellow-600 px-2 py-1 rounded-[3px]">{category}</p>
        <div className="flex items-center justify-center">
            <Image src={image} width={140} height={140}  className="object-contain w-32 h-32" />
        </div>
        <h1 className="my-3 line-clamp-1 text-sm sm:text-base">{ title }</h1>

        {/* Rating section */}
        <div className="flex">
            {Array(rating).fill().map((_, i) => (
                <StarIcon className="h-5 text-green-600" />
            ))}
            <StarIcon className="h-5 text-green-600" />
        </div>
        
        {/* Description and Price */}
        <p className="text-xs my-2 line-clamp-2 sm:text-sm text-gray-700">{ description }</p>
        <div className="mb-1 font-semibold text-base sm:text-lg">
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
        <button onClick={addItemToCart} className="mt-auto button flex items-center justify-center space-x-2"> 
            <p> Add to Cart </p>
            <ShoppingBagIcon className="h-5 text-white" /> 
        </button>
        
    </div>
  )
}

export default Product