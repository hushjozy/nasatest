import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../helpers/helper";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const runSearch = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/search?location=${""}&title=${""}&photographer=${""}year_start=${start.toString()}&year_end=${end.toString()}&q=${searchText}&media_type=image`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      if (
        (data.status_code >= 400 && data.status_code <= 500) ||
        data.success === false
      ) {
      } else {
        console.log(data?.collection?.items);

        setResult(data?.collection?.items);
        alert(data?.collection?.items.length + " items have been found");
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
          placeholder="Search Word"
        />
        <input
          type={"number"}
          className="search_field two"
          value={start}
          placeholder="Year Start E.g(2003)"
          onChange={(e) => setStart(e.target.value)}
        />{" "}
        <input
          type={"number"}
          className="search_field two"
          value={end}
          placeholder="Year End E.g(2006)"
          onChange={(e) => setEnd(e.target.value)}
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
