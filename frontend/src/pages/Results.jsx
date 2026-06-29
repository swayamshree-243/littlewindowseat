import { useLocation } from "react-router-dom";
import RecommendationCard from "../components/RecommendationCard";
import "../styles/Results.css";

function Results() {
  const location = useLocation();

  if (!location.state) {
    return <h2>No recommendations found. Please upload an image first.</h2>;
  }

  const { recommendations } = location.state;

  const recs = recommendations.map((recommendation) => {
    return (
      <RecommendationCard
        key={recommendation.id}
        title={recommendation.title}
      />
    );
  });

  return (
    <div className="results-page">
      <div className="results-container">

        <header className="results-header">
          <h1 className="results-title">✨ Your Cozy Recommendations</h1>

          <p className="results-subtitle">
            We found stories that match the feeling of your photo.
          </p>
        </header>

        <main className="recommendations-grid">
          {recs}
        </main>

      </div>
    </div>
  );
}

export default Results;