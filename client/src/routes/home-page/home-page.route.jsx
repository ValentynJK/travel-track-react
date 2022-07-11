import { QueryClientProvider, QueryClient } from 'react-query';

// components
import Search from '../../components/search/search.component';
import Places from '../../components/places/places.component'
import Forecast from '../../components/forecast/forecast.component';

// import './home-page.styles.scss';

// initializing Query client 
const queryClient = new QueryClient();

const HomePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <Forecast />
      <Places />
    </QueryClientProvider>
  )
};

export default HomePage;