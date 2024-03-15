import React,{useContext, useEffect, useState} from 'react'
import Card from '../propCard/Card';
import { database } from '../../firebase';
import { useNavigate ,useParams} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { UserContext } from '../../context/userContext';
function Listing() {
    const [list,setList] = useState([])
    const {user} =useContext(AuthContext)
    const { userData } = useContext(UserContext);
    const getListing = async () => {
      if (userData && userData.listing && userData.listing.length > 0) {
          let arr = [];
          for (let i = 0; i < userData.listing.length; i++) {
              try {
                  let res = await database.property.doc(userData.listing[i]).get();
                  if (res.exists) {
                      arr.push(res.data());
                  } else {
                      console.log("Document not found:", userData.listing[i]);
                  }
              } catch (error) {
                  console.error("Error fetching document:", error);
              }
          }
          setList(arr);
          console.log("Listings:", arr);
      } else {
          console.log("No listings found in userData.");
      }
  }
  
    
    const navigate=useNavigate()
    const handleNavigate=(url)=>{
      navigate(`/update/${url}`)
    }
    useEffect(() =>{
        getListing()
    },[userData])
  return (
    <div className='mb-10'>
      {
        list!=null?list.map((item,index)=>(
            <li key={index} className='list-none my-2'>

                <Card item={item}/>
                <button className='px-8 py-2 bg-blue-300 text-white shadow-md rounded'onClick={()=>handleNavigate(item.Pid)}>Edit Details</button>
            </li>
        )):<h6 className='text-center my-6 text-2xl'>No Results Found</h6>
      }
    </div>
  )
}

export default Listing
