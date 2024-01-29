import React from 'react'
import auto from '../../assets/auto-1.jpg'
import { SiWhatsapp } from "react-icons/si"
import { FaLocationPin } from "react-icons/fa6";
import Banner from '../banner/Banner'
import VehicleModal from '../modal/VehicleModal';
import car from '../../assets/car.jpg'
import { IoIosPerson } from "react-icons/io"
import { FaCar } from "react-icons/fa6"
import { GiMoneyStack } from "react-icons/gi"
import TextBanner from '../banner/TextBanner';
function Vehicle() {
  const neumorphism={
    borderRadius: "9px",
    background: "#faf9f9",
    boxShadow: "27px 27px 54px #bebebe, -27px -27px 54px #ffffff"
  }
  const background={
    backgroundImage:`url(${car})`,
    backgroundPosition:"bottom center",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",

  }
  const textEffect = {
    
    WebkitTextStroke: "0.01rem white",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    
  };
  const head="Navigate with Ease: Explore Our Transportation Services!"
  const subHead="Embark on a hassle-free journey with our transportation services! Whether you're commuting to work, exploring the city, or heading out on a weekend getaway, we've got you covered."
  return (
    <div>
      {/* <div className='h-screen  flex items-center justify-center' style={background}>
        <div className='text-9xl uppercase font-bold text-transparent  ' style={textEffect}>Enjoy your ride</div>
      </div> */}
      <TextBanner head={head} subHead={subHead}/>
      <div className='flex justify-end m-10'>
        <button className="btn " onClick={()=>document.getElementById('my_modal_3').showModal()}>List your vehicle</button>
        <VehicleModal/>
      </div>
      <div className='lg:px-24 md:px-12 px-2 py-8 text-xl'>Selcet any among variety of options to travel</div>
      <div className="vehicle-cont lg:px-24 md:px-12 px-2 my-20">
        <div className="vehicle-card flex p-3  gap-4 flex-wrap max-w-[50rem]" style={neumorphism}>
          <div className="image-cont">
            <img src={auto} alt="auto" className='h-full sm:h-44 rounded-md '/>
          </div>
          <div className="details-cont">
            <h2 className='text-3xl'>Lighting Travels</h2>
            <div className="owner-name flex items-center gap-2">
              <IoIosPerson/>
              <h5 className=''>Ramesh lal</h5>
            </div>

            <div className='type flex items-center gap-2'>
              <FaCar className='text-red-500'/>
              <h4>Auto</h4>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <GiMoneyStack/>
                <h6>1600</h6>
              </div>
              <p className='text-xs'>Negotiate with the owner for the price</p>
            </div>
            <div className="contact flex gap-4 my-3 items-center">
              <a href={`tel:`}><button className='bg-[#3f37c9] text-white px-4 py-2 rounded shadow-lg hover:shadow-none'>Contact Now</button></a>
              <a href={`//api.whatsapp.com/send?phone=918271243130&text=hey bro,`}><SiWhatsapp className='text-green-500 text-3xl'/></a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Vehicle
