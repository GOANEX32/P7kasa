import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion.js";
import Carrousel from "../components/Carrousel.js";
import Rating from "../components/Rating.js";
import Footer from "../components/footer.js";
import PageNotFound from "./PageNotFound.js";


function Logement({ data }) {
  const { id } = useParams();
  const logement = data.find((logement) => logement.id === id);

  return (
    logement ? (
      <>

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
                {logement.tags.map((el, index) => (
                  <div className="top_tags" key={index}>{el}</div>
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
    ) : (
      <PageNotFound />
    ))
}


export default Logement;
