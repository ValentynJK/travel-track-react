// redux
import { useSelector } from 'react-redux';
// components
import PlaceCard from '../place-card/place-card.component';
import Spinner from '../spinner/spinner.component';
// selectors
import { selectPlaces } from '../../store/places/places.selector';
// styles
import './places.styles.scss'

const Places = () => {

  const { places, isLoaded, isLoading } = useSelector(selectPlaces);

  if (isLoading) {
    return <Spinner />
  } else if (places !== undefined && places.length && !isLoading) {
    return (
      <div className='places-container'>
        {places.map(place => <PlaceCard place={place} key={place.fsq_id} fsq_id={place.fsq_id} />)}
      </div>
    )
  } else if (!isLoading && isLoaded) {
    return <h2>...Something went wrong try to check spelling and search again</h2>
  }
};

export default Places;