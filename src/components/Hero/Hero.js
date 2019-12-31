import React from 'react';
// import './Hero.css';

const Hero = () => (
    <section className='section is-paddingless'>
      <div className='container-fluid'>
        <figure className='image'>
          <img
            src='https://images.unsplash.com/photo-1540144965158-050c0b7769ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1351&q=80'
            alt='hero'
          />
        </figure>
        <div className="content">
            {/* <h2 className='title'>An easy and fun way to do Retro.</h2> */}
        </div>
      </div>
    </section>
)

export default Hero;