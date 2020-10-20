import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import CommentSection from "./components/CommentSection";
import Dropdown from "./components/Dropdown";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6cPxMu7_cTo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ItemModal></ItemModal>
            <CommentSection />
          </Container>
          <Dropdown></Dropdown>
        </div>
      </Provider>
    );
  }
}

export default App;
