import React from "react";
import Typewriter from "typewriter-effect";

function Type1() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Developer",
          "Backend Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type1;