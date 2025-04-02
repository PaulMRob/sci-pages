import fs from "fs";
import path from "path";

async function getPublicationsData(facultyName) {
  const filePath = path.join(process.cwd(), "public/publications-data", `${facultyName}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default async function PublicationsPage({ params }) {
  const publications = await getPublicationsData(params.facultyName);

  if (!publications) {
    return <h1 className="text-center text-red-500">No publications found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center">Publications</h1>
      <ul className="mt-6 space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{pub.title}</h2>
            <p className="text-gray-700">
              <strong>Authors:</strong> {pub.authors.join(", ")}
            </p>
            <p className="text-gray-700">
              <strong>Year:</strong> {pub.year}
            </p>
            <p className="text-gray-700">
              <strong>Journal:</strong> {pub.journal}
            </p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
