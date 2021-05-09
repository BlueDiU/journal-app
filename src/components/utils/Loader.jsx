import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <section className="loader-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Loader;
