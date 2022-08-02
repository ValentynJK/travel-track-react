// react, redux
import { useSelector } from 'react-redux';
// store selectors
import { selectForecast } from '../../store/forecast/forecast.selector';
// components
import Spinner from '../../components/spinner/spinner.component'
import ForecastContainer from './forecast.container';

const Forecast = () => {
  const { forecast, isLoaded, isLoading } = useSelector(selectForecast); // select forecast from the store

  // if forecast is ready to render returns ForecastContainer
  // if there is no forecast in state returns nothing
  // if forecast is loading shows Spinner
  if (isLoaded && !isLoading) {
    return <ForecastContainer forecast={forecast} />
  } else if (!isLoaded && !isLoading) { return <></> }
  else if (isLoading) { return <Spinner /> }

};

export default Forecast;