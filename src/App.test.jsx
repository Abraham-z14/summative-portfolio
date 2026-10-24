import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

const mockProjects = [
  {
    id: 1,
    title: "Shopping List App",
    description: "A shopping list project",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Product Dashboard",
    description: "A product dashboard project",
    technologies: ["React", "CSS"],
  },
  {
    id: 3,
    title: "Hogwild",
    description: "A hog-themed project",
    technologies: ["React", "JavaScript"],
  },
];

describe("Portfolio App", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProjects),
      })
    );
  });

  it("loads and displays projects", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByText("Shopping List App")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Product Dashboard")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Hogwild")
    ).toBeInTheDocument();
  });

  it("filters projects when searching", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await screen.findByText("Shopping List App");

    const searchInput = screen.getByLabelText(/search projects/i);

    fireEvent.change(searchInput, {
      target: { value: "hog" },
    });

    expect(
      screen.getByText("Hogwild")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Shopping List App")
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText("Product Dashboard")
    ).not.toBeInTheDocument();
  });

  it("adds a new project through the form", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await screen.findByText("Shopping List App");

    fireEvent.change(
      screen.getByLabelText(/project title/i),
      {
        target: { value: "Test Project" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/^description$/i),
      {
        target: { value: "A test portfolio project" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/technologies/i),
      {
        target: { value: "React, CSS" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /add project/i,
      })
    );

    expect(
      screen.getByText("Test Project")
    ).toBeInTheDocument();

    expect(
      screen.getByText("A test portfolio project")
    ).toBeInTheDocument();
  });

  it("displays project details for a project route", async () => {
    render(
      <MemoryRouter initialEntries={["/projects/1"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByText("Shopping List App")
    ).toBeInTheDocument();

    expect(
      screen.getByText("A shopping list project")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /back to projects/i,
      })
    ).toBeInTheDocument();
  });
});