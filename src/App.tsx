import "./styles/index.scss";
import GithubSearcherContainer from "./containers/GithubSearcherContainer";
import React from "react";
function App(): React.ReactElement {
  return (
    <div className="container">
      <GithubSearcherContainer />
    </div>
  );
}

export default App;
