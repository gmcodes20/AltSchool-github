import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Loading from "./Loading";

function GetRepo({ url }) {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastRepo = currentPage * usersPerPage;
  const skip = indexOfLastRepo - usersPerPage;
  const currentPosts = repos?.slice(skip, indexOfLastRepo);

  let totalUsers = repos?.length;

  //  Get Total Page Count
  const totalPageCount = Math.ceil(totalUsers / usersPerPage);

  const updatePage = (e) => {
    setCurrentPage(Number(e.target.innerHTML));
  };
  const prev = () =>
    currentPage <= 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1);

  const next = () =>
    currentPage >= totalPageCount
      ? setCurrentPage(totalPageCount)
      : setCurrentPage(currentPage + 1);

  useEffect(() => {
    const getRepo = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `https://api.github.com/users/gmcodes20/repos?page=1&per_page=150&client_id=${process.env.REACT_APP_CLIENT_ID}&secret=${process.env.REACT_APP_CLIENT_SECRET}`
        );
        setRepos(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getRepo();
  }, [url]);

  useEffect(() => {
    let list = document.querySelectorAll(".page-link");

    list.forEach((item) => {
      item.classList.remove("active");
      if (Number(item.innerHTML) === Number(currentPage)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });

  if (loading) return <Loading />;

  if (!loading && error !== null) return <p className="p">{error.message}</p>;

  return (
    <Fragment>
      <div className="container shadow-sm card">
        <h3 className="p text-danger">Repositories</h3>
        <ol className="repo-list m-2">
          {currentPosts?.map((repo) => {
            return (
              <li className=" text-success" key={repo.id}>
                <Link
                  className=" link link-success"
                  to=":repo"
                  state={{ repoLink: repo?.url }}
                >
                  {repo.name}
                </Link>
              </li>
            );
          })}
        </ol>
        <Pagination
          totalPageCount={totalPageCount}
          updatePage={updatePage}
          prev={prev}
          next={next}
          currentPage={currentPage}
        />
      </div>
    </Fragment>
  );
}

export default GetRepo;
