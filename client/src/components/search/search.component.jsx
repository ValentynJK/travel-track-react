// react, redux
import { useEffect, useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

// components
import InputForm from '../input-form/input-form.component';
import Button from '../button/button.component';

// context
import { PlacesContext } from '../../contexts/places.context';

// utilities
import { getPlaces } from '../../utils/search-for-places';
import { getForecast } from '../../utils/search-for-forecast';
import { CATEGORIES } from '../../data/categories';

// store actions
import { setForecastRedux } from '../../store/forecast/forecast.action';

//styles
import './search.styles.scss';

const defaultInputFields = {
  cityName: '',
  category: ''
}

const Search = () => {

  const dispatch = useDispatch(); // initializes dispatch method

  // handle input fields
  const [inputField, setInputField] = useState(defaultInputFields);
  const { cityName, category } = inputField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  // places context
  // initial places state is sessionStorage.getItem('places')
  const { setPlaces, setPhotos, setForecast } = useContext(PlacesContext);

  // button's onClick handler 
  const onClickHandler = async () => {
    sessionStorage.clear();
    setPhotos([]);
    setPlaces([]);
    setForecast({});
    placesRefetch();
    weatherRefetch();
  }

  // support function to fetch places from server
  const fetchPlaces = async () => {
    const response = await getPlaces(cityName, category);
    return response;
  };

  // support function to fetch forecast from server
  const fetchForecast = async () => {
    const response = await getForecast(cityName);
    return response;
  };

  // initialling useQuery fot foursquare query
  const { isLoading: weatherIsLoading, isError: weatherIsError, data: weatherData, error: weatherError, refetch: weatherRefetch, isFetching: weatherIsFetching } = useQuery('weather', fetchForecast, { enabled: false });

  // initialling useQuery fot places query
  const { isLoading: placesIsLoading, isError: placesIsError, data: placesData, error: placesError, refetch: placesRefetch, isFetching: placesIsFetching } = useQuery('places', fetchPlaces, { enabled: false });

  // setting places data to the context and to the sessionStorage
  useEffect(() => {
    if (placesData) {
      setPlaces(placesData);
      sessionStorage.setItem('places', JSON.stringify(placesData));
    }
  }, [placesData, setPlaces]);

  // setting forecast data to the context 
  useEffect(() => {
    if (weatherData) {
      setForecast(weatherData);
      dispatch(setForecastRedux(weatherData));
      sessionStorage.setItem('forecast', JSON.stringify(weatherData));
    }
  }, [weatherData, setForecast]);

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
        {
          placesIsLoading ? (
            <span>Loading...be patient...</span>
          ) : placesIsError ? (
            <span>Oops, something went wrong, please check your city and try again)) {placesError.message}</span>
          ) : (
            <div>{placesIsFetching ? 'Fetching...' : null}</div>
          )}
        {
          weatherIsLoading ? (
            <span>Weather Loading...be patient...</span>
          ) : weatherIsError ? (
            <span>Oops, something went wrong with forecast, please check your city and try again)) {weatherError.message}</span>
          ) : (
            <div>{weatherIsFetching ? 'Fetching...' : null}</div>
          )}
      </div>
    </div>
  )
};

export default Search;