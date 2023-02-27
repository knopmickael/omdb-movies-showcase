import { SearchBar } from "./main/search-bar";
import { ResultBar } from "./main/result-bar";
import '../assets/components/main.css';
import { useSelector, useDispatch } from 'react-redux';

export function Main() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <>
      <div style={{
        background: "white",
        position: "fixed",
        padding: "15px",
        top: "25px",
        left: "25px"
      }}>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
      <div
        className="responsiveGridLayoutItem hide-overflow"
        style={{
          background: "#111",
          gridColumn: "span 16",
          height: "80vh"
        }}
      >
        <div 
          className="container"
          style={{
            height: "100%"
          }}
        >
          <SearchBar />
          <ResultBar />
        </div>
      </div>
    </>
  );
}
