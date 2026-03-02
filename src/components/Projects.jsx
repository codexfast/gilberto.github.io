import github_logo from "../assets/imgs/Github.png";
import localProjects from "../assets/projects.json";

import { useState, useEffect } from "react";

const normalizeProjects = (data) => {
  const all = Array.isArray(data?.all) ? data.all : [];

  return {
    all: all.map((project) => ({
      title: project?.title ?? "",
      subtitle: project?.subtitle ?? "",
      desc: project?.desc ?? "",
      github: project?.github ?? "",
      thumb: project?.thumb ?? "",
    })),
  };
};

const Card = ({ title, subtitle, desc, github, thumb }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg shadow-gray-200 p-6 max-w-sm w-72">
      <img src={thumb} />
      <div className="p-4">
        <h2 className="text-xl text-theme poppins-bold mb-2">{title}</h2>
        <p className="text-secondary mb-4 poppins-medium">{subtitle}</p>
        <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {desc}
        </p>

        <div className="flex justify-center">
          <a
            href={github ? github : "#"}
            className="pt-2 px-4 rounded text-theme poppins-regular flex"
          >
            <img
              src={github_logo}
              alt="GitHub Logo"
              className="w-5 h-5 inline-block mr-2"
            />
            {github ? "Check on Github" : "Private"}
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState(normalizeProjects(localProjects));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/codexfast/projects/refs/heads/main/projects.json",
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProjects(normalizeProjects(data));
      } catch {
        setProjects(normalizeProjects(localProjects));
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (!projects?.all?.length) {
    return <div>No projects data available.</div>;
  }

  return (
    <div className="flex flex-row w-full gap-5 justify-center">
      {projects.all.slice(0, 3).map((project) => (
        <Card
          key={project.github || `${project.title}-${project.subtitle}`}
          {...project}
        />
      ))}
    </div>
  );
};

export default Projects;
