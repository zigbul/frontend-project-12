import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import LoginPage from './LoginPage.jsx';
import NotFountPage from './NotFoundPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
