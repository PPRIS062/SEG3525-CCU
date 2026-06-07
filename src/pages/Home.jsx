import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-content">

          <h1>
            Révélez votre style avec Élégance Coiffure
          </h1>

          <p>
            Salon de coiffure pour femmes, hommes et enfants.
          </p>

          <Link to="/appointment">
            <button className="primary-btn">
              Prendre rendez-vous
            </button>
          </Link>

        </div>

      </section>

      <section className="section">

        <h2>Pourquoi nous choisir ?</h2>

        <div className="cards">

          <div className="card">

            <img
              src={`${import.meta.env.BASE_URL}images/professionnels.jpg`} 
              alt="Coiffeurs professionnels"
              className="card-image"
            />

            <h3>Professionnels</h3>

            <p>
              Une équipe qualifiée à votre écoute pour vous conseiller.
            </p>

          </div>

          <div className="card">

            <img
              src={`${import.meta.env.BASE_URL}images/produits.jpg`} 
              alt="Produits capillaires"
              className="card-image"
            />

            <h3>Produits de qualité</h3>

            <p>
              Des soins professionnels adaptés à tous les types de cheveux.
            </p>

          </div>

          <div className="card">

            <img
              src={`${import.meta.env.BASE_URL}images/accueil.jpg`}
              alt="Accueil chaleureux"
              className="card-image"
            />

            <h3>Accueil chaleureux</h3>

            <p>
              Une ambiance conviviale pour toute la famille.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;