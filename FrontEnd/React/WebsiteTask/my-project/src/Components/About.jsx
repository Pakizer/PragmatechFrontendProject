import React from "react";
import { useLocation } from "react-router";

const About = () => {
  const location = useLocation();
  return (
    <div>
      About page
      {<div className="p-4"> Bu yazı link üzrə yaranıb </div>}
    </div>
  );
};
export default About;
