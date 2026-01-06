import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modules from './app/routes/Modules';
import ModuleDetail from './app/routes/ModuleDetail';

const basename = import.meta.env.BASE_URL || '/';

const Router = () => (
  <BrowserRouter basename={basename}>
    <Routes>
      <Route path="/" element={<Modules />} />
      <Route path="/modules/:id" element={<ModuleDetail />} />
      <Route path="*" element={<Modules />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
