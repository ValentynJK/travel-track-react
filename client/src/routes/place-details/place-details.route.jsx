import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';

// contexts
import { PlacesContext } from '../../contexts/places.context';
import { getPlaceTips } from '../../utils/search-for-tips';

import './place-details.styles.scss';
import Tip from '../../components/tip/tip.component';

const PlaceDetails = () => {

  // getting info from Context
  const { places, photos, tips, setTips } = useContext(PlacesContext)

  // getting fsq_id from path
  const { fsq_id } = useParams();

  // getting photo
  const photoObject = photos.find(photo => photo.fsq_id === fsq_id);

  // getting placeDetails
  const placeDetails = places.find(place => place.fsq_id === fsq_id);
  const { categories, location, name, geocodes } = placeDetails;

  // CHANGE THIS TO useQuery
  const getTipsHandler = async () => {
    const placeTips = await getPlaceTips(fsq_id);
    setTips(placeTips);
  }
  useEffect(() => {
    getTipsHandler();
  }, [])

  return (
    <div className="place-details-container">
      <div className="place-photo-container">
        <img src={photoObject ? photoObject.link : 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bn6v1zdg28ctya2hn5avly5gr2bbk21x8fjmwcysf&rid=200w.gif&ct=g'} alt="" />
      </div>
      <div className="place-details-text-container">
        <h2 className="place-name">{name}</h2>
        <span className='category'>CATEGORY: {placeDetails && categories.map(category => category.name).join(' / ')}</span>
        <br />
        <span className='address'>ADDRESS: {placeDetails && location.formatted_address}</span>

        <div className='location' >
          <a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${geocodes && geocodes.main.latitude},${geocodes && geocodes.main.longitude}`}>Link</a>

        </div>
        <div className='tips-container'>
          <h3>Tips from visitors</h3>
          {tips && tips.map(tip => <Tip text={tip.text} key={tip.id} />)}
        </div>
      </div>
    </div >
  )
};

export default PlaceDetails;



/*
To create a google map location

https://maps.google.com/?q=<lat>,<lng>

*/