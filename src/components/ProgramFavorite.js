import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/css/ProgramFavorite.css";
import "../assets/css/ProgramCard.css";

const ProgramFavorite = () => {
  const url =
    "https://grup-project-be-34-production.up.railway.app/homepenyandang/lihat/";
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const arr =
    data &&
    data.map((data, index) => {
      return (
        <div className="program-favorirte-container">
          <div className="program-card">
            <img src={data.imgsrc} alt="img" />
            <h2 className="program-title">{data.title}</h2>
            <div className="pro-details">
              <p>{data.text}</p>
              <div className="pro-btns">
                <button>view</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="program-favorite-container">
      <h1 className="program-heading">Program Favorite</h1>
      <div className="program-container">{arr}</div>
    </div>
  );
};

export default ProgramFavorite;
