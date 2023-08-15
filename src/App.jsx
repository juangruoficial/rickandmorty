import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber as getRandomDimension } from "./utilities/Functions.js";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import useFetchedData from "./Hooks/useFetchedData";
import Background from "./components/Background";

const LIMIT = 126;

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedValue, setSelectedValue] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const colorLetter = isHovered ? "blueletter" : "letter";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleInputChange = (event) => {
    const newCurrentLocation = event.target.value;
    console.log(newCurrentLocation);
    fetchedDimension(newCurrentLocation);
    setSelectedValue(newCurrentLocation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.newLocation.value) return;

    const newCurrenLocation = e.target.newLocation.value;
    fetchedDimension(newCurrenLocation);
    e.target.newLocation.value = "";
  };

  const fetchedDimension = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(URL)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const randomDimension = getRandomDimension(LIMIT);
    fetchedDimension(randomDimension);
  }, []);

  /*   const { data, loading, error } = useFetchedData(
    "https://rickandmortyapi.com/api/character/41",
    LIMIT
  );
 */

  return (
    <main className="main">
      <Background
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      />

      {currentLocation && (
        <>
          <LocationForm
            LIMIT={LIMIT}
            handleSubmit={handleSubmit}
            selectedValue={selectedValue}
            handleInputChange={handleInputChange}
            isHovered={isHovered}
          />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList residents={currentLocation.residents} />
        </>
      )}
      <img className="rick" src="/images/rick.png" alt="" />
    </main>
  );
}

export default App;
