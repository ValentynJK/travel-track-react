// react
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import HomePage from './routes/home-page/home-page.route';
import PlaceDetails from './routes/place-details/place-details.route'

// style
import './App.css';



function App() {

  // Check from server
  const [data, setData] = useState(null);

  // updating server greeting after app update
  useEffect(() => {
    fetch('/api').then((res) => res.json()).then((data) => setData(data.message))
  }, []);

  return (
    <div className="App">
      <p>
        {!data ? "Loading..." : data}
      </p>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/:fsq_id" element={<PlaceDetails />} />
      </Routes>


    </div>
  );
}

export default App;
