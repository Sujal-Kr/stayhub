import React, { useEffect, useState } from 'react';
import auto from '../../assets/auto-1.jpg';
import { SiWhatsapp } from 'react-icons/si';
import { FaLocationPin } from 'react-icons/fa6';
import Banner from '../banner/Banner';
import VehicleModal from '../modal/VehicleModal';
import car from '../../assets/car.jpg';
import { IoIosPerson } from 'react-icons/io';
import { FaCar } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import TextBanner from '../banner/TextBanner';
import { database } from '../../firebase';
import VehicleCard from '../card/VehicleCard';


function Vehicle() {
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [loading]);

  const fetchData = async () => {
    let temp = [];
    const snapshot = await database.transport.get();
    snapshot.forEach((doc) => {
      temp.push({ ...doc.data() });
    });
    setVehicle(temp);
    console.log(vehicle);
  };

  const neumorphism = {
    borderRadius: '9px',
    background: '#faf9f9',
    boxShadow: '27px 27px 54px #bebebe, -27px -27px 54px #ffffff',
  };

  const background = {
    backgroundImage: `url(${car})`,
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const textEffect = {
    WebkitTextStroke: '0.01rem white',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  };

  const head = 'Navigate with Ease: Explore Our Transportation Services!';
  const subHead =
    "Embark on a hassle-free journey with our transportation services! Whether you're commuting to work, exploring the city, or heading out on a weekend getaway, we've got you covered.";

  return (
    <div>
      <TextBanner head={head} subHead={subHead} />
      <div className="flex justify-end m-10">
        {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
          List your vehicle
        </button> */}
        <VehicleModal  setLoading={setLoading}/>
      </div>
      <div className=' lg:px-24 md:px-12 px-2 text-3xl text-blue-700'>Your Ride</div>
      <div className="lg:px-24 md:px-12 px-2 py-8 text-xl max-w-xl">Experience seamless rides with unparalleled safety and convenience on our cab booking website.</div>
      <div className="vehicle-cont lg:px-24 md:px-12 px-2 my-20">
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
          {
            vehicle&&vehicle.map((item)=>(
              <div key={item.id}>
                <VehicleCard item={item}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Vehicle;
