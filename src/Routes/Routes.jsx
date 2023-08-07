import { Route, Routes } from "react-router-dom";

import { Characters, Chronology, Home, Houses } from "../Pages";
import { CharactersDetail} from "../Components";
import HouseDetails from "../Components/house-details/HouseDetails";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
export default function Routers() {
  return (
        <SimpleBar className="scroll-bar">
    <Routes>
      <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<Characters />} />

      <Route path="/characters/:name" element={<CharactersDetail/>} />
      <Route path="/houses" element={<Houses/>} />
      <Route path="/houses/:name" element={<HouseDetails/>} />
      <Route path="/chronology" element={<Chronology/>} />
    </Routes>
        </SimpleBar>
  );
}
