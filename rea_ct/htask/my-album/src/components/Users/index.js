import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
export default function Users(){
  const [users, setUsers]= useState([]);

    useEffect(()=>{
        async function getUsers(){
       
        try{
            const users = await axios.get('https://randomuser.me/api/?results=100');
            const {data} = users;
            setUsers(data.results);

        }catch(ex){

        }
        }
        getUsers()
             },[])
    return(
   <div style={{display: "flex", flexWrap:"wrap",maxWidth:"1200px", margin: "0 auto", justifyContent:"space-around", marginBottom:"50px"}}>
    <h2>Users</h2>
   {users.length? users.map((item)=>{return (
   <div style={{margin: "20px"}}  key={item.name.first+item.name.last}>
       <p>{item.name.first+" "}{item.name.last}</p> 

       <div><img src={item.picture.large} alt={item.name.first}/> </div>
       
    </div>)
   }): "Loading..."}
   </div>
       
        
    )
}