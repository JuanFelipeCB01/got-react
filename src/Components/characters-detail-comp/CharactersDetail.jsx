import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryDetail from "../gallery-detail/GalleryDetail";

export const ImgContext = React.createContext();

export default function CharactersDetail() {
  const  {name}  = useParams();
  const [charactersData, setCharactersData] = useState();
  const [houses, setHouses] = useState([]);
  const getCharacterDetail = async () => {
    try {
      const characterDetail = await axios.get(`http://localhost:3005/characters?name=${name}`);
      setCharactersData(characterDetail.data[0]);
      if (characterDetail.data[0].house) {
        const houseList = await axios.get(`http://localhost:3005/houses?name=${characterDetail.data[0].house}`);
        setHouses(houseList.data);
      }
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };
  useEffect(() => {
    getCharacterDetail();
  }, []);
  return (
    <ImgContext.Provider value={{houses}}>
    <div>
      <GalleryDetail characterInfo={charactersData}  houseInfo={houses} />
    </div>
    </ImgContext.Provider>
  );
}
