// -- Este archivo contiene el codigo del maquetado de la pagina de inicio de sesion
// -- Se debe de descomentar el fragmento con el comentario '********* MAQUETADO LOGIN *********' para poder visualizarlo en la web al levantar el proyecto (yarn dev)
// -- tambien descomentar el import logobeefast (es el logotipo)
// -- comentar los siguientes imports: useState, useDispatch, login, useNavigate, el 'handleLogin' y las constantes de estado, dispatch y navigate
// -- por último comentar el fragmento de codigo con la leyenda ' ********* LOGIN RUSTICO ********* '

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import logobeefast from '../assets/logo-beefast.png';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      navigate('/');
    } else {
      alert('Por favor ingresa un nombre de usuario.');
    }
  };

  return (


    // Begin :: ********* LOGIN RUSTICO ********* 
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          background: '#0077cc',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Entrar
      </button>
    </div>
    // End:: ********* LOGIN RUSTICO ********* 

    // Begin:: ********* MAQUETADO LOGIN *********
    // <div className="min-h-screen flex flex-col bg-[#0B5EFF]">
    //   <div className="relative bg-[#0B5EFF] h-65 flex items-end justify-center">
    //     <div className="absolute bottom-0 translate-y-1/2 bg-white rounded-full shadow-lg w-70 h-70 flex items-center justify-center">
    //       <img
    //         src={logobeefast}
    //         alt="Logo"
    //         className="w-46 h-46"
    //       />
    //     </div>
    //     <div className="absolute top-[127%] left-[44%] w-11 h-11 bg-[#F9CB00] rounded-full"></div>
    //     <div className="absolute top-[50%] right-[40%] w-14 h-14 bg-[#1E2E4C] rounded-full"></div>
    //     <div className="absolute top-[40%] left-[45%] w-5 h-5 bg-white rounded-full"></div>
    //     <div className="absolute top-[134%] right-[43%] w-5 h-5 bg-[#0B5EFF] rounded-full"></div>
    //     <div className="absolute top-[90%] left-[40%] w-5 h-5 bg-[#005B8B] rounded-full"></div>
    //   </div>
    //   <div className="flex-1 flex flex-col rounded-t-[30px] bg-white items-center">
    //     <h1 className="text-6xl font-extrabold text-blue-600 mt-44">Welcome Back</h1>
    //     <p className="text-gray-600 mt-2 text-2xl font-semibold">Hello there, sign in to continue</p>
    //   </div>
    // </div>
    // End:: ********* MAQUETADO LOGIN *********
  );
}
