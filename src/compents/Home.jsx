import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CountUp from 'react-countup';
// Import Swiper styles
// inicio
import portadaImg1 from '../images/PORTADA/IMG-1.webp';
import portadaImg2 from '../images/PORTADA/IMG-2.webp';
import portadaImg3 from '../images/PORTADA/IMG-3.webp';
import portadaImg4 from '../images/PORTADA/IMG-4.webp';
import portadaImg5 from '../images/PORTADA/IMG-5.webp';
import portadaImg6 from '../images/PORTADA/IMG-6.webp';
// servicio
import servicesImg1 from  '../images/SERVICIOS/OFICIALES/img1.png';
import servicesImg2 from  '../images/SERVICIOS/OFICIALES/img2.png';
import servicesImg3 from  '../images/SERVICIOS/OFICIALES/img3.png';
import servicesImg4 from  '../images/SERVICIOS/OFICIALES/img4.png';
import servicesImg5 from  '../images/SERVICIOS/OFICIALES/img5.png';
import servicesImg6 from  '../images/SERVICIOS/OFICIALES/img6.png';
import servicesImg7 from  '../images/SERVICIOS/OFICIALES/img7.png';
import servicesImg8 from  '../images/SERVICIOS/OFICIALES/img8.png';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../index.css'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
function Home() {
  return (
    <div className="mt-14">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-[60vh] mySwiper"

      >
        <SwiperSlide className='relative'>
          <img className='w-full h-full object-cover' src={portadaImg1} />

          <div className="absolute  rounded-md  inset-y-32  right-0 sm:right-2 lg:right-10">
            <div className="p-2 sm:p-4 bg-mysin-400 max-w-[600px] rounded-md">
              <p className='text-5xl sm:text-7xl text-white border-8 rounded border-white p-5 lg:p-10 font-semibold'>Commercial, logistical and marketing partner</p>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg2} />
          <div className="absolute inset-y-32  left-0 sm:left-2  lg:right-10 rounded-md">
            <div className="p-2  bg-mysin-400 max-w-[600px] rounded">
              <p className='font-semibold text-5xl sm:text-7xl text-white border-8 border-white p-5 px-5 lg:py-10'>Communicating Sustainable Marketing and Experiences</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg3} />
          <div className="absolute   inset-y-20  right-0 sm:right-2 lg:right-10 rounded-md">
            <div className="p-2 sm:p-4 bg-mysin-400 max-w-[600px] rounded">
              <p className='font-semibold text-5xl sm:text-7xl text-white border-8 border-white p-5 lg:p-10'>Sustainable Management, Environmental Preservation, Native Culture and Tourism</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg5} />
          <div className="absolute  inset-y-32  right-0 sm:right-2 lg:right-10 rounded-md">
            <div className="p-2 sm:p-4 bg-mysin-400 max-w-[600px] rounded">
              <p className='font-semibold text-5xl sm:text-7xl text-white border-8 border-white p-5 lg:p-10'>Eco-sustainable advertising solutions and branding</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <section className="container mx-auto py-10 lg:py-20 px-2">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-4 mx-auto"><h2 className='text-5xl text-mysin-500 font-semibold'>our services</h2> </div>
          <p className='max-w-[900px] mx-auto col-span-4 text-center text-xl text-mysin-600 font-light'>Our services are strategically coordinated and tailored to meet your sustainability goals, with a primary focus on fostering corporate growth and enhancing brand recognition for our clients.</p>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg1} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg2} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg3} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg4} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg5} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg6} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg7} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        <div className="overflow-hidden text-transparent hover:text-white transition-all duration-200 relative col-span-4 md:col-span-1 cursor-pointer">
          <img className='rounded w-full h-full' src={servicesImg8} alt="" />
          <div className='absolute rounded-lg inset-x-0 transition-all duration-150 bottom-[-5em] hover:bottom-0 h-full opacity-70 bg-gradient-to-t from-mysin-800 via-kashmir-950 to-transparent'><p className='px-2 pb-2 text-base font-light flex items-end h-full text-center'>Sustainable branding, communication and marketing, based on circular strategies</p></div>
        </div>
        </div>
      </section>
      <section className='bg-black py-10 lg:py-20'>
        <div className="grid gap-10 container mx-auto text-center px-2">
          <h2 className='text-5xl text-mysin-500 font-semibold'>We are what you are looking for!</h2>
          <div className="grid grid-cols-4 gap-8 justify-around">
            <span className="grid gap-2 col-span-2 lg:col-span-1">
              <h3 className='font-normal text-mysin-500 text-3xl'><CountUp start={0} end={14} duration={2} />+</h3>
              <p className='text-xl text-mysin-600 font-light'>Years of <br></br> experience</p>
            </span>
            <span className="grid gap-2 col-span-2 lg:col-span-1">
              <h3 className='text-3xl text-mysin-500 font-normal'><CountUp start={0} end={1000} duration={2} />+</h3>
              <p className='text-xl text-mysin-600 font-light'>Trained <br></br>stakeholders</p>
            </span>
            <span className="grid gap-2 col-span-2 lg:col-span-1">
              <h3 className='text-3xl text-mysin-500 font-normal'><CountUp start={0} end={2602} duration={2} />+</h3>
              <p className='text-xl text-mysin-600 font-light'>Completed <br /> proyects</p>
            </span>
            <span className="grid gap-2 col-span-2 lg:col-span-1">
              <h3 className='text-3xl text-mysin-500 font-normal'><CountUp start={0} end={963} duration={2} />+</h3>
              <p className='text-xl text-mysin-600 font-light'>Customers</p>
            </span>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home