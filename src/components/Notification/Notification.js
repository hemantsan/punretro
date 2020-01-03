import React from 'react';
import classes from './Notification.module.css';

const Notification = (props) => (
  <div className={`notification is-warning ${classes.CustomNotification}`}>
    {/* <button className='delete'></button> */}
    {props.msg}
  </div>
);

export default Notification;
