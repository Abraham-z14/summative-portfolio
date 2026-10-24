import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  function handleAddProject(newProject) {
    setProjects((currentProjects) => [
      ...currentProjects,
      {
        ...newProject,
        id: Date.now(),
      },
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            projects={filteredProjects}
            search={search}
            onSearchChange={setSearch}
            onAddProject={handleAddProject}
          />
        }
      />

      <Route
        path="/projects/:id"
        element={<ProjectDetails projects={projects} />}
      />
    </Routes>
  );
}

export default App;