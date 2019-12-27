import React from 'react';
import PageHeader from '../../components/PageHeader';

const SignUp = () => (
  <section className='section'>
    <div className='container'>
      <PageHeader link='/sign-up' currentPage='Sign up' heading='Register new account'/>
      <div className='columns'>
        <div className='column is-4 is-offset-4'>
          <form action='/' method='post'>
            <div class='box'>
              <div className='field'>
                <label className='label'>Full Name</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Your full name' />
                </div>
              </div>

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
                  <button className='button is-primary is-fullwidth'>Submit</button>
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

export default SignUp;
