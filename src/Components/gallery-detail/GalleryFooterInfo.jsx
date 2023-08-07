import React, { useContext } from 'react'
import { ImgContext } from '../characters-detail-comp/CharactersDetail';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
export default function GalleryFooterInfo({footerInfo, ulTitle, imgInfo}) {
  const { houses } = useContext(ImgContext);
  return (
    <div className="galleryFooterInfo">
      <ul className="galleryFooterInfo-ul">
       <h4 className="galleryFooterInfo-ul-h3"> {ulTitle}</h4>
    <SimpleBar style={{maxHeight:200, borderBottom:"2px solid white", scrollbarColor: "blue"}}>
        {footerInfo?.map((char, index) => (
           <li key={index}>{char}</li>
        ))}
        <div className='houses'>
          {imgInfo && <img className="houses-image" src={`http://localhost:3005${houses[0]?.image}`}/>}
        </div>
        </SimpleBar>
      </ul>

    </div>
  );
}
