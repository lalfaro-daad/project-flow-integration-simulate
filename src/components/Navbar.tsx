import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import {
  Button,
  MegaMenu,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
export default function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (

   <MegaMenu>
      <NavbarBrand href="/">
        <img alt="" src="../assets/favicon.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </NavbarBrand>
      <div className="order-2 hidden items-center md:flex">
        <Button onClick={handleLogout}>Cerrar sesión</Button>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <Link to="/" style={{ color: 'black' }}>Inicio</Link>
        <Link to="/profile" style={{ color: 'black' }}>Perfil</Link>
        <Link to="/settings" style={{ color: 'black' }}>Configuración</Link>
        <Link to="/help" style={{ color: 'black' }}>Ayuda</Link>
      </NavbarCollapse>
    </MegaMenu>

  );
}
