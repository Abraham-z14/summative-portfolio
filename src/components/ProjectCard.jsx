import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <Link to={`/projects/${project.id}`}>
        View Project
      </Link>
    </article>
  );
}

export default ProjectCard;
