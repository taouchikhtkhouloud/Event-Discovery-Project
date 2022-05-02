import React, { useEffect, useState } from "react";
import FilterPanel from '../container/FilterPanel'
import SearchBar from '../container/SearchBar'
import List from '../container/List'
import EmptyView from '../components/EmptyView'
import { dataList } from '../constants'
import './styles.css'
export default function Evenement() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([100, 5000]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'technologie' },
    { id: 2, checked: false, label: 'hobbies et passions' },
    { id: 3, checked: false, label: 'entreprise et carriere' },
  ]);
  const [localisation, setLocalisation] = useState([
    { id: 1, checked: false, label: 'rabat' },
    { id: 2, checked: false, label: 'casablanca' },
    { id: 3, checked: false, label: 'tanger' },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };
  const handleChangeChecked1 = (id) => {
    const localisationStateList = localisation;
    const changeCheckedLocalisation = localisationStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLocalisation(changeCheckedLocalisation);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }
// localisation Filter
const localisationChecked = localisation
.filter((item) => item.checked)
.map((item) => item.label.toLowerCase());

if (localisationChecked.length) {
updatedList = updatedList.filter((item) =>
  localisationChecked.includes(item.localisation)
);
}
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines,localisation, searchInput, selectedPrice]);

  return (
    <div className='home'>
      {/* Search Bar */}
      <div className="home_search">

      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      </div>
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            localisation={localisation}
            changeChecked1={handleChangeChecked1}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  )
}
