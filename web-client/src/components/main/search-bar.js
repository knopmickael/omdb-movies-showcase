import { Title, Button, Input } from "@ui5/webcomponents-react";
import '../../assets/components/main/search-bar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData, clearData, activeIsLoading } from "../../redux/movies/actions";

export function SearchBar() {
  
  const [search, setSearch] = useState('');

  const handleSearchValue = (event) => {
    setSearch(event.target.value);
  };

  const dispatch = useDispatch();
  
  const hookData = () => {
    dispatch(activeIsLoading());
    setTimeout(() => {
      dispatch(fetchData(search));
    }, window.location.hostname.includes('localhost') ? 2000 : 0);
  };

  const resetData = () => {
    setSearch('');
    dispatch(clearData());
  };

  return (
    <>
      <div className="search-bar-div">
        
        <Title style={{color: "#61DAFB"}}>
          Search
        </Title>

        <span className="py" style={{color: "white"}}>
          Feel free to reach any movie you're in mind!
        </span>

        <div>
          
          <Input
            style={{ marginRight: "15px" }}
            placeholder="Search here..."
            value={search}
            onInput={handleSearchValue}
          />

          <Button
            onClick={() => hookData()}
            disabled={search === ''}
            style={{
              marginRight: "15px",
              background: "#61DAFB",
              border: "none"
            }}
          >
            <span className="styled-btn-span">Search</span>
          </Button>

          <Button
            onClick={() => resetData()}
            disabled={search === ''}
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
