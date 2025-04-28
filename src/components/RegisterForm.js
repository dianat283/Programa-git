import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  // return (
  //   <div>
  //     <h2>Registro de Usuario</h2>
  //     <form>
  //       <input type="text" placeholder="Nombre" required />
  //       <input type="email" placeholder="Correo electrónico" required />
  //       <input type="password" placeholder="Contraseña" required />
  //       <button type="submit">Registrarse</button>
  //     </form>
  //     <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
  //   </div>
    const [user, setUser] = useState({
      nombre: "",
      email: "",
      contraseña: "",
    });

    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Usuario registrado:", user);
    };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
      <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
