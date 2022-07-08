// react
import { useEffect, useState, useContext } from 'react';
import { useQuery } from 'react-query';

// components
import InputForm from '../input-form/input-form.component';
import Button from '../button/button.component';

// context
import { PlacesContext } from '../../contexts/places.context';

// utilities
import { getPlaces } from '../../utils/search-for-places';

//styles
import './search.styles.scss';

const defaultInputFields = {
  cityName: ''
}

const Search = () => {

  // handle input fields
  const [inputField, setInputField] = useState(defaultInputFields);
  const { cityName } = inputField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputField({ ...inputField, [name]: value });
  };

  // button's onClick handler 
  const onClickHandler = () => {
    sessionStorage.clear();
    setPhotos([]);
    setPlaces([]);
    refetch();
  }

  // places context
  // initial places state is sessionStorage.getItem('places')
  const { setPlaces, setPhotos } = useContext(PlacesContext);

  // support function to fetch places from server
  const fetchPlaces = async () => {
    const response = await getPlaces(cityName);
    return response;
  };

  // initialling useQuery
  const { isLoading, isError, data, error, refetch, isFetching } = useQuery('places', fetchPlaces, { enabled: false });

  // setting places data to the context and to the sessionStorage
  useEffect(() => {
    if (data) {
      setPlaces(data);
      sessionStorage.setItem('places', JSON.stringify(data));
    }
  }, [data, setPlaces]);

  return (
    <div className="search-container">
      <InputForm
        label='City'
        type='text'
        required
        onChange={handleChange}
        name='cityName'
        value={cityName}
      />
      <Button onClick={onClickHandler} children={'Search'} />
      {
        isLoading ? (
          <span>Loading...be patient...</span>
        ) : isError ? (
          <span>Oops, something went wrong, please check your city and try again)) {error.message}</span>
        ) : (
          <div>{isFetching ? 'Fetching...' : null}</div>
        )}
    </div>
  )
};

export default Search;