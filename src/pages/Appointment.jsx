import { useState } from "react";

function Appointment() {

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section className="section">

      <h1>Prendre rendez-vous</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nom complet"
          required
        />

        <input
          type="tel"
          placeholder="Téléphone"
          required
        />

        <select required>
          <option>Coupe Homme</option>
          <option>Coupe Femme</option>
          <option>Coupe Enfant</option>
          <option>Coloration</option>
        </select>

        <input
          type="date"
          required
        />

        <button
          type="submit"
          className="primary-btn"
        >
          Réserver
        </button>

      </form>

      {success && (
        <p className="success">
          Votre demande a été envoyée !
        </p>
      )}

    </section>
  );
}

export default Appointment;