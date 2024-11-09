import pandas as pd
import google.generativeai as genai
import os

# Configure API key
API_KEY = "AIzaSyDYK55sXBZddmiwIKntKM0ZNLCUsxcwQ2o"
genai.configure(api_key=API_KEY)

# Sample job description (replace with actual job description)
job_description = """
We are looking for a Software Engineer with experience in ReactJs, Python, AWS, and Docker. The ideal candidate should have a strong background in developing scalable web applications, implementing secure authentication mechanisms, and deploying applications using cloud services.
"""

# Sample projects (replace with actual projects)
projects = [
    {
        "title": "WALL ART STORE",
        "technologies": ["ReactJs", "Python FAST-API", "AWS"],
        "details": [
            "Developed a high-performance e-commerce web application for selling wall art.",
            "Implemented secure user authentication using JWT, ensuring 90% of the APIs are unit tested.",
            "Built a scalable, Dockerized application with a React-Redux front-end and a FastAPI backend, utilizing AWS services like RDS for the database, S3 for image storage, and EC2 for deployment.",
            "Integrated payment functionality using the Razorpay gateway."
        ]
    },
    {
        "title": "MOBILE BANKING APP",
        "technologies": ["React Native", "Node.js", "AWS"],
        "details": [
            "Developed a cross-platform mobile banking application with real-time transaction tracking.",
            "Implemented secure authentication using OAuth2 and biometric verification.",
            "Utilized AWS services like Lambda, DynamoDB, and S3 for backend services and storage.",
            "Achieved a 99.9% uptime for the application with efficient cloud deployment."
        ]
    },
    {
        "title": "BLOG PLATFORM",
        "technologies": ["Django", "PostgreSQL", "AWS"],
        "details": [
            "Created a blogging platform with rich text editor and user profile management.",
            "Implemented secure user authentication and role-based access control.",
            "Used AWS services like EC2 for hosting, RDS for database, and CloudFront for CDN.",
            "Optimized the application for high traffic with caching and load balancing."
        ]
    }
]

def calculate_match_percentage(project, job_description):
    match_count = 0
    for tech in project['technologies']:
        if tech.lower() in job_description.lower():
            match_count += 1
    return (match_count / len(project['technologies'])) * 100

# Identify relevant projects and calculate match percentage
relevant_projects = []
for project in projects:
    match_percentage = calculate_match_percentage(project, job_description)
    project_details = {
        "Project Title": project['title'],
        "Technologies Used": ", ".join(project['technologies']),
        "Description": "\n".join(project['details']),
        "Match Percentage": f"{match_percentage:.2f}%"
    }
    relevant_projects.append(project_details)

# Convert to DataFrame for better visualization
df = pd.DataFrame(relevant_projects)

# Display the DataFrame
print(df)

# Save the relevant projects to a CSV file
output_path = 'relevant_projects.csv'
df.to_csv(output_path, index=False)

print(f"Relevant projects saved to {output_path}")
