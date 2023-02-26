import { Title, Button } from "@ui5/webcomponents-react";
import "../../assets/components/main/result-bar.css";

export function ResultBar() {
  const isLoading = false;

  return (
    <>
      {
      
      isLoading ? (

        <p style={{color: "#fff", textAlign: "center", paddingTop: "5vw"}}>Searching...</p>

      ) : (

        <div className="result-div">
          <div className="left-result-side">
            <Title style={{ color: "#61DAFB" }}>Movie</Title>

            <p style={{ color: "#fff" }}>
              Movie description, movie description, movie description, movie
              description, movie description, movie description, movie
              description, movie description, movie description, movie
              description, movie description, movie descr55iption, movie
              description, movie description...
            </p>

            <div>
              <span style={{ color: "#61DAFB", paddingRight: "15px" }}>
                Actors
              </span>
              <span style={{ color: "#fff" }}>Fulano</span>
            </div>

            <div>
              <span style={{ color: "#61DAFB", paddingRight: "15px" }}>
                Review
              </span>
              <span style={{ color: "#fff" }}>X X X X X</span>
            </div>

            <Button
              onClick={function noRefCheck() {}}
              style={{
                marginRight: "15px",
                background: "#61DAFB",
                border: "none",
              }}
            >
              <span
                style={{ padding: "25px", color: "black", fontWeight: "bold" }}
              >
                Favorite O
              </span>
            </Button>
          </div>

          <div className="right-result-side">
            <img className="movie-poster" src="fake-poster.png" />
          </div>
        </div>
      )}

    </>
  );
}
