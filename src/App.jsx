import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './Pages/Registration';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
