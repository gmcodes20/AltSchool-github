import React, { useEffect, useState } from "react";
import GetUser from "./GetUser";
import { useLocation } from "react-router-dom";
import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  githubClientId = process.env.CLIENT_ID;
  githubClientSecret = process.env.CLIENT_SECRET;
}

function User() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { username } = location.state;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${username}?client_id=${githubClientId}&secret=${githubClientSecret}`
        );
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [username]);

  return <GetUser loading={loading} data={data} error={error} url={username} />;
}

export default User;
