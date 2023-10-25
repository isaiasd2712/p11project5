
import './Header.css'
import Logo from'../assets/logo-deca.png'


function Header() {
    return (
        <header>    
            <img src={Logo} alt="Decathlon"></img>
            <input className="buscartxt" type="text" name="consulta" placeholder="Busca producto, deporte"></input>
            <button  className="mi-boton-con-imagen" ></button>
            <nav>
              <a href="http//">Deportes</a> 
              <a href="http//">Mujer</a> 
              <a href="http//">Hombre</a> 
              <a href="http//">Equipamiento</a> 
              <a href="http//">Nutrición y Salud</a> 
              <a href="http//">Descuentos</a> 
            </nav>
        </header>
    )
    
}
export default Header;