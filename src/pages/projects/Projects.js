import { React, useState, useEffect } from "react";
import Project from "./Project";
import "./Project";

function Projects() {
  const url = "https://api.github.com/users/StefanKehayov/repos";
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const repositoriesFromServer = await fetchRepositories();
      setRepositories(repositoriesFromServer);
    };

    getRepositories();
  }, []);

  // Fetch Repositories

  const fetchRepositories = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  // # TODO fetch from https://api.github.com/users/StefanKehayov/repos  all the public repositories

  return (
    <>
      <h3 className="text-center"> Projects fetched form GitHub </h3>

      {/*  Maps every  repositories to separate Project element */}

      {repositories.length > 0 ? (
        <div className="card-container-wrapper">
          <div className="card-container">
            {repositories.map((repository) => (
              <Project key={repository.id} repos={repository} />
            ))}
          </div>
        </div>
      ) : (
        <p>
          {" "}
          Loading <i className="fas fa-truck-loading"></i>
        </p>
      )}
    </>
  );
}

export default Projects;
