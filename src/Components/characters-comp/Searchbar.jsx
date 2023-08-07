import React, { useContext } from 'react'
import { MyContext } from '../../shared/MyContext';

export default function Searchbar() {
  const { search, setSearch } = useContext(MyContext);

  return (
    <div>
      <input placeholder="buscar..." className="charactersList-input" type="text" value={search} onChange={(ev) => setSearch(ev.target.value)}/>
    </div>
  );
}
