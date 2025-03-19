import fs from 'fs';
import path from 'path';
import FacultyProfile from "../../../components/FacultyProfile";

async function getFacultyData(facultyName) {
  const filePath = path.join(process.cwd(), '/public/faculty-data', `${facultyName}.json`);
  console.log("looking for file:", filePath);

  if (!fs.existsSync(filePath)) {
    console.error("file not found:", filePath);
    return null;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  console.log("file content:", data);

  return data;
}

// Faculty Page Data to be displayed
export default async function FacultyPage({ params }) {
  
  const facultyName = params?.facultyName;
  
  if (!facultyName) {
    return <h1>Invalid Faculty Page</h1>;
  }

  const faculty = await getFacultyData(facultyName);

  if (!faculty) {
    return <h1>Faculty not found</h1>;
  }

  return <FacultyProfile faculty={faculty} />
}
