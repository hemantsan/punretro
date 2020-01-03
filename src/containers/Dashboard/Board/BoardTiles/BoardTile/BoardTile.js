import React from 'react';
import {Link} from 'react-router-dom';
import classes from './BoardTile.module.css';

const BoardTile = props => (
  <Link to={`/board/${props.id}/${props.slug}`}>
    <div className={`card ${classes.BoardTile}`} key={props.id}>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src='https://bulma.io/images/placeholders/1280x960.png' alt='Board' />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-5'>{props.name}</p>
            <p className={`is-6 ${classes.UserName}`}>{props.username}</p>
            <time className='is-size-7'>{props.created_at}</time>
          </div>
        </div>

        <div className='content'>{props.description}.</div>
      </div>
    </div>
  </Link>
);

export default BoardTile;
