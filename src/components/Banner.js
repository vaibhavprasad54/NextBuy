import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">

        <div className="absolute w-full h-28 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={2000}>
            <div>
                <img loading="lazy" src="https://i.ibb.co/DR96wj0/3.png" className="sm:h-96 sm:object-cover" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://i.ibb.co/47KhDMV/1.png" className="sm:h-96 sm:object-cover" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://i.ibb.co/vk4g994/2.png" className="sm:h-96 sm:object-cover" alt="" />
            </div>
            <div>
            <img loading="lazy" src="https://i.ibb.co/J582PVq/Swiss-Books.png" className="sm:h-96 sm:object-cover" alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default Banner