import React from 'react';
import AddPost from './Posts/AddPost/AddPost';
import Posts from './Posts/Posts';

class Board extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        post: 'Knowledge sharing (UI) of various newly created projects went well.',
        user: 'Hemant sankhla',
        dateTime: '1 Jan 2016, 11:09 PM',
        type: 'went-well',
      },
      {
        id: 2,
        post: 'Part - 1 of Cross Carline is on Production.  Good Communication with onshore POC (Rex)',
        user: 'Dhanraj',
        dateTime: '1 Jan 2016, 11:09 PM',
        type: 'to-improve',
      },
      {
        id: 3,
        post: 'Toyota Care app release went well. Thanks Upendra for support and coordination.',
        user: 'Gaurav rathod',
        dateTime: '1 Jan 2016, 11:09 PM',
        type: 'action-items',
      },
    ],
  };

  submitPostHandler = (post) => {
    const currentState = this.state.posts;
    const data = {
      id: Math.random(3),
      post: post,
      user: 'Hemant',
      dateTime: new Date().toLocaleString(),
      type: 'went-well'
    }

    currentState.push(data);
    this.setState({posts: currentState});
  }

  deletePostHandler = (postId) => {
    const currentState = [...this.state.posts];
    this.setState({posts: currentState.filter(post => post.id !== postId)});
  }

  render() {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <nav className='panel'>
                <p className='panel-heading'>Went Well</p>
                <Posts posts={this.state.posts} deletePostHandler={this.deletePostHandler}/>
                <AddPost onSubmitPost={this.submitPostHandler}/>
              </nav>
            </div>
            <div className='column'>
              <nav className='panel'>
                <p className='panel-heading'>To Improve</p>
                <Posts posts={this.state.posts} deletePostHandler={this.deletePostHandler}/>
                <AddPost onSubmitPost={this.submitPostHandler}/>
              </nav>
            </div>
            <div className='column'>
              <nav className='panel'>
                <p className='panel-heading'>Action Items</p>
                <Posts posts={this.state.posts} deletePostHandler={this.deletePostHandler}/>
                <AddPost onSubmitPost={this.submitPostHandler}/>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Board;
