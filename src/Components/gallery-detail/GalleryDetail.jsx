import { useContext, useState } from "react";
import GalleryFooterInfo from "./GalleryFooterInfo";
import { Link } from "react-router-dom";
import { MyContext } from "../../shared/MyContext";

export default function GalleryDetail({ characterInfo, houseInfo }) {
  const { t, setCharacterPage } = useContext(MyContext);
  const unknown = [t("unknown")];
  return (
    <div className="galleryDetail">
      <div className="galleryDetail-goBack">
        <Link onClick={()=>setCharacterPage(true)} to="/characters"><i className="fa-solid fa-arrow-left-long"></i>Volver</Link>
      </div>
      <div className="galleryDetail-div">
        <img className="galleryDetail-div-img" src={`http://localhost:3005${characterInfo?.image}`} alt=""/>
      </div>
      <h2 className="galleryDetail-h2">{characterInfo?.name}</h2>
      <section className="galleryDetail-section">

      {/* no muestra  Casa si no tiene y pone unknown si no se conocen padres o hermanos*/}
        {houseInfo[0] &&   <GalleryFooterInfo ulTitle={t("houses")}  imgInfo={true}  />}
        <GalleryFooterInfo ulTitle={t("aliances")}  footerInfo={characterInfo?.alliances} />
        <GalleryFooterInfo ulTitle={t("episodes")}  footerInfo={characterInfo?.episodes} />
        {characterInfo?.parents.length > 0 ? <GalleryFooterInfo ulTitle={t("father")} footerInfo={characterInfo?.parents} /> : <GalleryFooterInfo ulTitle={t("father")} footerInfo={unknown}/>}
        {characterInfo?.siblings.length > 0 ? <GalleryFooterInfo ulTitle={t("siblings")}  footerInfo={characterInfo?.siblings} /> : <GalleryFooterInfo ulTitle={t("siblings")} footerInfo={unknown}/>}
        <GalleryFooterInfo ulTitle={t("titles")}  footerInfo={characterInfo?.titles} />

                                   {/* si queremos que no se muestre ni el título ni el contenido en caso de que no haya información */}
    {/* {houseInfo[0] &&   <GalleryFooterInfo ulTitle={"Casa"}  imgInfo={true}  />}
    { characterInfo?.alliances.lenght > 0 &&  <GalleryFooterInfo ulTitle={"Aliances"} footerInfo={characterInfo?.alliances} />}
    {characterInfo?.episodes.lenght > 0 &&  <GalleryFooterInfo ulTitle={"Episodes"} footerInfo={characterInfo?.episodes} />}
    {characterInfo?.parents.lenght > 0 && <GalleryFooterInfo ulTitle={"Father"} footerInfo={characterInfo?.parents} />}
    { characterInfo?.siblings.lenght > 0 &&   <GalleryFooterInfo ulTitle={"Descendants"} footerInfo={characterInfo?.siblings} />}
    {characterInfo?.titles.lenght > 0   && <GalleryFooterInfo ulTitle={"Titles"} footerInfo={characterInfo?.titles} />} */}
      </section>
    </div>
  );
}
