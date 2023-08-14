import "./styles/LocationInfo.css";
const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="location-info">
      <h2 className="location-info-title">Information about location</h2>
      <p className="location-name">Name: {currentLocation.name}</p>
      <ul className="wrapper-info-location">
        <li>
          <b>Type:</b> {currentLocation.type}
        </li>
        <li>
          <b>Dimension: </b>
          {currentLocation.dimension}
        </li>
        <li>
          <b>Population: </b>
          {currentLocation.residents.length}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
