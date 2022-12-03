import React from "react";
import { Link } from "react-router-dom";


function PageNotFound() {
  return (
    <>
      <main className="main_notFound">
        <div className="error">404</div>
        <div className="message_error">Oups, La page que vous demandez n'existe pas.</div>
        <Link to="/" className="retour">Retourner sur la page d'acceuil</Link>
      </main>
    </>
  );
  }

  export default PageNotFound;