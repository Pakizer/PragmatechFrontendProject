import React from "react";
import { useHistory, useLocation } from "react-router";

const Layout = ({ children }) => {
  let router = useHistory();
  let location = useLocation();

  return (
    <div>
      {children}
      {!(location.pathname === "/") ? (
        <button
          className="m-4"
          onClick={() => {
            router.push({
              pathname: "/",
            });
          }}
        >
          Back Home Page
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Layout;
