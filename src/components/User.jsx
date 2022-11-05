import React, { useEffect, useState } from "react";
import GetUser from "./GetUser";
import axios from "axios";

function User() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/gmcodes20?client_id=${process.env.REACT_APP_CLIENT_ID}&secret=${process.env.REACT_APP_CLIENT_SECRET}`
        );
        setData(res.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return <GetUser loading={loading} data={data} error={error} />;
}

export default User;
