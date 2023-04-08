import moment from "moment"
import Currency from "react-currency-formatter"


function Order({ id, amount, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
        <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
                <p className="font-bold text-xs sm:text-base">ORDER PLACED</p>
                <p className="text-xs sm:text-sm">{moment.unix(timestamp).format('DD MMM YYYY')}</p>
            </div>
            <div>
                <p className="text-xs font-bold sm:text-base">TOTAL</p>
                <p className="text-xs sm:text-sm">
                    <Currency quantity={amount} currency="INR" /> 
                </p>
            </div>

            <p className="text-blue-500 text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right">{items.length} items</p>
            <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs sm:text-sm whitespace-nowrap">ORDER ID: <span className="text-black"> {id} </span></p>
        </div>
        <div className="p-5 sm:p-10">
            <div className="flex space-x-6 overflow-x-auto">
                {images.map(image => (
                    <img className="h-20 w-20 object-contain sm:h-32 sm:w-32" src={image} alt="" />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Order