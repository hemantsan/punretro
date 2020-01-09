import React from 'react';
import Hoc from '../../../../hoc/Hoc';
import Post from '../Posts/Post/Post';

const Posts = (props) => {
  return (
    <Hoc>
      {props.posts.map((post, idx) => {
        return post.template_column_id === props.templateColumnId && <Post {...post} key={post.id} deletePost={props.deletePostHandler}/>
      })}
    </Hoc>
  )
};

export default Posts;
