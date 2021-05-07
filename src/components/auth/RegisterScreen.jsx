import React from 'react';
import { Link } from 'react-router-dom';

function RegisterScreen() {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="confirm"
          className="auth__input"
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
