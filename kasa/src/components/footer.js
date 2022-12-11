import footerLOGO from "../styles/asset/footerLOGO.png"

const Footer= () => {
  return (
      <div className="footer">
      <img src={footerLOGO}  className="footer_image" alt="footerimage"></img>
      <div className="footer_text">© 2020 Kasa. All rights reserved</div>
      </div>
    );
  };
  
  export default Footer;