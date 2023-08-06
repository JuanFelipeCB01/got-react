import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GalleryDetail from "../gallery-detail/GalleryDetail";

export const ImgContext = React.createContext();

export default function CharactersDetail() {
  const { id } = useParams();
  const [charactersData, setCharactersData] = useState();
  const [houses, setHouses] = useState([]);

  const getCharacterDetail = async () => {
    try {
      const characterDetail = await axios.get(`http://localhost:3005/characters/${id}`);
      setCharactersData(characterDetail.data);

      if (characterDetail.data.house) {
        const houseList = await axios.get(`http://localhost:3005/houses?name=${characterDetail.data.house}`);
        setHouses(houseList.data);
      }
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };
  useEffect(() => {
    getCharacterDetail();
  }, []);
  console.log(houses)
  return (
    <ImgContext.Provider value={{houses}}>
    <div>
      <GalleryDetail characterInfo={charactersData}   />
    </div>
    </ImgContext.Provider>
  );
}
