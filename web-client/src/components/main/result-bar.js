import { Title, Button, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/unfavorite.js";
import "@ui5/webcomponents-icons/dist/favorite.js";
import "@ui5/webcomponents-icons/dist/heart.js";
import "@ui5/webcomponents-icons/dist/heart-2.js";
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

            <div style={{display: "flex", marginBottom: 0}}>
              <span style={{ color: "#61DAFB", paddingRight: "15px" }}>
                Review
              </span>
              <div>
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name="unfavorite" />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name="unfavorite" />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name="unfavorite" />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name="unfavorite" />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name="favorite" />
              </div>
            </div>

            <Button
              onClick={function noRefCheck() {}}
              style={{
                marginRight: "15px",
                background: "#61DAFB",
                border: "none"
              }}
            >
              <span style={{ paddingLeft: "25px", paddingRight: "25px"}}>
                <span style={{ color: "black", fontWeight: "bold" }}>Favorite</span>
                <Icon style={{ margin: 0, height: "20px", width: "20px", marginBottom: "-5px", paddingLeft: "5px", fill: "#000", paddingTop: "5px" }} name="heart-2" />
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
