// react
import { useContext } from 'react';
import { Link } from 'react-router-dom'

// context
import { PlacesContext } from '../../contexts/places.context';

// utils
import { getPhoto } from '../../utils/search-for-photos';

// styles
import './place-card.styles.scss'

const PlaceCard = ({ place, fsq_id }) => {

  // context data
  const { photos } = useContext(PlacesContext);

  // searching for the right photo by fsq id
  const photoObject = photos.find(photo => photo.fsq_id === fsq_id);

  const { name, location, categories } = place;
  // console.log(categories)
  // const iconData = categories[0].icon;
  // const iconLink = `${iconData.prefix}120${iconData.suffix}`;

  return (
    <Link to={fsq_id}>
      <div className='category-container'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${photoObject && photoObject.link})`,
          }}
        />
        <div className='category-body-container'>
          <h2>{name}</h2>
          <span>{categories.map(category => category.name).join(' / ')}</span>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;