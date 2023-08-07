import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function HGalleryFooterInfo({footerInfo, ulTitle}) {
  return (
    <div className="galleryFooterInfo">
      <ul className="galleryFooterInfo-ul">
        <h4 className="galleryFooterInfo-ul-h3">{ulTitle}</h4>
        <SimpleBar style={{ height: 200, borderBottom: "2px solid white", scrollbarColor: "blue",}}>
          <li>{footerInfo}</li>
        </SimpleBar>
      </ul>
    </div>
  );
}