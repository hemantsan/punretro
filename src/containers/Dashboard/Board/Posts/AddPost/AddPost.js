import React from 'react';
import Hoc from '../../../../../hoc/Hoc';

class AddPost extends React.Component {
  state = {
    post: '',
  };

  enterPost(event) {
    this.setState({ post: event.target.value });
  }

  render() {
    return (
      <Hoc>
        <div className='panel-block' id={`addpost_${this.props.templateColumnId}`}>
          <p className='control'>
            {this.props.toggle && this.props.templateColumnId === this.props.visibleTemplateColumnId ? (
              <textarea
                onChange={event => this.enterPost(event)}
                onInput={event => this.enterPost(event)}
                className='input'
                placeholder='Write post'
                autoFocus={true}
                defaultValue={this.props.editingPostContent}></textarea>
            ) : null}
          </p>
        </div>
        <p className='panel-tabs'>
          {!(this.props.toggle && this.props.templateColumnId === this.props.visibleTemplateColumnId) ? (
            <a onClick={this.props.add}>Add</a>
          ) : (
            <Hoc>
              <a
                onClick={() => this.props.submit(this.state.post, this.props.templateColumnId)}
                className='has-text-success'>
                Submit
              </a>
              <a onClick={this.props.cancel} className='has-text-danger'>
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
