import React, { Suspense, lazy } from "react";

const MyProfile = lazy(() => import("./Components/MyProfile"));
const Projects = lazy(() => import("./Components/Projects"));
const Skills = lazy(() => import("./Components/Skills"));

function App() {
  return (
    <div>
      
      <Suspense fallback={<h2>Loading...</h2>}>
        <MyProfile />
        <Projects />
        <Skills />
      </Suspense>
    </div>
  );
}

export default App;
