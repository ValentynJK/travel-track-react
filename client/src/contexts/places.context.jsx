import { createContext, useState } from "react";

export const PlacesContext = createContext({
  places: [],
  setPlaces: () => { },
  photos: [],
  setPhotos: () => { },
  tips: [],
  setTips: () => { }
});

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState(() => {
    const placesInLocalStorage = sessionStorage.getItem('places');
    return placesInLocalStorage ? JSON.parse(placesInLocalStorage) : []
  });
  const [photos, setPhotos] = useState(() => {
    const placesInLocalStorage = sessionStorage.getItem('photos');
    return placesInLocalStorage ? JSON.parse(placesInLocalStorage) : []
  });
  const [tips, setTips] = useState([]);

  const value = { places, setPlaces, photos, setPhotos, tips, setTips };
  // console.log("PlaceContext")

  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  )


}

