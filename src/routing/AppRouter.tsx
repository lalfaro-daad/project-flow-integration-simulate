import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PrivateLayout from '../layouts/PrivateLayout';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Help from '../pages/Help';

export default function AppRouter() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

      {/* Grupo de rutas privadas */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}
