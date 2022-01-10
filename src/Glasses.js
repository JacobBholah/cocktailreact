import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Glasses = () => {
    const [glasses,setglasses]=useState([])
    useEffect(()=>{
        axios.get("http://3.142.186.227:8080/cocktails/glasses/")
        .then((response)=>{setglasses(response.data)})
    },[])
    return (
        <div>
            {glasses.map((g)=><h3>{g.type}</h3>)}
        </div>
    )
}

export default Glasses