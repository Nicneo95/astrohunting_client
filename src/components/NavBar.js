import { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";

class NavBar extends Component {
  state = {
    page: this.props.page,
    scrolled: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.page !== nextProps.page) {
      console.log(prevState.page, nextProps.page);
      return { page: nextProps.page, scrolled: false };
    }
  }

  onScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Navbar expand="md" className={this.state.scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <div className="logoText">
              <img className="astroHuntingLogo" src={logo} alt="Logo" />
              <div>AstroHunting</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#browse"
                className={
                  this.state.page === "browse"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  this.props.showBrowse();
                }}
              >
                BROWSE
              </Nav.Link>
              <Nav.Link
                href="#createPost"
                className={
                  this.state.page === "createpost"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  this.props.showCreatePost();
                }}
              >
                CREATE POST
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
