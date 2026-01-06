import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modules from './app/routes/Modules';
import ModuleDetail from './app/routes/ModuleDetail';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Modules />} />
      <Route path="/modules/:id" element={<ModuleDetail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
