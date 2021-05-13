import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import {
  startGoogleLogin,
  startLoginEmailPass,
} from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

function LoginScreen() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPass(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('The email is not valid'));

      return false;
    } else if (!password || password < 5) {
      dispatch(setError('The password is incorred'));

      return false;
    }

    dispatch(removeError());

    return true;
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        {msgError && (
          <div className="auth__alert-error">{msgError}</div>
        )}

        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        {/* google  */}
        <div className="auth__social-networks">
          <p>Login with social networks</p>

          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </div>
  );
}

export default LoginScreen;
