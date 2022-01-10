import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const Equipment = () => {
    const [equip,setequip]=useState([])
    useEffect(()=>{
        axios.get("http://3.142.186.227:8080/cocktails/equipment/")
        .then((response)=>{setequip(response.data)})
    },[])
    return (
        <div>
            {equip.map((e)=><h3>{e.name}</h3>)}
        </div>
    )
}

export default Equipment