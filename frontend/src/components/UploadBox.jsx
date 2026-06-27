import { analyzeImage } from "../services/recommendationService";
import { useState } from "react";

function UploadBox() {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleAnalyze = async () => {
        if (!file) return;

        try {
            setError("");
            setLoading(true);

            const data = await analyzeImage(file);

            setResults(data);
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />

            {file && (
                <>
                    <p>Selected: {file.name}</p>

                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        width="300"
                    />

                    <br />

                    <button onClick={handleAnalyze} disabled={loading}>
                        {loading ? "Analyzing..." : "Analyze Image"}
                    </button>

                    {error && <p>{error}</p>}

                    {results && (
                        <>
                            <p>
                                Found {results.recommendations.length} recommendations
                            </p>

                            <ul>
                                {results.recommendations.map((recommendation) => (
                                    <li key={recommendation.id}>
                                        {recommendation.title}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default UploadBox;