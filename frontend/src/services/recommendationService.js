export async function analyzeImage(file) {
  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch("http://localhost:5000/recommend", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  console.log(data);

  return data;
}