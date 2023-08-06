import { Route, Routes } from "react-router-dom";

import { Characters, Chronology, Home, Houses } from "../Pages";
import { CharactersDetail } from "../Components";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharactersDetail />} />
      <Route path="/houses" element={<Houses/>} />
      <Route path="/chronology" element={<Chronology/>} />
    </Routes>
  );
}
