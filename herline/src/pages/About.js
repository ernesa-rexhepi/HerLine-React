import React from 'react'
import style from "../style/about.module.css"
import Navbar from "../components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import Pic1 from "../assets/About2.JPG"
import Pic2 from "../assets/About3.JPG"
import Pic3 from "../assets/About1.JPG"
import Product1 from "../assets/product1.jpg"
import Product2 from "../assets/product2.jpg"
import Product3 from "../assets/product3.jpg"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={style.DicountContainer}>
        <div className={style.DiscountWrapper}>
          <div className={style.DiscountContent}>
            <h2>About Us</h2>
            <p>
              Her Line, a brand rooted in history and just as luxurious as it sounds. An internationally renowned brand since 1946, the French fashion house acclaimed for its elegance and timeless femininity. A leading company that has remained at the top of fashion's hierarchy for over 70 years
            </p>
            <button>Get In Touch</button>
          </div>
        </div>
      </div>
      <div className={style.aboutPage}>
        <div className={style.aboutDescription}>
          <h1>Our History</h1>
          <h2>Best Online Shopping Site for Women</h2>
          <p>…is one of the fastest growing e-Commerce companies in Europe and Hamburg’s first unicorn since 2018. As a fashion and technology corporation, along with our strong team, our ambition is to digitalize the classic shopping stroll by creating an inspiring and personalized shopping experience on the smartphone. This is why we created ABOUT YOU, a shopping destination where people can discover fashion that really fits their personality from a range of more than 3.800 brands. With its consistent focus on personalization, inspiration, and mobile shopping, ABOUT YOU has created sales in excess of €1,90 bn. in the fiscal year 2022/23 and is now one of the largest fashion e-tailers in Germany. </p>
        
        </div>
        <div className={style.Slider}>
          <Swiper pagination={true} modules={[Pagination]} className={style.aboutSlider}>
            <SwiperSlide className={style.aboutSliderPic}
              style={{ backgroundImage: `url(${Pic1})` }}
            ></SwiperSlide>
            <SwiperSlide className={style.aboutSliderPic}
              style={{ backgroundImage: `url(${Pic2})` }}></SwiperSlide>
            <SwiperSlide className={style.aboutSliderPic}
              style={{ backgroundImage: `url(${Pic3})` }}></SwiperSlide>

          </Swiper>
        </div>

      </div>
      <div className={style.aboutPage2}>

        <div className={style.Slider2}>
          <Swiper pagination={true} modules={[Pagination]} className={style.aboutSlider2}>
            <SwiperSlide className={style.aboutSliderPic2}
              style={{ backgroundImage: `url(${Product1})` }}
            ></SwiperSlide>
            <SwiperSlide className={style.aboutSliderPic2}
              style={{ backgroundImage: `url(${Product2})` }}></SwiperSlide>
            <SwiperSlide className={style.aboutSliderPic2}
              style={{ backgroundImage: `url(${Product3})` }}></SwiperSlide>

          </Swiper>
        </div>
        <div className={style.aboutDescription2}>
          <h1>1,90 bn.</h1>
          <h2>EUR revenue in fiscal year 2022/23</h2>
          <h1>29 markets</h1>
          <h2>in 9 years</h2>
          <h1>1500</h1>
          <h2>employees from 77 nationalities</h2>

        </div>

      </div>
      <div className={style.AboutCompany}>
        <h1>ABOUT OUR COMPANY CULTURE </h1>
        <p>We have made it our mission to provide an inclusive and inspiring work environment for our team. Each and everyone of us contributes to the vibrant culture of our company and therefore to the identity of our brand. As a diverse collective with a variety of strengths and expertise, we share a common vision that constantly influences our corporate culture, our brand and the way we run our business. Our brand core is based on our corporate culture: It should feel great to show yourself in a fair way. We want to encourage acceptance for others and ourselves and promote an inclusive, fair and circular fashion culture. Find out more about our vision and mindset in our culture booklet.</p>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
