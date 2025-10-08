import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function PrivateLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1.5rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
