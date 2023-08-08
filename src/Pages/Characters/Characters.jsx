import React, { useContext, useState } from 'react'
import { CharactersList, Searchbar } from '../../Components'
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
export default function Characters(){

  return (
    <SimpleBar className="scroll-bar">
      <div className="characters">
        <CharactersList />
      </div>
    </SimpleBar>
  );
}
