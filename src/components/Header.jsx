import './Header.css'
import Logo from '../assets/logo-deca.png'



function Header() {
    return (
        <header>

            <img className="decathlon" src={Logo} alt="Decathlon"></img>
            <input className="buscartxt" type="text" name="consulta" placeholder="Busca producto, deporte"></input>
            <button className="buscarbtn" ></button>

        </header>
    )

}
export default Header;