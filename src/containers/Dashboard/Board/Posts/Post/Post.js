import React from 'react';
import classes from './Post.module.css';

const Post = props => (
  <div className={`panel-block ${classes.PostContainer} post__${props.id}`}>
    <div className={`content ${classes.Post}`}>
      {props.content}
      <br />
      <div className={`content ${classes.PostControls}`}>
        <time dateTime='12-27-2019' className={`${classes.DateTime}`}>
          {props.created_at}
        </time>
        <div className='buttons has-addons'>
          <button className='button is-small' onClick={() => props.editPost(props.id)}>
            <span className='icon is-small'>
              <i className='fas fa-align-left'></i>
            </span>
            <span>Edit</span>
          </button>

          <button className='button is-small' onClick={() => props.deletePost(props.id)}>
            <span className='icon is-small'>
              <i className='fas fa-trash'></i>
            </span>
            <span>Remove</span>
          </button>
        </div>
      </div>
      <div className='content'>
        <span className={classes.UserName}>{props.username}</span>
      </div>
    </div>
  </div>
);

export default Post;
