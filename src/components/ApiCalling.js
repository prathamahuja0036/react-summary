import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ApiCalling = () => {

    const [tittle,setTittle]=useState([]);


    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
            console.log("response=>",response);
          setTittle(response.data);
    })

    },[])

  return (
    <div>
      {
   tittle.map(tittle=>(
    <li key={tittle.id}>
      {tittle.title}
    </li>
   ))
  }
    </div>
    
  )
}

export default ApiCalling