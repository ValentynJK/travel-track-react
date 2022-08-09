// react-router-dom
import { useParams } from "react-router-dom";
// components
import Forecast from "../../components/forecast/forecast.component";
import Places from "../../components/places/places.component";
// styles
import './search-results.styles.scss'

const SearchResult = () => {
  const { city } = useParams();

  return (
    <>
      <div className="greeting-container">
        <h2>Welcome to the city of {city.toLocaleUpperCase()}</h2>
      </div>
      <Forecast />
      <Places />
    </>
  )
};

export default SearchResult;

