import GalleryFooterInfo from "./GalleryFooterInfo";
import { Link } from "react-router-dom";

export default function GalleryDetail({ characterInfo, houseInfo }) {
  return (
    <div className="galleryDetail">
      <div className="galleryDetail-goBack">
        <Link to="/characters">{"<--- Volver"} </Link>
      </div>
      <div className="galleryDetail-div">
        <img className="galleryDetail-div-img" src={`http://localhost:3005${characterInfo?.image}`} alt=""/>
      </div>
      <h2 className="galleryDetail-h2">{characterInfo?.name}</h2>
      <section className="galleryDetail-section">
     {houseInfo[0] &&   <GalleryFooterInfo ulTitle={"Casa"}  imgInfo={true}  />}
        <GalleryFooterInfo ulTitle={"Aliances"} footerInfo={characterInfo?.alliances} />
        <GalleryFooterInfo ulTitle={"Episodes"} footerInfo={characterInfo?.episodes} />
        <GalleryFooterInfo ulTitle={"Father"} footerInfo={characterInfo?.parents} />
        <GalleryFooterInfo ulTitle={"Descendants"} footerInfo={characterInfo?.siblings} />
        <GalleryFooterInfo ulTitle={"Titles"} footerInfo={characterInfo?.titles} />
      </section>
    </div>
  );
}
