import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Banner from '../banner/Banner';
function Mess() {
    
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
  return (
    <div className='h-screen'>
        <Banner/>
    </div>
  )
}

export default Mess
