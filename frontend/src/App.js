//import logo from './logo.svg';
import './App.css';//importa el css de estilos para que aplique a toda la app

//Importa componentes del paquete react-router-dom que te permiten crear rutas:
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importa los componentes que se mostrarán en cada ruta (cada uno es como una "pantalla" diferente).Siempre los nombre de los componentes son con mayuscula la primera
import Inicio from './components/Inicio';
import Galeria from './components/Galeria';
import Contacto from './components/Contacto';



//Define la función App, que es el componente raíz de tu aplicación.
function App() {
  return (
    <BrowserRouter>
      {/* Fondo animado global */}
      <div className="fondo-animado"></div>

      {/* Aquí van las rutas como si fueran distintas páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
