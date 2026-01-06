import { HashRouter, Routes, Route } from 'react-router-dom';
import Modules from './app/routes/Modules';
import ModuleDetail from './app/routes/ModuleDetail';


const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Modules />} />
      <Route path="/modules/:id" element={<ModuleDetail />} />
      <Route path="*" element={<Modules />} />
    </Routes>
  </HashRouter>
);

export default Router;
