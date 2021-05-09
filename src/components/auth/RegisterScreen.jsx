import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

function RegisterScreen() {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'josue',
    email: 'josue@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(
        startRegisterWithEmailPasswordName(email, password, name)
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('The name is required'));

      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('The email is not valid'));

      return false;
    } else if (password !== password2 || password < 5) {
      dispatch(
        setError(
          'The password should have a least at 5 characters or the passwords is not equals'
        )
      );

      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        {msgError && (
          <div className="auth__alert-error">{msgError}</div>
        )}

        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />

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

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Register
        </button>

        <Link to="/auth/login" className="link mt-5">
          Already register?
        </Link>
      </form>
    </>
  );
}

export default RegisterScreen;
