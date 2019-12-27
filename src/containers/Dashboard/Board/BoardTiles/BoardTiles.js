import React from 'react';
import BoardTile from './BoardTile/BoardTile';

const BoardTiles = () => (
  <section className='section'>
    <div className='container'>
      <div className='columns'>
        <div className='column is-3'>
          <BoardTile />
        </div>
        <div className='column is-3'>
          <BoardTile />
        </div>
        <div className='column is-3'>
          <BoardTile />
        </div>
        <div className='column is-3'>
          <BoardTile />
        </div>
      </div>
    </div>
  </section>
);

export default BoardTiles;
