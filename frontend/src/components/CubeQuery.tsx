/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Table } from "antd";
// import { useCubeQuery } from "@cubejs-client/react";
import cubejs from "@cubejs-client/core";
// import cubejs from "@cubejs-client/core";
import { useAuth0 } from "@auth0/auth0-react";
import to from "await-to-js";

export default function CubeQuery() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [resultSet, setResultSet] = useState(null);
  const [count, setCount] = useState(0);

  async function fetchData() {
    const [err, accessToken] = await to(
      getAccessTokenSilently({
        authorizationParams: {
          audience: `cubejs-app`,
        },
      })
    );

    const resultSet = await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());

    setResultSet(resultSet);
  }

  function updateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  const maxHeight = 850;

  return (
    <div>
      cube query
      <button onClick={updateCount}>Fetch Data</button>
      <div></div>
      <br />
      {JSON.stringify(resultSet)}
    </div>
  );
}
