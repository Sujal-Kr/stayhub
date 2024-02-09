import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Banner from '../banner/Banner';
import TextBanner from '../banner/TextBanner';
import MessCard from '../card/MessCard';
import MessModal from '../modal/MessModal';
import { database } from '../../firebase';
function Mess() {

    const head="Discover Homegrown Flavor: Indulge in Our Tiffin Service Selection!"
    const subHead="Embark on a hassle-free journey with our transportation services! Whether you're commuting to work, exploring the city, or heading out on a weekend getaway, we've got you covered."
    
    const [mess,setMess]=useState(null)
    const fetchData = async()=>{
        let temp = [];
        const snapshot = await database.mess.get();
        snapshot.forEach((doc) => {
        temp.push({ ...doc.data() });
        });
        setMess(temp);
        console.log(mess);
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    
  return (
    <div className=''>
        <TextBanner head={head} subHead={subHead}/>
        <div className='my-20 px-2 md:px-20'>
        <div className='flex justify-end'>
            <button className='btn my-3 capitalize shadow-xl bg-black text-white hover:text-black hover:bg-white ' onClick={() => document.getElementById('my_modal_4').showModal()}>List your Business</button>
        </div>
        <div className='text-3xl'><span className=''>Best Results</span></div>
        <div className='max-w-80 mb-10'>People who love to eat are always the best people.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {
                mess&&mess.map((item)=>(
                    <>
                        <MessCard item={item}/>
                    </>
                ))
            }
        </div>
        </div>
        <MessModal/>
    </div>
  )
}

export default Mess
