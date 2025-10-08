import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#282c34',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white' }}>Inicio</Link>
        <Link to="/profile" style={{ color: 'white' }}>Perfil</Link>
        <Link to="/settings" style={{ color: 'white' }}>Configuración</Link>
        <Link to="/help" style={{ color: 'white' }}>Ayuda</Link>
      </div>
      <button
        onClick={() => dispatch(logout())}
        style={{
          background: 'crimson',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Cerrar sesión
      </button>
    </nav>
  );
}
