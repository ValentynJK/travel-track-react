import Search from '../../components/search/search.component';
import { QueryClientProvider, QueryClient } from 'react-query';

import Places from '../../components/places/places.component'

// import './home-page.styles.scss';

// initializing Query client 
const queryClient = new QueryClient();

const HomePage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <Places />
    </QueryClientProvider>
  )
};

export default HomePage;