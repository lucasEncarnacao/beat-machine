import React from "react";
import BeatGrid from "./BeatGrid";
import Controls from "./Controls";
import VisualTracker from "./VisualTracker";
import Visualizer from "./Visualizer";

function App() {
  return (
    <>
      <Controls />
      <BeatGrid />
      <VisualTracker />
      <Visualizer />
    </>
  );
}

export default App;
