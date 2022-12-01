import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "../components/Accordion.js";
import Carrousel from "../components/Courrousel.js";
import Rating from "../components/Rating.js";
import Footer from "../components/footer.js";
import Navbar from "../components/Navbar.js";


function Logement({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/PageNotFound");
    }
  }, [logement]);

  return (

    logement && (
      <>
        <Navbar />
        {<Carrousel pictures={logement.pictures} />}


        <main className="main_fiche">
          <div className="partie1">

            <div className="presentation">

              <div className="titre_logement">
                {logement.title}
              </div>
              <div className="lieux">
                {logement.location}
              </div>
              <div className="tag">
                {logement.tags.map((el) => (
                  <div className="top_tags">{el}</div>
                ))}
              </div>


            </div>
            <div className="host">
              <div className="host_nom">{logement.host.name}
                <img src={logement.host.picture} className="host_photo" alt="portrait" />
              </div>

              <div className="etoile">
                {<Rating rating={logement.rating} />}
              </div>


            </div>

          </div>

          <div className="partie2">
            <div className="bottom-logement">
              {<Accordion title={"Description"} content={logement.description} />}
              {<Accordion title={"Équipement"} content={logement.equipments} />}
            </div>

          </div>

        </main>
        <Footer />





      </>












    ))
}


export default Logement;
