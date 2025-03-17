import fs from 'fs';
import path from 'path';

async function getFacultyData(facultyName) {
  const filePath = path.join(process.cwd(), 'public/faculty-data', `${facultyName}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data;
}

export default async function FacultyPage({ params }) {
  // Await params to ensure it contains the correct data
  const { facultyName } = params; 

  // Fetch faculty data using the facultyName
  const faculty = await getFacultyData(facultyName);

  if (!faculty) {
    return <h1>Faculty not found</h1>;
  }

  return (
    <div>
      <h1>{faculty.name}</h1>
      <p>{faculty.title}</p>
      <p>{faculty.bio}</p>
      <a href={faculty.website} target="_blank" rel="noopener noreferrer">
        Personal Website
      </a>
    </div>
  );
}
