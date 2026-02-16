# Rajala Adarsh - Portfolio

A full-stack portfolio application built with Flask (backend) and React (frontend).

## Features

- Modern, responsive design
- Dynamic content loaded from Flask API
- Smooth scrolling navigation
- Contact form with backend integration
- Projects showcase
- Skills and experience sections
- Mobile-friendly interface

## Tech Stack

### Frontend
- React.js
- Axios for API calls
- CSS3 for styling

### Backend
- Flask
- Flask-CORS
- RESTful API

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the Flask server:
```bash
python app.py
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Customization

### Update Portfolio Data

Edit `backend/app.py` to customize:
- Personal information
- Skills
- Projects
- Experience
- Education

### Styling

Modify CSS files in `frontend/src/components/` to change the appearance.

## Deployment

### Backend
- Deploy Flask app to Heroku, PythonAnywhere, or AWS
- Update CORS settings for production domain

### Frontend
- Build the React app: `npm run build`
- Deploy to Netlify, Vercel, or GitHub Pages
- Update API endpoint in production

## API Endpoints

- `GET /api/portfolio` - Get all portfolio data
- `GET /api/personal-info` - Get personal information
- `GET /api/skills` - Get skills
- `GET /api/projects` - Get projects
- `GET /api/experience` - Get experience
- `GET /api/education` - Get education
- `POST /api/contact` - Submit contact form

## License

MIT License - feel free to use this for your own portfolio!
