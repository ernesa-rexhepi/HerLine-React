import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "../../style/home.module.css";
import { Pagination , Autoplay} from "swiper/modules";
import SliderPic1 from "../../assets/pink1.jpg"
import SliderPic2 from "../../assets/pink2.jpg"
import SliderPic3 from "../../assets/pink3.jpg"

const Slider = ({ images }) => {
  //   console.log(images);
  return (
<div className={style.SliderPage}>
            <div className={style.Slider}>
          <Swiper pagination={true}
           modules={[Pagination,Autoplay]} 
           className={style.ProductsSlider}
           loop={true}
           autoplay={{
             delay: 3000,
           }}>
            <SwiperSlide className={style.ProductsSliderPic}
            style={{backgroundImage:`url(${SliderPic1})`}}
            ></SwiperSlide>
            <SwiperSlide className={style.ProductsSliderPic} 
            style={{backgroundImage:`url(${SliderPic2})`}}></SwiperSlide>
            <SwiperSlide className={style.ProductsSliderPic} 
            style={{backgroundImage:`url(${SliderPic3})`}}></SwiperSlide>
          
        </Swiper>
        </div>
        <div className={style.SliderDescription}>
        <h1>New Collection</h1>
        <p >
          The latest Fashion collections
          You can't buy Happiness but you can buy those clothes and that's kind of the same thing.
        </p>
          <button className={style.SliderButton}> Buy Now</button>
        </div>
        
        </div>
  );
};

export default Slider;
