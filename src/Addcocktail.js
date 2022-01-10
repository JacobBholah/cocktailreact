import axios from "axios";
import React from "react";
import { useState } from "react/cjs/react.development";

export const Addcocktail = () => {
  const [cocktail, setcocktail] = useState({
    name: "",
    type: "",
  });

  const handleChange = (e) => {
    setcocktail({ ...cocktail, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
      axios.post(`http://3.142.186.227:8080/cocktails/addcocktail?name=${cocktail.name}&type=${cocktail.type}`)
      .then((response)=>{
          console.log(response.status)
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="name">
          <label>Name:</label>
          <input
            value={cocktail.name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div id="type">
          <label>Type:</label>
          <input
            value={cocktail.type}
            type="text"
            name="type"
            onChange={handleChange}
          />
        </div>

        <button id="submit" type="submit">
        Submit
        </button>

      </form>
    </div>
  );
};
export default Addcocktail;
