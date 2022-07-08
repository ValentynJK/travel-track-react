// react
import { useContext, useEffect } from 'react';

// components
import PlaceCard from '../place-card/place-card.component';

// context
import { PlacesContext } from '../../contexts/places.context';

// utils
import { getPhoto } from '../../utils/search-for-photos';

// styles
import './places.styles.scss'

const Places = () => {

  // playing with context
  const { places, setPhotos, photos } = useContext(PlacesContext);

  // support function to fetch photo links from server
  const fetchPhotoLink = async (fsq_id) => {
    const response = await getPhoto(fsq_id);
    return response;
  };

  const generatePhotosArray = async () => {
    if (!photos.length) {
      const array = await Promise.all(places.map(async (place) => {
        const link = await fetchPhotoLink(place.fsq_id);
        return { "fsq_id": place.fsq_id, link }
      }))
      setPhotos(array);
      sessionStorage.setItem('photos', JSON.stringify(array));
    }
  };

  useEffect(() => {
    generatePhotosArray()
  }, [places]);

  return (
    <div className='places-container'>
      {places.length ? (places.map(place => <PlaceCard place={place} key={place.fsq_id} fsq_id={place.fsq_id} />)) : (
        <div className="places-not-rendered">
          <h2>Make you first search</h2>
        </div>
      )}
    </div>
  )
};

export default Places;