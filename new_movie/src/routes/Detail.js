import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <div>
          <MovieDetail
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            genres={movie.genres}
            description_intro={movie.description_intro}
            coverImg={movie.medium_cover_image}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
