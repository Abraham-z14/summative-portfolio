
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";
import ProjectForm from "../components/ProjectForm";

function Home({ projects, search, onSearchChange, onAddProject }) {
  return (
    <>
      <Header />

      <main className="page">
        <section className="hero">
          <p>PROJECT SHOWCASE</p>
          <h1>Portfolio Projects</h1>
          <p>
            Explore projects, search the collection, or add something new.
          </p>
        </section>

        <SearchBar
          search={search}
          onSearchChange={onSearchChange}
        />

        <ProjectList projects={projects} />

        <ProjectForm onAddProject={onAddProject} />
      </main>
    </>
  );
}

export default Home;