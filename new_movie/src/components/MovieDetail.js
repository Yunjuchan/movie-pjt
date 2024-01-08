import PropTypes from "prop-types";

function MovieDetail({ title, year, rating, genres, description_intro, coverImg }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{year} {rating}</p>
      <p>{description_intro}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_intro: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
}

export default MovieDetail;