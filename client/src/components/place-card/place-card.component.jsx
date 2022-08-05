// react, redux
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
// selector
import { selectPhotos } from '../../store/photos/photos.selector';
// styles
import './place-card.styles.scss'

const PlaceCard = ({ place, fsq_id }) => {

  const { name, categories } = place;
  const { isLoaded, photos } = useSelector(selectPhotos);
  const photoLink = photos[fsq_id];

  return (
    <Link to={fsq_id}>
      <div className='category-container'>
        {isLoaded ? (
          <div
            className='background-image'
            style={{
              backgroundImage: `url(${photoLink})`
            }} />)
          : (<div className='background-image' />)
        }
        < div className='category-body-container'>
          <h2>{name}</h2>
          <span>{categories.map(category => category.name).join(' / ')}</span>
        </div>
      </div>
    </Link >
  );
};

export default PlaceCard;