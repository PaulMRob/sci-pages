//this is a reusable component
// components/FacultyProfile.js
export default function FacultyProfile({ faculty }) {
    return (
      <div className="max-w-4xl mx-auto p-8">
         <div className="flex justify-center mb-6">
            <img
            src={faculty.image}
            alt={faculty.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
        </div>
        <h1 className="text-4xl font-semibold text-center text-gray-800">{faculty.name}</h1>
        <p className="text-xl text-center text-gray-600">{faculty.title}</p>
        <p className="mt-4 text-lg text-gray-700">{faculty.bio}</p>
        <a
          href={faculty.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:text-blue-700"
        >
          Personal Website
        </a>
      </div>
    );
  }
  