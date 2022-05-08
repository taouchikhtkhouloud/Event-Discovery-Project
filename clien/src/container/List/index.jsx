import React from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
import './styles.css';

const List = ({ list }) => (
    <Link to='/oneEvent'>
  <div className='list-wrap'>

    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
    </Link>
);

export default List;