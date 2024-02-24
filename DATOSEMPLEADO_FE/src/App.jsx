import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ColaboradorPage } from './pages/ColaboradorPage';
import { ColaboradorFormPage } from './pages/ColaboradorFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/colaboradores" />} />
          <Route path="/colaboradores" element={<ColaboradorPage />} />
          <Route path="/colaboradores-nuevo" element={<ColaboradorFormPage />} />
          <Route path="/colaboradores/:idcolaborador" element={<ColaboradorFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;