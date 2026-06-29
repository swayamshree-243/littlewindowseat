import UploadBox from "../components/UploadBox";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      <span className="charm charm--bow">🎀</span>
      <span className="charm charm--star">⭐</span>
      <span className="charm charm--cloud">☁️</span>
      <span className="charm charm--sparkle">✨</span>

      <div className="home-container">
        <section className="hero-section">
          <p className="hero-tag">✨ Cozy AI Recommendations</p>
          <h1 className="hero-title">Little Window Seat</h1>
          <p className="hero-subtitle">
            Upload an image and discover movies, books, anime and TV shows that
            capture its exact vibe.
          </p>
        </section>

        <section className="upload-section">
          <UploadBox />
        </section>
      </div>
    </main>
  );
}

export default Home;