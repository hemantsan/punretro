import React from 'react';
import Hoc from '../../../../hoc/Hoc';
import { Link } from 'react-router-dom';
import API from '../../../../Helpers/api';
import { snapshotToArray } from '../../../../Helpers/util';

class CreateBoard extends React.Component {
  state = {
    templates: null,
  };

  getTemplates = () => {
    API.get('https://punretro-3b8e4.firebaseio.com/template.json').then(res => {
      this.setState({ templates: Object.values(res.data) });
    });
  };

  async componentDidMount() {
    await this.getTemplates();
  }

  render() {
    let templateOptions = '';

    this.state.templates &&
      this.state.templates.map(template => {
        let templateText = '';
        Object.keys(template).map(t => (templateText += t + ' | '));
        templateOptions += <option value=''>{templateText}</option>;
        console.log(templateOptions)
        templateText = '';
      });

    return (
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

        <div className='field'>
          <label className='label'>Description (optional)</label>
          <div className='select'>
            <select>{templateOptions}</select>
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
  }
}

export default CreateBoard;
