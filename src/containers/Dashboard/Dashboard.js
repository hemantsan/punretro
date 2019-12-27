import React from 'react';
import PageHeader from '../../components/PageHeader';
import classes from './Dashboard.module.css';
import Modal from '../../UI/Modal/Modal';
import Hoc from '../../hoc/Hoc';
import CreateButton from './Board/CreateBoard/CreateBoard';
import BoardTiles from './Board/BoardTiles/BoardTiles';

class Dashboard extends React.Component {
  state = {
    show: false,
  };

  openCreateModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Hoc>
        <section className='section'>
          <div className='container'>
            <PageHeader link='/dashboard' currentPage='Dashboard' heading='Dashboard' />
            <div className='columns'>
              <div className='column is-4 is-offset-8'>
                <button
                  onClick={this.openCreateModal}
                  type='button'
                  className={`button is-black is-outlined is-pulled-right ${classes.CreateButton}`}>
                  <span className='icon'>
                    <i className='fas fa-plus'></i>
                  </span>
                  <span>CREATE BOARD</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <BoardTiles />

        <Modal title='Create Board' show={this.state.show}>
          <CreateButton />
        </Modal>
      </Hoc>
    );
  }
}

export default Dashboard;
