// components
import Search from '../../components/search/search.component';
import Places from '../../components/places/places.component'
import Forecast from '../../components/forecast/forecast.component';

const HomePage = () => {
  return (
    <>
      <Search />
      <Forecast />
      <Places />
    </>
  )
};

export default HomePage;