import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, CurriculumPage } from 'pages';
import { MainLayout } from 'layouts';
import 'styles/globals.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<CurriculumPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
