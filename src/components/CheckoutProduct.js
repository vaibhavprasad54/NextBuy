import { StarIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
// import CurrencyRupeeIcon from "@heroicons/react/24/solid"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function CheckoutProduct({ id, title, price, rating, description, category, image, sameDayDelivery }) {

    const dispatch = useDispatch();

    const addItemToCart = () => {
        const product = {
            id, title, price, rating, description, category, image, sameDayDelivery
        }

        // Push item into redux store
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        
        dispatch(removeFromBasket({ id }));                             // Providing product id to action in order to remove it from cart/redux.
    }

  return (
    <div className="sm:grid sm:grid-cols-5 grid-cols-3">
        <div className="flex items-center justify-center">
            <Image className="object-contain ml-4" src={image} height={120} width={120} />
        </div>

        <div className="sm:col-span-3 mx-5 flex flex-col items-center sm:items-start">
            <p className="font-semibold text-lg mt-2 sm:mt-auto text-center sm:text-left">{title}</p>
            <div className="flex">
            {Array(rating).fill().map((_, i) => (
                <StarIcon key={i} className="h-5 text-green-600" />
            ))}
            </div>
            <p className="text xs my-2 line-clamp-3 text-center sm:text-left">{description}</p>
            <div className="text-lg font-semibold">
                <Currency quantity={price} currency="INR"  />
            </div>
            { sameDayDelivery && (
                <div className="flex items-center space-x-2">
                   <img loading="lazy" className="w-8 h-7" src="https://cdn-icons-png.flaticon.com/512/3900/3900787.png" alt="" />
                   <p className="text-xs text-gray-500">FREE- Same Day Delivery</p>
                </div>
            ) }
        </div>

        <div className="flex flex-col space-y-2 my-auto mt-2 justify-self-start ml-5 whitespace-nowrap">
            <button onClick={addItemToCart} className="button mt-auto">Add to Cart</button>
            <button onClick={removeItemFromBasket} className="button mt-auto">Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct