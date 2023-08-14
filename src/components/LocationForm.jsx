import "./styles/LocationForm.css";
const LocationForm = ({ LIMIT, handleSubmit }) => {
  return (
    <header className="wrapper-form">
      <h3 className="welcome-text">
        Welcome to rick Universe lets have some fun
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          min={1}
          max={LIMIT}
          type="number"
          placeholder="type a location id ....."
          id="newLocation"
          className="form-input"
        ></input>
        <button className="form-button">
          <p>Search</p>
          <img
            className="icons search-icon"
            src="/images/searchicon.png"
            alt=""
          />
        </button>
      </form>
    </header>
  );
};
export default LocationForm;
