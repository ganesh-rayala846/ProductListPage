import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default function Insert(props){
    const[insertval,setInsertVal]=useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            setInsertVal(res.data)
            setLoading(false)
        }).catch(error=>{
            console.log('error while fetching')
        })
    },[])
    return(<center>
        <h3>Get User Details</h3>
       {loading ? <p>Loading.....</p>:(<ul>
        {insertval.map((userVal,index)=>(
           <li key={index}>{userVal.id}
           {userVal.name}
           {userVal.address.city}
           {userVal.phone}
           </li>
           
        ))}
       </ul>)}
    </center>)
}