import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Show = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const item = location?.state.item;

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      <div
        className="wrapper card"
        onClick={() => navigate("/show", { state: { item } })}
      >
        {item.links != undefined ? (
          <img className="show-image" src={item?.links[0]?.href} />
        ) : (
          <></>
        )}
        <h3 className="title">{item.data[0]?.title}</h3>
        <p className="name">{item.data[0]?.photographer}</p>
        <p className="location">{item.data[0]?.location}</p>
        {item.data[0]?.description != undefined && (
          <p className="description">{item.data[0]?.description}</p>
        )}
        {item.data[0]?.keywords[0] != undefined && (
          <p className="keyword">{item.data[0]?.keywords[0]}</p>
        )}
        <p className="date">
          {new Date(item.data[0]?.date_created).toLocaleDateString}
        </p>
      </div>
    </div>
  );
};

export default Show;
