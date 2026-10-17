import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Modules from './app/routes/Modules';
import ModuleDetail from './app/routes/ModuleDetail';


const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Modules />} />
      <Route path="/modules/ai-api-sdlc" element={<Navigate to="/modules/ai-api-qa-sdlc" replace />} />
      <Route path="/modules/ai-qa-sdlc" element={<Navigate to="/modules/ai-api-qa-sdlc" replace />} />
      <Route path="/modules/:id" element={<ModuleDetail />} />
      <Route path="*" element={<Modules />} />
    </Routes>
  </HashRouter>
);

export default Router;
