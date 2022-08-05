// redux
import { useSelector } from 'react-redux';
// components
import PlaceCard from '../place-card/place-card.component';
// selectors
import { selectPlaces } from '../../store/places/places.selector';
// styles
import './places.styles.scss'

const Places = () => {

  const places = useSelector(selectPlaces);

  return (
    <div className='places-container'>
      {places !== undefined && places.length ? (places.map(place => <PlaceCard place={place} key={place.fsq_id} fsq_id={place.fsq_id} />)) : (
        <div className="places-not-rendered">
          <h2>Make you first search</h2>
        </div>
      )}
    </div>
  )
};

export default Places;