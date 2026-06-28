import { useLocation } from "react-router-dom";
import RecommendationCard from "../components/RecommendationCard";

function Results() {
  const location = useLocation();
  if (!location.state) return <h2>No recommendations found. Please upload an image first.</h2>;
  const { recommendations } = location.state;
  const recs = recommendations.map((recommendation) => {
    return (
      <RecommendationCard
        key={recommendation.id}
        title={recommendation.title}
      />
    );
  });
  return recs;
};

export default Results;