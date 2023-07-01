import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '@smastrom/react-rating/style.css'
import "./Sponsers.css"
const Sponsers = () => {
    const [sponsered, setsponsered] = useState([]);
    useEffect(() => {
        fetch('sponsered.json')
            .then(res => res.json())
            .then(data =>{ setsponsered(data);
            // console.log(data);
        })
    }, [])
    return (
        <div>
           

                    <Swiper
                slidesPerView={6}
                centeredSlides={true}
                loop={true}
                spaceBetween={30}
                grabCursor={true}
                freeMode={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, FreeMode]}
                className="mySwiper"
            >    {
                sponsered.map(sponser =>
                    <SwiperSlide key={sponser.id}>
                        <img className="swiperslideImage" src={sponser.image} alt="" />
                    </SwiperSlide>)
                }
                <div className="w-full   flex justify-between absolute top-11 left-0 "><h1></h1>
                    <h1></h1></div>
            </Swiper>

        </div>
    );
};

export default Sponsers;