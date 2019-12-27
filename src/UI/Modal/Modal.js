import React from 'react';

const Modal = props => (
  <div className={`modal ${props.show ? 'is-active' : ''}`}>
    <div className='modal-background'></div>
    <div className='modal-card'>
      <header className='modal-card-head'>
        <p className='modal-card-title'>{props.title}</p>
        <button className='delete' aria-label='close'></button>
      </header>
      <section className='modal-card-body'>{props.children}</section>
      <footer className='modal-card-foot'>
        <button className='button'>Cancel</button>
      </footer>
    </div>
  </div>
);

export default Modal;