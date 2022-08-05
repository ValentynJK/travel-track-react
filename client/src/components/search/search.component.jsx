// react, redux
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// components
import InputForm from '../input-form/input-form.component';
import Button from '../button/button.component';
// utilities
import { CATEGORIES } from '../../data/categories';
// store actions and selectors
import { fetchForecastAsync } from '../../store/forecast/forecast.action';
import { clearPlaces, fetchPlacesAsync } from '../../store/places/places.action';
import { clearPhotos } from '../../store/photos/photos.action';
//styles
import './search.styles.scss';

const defaultInputFields = {
  cityName: '',
  category: ''
};

const Search = () => {

  const dispatch = useDispatch(); // initializes dispatch method

  // handle input fields
  const [inputField, setInputField] = useState(defaultInputFields);
  const { cityName, category } = inputField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  // button's onClick handler
  // dispatches places search and forecast search
  const onClickHandler = async () => {
    if (!cityName) return; // prevents api call without city name
    dispatch(clearPlaces());
    dispatch(clearPhotos())
    dispatch(fetchPlacesAsync(cityName, category))
    dispatch(fetchForecastAsync(cityName));
  }

  return (
    <div className="search">
      <div className="search-container">
        <InputForm
          label='City'
          type='text'
          required
          onChange={handleChange}
          name='cityName'
          value={cityName}
        />
        <div className='group'>
          <label htmlFor='category'></label>
          <select className='form-input' name="category" id="category" onChange={handleChange} defaultValue={'default'}>
            <option value={'default'} disabled>Select a category</option>
            {Object.keys(CATEGORIES).map(category => (
              <option key={category} value={CATEGORIES[category]}>{category}</option>
            ))}
          </select>
        </div>
        <Button onClick={onClickHandler} children={'Search'} />
      </div>
    </div>
  )
};

export default Search;