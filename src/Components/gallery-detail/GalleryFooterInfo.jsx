import React, { useContext, useState } from 'react'
import { ImgContext } from '../characters-detail-comp/CharactersDetail';

export default function GalleryFooterInfo({footerInfo, ulTitle, imgInfo}) {
  const { houses } = useContext(ImgContext);
  return (
    <div className="galleryFooterInfo">
      <ul className="galleryFooterInfo-ul">
        {ulTitle}
        {footerInfo?.map((char, index) => (
            <li key={index}>{char}</li>
        ))}
        <div className='houses'>
          {imgInfo &&<img className="houses-image" src={`http://localhost:3005${houses[0]?.image}`}/>}
        </div>
      </ul>
    </div>
  );
}
