import { Link, useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const project = projects.find(
    (project) => String(project.id) === id
  );

  if (projects.length === 0) {
    return (
      <main className="page">
        <h2>Loading project...</h2>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="page">
        <h2>Project Not Found</h2>
        <Link to="/">Back to Projects</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>{project.title}</h1>

      <p>{project.description}</p>

      {project.technologies && (
        <p>
          <strong>Technologies:</strong> {project.technologies}
        </p>
      )}

      <Link to="/">Back to Projects</Link>
    </main>
  );
}

export default ProjectDetails;