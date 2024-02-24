import React from "react";
import WelcomeBanner from "./_components/welcome-banner";

const Course = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 p-5">
      <div className="col-span-2">
        <WelcomeBanner />
      </div>
      <div />
    </div>
  );
};

export default Course;
