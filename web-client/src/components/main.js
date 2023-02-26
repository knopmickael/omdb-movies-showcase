import { SearchBar } from "./main/search-bar";
import { ResultBar } from "./main/result-bar";

export function Main() {
  return (
    <>
      <div
        className="responsiveGridLayoutItem"
        style={{
          background: "#111",
          gridColumn: "span 16",
          height: "80vh",
        }}
      >
        <div 
          className="container"
          style={{
            height: "100%"
          }}>
          <SearchBar />
          <ResultBar />
        </div>
      </div>
    </>
  );
}
