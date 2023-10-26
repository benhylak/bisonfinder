import React from "react";
import { Howl, Howler } from "howler";

const Farting = () => {
  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: false,
    });
  };

  return (
    <div>
      <button onClick={() => soundPlay("fartSound1.mp3")}>
        Play Fart Sound 1
      </button>
      <button onClick={() => soundPlay("fartSound2.mp3")}>
        Play Fart Sound 2
      </button>
      <button onClick={() => soundPlay("fartSound3.mp3")}>
        Play Fart Sound 3
      </button>
    </div>
  );
};

export default Farting;
