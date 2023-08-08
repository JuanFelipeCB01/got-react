import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function HGalleryFooterInfo({footerInfo, ulTitle}) {
  return (
    <div className="galleryFooterInfo">
      <ul className="galleryFooterInfo-ul">
        <h4 className="galleryFooterInfo-ul-h3">{ulTitle}</h4>
        <SimpleBar className="scroll-bar-house" >
          <li>{footerInfo}</li>
        </SimpleBar>
      </ul>
    </div>
  );
}