# Little Window Seat

Most recommendation systems ask you what genre you're looking for.

Little Window Seat takes a different approach.

Upload an image, and the application analyzes its mood and atmosphere before recommending movies, TV shows, anime, books, and other media that capture a similar feeling.

The application uses Google Gemini 2.5 Flash to analyze the mood and atmosphere of an image, then matches that analysis against a curated recommendation dataset to find media with a similar feel.

---

## Features

- Upload an image for analysis
- AI-powered image understanding using Gemini 2.5 Flash
- Recommendations across multiple media types
- Profile-based recommendation engine
- Responsive React frontend
- Express REST API
- Image upload handling with Multer
- Error handling for invalid uploads and API failures

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- CSS

### Backend

- Node.js
- Express
- Multer

### AI

- Google Gemini 2.5 Flash

---

## Project Structure

```text
littlewindowseat/

├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── data/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── utils/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    └── vite.config.js
```

---

## How It Works

1. The user uploads an image.
2. The frontend sends the image to the backend.
3. Multer processes the uploaded file.
4. Gemini analyzes the image and generates a description of its mood and aesthetic.
5. The recommendation engine compares the analysis against a curated dataset.
6. The best matches are returned and displayed on the results page.

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/littlewindowseat.git
cd littlewindowseat
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

```env
GEMINI_API_KEY=your_api_key_here
```

Start the backend server.

```bash
nodemon server.js
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Future Improvements

- Redesigned UI
- Recommendation cards with posters and metadata
- Save favourites
- Search and filtering
- User authentication
- Better mobile experience
- Improved animations and transitions

---
