import React from "react";
import ListBox from "./ListBox";
import WatchedBox from "./Watched/WatchedBox";

function Main({children}) {
  return (
    <main className="main">
     {children}
    </main>
  );
}

export default Main;
