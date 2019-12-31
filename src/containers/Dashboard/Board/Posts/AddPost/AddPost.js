import React from 'react';
import Hoc from '../../../../../hoc/Hoc';

class AddPost extends React.Component {
  state = {
    toggleControls: true,
    post: '',
  };

  add(flag) {
    this.setState({ toggleControls: flag });
  }

  submit(flag) {
    this.props.onSubmitPost(this.state.post);
    this.setState({ toggleControls: flag });
  }

  cancel(flag) {
    this.setState({ toggleControls: flag });
  }

  enterPost(event) {
    this.setState({post: event.target.value});
  }

  render() {
    return (
      <Hoc>
        <div className='panel-block'>
          <p className='control'>
            {!this.state.toggleControls ? <textarea onInput={(event) => this.enterPost(event)} className='input' placeholder='Write post' autoFocus={true}></textarea> : null }
          </p>
        </div>
        <p className='panel-tabs'>
          {this.state.toggleControls ? (
            <a onClick={() => this.add(false)}>Add</a>
          ) : (
            <Hoc>
              <a onClick={() => this.submit(true)} className='has-text-success'>
                Submit
              </a>
              <a onClick={() => this.cancel(true)} className='has-text-danger'>
                Cancel
              </a>
            </Hoc>
          )}
        </p>
      </Hoc>
    );
  }
}

export default AddPost;
