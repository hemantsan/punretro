import React from 'react';
import Hoc from '../../../../hoc/Hoc';
import { Link } from 'react-router-dom';
import API from '../../../../Helpers/api';
import { slugify } from '../../../../Helpers/util';
import Notification from '../../../../components/Notification/Notification';
import { withRouter } from 'react-router-dom';

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  state = {
    templates: null,
    loading: null,
    notify: false,
  };

  getTemplates = () => {
    API.get('templates').then(res => this.setState({ templates: res.data }));
  };

  async componentDidMount() {
    await this.getTemplates();
  }

  submitBoard = event => {
    this.setState({ loading: true });
    event.preventDefault();
    const slug = slugify(event.target.elements.name.value); 
    const board = {
      name: event.target.elements.name.value,
      slug: slug,
      description: event.target.elements.description.value,
      template: event.target.elements.template.value,
      createdBy: 1,
    };
    
    API.post('/boards', board)
      .then(res => {
        console.log(res.data);
        this.setState({ notify: true });
        setTimeout(() => {
          this.setState({ loading: false, notify: false });
          this.props.history.push(`/board/${res.data.insertId}/${slug}`);
        }, 3000);
      })
      .catch(err => console.log(err));
  };

  render() {
    let templateOptions = '';

    templateOptions =
      this.state.templates &&
      this.state.templates.map(key => {
        return (
          <option key={key.id} value={key.id}>
            {key.name}
          </option>
        );
      });

    return (
      <Hoc>
        {this.state.notify ? <Notification msg='Board has been created successfully. Redirecting to board in 3 seconds.'/> : ''}
        <form action='/' onSubmit={this.submitBoard} ref={this.formRef}>
          <div className='field'>
            <label className='label'>Board name *</label>
            <div className='control'>
              <input className='input' type='text' placeholder='Board name' name='name' />
            </div>
          </div>

          <div className='field'>
            <label className='label'>Description (optional)</label>
            <div className='control'>
              <textarea className='textarea' placeholder='Description' name='description'></textarea>
            </div>
          </div>

          <div className='field'>
            <label className='label'>Template *</label>
            <div className='select is-fullwidth'>
              <select name='template'>{templateOptions}</select>
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control'>
              <button className={`button ${this.state.loading ? 'is-loading' : 'is-link'}`}>Submit</button>
            </div>
          </div>
        </form>
      </Hoc>
    );
  }
}

export default withRouter(CreateBoard);
