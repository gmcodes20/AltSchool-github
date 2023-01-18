import React, { Fragment, useState } from "react";
import axios from "axios";

import GetUsers from "./GetUsers";
import SearchUsers from "./SearchUsers";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}

function Search() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clearButton, setClearButton] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);

  const searchUser = async (input) => {
    // const response = await fetch(
    //   `https://api.github.com/search/users?q=${input}&client_id=${githubClientId}&secret=${githubClientSecret}`
    // )
    //   .then((data) => data.json())
    //   .then((users) => setUsersData(users.items))
    //   .catch((error) => setError(error));

    // setLoading(false);

    if (input === "") {
      setDisplayWarning(true);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 5000);
    } else {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.github.com/search/users?q=${input}&client_id=${githubClientId}&secret=${githubClientSecret}`
        );
        setUsersData(res.data.items);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
      setClearButton(true);
    }
  };

  const clearUsers = () => {
    setUsersData([]);
    setClearButton(false);
  };

  return (
    <Fragment>
      <button className="btn btn-primary ms-5 mt-4">Back</button>
      <div className="container">
        <SearchUsers searchUser={searchUser} />
        {displayWarning && (
          <p className="text-light bg-danger p-2 mt-4 mb-4">Input is empty</p>
        )}
        {clearButton && (
          <button
            onClick={clearUsers}
            className="btn btn-secondary btn-block mb-3 mt-3 w-100"
          >
            Clear
          </button>
        )}
        <GetUsers loading={loading} usersData={usersData} error={error} />
      </div>
    </Fragment>
  );
}

export default Search;
