export default function HGalleryFooterInfo({footerInfo, ulTitle}) {
  return (
    <div className="galleryFooterInfo">
      <ul className="galleryFooterInfo-ul">
        {ulTitle}
        {console.log("wanted", footerInfo)}
        <div>
          {footerInfo}
        </div>
      </ul>
    </div>
  );
}