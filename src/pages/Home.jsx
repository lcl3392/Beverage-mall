import Product from "../components/Product";
import { products } from '../assets/api/data'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sns from "../components/Sns";

const Home = () => {
    return (
      <div>
       <div className="swiper-wrap" style={{ width: '100%' }}>
                <Swiper
                    className="new-list"
                    loop={true}
                    direction="horizontal" 
                    slidesPerView={2}
                    spaceBetween={25}
                    // autoplay={{ delay: 1000, }} 
                >
                    <SwiperSlide className='new-item'><img src="https://www.selecto.co.kr/upload/picture_file/mainSlide/20230925090700_xahc92.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='new-item'><img src="https://www.selecto.co.kr/upload/picture_file/mainSlide/20220926134050_tnadwv.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='new-item'><img src="https://www.selecto.co.kr/assets/images/main/brand-competitivity-pageeight/c-contents-img3.png" alt="" /></SwiperSlide>
                    <SwiperSlide className='new-item'><img src="https://www.selecto.co.kr/upload/picture_file/mainSlide/20220927120542_4bli9f.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide className='new-item'><img src="https://www.selecto.co.kr/upload/picture_file/mainSlide/20220926135834_w6aozi.jpg" alt="" /></SwiperSlide>
                    
                </Swiper>
      </div>
        <div className="inner">
        <h2 style={{color:"#ff4713"}}> BEST MENU</h2>
        <div className="cart-box">
            {
              products.map( item => <Product key={item.id} item={item} />)
            }          
        </div>
        </div>
        <div className="identity_hd">
          <img src="https://www.selecto.co.kr/assets/images/main/m-3rd_sec-header.svg" alt="" />
        </div>
        <div className="identity_bg">
          <img src="https://www.selecto.co.kr/assets/images/main/m-3rd_sec-bg.jpg" alt="" />
        </div>
        <Sns/>
      </div>
    );
};

export default Home;