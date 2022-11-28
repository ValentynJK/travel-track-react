// react
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import PlaceDetails from './routes/place-details/place-details.route'
import Navigation from './routes/navigation/navigation.route';
import SearchResult from './routes/search-result/search-result.route';
import Search from './components/search/search.component';
import About from './routes/about/about.route'
import DrawerAppBar from './routes/app-bar/app-bar.route'
// style
import './App.css';

function App() {

  return (
    <div className="App" >
      <DrawerAppBar />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Search />} />
          <Route path=':city' element={<SearchResult />} />
          <Route path=':city/:fsq_id' element={<PlaceDetails />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes >
    </div >

  );
}

export default App;
