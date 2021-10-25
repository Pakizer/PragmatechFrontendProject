import React from "react";
import { useParams, useLocation } from "react-router";
const Team = () => {
  const location = useLocation();
  const { name } = useParams();
  return (
    <>
      <div>
        <h1 className="">Team page</h1>
        Hi,I am {name}
      </div>
    </>
  );
};
export default Team;
