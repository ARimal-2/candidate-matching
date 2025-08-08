import  { useEffect, useState } from 'react';

// import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // Uncomment if using DynamoDB
// import { unmarshall } from "@aws-sdk/util-dynamodb"; // To convert DynamoDB data to JS object

const JobDescription = () => {
  // Static content fallback
  const [jobData, setJobData] = useState({
    title: "Full Stack Developer",
    location: "[Your Location / Remote]",
    employmentType: "Full-time",
    experience: "3–6 years",
    salary: "[Optional]",
    about: `We are seeking a skilled and motivated Full Stack Developer to join our growing engineering team. You will be responsible for developing and maintaining scalable web applications, from front-end interfaces to back-end services. This role requires a passion for clean code, performance optimization, and delivering high-quality user experiences.`,
    responsibilities: [
      "Design, develop, and maintain responsive web applications.",
      "Collaborate with product managers, designers, and other developers to understand requirements and deliver features end-to-end.",
      "Build RESTful APIs and integrate with third-party services.",
      "Develop and maintain scalable and secure backend systems.",
      "Optimize application performance and handle cross-browser compatibility.",
      "Participate in code reviews and contribute to continuous improvement.",
    ],
    techStack: {
      Frontend: "React.js, Next.js, Tailwind CSS, TypeScript/JavaScript",
      Backend: "Node.js, Express, Python (optional)",
      Database: "PostgreSQL, MongoDB",
      DevOps: "Git, Docker, CI/CD (GitHub Actions, Jenkins), AWS or similar",
    },
    requirements: [
      "3+ years of professional experience in full stack development.",
      "Strong understanding of JavaScript/TypeScript, HTML, CSS.",
      "Hands-on experience with modern frontend frameworks (e.g., React).",
      "Solid understanding of backend development, databases, and RESTful APIs.",
      "Familiarity with version control tools like Git.",
      "Strong problem-solving and debugging skills.",
    ],
    niceToHave: [
      "Experience with GraphQL, WebSockets, or real-time applications.",
      "Familiarity with testing frameworks (Jest, Cypress).",
      "Understanding of microservices architecture or serverless design.",
      "Knowledge of containerization (Docker, Kubernetes).",
    ],
    perks: [
      "Competitive compensation and flexible working hours.",
      "A collaborative and innovative team environment.",
      "Opportunities for growth and leadership.",
      "Access to the latest technologies and tools.",
    ],
  });

  // Uncomment this block to load from DynamoDB
  /*
  useEffect(() => {
    const fetchData = async () => {
      const client = new DynamoDBClient({ region: "your-region" });
      const command = new GetItemCommand({
        TableName: "Jobs",
        Key: {
          id: { S: "fullstack-developer" },
        },
      });

      try {
        const response = await client.send(command);
        if (response.Item) {
          setJobData(unmarshall(response.Item));
        }
      } catch (error) {
        console.error("Failed to fetch job from DynamoDB", error);
      }
    };

    fetchData();
  }, []);
  */

  return (
    <div className="border p-6 rounded-[12px] shadow-sm bg-white overflow-auto max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{jobData.title}</h2>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Location:</strong> {jobData.location} <br />
        <strong>Employment Type:</strong> {jobData.employmentType} <br />
        <strong>Experience:</strong> {jobData.experience} <br />
        <strong>Salary:</strong> {jobData.salary}
      </p>

      <section className="mb-4">
        <h3 className="font-semibold">About the Role</h3>
        <p className="text-sm text-gray-700">{jobData.about}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Key Responsibilities</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {jobData.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Tech Stack</h3>
        <ul className="text-sm text-gray-700">
          {Object.entries(jobData.techStack).map(([key, val]) => (
            <li key={key}><strong>{key}:</strong> {val}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Requirements</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {jobData.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-semibold">Nice to Have</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {jobData.niceToHave.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-2">
        <h3 className="font-semibold">Why Join Us</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {jobData.perks.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default JobDescription;
