import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HGalleryDetails from './HGalleryDetails';

export default function HouseDetails() {

const { name } = useParams();
const [housesData, sethousesData] = useState();
  
const getHouseDetails = async () => {
    try {
    const houseDetail = await axios.get(`http://localhost:3005/houses?name=${name}`);
    sethousesData(houseDetail.data[0]);
    } catch (error) {
    console.error("Error fetching house details:", error);
    }
};
useEffect(() => {
    getHouseDetails();
}, []);
return (
    <div>
      <HGalleryDetails houseInfo={housesData}/>
    </div>
)
}
