//→ muestra los datos (viviendas, casas…)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';// Importa Link para la navegación


//definimos el componente Galeria
function Galeria() {
    const [imagenes, setImagenes] = useState([]);//Usa useState([]) para declarar el estado inicial imagenes como un arreglo vacío, setImagenes es la función para actualizar ese estado.


    //Obtener imágenes al cargar la página
    useEffect(() => {//con un arreglo vacío ([]) hace que esto se ejecute solo una vez, cuando se carga el componente.

        // Llama al backend para obtener las imágenes
        fetch('http://localhost:3000/api/galeria')//hace una solicitud HTTP al backend local.
            .then(response => response.json())//convienrte la respuesta en JSON
            .then(data => setImagenes(data)) //guarda el resultado en el estado
            .catch(error => console.error('Error cargando la galeria:', error));//captura errores si falla la peticion

    }, []);

    //Renderizado
    return (
        <div className='pagina galeria'>
         <h2>Galería de Proyectos</h2>
            <div className='galeria-grid'>
                {imagenes.length > 0 ? ( // Añadimos una verificación para que no intente mapear un array vacío antes de cargar
                    imagenes.map((img, index) => (
                        <div key={index} className='galeria-item'>
                            <img src={img.imagen} alt={img.titulo}></img>
                            <p>{img.titulo}</p>
                        </div>
                    ))
                ) : (
                    <p>Cargando imágenes...</p> // Mensaje mientras las imágenes se cargan
                )}
            </div>

            {/* Aquí puedes colocar tus botones de navegación */}
            <nav className="galeria-nav">
                <Link to="/" className="boton-navegacion">Inicio</Link>
                <Link to="/contacto" className="boton-navegacion">Contact us</Link>
            </nav>
            
        </div>
        
    );
}


export default Galeria

// 🔍 Explicación:

// Usa useEffect para hacer la llamada a tu backend (/api/galeria).

// Muestra un listado de imágenes con título.

// Usa un map() para recorrer el array de datos y mostrar cada imagen.

// Recuerda tener una ruta /api/galeria activa en tu backend que devuelva un JSON como:



// Obtiene datos (imágenes) desde un backend usando fetch.

// Los guarda en un estado local (useState).maneja estados

// Los muestra en pantalla como una galería de imágenes.

// Usa Hooks: useState y useEffect.



// Este componente:

// Carga imágenes automáticamente al montarse.

// Guarda esas imágenes en el estado.

// Muestra las imágenes en una galería.

// Usa useState, useEffect, fetch, map.