import "./App.css";
import { Component } from "react";
import { Banner } from "./components/Banner";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    page: "banner",
    postId: null,
  };

  render() {
    return (
      <div className="App">
        {this.state.page === "banner" && <Banner />}
        <NavBar
          page={this.state.page}
        />
      </div>
    );
  }
}

export default App;
