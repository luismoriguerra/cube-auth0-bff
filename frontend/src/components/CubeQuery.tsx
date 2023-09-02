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
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);
  //   const [progress, setProgress] = useState(null);
  //   const [query, setQuery] = useState(null);
  //   const [accessToken, setToken] = useState(null);

  async function fetchData() {
    const [err, accessToken] = await to(
      getAccessTokenSilently({
        authorizationParams: {
          audience: `cubejs-app`,
          scope: "openid profile email phone address",
        },
      })
    );

    const query = {
      limit: 10,
      dimensions: ["activities.organizationid"],
      order: {
        "activities.organizationid": "asc",
      },
    };

    const cubejsApi = cubejs(accessToken, {
      apiUrl: "http://localhost:4000/cubejs-api/v1",
      //   apiUrl:
      //     "https://territorial-heron.aws-us-west-2-t-11709.cubecloudapp.dev/cubejs-api/v1",
    });

    const resultSet = await cubejsApi.load(query);

    setResultSet(resultSet);
  }

  function updateCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  const maxHeight = 850;

  const dataSource = resultSet?.tablePivot() || [];
  const columns = resultSet?.tableColumns() || [];

  return (
    <div>
      cube query
      <button onClick={updateCount}>Fetch Data</button>
      <div></div>
      <br />
      <h3>Total rows: {dataSource.length}</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
