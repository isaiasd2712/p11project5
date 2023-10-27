import { useState, useEffect } from 'react'; //Api externa
import imagenes from '../Imagenes.json'; //Api interna
import './Imagenes.css'

function Imagenes() {
    return (
        <div className='imgseparador'>
            <h2>Productos Recomendados</h2>
            <div className="fetchdiv">
            {imagenes.products.map((product) => {
                return (

                    <div className='container' key={product.id}>
                        <img className="fetch" src={product.imagen} alt="Ropa" />
                        <p>€{product.precio}</p>
                        <p>{product.categoria}</p>
                    </div>

                );
            })}
            </div>
        </div>
    );


}

export default Imagenes;