import React from 'react';
import BoardTile from './BoardTile/BoardTile';

const BoardTiles = props => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {Object.values(props).map(board => (
            <div className='column is-3' key={board.id}>
              <BoardTile {...board}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardTiles;
