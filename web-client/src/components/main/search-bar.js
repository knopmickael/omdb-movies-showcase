import { Title, Button, Input } from "@ui5/webcomponents-react";
import '../../assets/components/main/search-bar.css';

import { useDispatch, useSelector } from "react-redux";
import { fetchData, clearData } from "../../redux/movies/actions";

export function SearchBar() {
  const { data } = useSelector((rootReducer) => rootReducer.moviesReducer);
  const dispatch = useDispatch();
  
  const hookData = () => {
    dispatch(fetchData('foobar'));
  };
  const resetData = () => {
    dispatch(clearData());
  };

  console.log(data);

  return (
    <>
      <div>
        <button onClick={() => hookData()}>click me</button>
        <button onClick={() => resetData()}>reset me</button>
      </div>
      <div className="search-bar-div">
        <Title style={{color: "#61DAFB"}}>
          Search
        </Title>

        <span className="py" style={{color: "white"}}>
          Feel free to reach any movie you are in mind!
        </span>

        <div>
          
          <Input placeholder="Search here..." style={{ marginRight: "15px" }} />

          <Button
            onClick={function noRefCheck() {}}
            style={{
              marginRight: "15px",
              background: "#61DAFB",
              border: "none"
            }}
          >
            <span className="styled-btn-span">Search</span>
          </Button>

          <Button
            onClick={function noRefCheck() {}}
            style={{
              marginRight: "15px",
              background: "#61DAFB",
              border: "none"
            }}
          >
            <span className="styled-btn-span">Reset</span>
          </Button>
          
        </div>
      </div>
    </>
  );
}
