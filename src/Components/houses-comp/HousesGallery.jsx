import React, { useState } from "react";

export default function HousesGallery({ listOfHouses }) {
    const [houses, sethouses] = useState(listOfHouses)

    console.log(houses)
  return (
    <div>
      {/* {houses.map((house, index) => (
          <div key={index}>
            <img className="houses-image" src={`http://localhost:3005${house.image}`} alt={house.name}
            />
          </div>
        ))} */}
    </div>
  );
}
