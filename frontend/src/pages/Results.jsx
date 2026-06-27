import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const { recommendations } = location.state;
  return <h1>{recommendations[0].title}</h1>;
}

export default Results;