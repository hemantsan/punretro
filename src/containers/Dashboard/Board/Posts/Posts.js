import React from 'react';
import Hoc from '../../../../hoc/Hoc';
import Post from '../Posts/Post/Post';

const Posts = (props) => {
  return (
    <Hoc>
      {props.posts.map((post, idx) => {
        return <Post {...post} key={props.id} deletePost={props.deletePostHandler}/>
      })}
    </Hoc>
  )
};

export default Posts;
