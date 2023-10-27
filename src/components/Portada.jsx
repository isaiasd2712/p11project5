import './Portada.css'
import Carrusel from '../assets/Carrusel.png'

function Portada() {
    return (
        <article>
            <img className='carrusel' src={Carrusel} alt='un carrusel'></img>
        </article>
    );

}

export default Portada;