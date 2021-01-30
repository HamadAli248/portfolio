import React from "react";
import BlogCard from "./BlogCard";
import Docker from "../../images/BlogImages/Docker.png";

export default function BlogsHomePage() {
  return (
    <div>
      <BlogCard
        img={Docker}
        title="Dockerizing A React Application"
        cardText="This blog will show how to create a react application from scratch and containerise it using docker. We will be using a two stage build rather than using express."
        link="/dockerizing-a-react-application"
      />
    </div>
  );
}
