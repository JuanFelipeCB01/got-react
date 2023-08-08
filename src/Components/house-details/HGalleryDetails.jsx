
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import HGalleryFooterInfo from './HGalleryFooterInfo';
import { MyContext } from '../../shared/MyContext';



export default function HGalleryDetails({houseInfo}) {
  const { t, setCharacterPage, setBottomBarShow } = useContext(MyContext);

  useEffect(() => {
setBottomBarShow(false)
  }, [])
  
    return (
        <div className="galleryDetail">
          <div className="galleryDetail-goBack">
            <Link onClick={()=>setBottomBarShow(true)}  to="/houses"><i class="fa-solid fa-arrow-left-long"></i>Volver </Link>
          </div>
          <div className="galleryDetail-divHouse">
            <img className="galleryDetail-div-img" src={`http://localhost:3005${houseInfo?.image}`} alt=""/>
          </div>
          <h2 className="galleryDetail-h2">{houseInfo?.name}</h2>
          <section className="galleryDetail-section">
            <HGalleryFooterInfo ulTitle={"Sede"} footerInfo={houseInfo?.settlement} />
            <HGalleryFooterInfo ulTitle={"Región"} footerInfo={houseInfo?.region} />
            <HGalleryFooterInfo ulTitle={"Alianzas"} footerInfo={houseInfo?.alliances.toString()} />
            <HGalleryFooterInfo ulTitle={"Religiones"} footerInfo={houseInfo?.religions.toString()} />
            <HGalleryFooterInfo ulTitle={"Fundación"} footerInfo={houseInfo?.foundation}/>
          </section>
        </div>
      );
}


