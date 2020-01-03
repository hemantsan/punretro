import React from 'react';
import AddPost from './Posts/AddPost/AddPost';
import Posts from './Posts/Posts';
import { withRouter } from 'react-router-dom';
import API from '../../../Helpers/api';
import classes from './Board.module.css';

class Board extends React.Component {
  state = {
    boardData: [],
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

  submitPostHandler = post => {
    const currentState = this.state.posts;
    const data = {
      id: Math.random(3),
      post: post,
      user: 'Hemant',
      dateTime: new Date().toLocaleString(),
      type: 'went-well',
    };

    currentState.push(data);
    this.setState({ posts: currentState });
  };

  deletePostHandler = postId => {
    const currentState = [...this.state.posts];
    this.setState({ posts: currentState.filter(post => post.id !== postId) });
  };

  componentDidMount() {
    const boardId = this.props.match.params.id;
    API.get(`boards/fetchById/${boardId}`).then(res => {
      this.setState({ boardData: res.data });
      console.log('this.state.boardData', this.state.boardData[0].name);
    });
  }

  render() {
    // console.log('id', )
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>{this.state.boardData.length > 0 && this.state.boardData[0].name}</h1>
          <p className={`subtitle ${classes.CreatedBy}`}>
            Created by: {this.state.boardData.length > 0 && this.state.boardData[0].username} @{' '}
            {this.state.boardData.length > 0 && this.state.boardData[0].created_at}
          </p>
          <div className='columns'>
            {this.state.boardData.length > 0 &&
              this.state.boardData[0].template_columns.map(column => (
                <div className='column' key={column.id}>
                  <nav className='panel'>
                    <p className='panel-heading'>{column.name}</p>
                    <Posts posts={this.state.posts} deletePostHandler={this.deletePostHandler} />
                    <AddPost onSubmitPost={this.submitPostHandler} />
                  </nav>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Board);
