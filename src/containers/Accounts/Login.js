import React from 'react';
import PageHeader from '../../components/PageHeader';

const Login = () => (
  <section className='section'>
    <div className='container'>
      <PageHeader link='/login' currentPage='login' heading='Login here'/>
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <form action='/' method='post'>
            <div class='box'>
              <div className='field'>
                <label className='label'>Email ID</label>
                <div className='control'>
                  <input className='input' type='email' placeholder='Email' />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input className='input' type='password' placeholder='*****' />
                </div>
              </div>

              <div className='field is-grouped'>
                <div className='control is-expanded'>
                  <button className='button is-primary is-fullwidth'>Login</button>
                </div>
                <div className='control is-expanded'>
                  <button className='button is-danger is-light is-fullwidth'>Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
