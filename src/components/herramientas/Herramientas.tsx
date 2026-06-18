import styles from "./Herramientas.module.css";

const Herramientas = () => {
  return (
    <section className={styles.contenedorHerramientas}>
      {/* Ahora usamos punto (.) en lugar de corchetes */}
      <div className={styles.contenedorTituloPrincipal}>
        <h3 className={styles.tituloPrincipal}>Mis herramientas</h3>
      </div>
        
      {/* Contenedor flex para que se centren de manera fluida */}
      <div className={styles.contenedorCardsHerramientas}>
        <div className={styles.cardHerramienta}><h3>Node.js</h3></div>
        <div className={styles.cardHerramienta}><h3>Typescript</h3></div>
        <div className={styles.cardHerramienta}><h3>Express</h3></div>
        <div className={styles.cardHerramienta}><h3>Nest.js</h3></div>
        <div className={styles.cardHerramienta}><h3>FastApi</h3></div>
         <div className={styles.cardHerramienta}><h3>PostgreSQL</h3></div>
          <div className={styles.cardHerramienta}><h3>MySQL</h3></div>
           <div className={styles.cardHerramienta}><h3>MongoDB</h3></div>
            <div className={styles.cardHerramienta}><h3>Postman</h3></div>
      </div>
    </section>
  );
};

export default Herramientas;