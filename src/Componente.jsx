
const string = 'Esto es un texto'
const number = 123456
const array = ['Holis', 119, 'fecha']
const boolean = true
const funcion = () => 1 + 1
const objeto = { nombre: 'Jose', titulos: 0 }
const fecha = new Date()

export const Componente = ({ prop1, prop2 }) => {
    return (
        <>
            <h1>Para poner varias lineas</h1>
            <h4> {string}</h4>
            <h4> {number}</h4>
            <h4> {array}</h4>
            <h4> {funcion()}</h4>
            <h4> {prop1}</h4>
            <h4> {prop2 + 1}</h4>
            <h4> {prop2 + 2}</h4>
            <h4> {prop2 + 3}</h4>

        </>
    )
}

