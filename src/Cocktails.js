import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Cocktails = () => {
    const [cocktails,setcocktails]=useState([])
    useEffect(()=>{
        axios.get("http://3.142.186.227:8080/cocktails/cocktails/")
        .then((response)=>{setcocktails(response.data)})
    },[])
    return (
        <div>
            {cocktails.map((c)=><h2>{c.name}</h2>)}
        </div>
    )
}

export default Cocktails
