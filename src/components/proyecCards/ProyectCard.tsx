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
              Catálogo digital interactivo y API REST para registrar, monitorear y 
              conservar información clave sobre especies de nuestra fauna silvestre.
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
              Una enciclopedia verde interactiva. Ideal para amantes de la naturaleza que quieren registrar plantas silvestres, 
              aprender sobre el medio ambiente y cuidar la vegetación local.
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

        {/* Proyecto: Lista de compras */}
        <div className={styles.cardProyecto}>
          <div className={styles.infoProyecto}>
            <h3>Proyecto: Lista de Compras</h3>
            <p>
              API REST para el control de gastos en el supermercado. Permite gestionar listas de compras, calcular el total de los productos y
              ayudarte a mantenerte dentro de tu presupuesto antes de llegar a la caja.
            </p>
          </div>

          <div className={styles.footerCard}>
            <div className={styles["contenedor-enlace"]}>
              <a href="https://github.com/valdez-jose/express-ts-lista-compra-api" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
                Ver en GitHub
              </a>
              <a href="https://express-ts-lista-compra-api.onrender.com/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
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
