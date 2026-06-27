import { analyzeImage } from "../services/recommendationService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadBox() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleAnalyze = async () => {
        if (!file) return;

        try {
            setError("");
            setLoading(true);

            const data = await analyzeImage(file);
            navigate("/results", {
                state: {
                    recommendations: data.recommendations
                }
            });
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
                </>
            )}
        </div>
    );
}

export default UploadBox;