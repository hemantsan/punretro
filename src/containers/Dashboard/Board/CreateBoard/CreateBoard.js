import React from 'react';
import Hoc from '../../../../hoc/Hoc';
import { Link } from 'react-router-dom';

const CreateBoard = () => (
  <Hoc>
    <div className='field'>
      <label className='label'>Board name</label>
      <div className='control'>
        <input className='input' type='text' placeholder='Board name' />
      </div>
    </div>

    <div className='field'>
      <label className='label'>Description (optional)</label>
      <div className='control'>
        <textarea className='textarea' placeholder='Description'></textarea>
      </div>
    </div>

    <div className='field is-grouped'>
      <div className='control'>
        <Link className='button is-link' to='/board'>
          Submit
        </Link>
      </div>
    </div>
  </Hoc>
);

export default CreateBoard;
