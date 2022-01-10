import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Garnishes = () => {
    const [gar,setgar]=useState([])
    useEffect(()=>{
        axios.get("http://3.142.186.227:8080/cocktails/garnishes/")
        .then((response)=>{setgar(response.data)})
    },[])
    return (
        <div>
            {gar.map((ga)=><h2>{ga.name}</h2>)}
        </div>
    )
}

export default Garnishes