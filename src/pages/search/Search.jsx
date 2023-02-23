import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../helpers/helper";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const runSearch = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/search?q=${searchText}&media_type=image`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      if (
        (data.status_code >= 400 && data.status_code <= 500) ||
        data.success === false
      ) {
      } else {
        console.log(data?.collection?.items);
        setResult(data?.collection?.items);
        return data;
      }
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="search">
      <div className="search_cont">
        <input
          type={"search"}
          className="search_field"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn-search" onClick={() => runSearch()}>
          Search
        </button>
      </div>
      <div className="result">
        {result?.map((item, i) => {
          // console.log(item.links[0]?.href);
          return (
            <div
              key={i}
              className="wrapper"
              onClick={() => navigate("/show", { state: { item } })}
            >
              {<img className="pic" src={item?.links[0]?.href} />}
              <h3 className="header">{item.data[0]?.title}</h3>
              <p className="name">{item.data[0]?.photographer}</p>
              <p className="location">{item.data[0]?.location}</p>
              <p className="content">
                {item.data[0]?.description.substring(0, 100)}...
              </p>
              <a href="">
                <div class="readmore">
                  <b>Read more!</b> <i class="fas fa-angle-right"></i>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
