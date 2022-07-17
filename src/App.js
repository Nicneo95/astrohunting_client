import "./App.css";
import { Component } from "react";
import { Banner } from "./components/Banner";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    page: "banner",
    postId: null,
  };

  showCreatePost = (postId) => {
    this.setState(
      {
        page: "createpost",
        postId,
      },
      console.log("showCreatePost", this.state)
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.page === "banner" && <Banner />}
        {this.state.page === "createpost" && (
          <CreatePost postId={this.state.postId}  />)}
        <NavBar page={this.state.page}
        showCreatePost={this.showCreatePost} />
      </div>
    );
  }
}

export default App;
