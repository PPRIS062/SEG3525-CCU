function Services() {

  const services = [
    {
      name: "Coupe Homme",
      price: "25$",
      image: "/images/hommes.jpeg",
      description:
        "Coupe moderne ou classique adaptée à votre style."
    },
    {
      name: "Coupe Femme",
      price: "45$",
      image: "/images/femmes.jpeg",
      description:
        "Coupe personnalisée et conseils professionnels."
    },
    {
      name: "Coupe Enfant",
      price: "20$",
      image: "/images/enfants.jpg",
      description:
        "Une expérience agréable pour les plus jeunes."
    },
    {
      name: "Coloration",
      price: "70$",
      image: "/images/coloration.jpeg",
      description:
        "Coloration durable réalisée par des experts."
    },
    {
      name: "Mise en plis",
      price: "35$",
      image: "/images/miseenplis.jpeg",
      description:
        "Coiffure élégante pour toutes les occasions."
    }
  ];

  return (
    <section className="section">

      <h1>Nos Services</h1>

      <p className="services-intro">
        Découvrez nos prestations pour toute la famille.
      </p>

      <div className="cards">

        {services.map((service, index) => (
          <div className="card" key={index}>

            <img
              src={service.image}
              alt={service.name}
              className="service-image"
            />

            <h3>{service.name}</h3>

            <p>{service.description}</p>

            <p className="service-price">
              À partir de {service.price}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;