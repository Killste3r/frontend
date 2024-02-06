import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const navigateToRegistrationPage = () => {
    navigate('/registration');
  };
  const navigateToLoginPage = () => {
    navigate('/loginpage');
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
      <Link to="/registration">
        <button onClick={navigateToRegistrationPage}>RegisterPage</button>
      </Link>
      <Link to="/loginpage">
        <button onClick={navigateToLoginPage}>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
