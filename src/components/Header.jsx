import Logo from '../assets/Logo_vector.png'

export const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__navbar">
                    <picture className="header__img">
                        <img
                        src={ Logo } alt="Logo pagina" />
                    </picture>
                    <div className="burguer__button"><a href="">Links</a></div>
                    <div className="burguer__button"><a href="">Links</a></div>
                    <div className="burguer__button"><a href="">Links</a></div>
                    <div className="burguer__button"><a href="">Links</a></div>
                    <div className="burguer__button"><a href="">Links</a></div>
                    <div className="burguer__button"><a href="">Links</a></div>
                </nav>
                <nav className="burguer">
                    <picture className="burguer__img">
                    <img
                    src={ Logo } alt="Logo pagina" />
                    </picture>
                    <label for="menu" className="burguer__menu">
                        <div className="burguer__spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                    <input type="checkbox" id="menu" />
                    <div className="burguer__navbar">
                        <div className="burguer__button"><a href="">Links</a></div>
                        <div className="burguer__button"><a href="">Links</a></div>
                        <div className="burguer__button"><a href="">Links</a></div>
                        <div className="burguer__button"><a href="">Links</a></div>
                        <div className="burguer__button"><a href="">Links</a></div>
                        <div className="burguer__button"><a href="">Links</a></div>
                    </div>
                </nav>
            </header>

        </>
    )
}