import { useState } from "react";

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      title: title.trim(),
      description: description.trim(),
      technologies: technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
    };

    onAddProject(newProject);

    setTitle("");
    setDescription("");
    setTechnologies("");
  }

  return (
    <section className="project-form-section">
      <h2>Add a Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="project-title">Project Title</label>
        <input
          id="project-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Project title"
        />

        <label htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your project"
        />

        <label htmlFor="project-technologies">
          Technologies
        </label>
        <input
          id="project-technologies"
          type="text"
          value={technologies}
          onChange={(event) =>
            setTechnologies(event.target.value)
          }
          placeholder="React, JavaScript, CSS"
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;