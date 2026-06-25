import { analyzeImage } from "../services/recommendationService";
import { useState } from "react";

function UploadBox() {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleAnalyze = async () => {
        if (!file) return;

        const data = await analyzeImage(file);

        setResults(data);
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

                    <button onClick={handleAnalyze}>
                        Analyze Image
                    </button>

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