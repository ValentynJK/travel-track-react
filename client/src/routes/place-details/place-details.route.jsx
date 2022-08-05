// react, redux
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// components
import Tip from '../../components/tip/tip.component';
import Button from '../../components/button/button.component';
import Spinner from '../../components/spinner/spinner.component';
// selectors
import { selectTips } from '../../store/tips/tips.selectors';
import { selectPhotos } from '../../store/photos/photos.selector';
import { selectPlaces } from '../../store/places/places.selector';
// actions
import { fetchTipsAsync } from '../../store/tips/tips.action';
// styles
import './place-details.styles.scss';

const PlaceDetails = () => {

  const dispatch = useDispatch();
  const [isTipsShown, setIsTipsShown] = useState(false);
  const [placeTips, setPlaceTips] = useState([]);

  // getting fsq_id from path
  const { fsq_id } = useParams();

  const { tips, isTipsLoading, isTipsLoaded } = useSelector(selectTips);
  const { isLoaded, photos } = useSelector(selectPhotos);
  const places = useSelector(selectPlaces);
  const photoLink = photos[fsq_id]
  const place = places.find(place => place.fsq_id === fsq_id);

  // getting placeDetails
  const { categories, location, name, geocodes } = place;

  // go to google map handler
  const goToMap = () => {
    const linkToMap = `https://maps.google.com/?q=${geocodes && geocodes.main.latitude},${geocodes && geocodes.main.longitude}`;
    return window.open(linkToMap)
  }
  // searches for the tips in store
  // if tips found - setPlaceTips
  // if not - dispatches fetchTipsAsync
  const getTips = () => {
    const placeTips = tips.find(tip => tip.fsq_id === fsq_id);
    if (placeTips) {
      setPlaceTips(placeTips.placeTips)
    } else {
      dispatch(fetchTipsAsync(fsq_id))
    }
  }

  // setPlaceTips
  useEffect(() => {
    const placeTips = tips.find(tip => tip.fsq_id === fsq_id);
    if (placeTips) {
      setPlaceTips(placeTips.placeTips)
    }
  }, [isTipsLoaded])

  // hides tips
  const hideTips = () => {
    setIsTipsShown(false)
  };
  // shows tips
  const showTips = () => {
    setIsTipsShown(true)
  };
  // "Show Tips" button handler
  const onShowTipsHandler = () => {
    showTips();
    getTips();
  }

  return (
    <div className="place-details-container">
      <div className="place-photo-container">
        <img src={isLoaded ? photoLink : <Spinner />} alt="" />
      </div>
      <div className="place-details-text-container">
        <h2 className="place-name">{name}</h2>
        <span className='category'>CATEGORY: {place && categories.map(category => category.name).join(' / ')}</span>
        <br />
        <span className='address'>ADDRESS: {place && location.formatted_address}</span>

        <div className='location' >
          <Button type='submit' children={'See on map'} buttonType='inverted' onClick={goToMap} />
          {isTipsShown ? (
            <Button type='submit' children={'Hide Tips'} onClick={hideTips} />
          ) : (
            <Button type='submit' children={'Show Tips'} buttonType='inverted' onClick={onShowTipsHandler} />
          )}
        </div>
        <div className='tips-container'>
          <h3>Tips from visitors</h3>
          {isTipsLoading && isTipsShown ? <Spinner /> : (placeTips && isTipsShown && placeTips.map(tip => <Tip text={tip.text} key={tip.id} />))}
        </div>
      </div>
    </div >
  )
};

export default PlaceDetails;