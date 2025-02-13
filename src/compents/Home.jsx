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
import servicesImg1 from '../images/SERVICIOS/OFICIALES/img1.webp';
import servicesImg2 from '../images/SERVICIOS/OFICIALES/img2.webp';
import servicesImg3 from '../images/SERVICIOS/OFICIALES/img3.webp';
import servicesImg4 from '../images/SERVICIOS/OFICIALES/img4.webp';
import servicesImg5 from '../images/SERVICIOS/OFICIALES/img5.webp';
import servicesImg6 from '../images/SERVICIOS/OFICIALES/img6.webp';
import servicesImg7 from '../images/SERVICIOS/OFICIALES/img7.webp';
import servicesImg8 from '../images/SERVICIOS/OFICIALES/img8.webp';

import marketing from '../images/SERVICIOS/marketing.webp'
import GESTIÓN_SOSTENIBLE from '../images/SERVICIOS/GESTION_SOSTENIBLE.webp'
import MARKETING from '../images/SERVICIOS/marketingDOS.webp'
import CREATIVIDAD from '../images/SERVICIOS/CREATIVIDAD.webp'
import ENERGIA_RENOVABLE from '../images/SERVICIOS/ENERGIA_RENOVABLE.webp'
import ECONOMIA_CIRCULAR from '../images/SERVICIOS/ECONOMIA_CIRCULAR.webp'
import ASOCIACIONES_ESTRATEGICAS from '../images/SERVICIOS/ASOCIACIONES_ESTRATEGICAS.webp'

import depsa from '../images/uploads/DEPSA.webp'
import jockey from '../images/uploads/JOCKEY-PLAZA.webp'
import ministerio from '../images/uploads/MINISTERIO-RE.webp'
import onpe from '../images/uploads/ONPE.webp'
import pamer from '../images/uploads/PAMER.webp'
import sise from '../images/uploads/SISE.webp'
import ucv from '../images/uploads/UCV.webp'

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/Home.css'
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
        className="h-[80vh] mySwiper max-h-[1000px]"

      >
        <SwiperSlide className='relative'>
          <img className='w-full h-full object-cover' src={portadaImg1} />

          <div className="absolute  rounded-md  bottom-2  right-0 sm:right-2 lg:right-10">
            <div className="p-2 sm:p-4 bg-mysin-400 max-w-[600px] rounded-md">
              <p className='text-4xl md:text-5xl lg:text-7xl text-white border-8 rounded border-white p-5 lg:p-10 font-semibold'>Commercial, logistical and marketing partner</p>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg2} />
          <div className="absolute rounded-md bottom-2  right-0 sm:right-2 lg:right-10 px-2">
            <div className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
              <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                Communicating Sustainable Marketing and Experiences
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg3} />
          <div className="absolute rounded-md bottom-2 lg:top-8  right-0 sm:right-2 lg:right-10 px-2">
            <div className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
              <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                Sustainable Management, Environmental Preservation, Native Culture and Tourism
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img className='w-full h-full object-cover' src={portadaImg5} />
          <div className="absolute rounded-md bottom-2 md:inset-y-32 right-0 sm:right-2 lg:right-10 px-2">
            <div className="p-1 sm:p-4 bg-mysin-400 max-w-[600px]  rounded-md">
              <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white border-4 md:border-6 lg:border-8 rounded border-white p-1  md:p-5 sm:p-3 lg:p-10 font-semibold'>
                Eco-sustainable advertising solutions and branding
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <section className="container mx-auto pt-10 px-2 divide-y-2 mb-10">
        <div className="grid grid-cols-4 gap-6 ">
          <div className="col-span-4 mx-auto"><h2 className='text-4xl md:text-5xl text-mysin-500 font-semibold'>our services</h2> </div>
          <p className='max-w-[900px] mx-auto col-span-4 text-center text-lg md:text-xl text-mysin-400 font-light'>Our services are strategically coordinated and tailored to meet your sustainability goals, with a primary focus on fostering corporate growth and enhancing brand recognition for our clients.</p>
          <div className="col-span-4 grid grid-cols-4 gap-x-6 gap-y-10 mb-10 ">
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg1} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Sustainable branding, communication and marketing, based on circular strategies
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg2} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Strategic alliance commercial, logistical and marketing support
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1  card__article">
              <img className="card__img  h-auto" src={servicesImg3} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Sustainable management with social impact
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg4} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Sustainable tourism and development of native communities
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg5} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Investment opportunity in real estate and energy efficient projects
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg6} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Training and consulting in renewable energies and circular economy
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg7} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Collaborative for the development of projects in energy and circular economy
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
            <article className="col-span-4 md:col-span-2 lg:col-span-1 card__article">
              <img className="card__img max-w-[500px] h-auto" src={servicesImg8} alt="image" width="500" height="auto" />
              <div className="card__data">
                <p className='text-base text-white font-extralight mb-1'>
                  Eco-sustainable Advertising & Merchandising Solutions
                </p>
                <button type="button" className="text-white bg-mysin-500 hover:bg-mysin-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">
                  know more
                </button>
              </div>
            </article>
          </div>
        </div>
        <div className=" grid grid-cols-2 pt-10 gap-2">

          <div className="col-span-2 lg:col-span-1 grid items-center justify-center ">
            <h2 className=' text-2xl md:text-3xl lg:text-4xl text-mysin-500 font-semibold text-center'>WHAT DISTINGUISHES US?</h2>
            <img className='w-[70%]  md:w-[60%] lg:w-[80%] max-w-[500px] md:max-w-[500px] lg:max-w-[500px] h-auto mx-auto lg:mb-0 mb-6' src={marketing} alt="" />
            <div>

            </div>
            <div className="hidden lg:flex p-4 shadow-lg shadow-mysin-300 rounded-lg gap-2 lg:border-y-mysin-500  bg-mysin-400 mb-6 min-h-32  mx-auto lg:mr-6 ">
              <div className="grid  justify-center w-56">
                <img className='w-full ' src={GESTIÓN_SOSTENIBLE} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>


          </div>

          <div className="justify-center col-span-2 lg:col-span-1 grid gap-6 items-center  lg:mx-auto">
            <div className="flex lg:hidden p-4 shadow-lg shadow-mysin-400 rounded-lg gap-2 lg:border-y-mysin-500  bg-mysin-500 min-h-32  mx-auto lg:mr-6 ">
              <div className="grid justify-center w-48">
                <img className='w-full h-auto' src={GESTIÓN_SOSTENIBLE} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
            <div className="p-4 shadow-lg flex shadow-mysin-300 rounded-lg gap-2 lg:bg-mysin-400 bg-mysin-400 ml-0  lg:ml-6">

              <div className="grid justify-center w-48">
                <img className='w-full h-auto' src={MARKETING} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
            <div className="flex p-4 shadow-lg shadow-mysin-300 rounded-lg gap-2 bg-mysin-500 ml-0  lg:mr-6">
              <div className="grid  justify-center w-48">
                <img className='w-full h-auto' src={CREATIVIDAD} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
            <div className="flex p-4 shadow-lg shadow-mysin-200 rounded-lg gap-2 bg-mysin-400  lg:ml-6">
              <div className="grid  justify-center w-48">
                <img className='w-full h-auto' src={ENERGIA_RENOVABLE} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
            <div className="flex p-4 shadow-lg shadow-mysin-300 rounded-lg gap-2 bg-mysin-500 lg:mr-6">
              <div className="grid  justify-center w-48">
                <img className='w-full h-auto ' src={ECONOMIA_CIRCULAR} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
            <div className="flex p-4 shadow-lg shadow-mysin-200 rounded-lg gap-2 bg-mysin-400 lg:ml-6">
              <div className="grid  justify-center w-48">
                <img className='w-full h-auto' src={ASOCIACIONES_ESTRATEGICAS} alt="" />
              </div>
              <div className='grid'>
                <h4 className='font-medium text-black text-lg md:text-xl'>SUSTAINABLE MANAGEMENT</h4>
                <p className='text-sm md:text-base text-white font-extralight'>We seek to balance economic development with environmental care and social responsibility, minimizing environmental impact and maximizing resource efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black py-10 lg:py-20 grid gap-20'>
        <div className="grid gap-10 container mx-auto text-center px-2">
          <h2 className='text-3xl md:text-4xl lg:text-5xl text-mysin-500 font-semibold'>We are what you are looking for!</h2>
          <div className="grid grid-cols-4 gap-8 justify-around">
            <span className="grid gap-2 col-span-2 md:col-span-1">
              <h3 className='font-normal text-mysin-500 text-2xl md:text-3xl'><CountUp start={0} end={14} duration={2} />+</h3>
              <p className='text-lg md:text-xl text-mysin-600 font-light'>Years of <br></br> experience</p>
            </span>
            <span className="grid gap-2 col-span-2 md:col-span-1">
              <h3 className='text-2xl md:text-3xl text-mysin-500 font-normal'><CountUp start={0} end={1000} duration={2} />+</h3>
              <p className='text-lg md:text-xl text-mysin-600 font-light'>Trained <br></br>stakeholders</p>
            </span>
            <span className="grid gap-2 col-span-2 md:col-span-1">
              <h3 className='text-2xl md:text-3xl text-mysin-500 font-normal'><CountUp start={0} end={2602} duration={2} />+</h3>
              <p className='text-lg md:text-xl text-mysin-600 font-light'>Completed <br /> proyects</p>
            </span>
            <span className="grid gap-2 col-span-2 md:col-span-1">
              <h3 className='text-2xl md:text-3xl text-mysin-500 font-normal'><CountUp start={0} end={963} duration={2} />+</h3>
              <p className='text-lg md:text-xl text-mysin-600 font-light'>Customers</p>
            </span>
          </div>
        </div>

      </section>

      <section className=' py-10 lg:pt-20 grid gap-20'>
        <div className="container mx-auto text-center grid gap-6">
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-black font-semibold mb-6'>SOME OF OUR <span className='text-mysin-500'>HAPPY</span>  CUSTOMERS</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto " src={depsa} alt="" />
            </div>
            <div className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto" src={jockey} alt="" />
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto" src={onpe} alt="" />
            </div>
            <div className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto" src={pamer} alt="" />
            </div>
            <div className="flex items-center col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto" src={sise} alt="" />
            </div>
            <div className="col-span-4 md:col-span-2 lg:col-span-1 mx-auto">
              <img className="w-full max-w-[180px] h-auto" src={ucv} alt="" />
            </div>
            <div className="flex items-center col-span-4  lg:col-span-2 mx-auto">
              <img className="w-full max-w-[360px] h-auto" src={ministerio} alt="" />
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default Home