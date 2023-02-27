import { Title, Button, Icon } from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/unfavorite.js";
import "@ui5/webcomponents-icons/dist/favorite.js";
import "@ui5/webcomponents-icons/dist/heart.js";
import "@ui5/webcomponents-icons/dist/heart-2.js";
import "../../assets/components/main/result-bar.css";
import { useSelector } from "react-redux";
import { useState } from "react";

export function ResultBar() {
  const { data, isLoading } = useSelector(rootReducer => rootReducer.moviesReducer);
  const [likes, setLikes] = useState([]);

  const likeThisMovie = () => {
    let movieTitle = data?.title;
    if (!likes.includes(movieTitle))
      setLikes([...likes, movieTitle]);
    else setLikes(likes.filter(title => title !== movieTitle));
  };
  

  return (
    <>
      {

      isLoading
      
      ?

      <p style={{color: "#FFFFFF20", textAlign: "center", paddingTop: "5vw"}}>Searching...</p>

      :
      
      (Object.keys(data).length === 0)

      ?

      <p style={{color: "#FFFFFF20", textAlign: "center", paddingTop: "5vw"}}>Search your movie...</p>

      :

      (
        <div className="result-div">
          <div className="left-result-side">
            <Title style={{ color: "#61DAFB" }}>{data?.title}</Title>

            <p style={{ color: "#fff" }}>{data?.plot}</p>

            <div>
              <span style={{ color: "#61DAFB", paddingRight: "15px" }}>
                Actors
              </span>
              <span style={{ color: "#fff" }}>{data?.actors}</span>
            </div>

            <div style={{display: "flex", marginBottom: 0}}>
              <span style={{ color: "#61DAFB", paddingRight: "15px" }}>
                Review
              </span>
              <div>
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name={ (parseFloat(data?.imdbRating) / 2) > 1 ? 'favorite' : 'unfavorite'} />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name={ (parseFloat(data?.imdbRating) / 2) > 2 ? 'favorite' : 'unfavorite'} />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name={ (parseFloat(data?.imdbRating) / 2) > 3 ? 'favorite' : 'unfavorite'} />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name={ (parseFloat(data?.imdbRating) / 2) > 4 ? 'favorite' : 'unfavorite'} />
                <Icon style={{ margin: 0, height: "20px", width: "20px", paddingRight: "5px", fill: "#fff" }} name={ (parseFloat(data?.imdbRating) / 2) > 5 ? 'favorite' : 'unfavorite'} />
                <span style={{ color: "#FFFFFF30", marginLeft: "5px", fontSize: "12px" }}>(imdbRating: {(parseFloat(data?.imdbRating) / 2)})</span>
              </div>
            </div>

            <Button
              onClick={likeThisMovie}
              style={{
                marginRight: "15px",
                background: "#61DAFB",
                border: "none"
              }}
            >
              <span style={{ paddingLeft: "25px", paddingRight: "25px"}}>
                <span style={{ color: "black", fontWeight: "bold" }}>Favorite</span>
                <Icon
                  style={{
                    margin: 0,
                    height: "20px",
                    width: "20px",
                    marginBottom: "-5px",
                    paddingLeft: "5px",
                    fill: "#000",
                    paddingTop: "5px",
                  }}
                  name={likes.includes(data?.title) ? "heart" : "heart-2"}
                />
              </span>
            </Button>
          </div>

          <div className="right-result-side">
            <img className="movie-poster" src={ ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'jpeg2000', 'JPEG2000', 'jiff', 'JIFF'].includes(data?.poster) ? data?.poster : 'fake-poster.png' } />
          </div>
        </div>
      )}
    </>
  );
}
