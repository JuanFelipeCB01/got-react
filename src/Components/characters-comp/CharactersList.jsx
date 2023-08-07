import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../../shared/MyContext';
export default function CharactersList() {
const [characters, setCharacters] = useState([])
  const { search, setSearch } = useContext(MyContext);

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
      {characters
        .filter((char) =>char.name.toLowerCase().includes(search.toLowerCase()))
          .map((char, index) => (
            <div key={index} className="charactersList-gallery">
              <div className="charactersList-gallery-container">
              <Link to={`/characters/${char.name}`}> <h3 className="charactersList-gallery-container-h3"> {char.name}</h3></Link>
              <img className="charactersList-gallery-container-img" src={`http://localhost:3005${char.image}`} alt={char.name} />
              </div>
            </div>
        ))}
    </div>
  );
}
