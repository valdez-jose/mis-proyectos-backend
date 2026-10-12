import styles from './ProyectCard.module.css'

const ProyectCard = () => {
  return (
    <section className={styles.contenedorProyectCard}>
      <div className={styles["contenedor-titulo-principal"]}>
        <h2 className={styles["titulo-principal"]}>Mis proyectos Backend</h2>
      </div>

      {/* Contenedor de las Cards */}
      <div className={styles.contenedorProyectos}>
        
        {/* Proyecto: Animales silvestres */}
        <div className={styles.cardProyecto}>
          <div className={styles.infoProyecto}>
            <h3>Proyecto: Animales Silvestres</h3>
            <p>
              API REST desarrollada con FastAPI y Python como servicio de datos para catálogos de fauna silvestre. Ofrece endpoints listos para consumir desde React o Angular, 
              facilitando la consulta interactiva de especies animales y su información de conservación.
            </p>
          </div>
          
          <div className={styles.footerCard}>
            <div className={styles["contenedor-enlace"]}>
              <a href="https://github.com/valdez-jose/fastapi-rest-animales-silvestre" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver en GitHub
              </a>
              <a href="https://fastapi-rest-animales-silvestre.onrender.com/docs" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver API(Swagger)
              </a>
            </div>
            <p className={styles.notaRender}>
              <strong>Nota:</strong> La API está alojada en Render. El primer acceso puede tardar unos segundos mientras el servidor se inicia.
            </p>
          </div>
        </div> 

        {/* Proyecto: Plantas silvestres */}
        <div className={styles.cardProyecto}>
          <div className={styles.infoProyecto}>
            <h3>Proyecto: Plantas Silvestres</h3>
            <p>
             API REST desarrollada con FastAPI y Python como servicio de datos para catálogos de flora silvestre.
              Ofrece endpoints listos para consumir desde React o Angular, facilitando la consulta interactiva de especies vegetales,
              sus características y su estado de conservación.
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles["contenedor-enlace"]}>
              <a href="https://github.com/valdez-jose/fastapi-apirest-plantas-silvestre" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver en GitHub
              </a>
              <a href="https://fastapi-apirest-plantas-silvestre.onrender.com/docs" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver API(Swagger)
              </a>
            </div>
            <p className={styles.notaRender}>
              <strong>Nota:</strong> La API está alojada en Render. El primer acceso puede tardar unos segundos mientras el servidor se inicia.
            </p>
          </div>
        </div>

        {/* Proyecto: peluqueria caninas */}
        <div className={styles.cardProyecto}>
          <div className={styles.infoProyecto}>
            <h3>Proyecto: Peluqueria caninas</h3>
            <p>
              API REST desarrollada con NestJS y Node.js para la gestión de servicios veterinarios y adopciones caninas. Permite administrar registros de mascotas, 
              historiales médicos y control de refugios con una arquitectura escalable y estructurada.
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles["contenedor-enlace"]}>
              <a href="https://github.com/valdez-jose/api-rest-caninas" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver en GitHub
              </a>
              <a href="https://api-rest-caninas.onrender.com" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver API(Swagger)
              </a>
            </div>
            <p className={styles.notaRender}>
              <strong>Nota:</strong> La API está alojada en Render. El primer acceso puede tardar unos segundos mientras el servidor se inicia.
            </p>
          </div>
        </div>

         {/* Proyecto: Vinoteca */}
        <div className={styles.cardProyecto}>
          <div className={styles.infoProyecto}>
            <h3>Proyecto: Vinoteca</h3>
            <p>
              API REST desarrollada con FastAPI y Python para la gestión e inventario de productos de vinoteca.
              Permite administrar la información de vinos, controlar el stock disponible y gestionar catálogos
              con un rendimiento de alta velocidad y documentación interactiva.
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles["contenedor-enlace"]}>
              <a href="https://github.com/valdez-jose/api-rest-caninas" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver en GitHub
              </a>
              <a href="https://api-rest-caninas.onrender.com" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver API(Swagger)
              </a>
            </div>
            <p className={styles.notaRender}>
              <strong>Nota:</strong> La API está alojada en Render. El primer acceso puede tardar unos segundos mientras el servidor se inicia.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProyectCard;
