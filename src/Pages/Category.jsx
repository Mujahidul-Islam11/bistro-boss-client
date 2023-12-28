import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../src/assets/home/slide1.jpg'
import slider2 from '../../src/assets/home/slide2.jpg'
import slider3 from '../../src/assets/home/slide3.jpg'
import slider4 from '../../src/assets/home/slide4.jpg'
import slider5 from '../../src/assets/home/slide5.jpg'
import SectionTitle from './SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
            heading={'From 11.00am to 10.00pm '}
            subTitle={'Online Order'}
            ></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className='text-4xl text-white uppercase -mt-12 text-center'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className='text-4xl text-white uppercase -mt-12 text-center'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className='text-4xl text-white uppercase -mt-12 text-center'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className='text-4xl text-white uppercase -mt-12 text-center'>Dessertz</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slider5} alt="" />
            <h3 className='text-4xl text-white uppercase -mt-12 text-center'>Salads</h3>
        </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;