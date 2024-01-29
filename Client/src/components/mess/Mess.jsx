import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Banner from '../banner/Banner';
import TextBanner from '../banner/TextBanner';
function Mess() {
    const head="Discover Homegrown Flavor: Indulge in Our Tiffin Service Selection!"
    const subHead="Embark on a hassle-free journey with our transportation services! Whether you're commuting to work, exploring the city, or heading out on a weekend getaway, we've got you covered."
    const fetchData=async()=>{
        const options = {
            method: 'GET',
            url: 'https://justdial-jd-unofficial.p.rapidapi.com/search',
            params: {
                search_term: 'Tiffin Services',
                location: 'Ashta',
                page_number: '1'
            },
            headers: {
                'X-RapidAPI-Key': '2f76043895msh485799eebb62464p1cfda0jsn935d6bb41fd5',
                'X-RapidAPI-Host': 'justdial-jd-unofficial.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const background={

    }
  return (
    <div className=''>
        <TextBanner head={head} subHead={subHead}/>
        <div className='my-20 px-2 md:px-20'>
            sadsd
        </div>
    </div>
  )
}

export default Mess
