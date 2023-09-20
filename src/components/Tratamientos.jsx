import Marco from '../assets/marco.png'

export const Tratamientos = ({ clase, nombre, descripcion, imagenTratamiento, altImagen }) => {
    return (
        <>
            <article className="tratamiento">
                <div className="tratamiento__box">
                    <h1 className="tratamiento__nombre"> {nombre} </h1>
                    <p className="tratamiento__descripcion"> {descripcion} </p>
                </div>
                <div className="tratamiento__imagenes">
                    <picture className='tratamiento__marco'>
                        <img src= { Marco } alt="" />
                    </picture>
                    <picture className={`tratamiento__imagen ${clase}`}>
                        <img
                        src={`./src/assets/${imagenTratamiento}`}
                        alt = {altImagen}
                        />
                    </picture>
                </div>
            </article>
        </>
    )
}