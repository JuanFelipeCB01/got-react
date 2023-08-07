import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Houses() {
  const [housesList, setHousesList] = useState([]);

  const getHouses = async () => {
    try {
      const houseList = await axios.get("http://localhost:3005/houses");
      setHousesList(houseList.data);
    } catch (error) {
      console.error("Error fetching house details:", error);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  console.log("housesList:", housesList);

  return (
    <div className="housesGallery">
      {
        housesList.map((house, index) => (
          <div className="housesGallery-box" key={index}>
          <Link to={`/houses/${house.id}`}>
            <img className="housesGallery-box-image" src={`http://localhost:3005${house.image}`} alt={house.name}/>
          </Link>
          <h3>{house.name}</h3>
          </div>
        ))
      }
    </div>
  );
}
