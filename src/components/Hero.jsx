import imagenes from '../assets/imagenes'

export const Hero = () => {
    return (
        <>
            <div className='hero'>
                <picture className='hero__imagen'>
                    <img src={imagenes.Cosmetologia} alt="" />
                </picture>
                <h1 className='hero__text'>Estética <br /> Jesica Llorens</h1>
            </div>
            <a className='whatsapp' href="https://wa.me/c/5492645061309">
                <picture className='whatsapp__imagen'>
                    <img src={imagenes.wpp} alt="logo whatsapp" />
                </picture>
            </a>
            <h1 className='hero__title'>Tratamientos</h1>
        </>
    )
}