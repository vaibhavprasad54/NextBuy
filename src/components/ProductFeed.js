import Product from "./Product"

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-20 mx-auto sm:px-5">
        {products.slice(0,4).map(({ id, title, price, description, category, image }) => (      // Took out inner values of "product" variable using Object Destructuring.
            <Product 
                key={id}                                               // "key" is the most crucial part in mapping in order for react to identify each element and render the list efficiently
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />                                                    
        ))}

        <img className="md:col-span-full cursor-pointer px-4 mx-auto sm:h-64 sm:w-full sm:object-cover" src="https://i.ibb.co/XbV0K1f/Untitled-design-4.png" alt="" />

    {/* <div className="md:col-span-2">
    {products.slice(4,5).map(({ id, title, price, description, category, image }) => (      // Took out inner values of "product" variable using Object Destructuring.
            <Product 
                key={id}                                               // "key" is the most crucial part in mapping in order for react to identify each element and render the list efficiently
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />                                                    
        ))}
    </div> */}

    {products.slice(5, products.length).map(({ id, title, price, description, category, image }) => (      // Took out inner values of "product" variable using Object Destructuring.
            <Product 
                key={id}                                               // "key" is the most crucial part in mapping in order for react to identify each element and render the list efficiently
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
            />                                                    
        ))}

    </div>
  )
}

export default ProductFeed

