import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  return <div style={{ height: "200vh" }}></div>;
};

export default Search;
