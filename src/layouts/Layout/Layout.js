import React from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../Footer/Footer';
import Hoc from '../../hoc/Hoc';

const Layout = props => {
  return (
    <Hoc>
      <Navbar />
      {props.children}
      <Footer />
    </Hoc>
  );
};
export default Layout;
