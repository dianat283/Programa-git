import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// componente de inicio de sesion
const LoginForm = () => {
  const [credentials, setCredentials] = useState({ nombre: "", contraseña: "" });
  const navigate = useNavigate();
  // <button onClick={() => {navigate(-1);}}/>

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ nombre, email, contraseña }),
      body: JSON.stringify({credentials}),
    });

    const data = await response.json();
    console.log(data);

    if (data.autenticado) {
      console.log("Validado Correctamente")
      navigate("/noticias");
    }
  };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h2>Inicio de Sesión</h2>
  //     <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
  //     <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required />
  //     <button type="submit">Ingresar</button>
  //   </form>
  // );

  return (
    
    <div>
      <h2>Inicio de Sesión</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default LoginForm;

