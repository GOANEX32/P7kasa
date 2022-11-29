import Card from "../components/Card";

import Footer from "../components/footer";
import image_home from "../styles/asset/home_image.png"





const Home = () => {
  

  return (

    <div className="home ">
      <div className="home_section">

     <img src={image_home} className="home_image" />
     </div>
      <Card/>
      <Footer/>

      
    </div>
  )
    
    
}

export default Home;