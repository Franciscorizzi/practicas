import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Container from "./components/Container/Container";

function App() {
  return (
    <div id="wrapper">
    <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        
        <div id="content">
          <Topbar/>
          <Container/>
        </div>
        
        <footer class="sticky-footer bg-white"></footer>
      </div>
    </div>
  );
}

export default App;
