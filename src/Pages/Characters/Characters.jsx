import React, { useContext, useState } from 'react'
import { CharactersList, Searchbar } from '../../Components'

export default function Characters(){

  return (
    <div className='characters'>
      <CharactersList />
    </div>
  )
}
