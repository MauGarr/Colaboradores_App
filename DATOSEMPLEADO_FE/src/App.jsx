import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ColaboradorPage } from './pages/ColaboradorPage';
import { ColaboradorFormPage } from './pages/ColaboradorFormPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/colaboradores" />} />
        <Route path="colaboradores" element={<ColaboradorPage />} />
        <Route path="colaboradores-nuevo" element={<ColaboradorFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;