import "./styles/ResidentCard.css";
import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "alive-status",
    Dead: "dead-status",
    unknown: "unknown-status",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {residentInfo && (
        <article className="resident-card">
          <header className="wrapper-header">
            <div className="wrapper-resident-image">
              <img
                className="resident-image"
                src={residentInfo.image}
                alt={residentInfo.name}
              />{" "}
              <div className="wrapper-status">
                <div
                  className={`circle-status ${
                    residentStatus[residentInfo.status]
                  }`}
                ></div>
                {residentInfo.status}
              </div>
            </div>
          </header>

          <section className="resident-info">
            <h3 className="resident-info-name">{residentInfo.name}</h3>
            <article>
              <ul className="resident-info-list">
                <li className="resident-list">
                  <b className="resident-info-bold">Especie: </b>
                  <p className="resident-info-p">{residentInfo.species}</p>
                </li>
                <li className="resident-list">
                  <b className="resident-info-bold">Origin: </b>
                  <p className="resident-info-p">{residentInfo.origin.name}</p>
                </li>
                <li className="resident-list">
                  <b className="resident-info-bold">Times appear: </b>
                  <p className="resident-info-p">
                    {residentInfo.episode.length}
                  </p>
                </li>
              </ul>
            </article>
          </section>
        </article>
      )}
    </>
  );
};
export default ResidentCard;
