import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const navigateToRegistrationPage = () => {
    navigate('/registration');
  };

  return (
    <>
      <div className="container">
        <div className="left-column">
          <div className="form">
            <div className="form-header">
              <h2>Login to your account</h2>
            </div>

            <div className="field-label">
              <label>Email</label>
            </div>

            <div className="field-input">
              <input className="field" type="email" name="email" />
            </div>

            <div className="field-label">
              <label>Password</label>
            </div>

            <div className="field-input">
              <input className="field" type="password" name="password" />
            </div>
            <div className="link">
              <a href="">Forgot your password?</a>
            </div>
            <div className="button-login" style={{ display: 'block' }}>
              <input type="submit" value="Login" />
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="background-picture" style={{ borderStyle: 'solid' }}>
            <div className="text-wrapper">
              <div className="form-header">
                <p>Don't have an account yet?</p>
              </div>
              <Link to="/registration">
                <p onClick={navigateToRegistrationPage}>Register</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
