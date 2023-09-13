import Cosmetologia from '../assets/Cosmetologia.jpg'

export const Hero = () => {
    return (
        <>
            <div className='hero'>
                <picture className='hero__imagen'>
                    <img src={ Cosmetologia } alt="" />
                </picture>
                <h1 className='hero__text'>Estética <br/> Jesica Llorens</h1>
            </div>
        </>
    )
}