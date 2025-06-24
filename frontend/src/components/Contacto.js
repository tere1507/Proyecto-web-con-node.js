// → formulario con validación
import React, { useState } from "react";//Se importa React y el Hook useState para manejar el estado del formulario y los mensajes de estado.
import { Link } from "react-router-dom";

//definimos el componente Contacto
function Contacto() {

    // Estados
    const [formulario, setFormulario] = useState({
        //Este es el estado principal del formulario. Guarda lo que escribe el usuario.
        //setFormulario actualiza los datos.
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    //Este otro estado muestra si el envío fue correcto o falló (✅ o ❌).
    const [estado, setEstado] = useState('');

    //Cuando cambia un campo del formulario
    const handleChange = e => {
        setFormulario({
            ...formulario,//esta función Copia lo que ya estaba (...formulario )
            [e.target.name]: e.target.value//Cada vez que el usuario escribe en un input. Actualiza el campo correcto gracias a [e.target.name]
            //Ejemplo: si escribes en el campo nombre, se actualiza solo formulario.nombre.
        });
    };

    //Cuando se envía el formulario
    const handleSubmit = async e => {
        e.preventDefault();//Detiene el comportamiento por defecto (que recargaría la página).

        try {
            const res = await fetch('http://localhost:3000/api/contacto/enviar', {//envia los datos del formulario al backend /api/contacto/enviar , usando POST
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },//Añade cabecera Content-Type: application/json.
                body: JSON.stringify(formulario)//Convierte el formulario a JSON (JSON.stringify).
            });

            if (res.ok) {
                //Si el backend responde OK (200), muestra un mensaje de éxito y limpia el formulario.
                setEstado('✅ Form sended correctly');
                setFormulario({ nombre: '', email: '', telefono: '', mensaje: '' });
            } else {
                //si no, muestra error
                setEstado('❌ Error while sending the form')
            }

            //Si ocurre un error de red o del servidor, lo atrapa aquí.
        } catch (error) {
            console.error('Error', error);
            setEstado('❌Error inesperado')
        }
    };

    return (
        //Muestra cada campo con su valor (value) vinculado al estado.
        //onChange={handleChange} permite actualizar el estado al escribir.
        //onSubmit={handleSubmit} activa el envío.
        //required valida en el navegador que no esté vacío.
        <div className="pagina contacto">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo electrónico" value={formulario.email} onChange={handleChange} required />
                <input type="tel" name="telefono" placeholder="Teléfono" value={formulario.telefono} onChange={handleChange} required />
                <textarea name="mensaje" placeholder="Tu mensaje..." value={formulario.mensaje} onChange={handleChange} required />
                <button type="submit">Enviar</button>
            </form>
            {estado && <p>{estado}</p>}

            {/* Aquí puedes colocar tus botones de navegación */}
            <nav className="galeria-nav">
                <Link to="/" className="boton-navegacion">Inicio</Link>
                <Link to="/galeria" className="boton-navegacion">Visit our Gallery</Link>
            </nav>
        </div>
        //estado, muestra un mensaje de éxito o error debajo del formulario
    );

}

export default Contacto;

//  Explicación:

// useState guarda los datos del formulario.

// En handleChange, se actualizan los campos.

// En handleSubmit, se envía el formulario con fetch() a tu backend (/api/contacto/enviar).

// Se muestra un mensaje de éxito o error.
