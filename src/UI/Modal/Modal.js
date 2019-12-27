import React from 'react';

class Modal extends React.Component {
  // state = {
  //   show: false,
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.profileImage !== prevState.profileImage) {
  //     return { show: true };
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== this.props.show;
  // }

  // closeModal() {
  //   this.setState({ show: false });
  // }

  render() {
    return (
      <div className={`modal ${this.props.show ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>{this.props.title}</p>
            <button className='delete' aria-label='close'></button>
          </header>
          <section className='modal-card-body'>{this.props.children}</section>
          <footer className='modal-card-foot'>
            <button className='button is-pulled-right' type='button'>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
