from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Portfolio data
portfolio_data = {
    "personal_info": {
        "name": "Rajala Adarsh",
        "title": "Student",
        "email": "adarshreddy532@gmail.com",
        "phone": "+91-9182546785",
        "location": "India",
        "bio": "I am a passionate AI-focused full-stack developer specializing in building intelligent, scalable web applications using React, Flask, and modern backend technologies. I combine strong software engineering principles with machine learning expertise to develop data-driven solutions that solve real-world problems. From designing responsive frontends to deploying AI models into production, I enjoy transforming complex ideas into efficient, user-friendly systems.",
        "social": {
            "github": "https://github.com/Adarsh-147369",
            "linkedin": "https://www.linkedin.com/in/rajalaadarsh/"
        }
    },
    "skills": [
    {
        "id": 1,
        "category": "Frontend",
        "items": [
            "React.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Responsive Design"
        ]
    },
    {
        "id": 2,
        "category": "Backend",
        "items": [
            "Python",
            "Java",
            "Flask",
            "Node.js",
            "RESTful APIs"
        ]
    },
    {
        "id": 3,
        "category": "Databases",
        "items": [
            "PostgreSQL",
            "MySQL",
            "MongoDB"
        ]
    },
    {
        "id": 4,
        "category": "Machine Learning & AI",
        "items": [
            "Artificial Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "NumPy",
            "Pandas",
            "scikit-learn",
            "Matplotlib",
            "AI Agents",
            "Agentic AI"
        ]
    },
    {
        "id": 5,
        "category": "Core Computer Science",
        "items": [
            "Data Structures and Algorithms",
            "Operating Systems",
            "Object-Oriented Programming",
            "Database Management Systems",
            "Computer Networks",
            "Software Engineering"
        ]
    },
    {
        "id": 6,
        "category": "Tools & Others",
        "items": [
            "Git",
            "GitHub",
            "Docker",
            "VS Code",
            "Postman",
            "CI/CD",
            "Agile Methodology"
        ]
    },
    {
        "id": 7,
        "category": "Soft Skills",
        "items": [
            "Problem Solving",
            "Self-Learning",
            "Presentation Skills",
            "Adaptability"
        ]
    }
    ],

    "projects": [
        {
            "id": 1,
            "title": "Reflect Ed: Student Self Learning and Improvement Platform",
            "description": "Developed a full-stack AI-powered online examination platform with subject specific exams, AI-generated questions, automated evaluation, and personalized learning recommendations. Implemented secure role-based authentication and proctored exam features, including stream-wise subject allocation, fullscreen enforcement, and anti-cheat auto-submission. Automated answer evaluation by instant MCQ grading and SBERT-based semantic scoring for descriptive responses. Built a performance-based recommendation system suggesting tailored courses, YouTube resources, and project ideas based on student results.",
            "technologies": ["React", "Node.js", "PostgreSQL", "AI Agents"],
            "github": "https://github.com/Adarsh-147369/ReflectEd"
        },
        {
            "id": 2,
            "title": "Retail-Demand-forecasting",
            "description": "Built a Java-based retail demand forecasting web application using Javalin and Smile ML, training a gradient boosting regression model on historical sales data to generate accurate 7-day demand predictions. Implemented an end-to-end ML workflow with CSV data ingestion, model persistence, and interactive Chart.js visualizations to support inventory planning and real-time decision making.",
            "technologies": ["Java", "Javalin", "Machine Learning","HTML", "CSS", "JavaScript","Feature Engineering"],
            "github": "https://github.com/Adarsh-147369/Retail-Demand-forecasting"
        },
        {
            "id": 3,
            "title": "Performance Analysis of Stock",
            "description": "Built a Python-based stock market analysis and prediction system using Pandas, NumPy, Scikit-learn, and visualization libraries to preprocess data, analyze financial indicators, and forecast future stock prices without TensorFlow. Developed both web and script-based interfaces, including a Flask application, Jupyter notebooks, and Python scripts, enabling interactive visualizations and flexible analysis of real-time and long-term stock trends.",
            "technologies": ["Python", "Flask","Machine Learning","CSV/Time Series Processing"],
            "github": "https://github.com/Adarsh-147369/performance-analysis-of-stock"
        },
        {
            "id": 4,
            "title": "Delivery-optimizer",
            "description": "It full-stack web application that calculates optimal delivery routes using algorithms like Dijkstra, A*, and TSP approximation. It features an interactive map interface built with React and Leaflet, a Node.js/Express backend for route computation, and PostgreSQL for data management. The system visualizes routes and performance metrics in real time, helping improve delivery efficiency and reduce travel costs.",
            "technologies": ["Node.js", "Express.js", "JavaScript", "React","PostgreSQL","Interactive Maps", "Algorithm Implementation"],
            "github": "https://github.com/Adarsh-147369/Delivery-optimizer"
        },
        {
            "id": 5,
            "title": "Smart Expense-Tracker",
            "description": "It is a Java-based console application that manages and tracks user expenses. It allows users to add, store, and retrieve financial records using file persistence, applying core Java principles like object-oriented design, data storage, and input/output processing to build a simple but effective personal finance tool.",
            "technologies": ["Java", "Object-Oriented Programming", "Core Java Collections", "React"],
            "github": "https://github.com/Adarsh-147369/Smart-Expense-Tracker"
        }
    ],
    "experience": [
        {
            "id": 1,
            "title": "Software Developer Intern",
            "company": "Sasken Technologies Private Limited",
            "duration": "June 2025 - July 2025",
            "description": "Completed an eight-week internship at Sasken Technologies Limited, Bengaluru, where I worked on developing an internal job portal as part of my B.E. program at RNS Institute of Technology. Contributed to building secure, user-friendly solutions using Java while collaborating in a team-driven environment. Gained hands-on experience in real-world software development, project workflows, and strengthened both technical and professional skills through continuous mentor feedback."
        }
    ],
    "education": [
        {
            "id": 1,
            "degree": "BE in Computer Science and Engineering",
            "institution": "RNS Institute of Technology",
            "year": "2022-2026",
            "CGPA": "9.19",
            "location": "Bengaluru, India"
        },
        {
            "id": 2,
            "degree": "PUC",
            "institution": "Sri Chaitanya Junior College Raman Bavan 3",
            "year": "2020-2022",
            "percentage": "94.5",
            "location": "Vijayawada, India"
        },
        {
            "id": 3,
            "degree": "SSC",
            "institution": "Sri Vivekananda English Medium High School",
            "year": "2006-2020",
            "percentage": "96.16",
            "location": "Uravakonda, Andhra Pradesh, India"
        }
    ],
    "certifications": [
        {
            "id": 1,
            "title": "Introduction to DevOps",
            "issuer": "Great Learning",
            "date": "2025"
        },
        {
            "id": 2,
            "title": "Python Programming",
            "issuer": "Udemy",
            "date": "2025"
        },
        {
            "id": 3,
            "title": "Natural Language Processing",
            "issuer": "VTU (NPTEL)",
            "date": "2025"
        },
        {
            "id": 4,
            "title": "Programming in Java",
            "issuer": "VTU (NPTEL)",
            "date": "2025"
        },
        {
            "id": 5,
            "title": "Applied Generative AI Certification",
            "issuer": "Infosys SpringBoard",
            "date": "2024"
        },
        {
            "id": 6,
            "title": "Google Cloud Career Launchpad Cloud Engineer Track",
            "issuer": "Google Cloud",
            "date": "2025"
        },
        {
            "id": 7,
            "title": "Full-Stack Web Development Bootcamp",
            "issuer": "Udemy",
            "date": "2025"
        }
    ],
    "extracurricular": [
        {
            "id": 1,
            "title": "Core Member - RNS Sports Club",
            "organization": "RNS Institute of Technology",
            "duration": "2022 - 2026",
            "description": "Organized Agones and StepUp events with significant participant engagement, leading a 15-member team to manage logistics and budgets efficiently. Through these experiences, I strengthened my leadership, teamwork, coordination, and public speaking skills while ensuring smooth and successful event execution."
        }
    ]
}

@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    """Get all portfolio data"""
    return jsonify(portfolio_data)

@app.route('/api/personal-info', methods=['GET'])
def get_personal_info():
    """Get personal information"""
    return jsonify(portfolio_data['personal_info'])

@app.route('/api/skills', methods=['GET'])
def get_skills():
    """Get skills"""
    return jsonify(portfolio_data['skills'])

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get projects"""
    return jsonify(portfolio_data['projects'])

@app.route('/api/experience', methods=['GET'])
def get_experience():
    """Get experience"""
    return jsonify(portfolio_data['experience'])

@app.route('/api/education', methods=['GET'])
def get_education():
    """Get education"""
    return jsonify(portfolio_data['education'])

@app.route('/api/certifications', methods=['GET'])
def get_certifications():
    """Get certifications"""
    return jsonify(portfolio_data['certifications'])

@app.route('/api/extracurricular', methods=['GET'])
def get_extracurricular():
    """Get extracurricular activities"""
    return jsonify(portfolio_data['extracurricular'])

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submission"""
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Here you would typically send an email or save to database
    print(f"Contact form submission from {name} ({email}): {message}")
    
    return jsonify({
        "success": True,
        "message": "Thank you for your message! I'll get back to you soon."
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
