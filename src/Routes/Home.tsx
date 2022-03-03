import { useQuery } from "react-query";
import { getMovies } from "../api";

const Home = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);

  return (
    <div style={{ height: "200vh" }}>
      <img
        style={{ display: "block", width: "100%" }}
        src={`https://image.tmdb.org/t/p/original/${data?.results[1].backdrop_path}`}
        alt="batman"
      ></img>
    </div>
  );
};

export default Home;
