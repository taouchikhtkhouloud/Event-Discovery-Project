import React from 'react';
import { categoryList, ratingList } from '../../constants';
import FilterListToggle from '../../components/FilterListToggle';
import CheckboxProton from '../../components/CheckboxProton';
import CheckboxProton1 from '../../components/CheckboxProton1';
import SliderProton from '../../components/SliderProton';
import './styles.css';

const FilterPanel = ({
    selectedCategory,
    selectCategory,
    selectedRating,
    selectedPrice,
    selectRating,
    cuisines,
    localisation,
    changeChecked,
    changeChecked1,
    changePrice,
  }) => (
    <div>
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      <div className='input-group'>
        <p className='label'>Cuisine</p>
        
        {cuisines.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      <div className='input-group'>
        <p className='label'>localisation</p>
        
        {localisation.map((localisation) => (
          <CheckboxProton1
            key={localisation.id}
            localisation={localisation}
            changeChecked1={changeChecked1}
          />
        ))}
      </div>
      <div className='input-group'>
        <p className='label-range'>Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />

      </div>
      <div className='input-group'>
        <p className='label'>Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
);

export default FilterPanel;