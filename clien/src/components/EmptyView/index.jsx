import React from 'react';
import './styles.css';
import gif from '../../assets/images/empty.gif'

const EmptyView = () => (
  <div className='emptyView-wrap'>
    <img src={gif} alt='' />
  </div>
);

export default EmptyView;
