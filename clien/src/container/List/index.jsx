import React from 'react';
import ListItem from './ListItem';
import { NavLink } from 'react-router-dom';
import './styles.css';

const List = ({ list }) => (
  <div className='list-wrap'>

    {list.map((item) => (
    <NavLink to={`/oneEvent/${item.id}`}>
      <ListItem key={item.id} item={item} />
    </NavLink>
    ))}
  </div>
);

export default List;