//página principal
//Importamos React y useEffect/useState para manejar estado y efectos
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';// Importamos Link desde react-router-dom para poder crear enlaces internos sin recargar la pagina es decir los botones para movernos entre paginas 
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

//Creamos el componente principal llamado Inicio
function Inicio() {
  //sesion news whit JSON
  //✅ Es una desestructuración del resultado de useState().
  const [noticias, setNoticias] = useState([])//hook que crea una variable de estado llamada noticias inicialmente vacia, y la funcion setNoticia para cambiar ese estado 

  //se ejecuta solo una vez al ser llamado desde el backend
  useEffect(() => {
    fetch('http://localhost:3000/api/noticias')//ruta del archivo json en el backend
      .then(res => res.json())// Convertimos la respuesta en JSON
      .then(data => setNoticias(data)) // Guardamos los datos en el estado
      .catch(err => console.error('Error al cargar la pagina', err))//si hay errore los mostrara
  }, []);


  return (
    <div className="pagina inicio">
      <div className="fondo-animado"></div>
      <div className="contenido">
        <h1 className="titulo-principal">❤ Welcome to AXTE ✨</h1>
        <p className="descripcion">Cosmética natural que mima tu piel con amor 💖</p>

        <h2 className="subtitulo">📰 Últimas Noticias</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="noticias-carousel"
        >
          {noticias.map((n, i) => (
            <SwiperSlide key={i}>
              <div className="noticia">
                <img src={n.imagen} alt={n.titulo} className="noticia-imagen" />
                <div className="noticia-texto">
                  <h3>{n.titulo}</h3>
                  <p>{n.descripcion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <nav className="galeria-nav">
          <Link to="/" className="boton-navegacion">Inicio</Link>
          <Link to="/contacto" className="boton-navegacion">Contact us</Link>
        </nav>
      </div>
    </div>
  );
}


export default Inicio;

// Carrusel automático de noticias 📰

// Cada noticia se desliza cada 4 segundos (autoplay)

// Fondo pastel con brillo suave

// Compatible con móvil y escritorio