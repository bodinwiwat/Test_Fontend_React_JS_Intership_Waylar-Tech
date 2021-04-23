import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>        
        <ReactBootStrap.Navbar
          fixed="top"
          expand="lg"
          bg="light"
          variant="light"
        >
          <ReactBootStrap.Navbar.Brand href="#home">
            Test-React-Fontend
          </ReactBootStrap.Navbar.Brand>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default App;
