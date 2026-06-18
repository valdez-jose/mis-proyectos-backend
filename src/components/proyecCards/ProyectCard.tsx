import styles from './ProyectCard.module.css'

const ProyectCard = () => {
  return (
    <section className={styles.contenedorProyectCard}>
      <div className={styles["contenedor-titulo-principal"]}>
        <h2 className={styles["titulo-principal"]}>Mis proyectos Backend</h2>
      </div>

      {/* Proyectos */}
      <div className={styles.contenedorProyectos}>
        {/* Proyecto: Turismo en San Luis */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Animales Silvestre</h3>
          <p>
            Desarrollé Turismo en San Luis, una plataforma web interactiva construida con React, 
            TypeScript y React Router. 
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://github.com/valdez-jose/fastapi-rest-animales-silvestre" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver en GitHub
            </a>
             <a href="https://fastapi-rest-animales-silvestre.onrender.com/docs" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver API(Swagger)
            </a>
          </div>
        </div> 

        {/* Proyecto: Vevero */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Plantas Silvestres</h3>
          <p>
            Vivero El Paso es una aplicación web moderna desarrollada con React y TypeScript,
             diseñada para la visualización, filtrado y gestión de un catálogo digital de plantas
              y productos de jardinería. 
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://github.com/valdez-jose/fastapi-apirest-plantas-silvestre" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver en GitHub
            </a>

            <a href="https://fastapi-apirest-plantas-silvestre.onrender.com/docs" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver API(Swagger)
            </a>
          </div>
        </div>

        {/* Proyecto: Bicicleteria */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Lista de Compras</h3>
          <p>
            Desarrollé Bicicletería, una solución web para la gestión de productos y servicios de ciclismo utilizando Angular. Implementé una estructura modular con rutas hijas, consumo de servicios para el manejo de datos y formularios reactivos, garantizando una experiencia de usuario fluida y un código altamente mantenible.
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://github.com/valdez-jose/express-ts-lista-compra-api" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver en GitHub
            </a>
            <a href="https://express-ts-lista-compra-api.onrender.com/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver API(Swagger)
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProyectCard
