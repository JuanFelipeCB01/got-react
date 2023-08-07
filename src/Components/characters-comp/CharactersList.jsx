import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
export default function CharactersList() {
const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("");

const getCharacters = async ()=> {
  try {
    const {data} = await axios.get("http://localhost:3005/characters");

    setCharacters(data)
  } catch (error) {
      console.error("Error al obtener los personajes:", error);
  }
}
useEffect(()=>{
  getCharacters()
},[])
  return (
    <div className="charactersList">
    <input  placeholder='buscar...' className="charactersList-input"  type="text" value={search} onChange={(ev) => setSearch(ev.target.value)}/>
    {/* <SimpleBar style={{ maxHeight: 400 }}> */}
      {characters
        .filter((char) =>char.name.toLowerCase().includes(search.toLowerCase()))
          .map((char, index) => (
            <div key={index} className="charactersList-gallery">
              <div className="charactersList-gallery-container">
              <Link to={`/characters/${char.id}`}> <h3 className="charactersList-gallery-container-h3"> {char.name}</h3></Link>
              <img className="charactersList-gallery-container-img" src={`http://localhost:3005${char.image}`} alt={char.name} />
              </div>
            </div>
        ))}
        {/* </SimpleBar> */}
    </div>
  );
}
