import React, { useState } from "react";
import './login.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    //llamada a una API para autenticar al usuario
  const response =  await fetch("http://localhost:8080/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    
    // console.log(`Username: ${username} Password: ${password}`);
    // Se puede agregar aquí la lógica para redirigir al usuario a la página principal después de iniciar sesión
    const data = await response.json();
    console.log(data)
    localStorage.setItem('miToken', data.accesToken);

     return response.ok ? window.location.href = "/home" : alert(data.message);
  };

  // const data = ()=>{
  //   window.location = '/Home';
  // }
  // const showError = ()=>{
  //   'error'
  // }


  return (
    <>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
