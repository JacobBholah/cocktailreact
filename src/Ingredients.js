import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Ingredients = () => {
    const [ing,seting]=useState([])
    useEffect(()=>{
        axios.get("http://3.142.186.227:8080/cocktails/ingredients/")
        .then((response)=>{seting(response.data)})
    },[])
    return (
        <div>
            {ing.map((i)=><h2>{i.name}</h2>)}
        </div>
    )
}

export default Ingredients