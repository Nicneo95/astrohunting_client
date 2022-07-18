import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";


class Browse extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    showModal: false,
    selectedPost: {
      userName: "",
      imageUrl: "",
      typeOfAstrography: "Solar",
      camera: "",
      mount: "",
      telescope: "",
      processingData: [],
      calibrationFrame: [],
      latitude: "",
      longitude: "",
      description: "",
    },
    userName: "",
    typeOfAstrography: [],
    camera: "",
    mount: "",
    telescope: "",
    processingData: [],
    errors: {
      userName: "",
      typeOfAstrography: "",
      camera: "",
      mount: "",
      telescope: "",
      processingData: [],
    },
  };

  // function for form fields 2 way binding
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // function for form fields 2 way binding
  updateMultiSelect = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ typeOfAstrography: value });
  };

  // function for checkboxes 2 way binding
  updateCheckbox = (e) => {
    console.log(e.target.value, e.target.name);
    const checked = e.target.checked;
    let newItems = [...this.state[e.target.name]];
    if (checked) {
      newItems.push(e.target.value);
    } else {
      let index = newItems.findIndex((i) => i === e.target.value);
      newItems.splice(index, 1);
    }
    this.setState({ [e.target.name]: newItems });
  };

  handleShow = (post) => {
    this.setState({
      showModal: true,
      selectedPost: {
        ...post,
        camera: post.equipment.camera,
        mount: post.equipment.mount,
        telescope: post.equipment.telescope,
        latitude: post.location.latitude,
        longitude: post.location.longitude,
      },
    });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  updatePost = (id) => {
    this.props.showCreatePost(id);
  };

  deletePost = (id) => {
    axios.delete(`https://astrohunting.herokuapp.com/deletePosts/${id}`).then((res) => {
      console.log(res);
      let posts = this.state.posts.filter((post) => post._id !== id);
      let filteredPosts = this.state.filteredPosts.filter(
        (post) => post._id !== id
      );
      this.setState({ posts, filteredPosts, showModal: false });
    });
  };

  componentDidMount() {
    axios.get(`https://astrohunting.herokuapp.com/getPosts`).then((res) => {
      const posts = res.data;
      this.setState({ posts, filteredPosts: posts });
    });
  }

  resetFilter = (e) => {
    e.preventDefault();
    this.setState({
      userName: "",
      typeOfAstrography: [],
      camera: "",
      mount: "",
      telescope: "",
      processingData: [],
      filteredPosts: this.state.posts,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    let hasError = false;
    let errors = this.state.errors;
    if (
      this.state.userName &&
      (this.state.userName.length > 70 || this.state.userName.length < 2)
    ) {
      errors.userName = "Please enter a username between 2 and 70 characters";
      hasError = true;
    }
    if (hasError) {
      this.setState({ errors });
      return;
    }
    console.log(this.state);
    let newFilteredPosts = this.state.posts.filter((post) => {
      if (
        this.state.userName &&
        !post.userName.toLowerCase().includes(this.state.userName.toLowerCase())
      ) {
        return false;
      }
      if (
        this.state.typeOfAstrography.length > 0 &&
        !this.state.typeOfAstrography.includes(post.typeOfAstrography)
      ) {
        return false;
      }
      if (
        this.state.camera &&
        !post.camera.toLowerCase().includes(this.state.camera.toLowerCase())
      ) {
        return false;
      }
      if (
        this.state.mount &&
        !post.mount.toLowerCase().includes(this.state.mount.toLowerCase())
      ) {
        return false;
      }
      if (
        this.state.telescope &&
        !post.telescope
          .toLowerCase()
          .includes(this.state.telescope.toLowerCase())
      ) {
        return false;
      }
      if (this.state.processingData.length > 0) {
        const filteredArray = this.state.processingData.filter((value) =>
          post.processingData.includes(value)
        );
        if (filteredArray.length === 0) {
          return false;
        }
      }
      return true;
    });
    this.setState({ filteredPosts: newFilteredPosts });
  };

  render() {
    let equipments = [
      {
        "label": "Camera",
        "name": "camera",
        "placeholder": "Brand/Model of camera",
      },
      {
        "label": "Mount",
        "name": "mount",
        "placeholder": "",
      },
      {
        "label": "Telescope",
        "name": "telescope",
        "placeholder": "",
      },
    ];

    let processingData = [
      {
        "label": "PixInsight",
        "value": "PixInsight",
        "id": "pixInsight",
      },
      {
        "label": "Stacker",
        "value": "Stacker",
        "id": "stacker",
      },
      {
        "label": "Deep Sky",
        "value": "Deep Sky",
        "id": "deep-sky",
      },
      {
        "label": "Photoshop",
        "value": "Photoshop",
        "id": "photoshop",
      },
      {
        "label": "Lightroom",
        "value": "Lightroom",
        "id": "lightroom",
      },
      {
        "label": "StarStaX",
        "value": "StarStaX",
        "id": "starstax",
      },
    ];

    return (
    <React.Fragment>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="background">
            <section className="browse">
                <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={12} xl={2}>
                    <form onSubmit={this.submitForm}>
                        <div>
                        <label>Username</label>
                        <input
                            className="form-control"
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.updateFormField}
                        />
                        {this.state.errors.userName ? (
                            <span className="form-error-message">
                            {" "}
                            {this.state.errors.userName}{" "}
                            </span>
                        ) : null}
                        </div>
                        <div>
                        <label>Type of Astrography</label>
                        <select
                            multiple
                            className="form-select form-control"
                            name="typeOfAstrography"
                            onChange={this.updateMultiSelect}
                            value={this.state.typeOfAstrography}
                        >
                            <option value="solar">Solar</option>
                            <option value="planetary">Planetary</option>
                            <option value="deep sky">Deep Sky</option>
                        </select>
                        </div>
                        <div>
                        {equipments &&
                            equipments.map((equipment) => (
                            <div key={equipment.name}>
                                <label>{equipment.label}</label>
                                <input
                                className="form-control"
                                type="text"
                                name={equipment.name}
                                value={this.state[equipment.name]}
                                placeholder={equipment.placeholder}
                                onChange={this.updateFormField}
                                />
                                {this.state.errors[equipment.name] ? (
                                <span className="form-error-message">
                                    {" "}
                                    {this.state.errors[equipment.name]}{" "}
                                </span>
                                ) : null}
                            </div>
                            ))}
                        </div>
                        <div>
                        <label className="form-check-label d-block">
                            Processing Data
                        </label>
                        {processingData &&
                            processingData.map((datum) => (
                            <div
                                className="form-check form-check-inline"
                                key={datum.name}
                            >
                                <input
                                className="form-check-input"
                                type="checkbox"
                                name="processingData"
                                value={datum.value}
                                onChange={this.updateCheckbox}
                                checked={this.state.processingData.includes(
                                    datum.value
                                )}
                                id={datum.id}
                                />
                                <label className="form-check-label" htmlFor={datum.id}>
                                {datum.label}
                                </label>
                            </div>
                            ))}
                        </div>
                        <button className="btn btn-primary mr-2" type="submit">
                        Filter
                        </button>
                        <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={this.resetFilter}
                        >
                        Reset
                        </button>
                    </form>
                    </Col>
                    <Col xs={12} md={12} xl={10}>
                    <Row className="align-items-center">
                        {this.state.filteredPosts.map((post) => (
                        <Col xs={12} md={4} xl={3} key={post._id}>
                            <Card className="postCard">
                            <Card.Img variant="top" src={post.imageUrl} />
                            <Card.Body>
                                <Card.Title>{post.userName}</Card.Title>
                                <Card.Text>
                                {post.description.slice(0, 100)}...
                                </Card.Text>
                                <Card.Subtitle className="mb-3">
                                <Badge bg="secondary">{post.typeOfAstrography}</Badge>
                                </Card.Subtitle>
                                <Button
                                variant="primary"
                                onClick={() => this.handleShow(post)}
                                >
                                More
                                </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
    </React.Fragment>
    );
  }
}

export default Browse;
