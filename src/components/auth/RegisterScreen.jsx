import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { types } from '../types/types';

function RegisterScreen() {
  const dispatch = useDispatch();

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
      console.log('Valido');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch({
        type: types.uiSetError,
        payload: 'The name is not valid',
      });
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch({
        type: types.uiSetError,
        payload: 'The email is not valid',
      });
      return false;
    } else if (password !== password2 || password < 5) {
      dispatch({
        type: types.uiSetError,
        payload:
          'The password should have a least at 5 characters or the passwords is not equals',
      });
      return false;
    }

    dispatch({
      type: types.uiRemoveError,
    });

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">ERROR</div>

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
