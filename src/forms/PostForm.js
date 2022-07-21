import React, { Component } from "react";
import "../assets/style/form.css";
import "../assets/style/modal.css";
import axios from "axios";
import { Alert } from "react-bootstrap";

class PostForm extends Component {
  state = {
    postId: this.props.postId ?? null,
    newUserName: "",
    newImageUrl: "",
    newTypeOfAstrography: "Solar",
    newCamera: "",
    newMount: "",
    newTelescope: "",
    newProcessingData: [],
    newCalibrationFrame: [],
    newLatitude: "",
    newLongitude: "",
    newDescription: "",
    submitSuccess: null,
    submitError: null,
    errors: {
      newUserName: null,
      newImageUrl: null,
      newTypeOfAstrography: null,
      newCamera: null,
      newMount: null,
      newTelescope: null,
      newProcessingData: null,
      newCalibrationFrame: null,
      newLatitude: null,
      newLongitude: null,
      newDescription: null,
    },
  };

  // get data from database
  componentDidMount() {
    if (this.props.postId) {
      axios
        .get(`https://astrohunting.herokuapp.com/getPost/${this.props.postId}`)
        .then((res) => {
          const post = res.data;
          console.log(post);
          this.setState({
            newUserName: post.userName,
            newImageUrl: post.imageUrl,
            newTypeOfAstrography: post.typeOfAstrography,
            newCamera: post.equipment.camera,
            newMount: post.equipment.mount,
            newTelescope: post.equipment.telescope,
            newProcessingData: post.processingData,
            newCalibrationFrame: post.calibrationFrame,
            newLatitude: post.location.latitude,
            newLongitude: post.location.longitude,
            newDescription: post.description,
          });
        });
    }
  }

  // function for form fields 2 way binding
  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

  // submit form and check for errors
  submitForm = (e) => {
    e.preventDefault();
    let hasError = false;
    let errors = this.state.errors;
    if (
      !this.state.newUserName ||
      this.state.newUserName.length > 70 ||
      this.state.newUserName.length < 2
    ) {
      errors.newUserName =
        "Please enter a username between 2 and 70 characters";
      hasError = true;
    } else {
      errors.newUserName = "" ;
    }
    if (!this.state.newImageUrl) {
      errors.newImageUrl = "Please enter a valid image url";
      hasError = true;
    } else {
      errors.newImageUrl = "" ;
    }
    if (
      !this.state.newTypeOfAstrography ||
      this.state.newTypeOfAstrography.length > 9 ||
      this.state.newTypeOfAstrography.length < 5
    ) {
      errors.newTypeOfAstrography =
        "Please enter a type of astrography between 5 and 9 characters";
      hasError = true;
    } else {
      errors.newTypeOfAstrography = "" ;
    }
    if (!this.state.newCamera) {
      errors.newCamera = "Please enter a camera";
      hasError = true;
    } else {
      errors.newCamera = "" ;
    }
    if (!this.state.newMount) {
      errors.newMount = "Please enter a mount";
      hasError = true;
    } else {
      errors.newMount = "" ;
    }
    if (!this.state.newTelescope) {
      errors.newTelescope = "Please enter a mount";
      hasError = true;
    } else {
      errors.newTelescope = "" ;
    }
    if (this.state.newProcessingData.length === 0) {
      errors.newProcessingData = "Please select a processing data";
      hasError = true;
    } else {
      errors.newProcessingData = "" ;
    }
    if (this.state.newCalibrationFrame.length === 0) {
      errors.newCalibrationFrame = "Please select a calibration frame";
      hasError = true;
    } else {
      errors.newCalibrationFrame = "" ;
    }
    if (!this.state.newLatitude || isNaN(this.state.newLatitude)) {
      errors.newLatitude = "Please enter a numerical latitude";
      hasError = true;
    } else {
      errors.newLatitude= "" ;
    }
    if (!this.state.newLongitude || isNaN(this.state.newLongitude)) {
      errors.newLongitude = "Please enter a numerical longitude";
      hasError = true;
    } else {
      errors.newLongitude = "" ;
    }
    if (!this.state.newDescription) {
      errors.newDescription = "Please enter a description";
      hasError = true;
    } else {
      errors.newDescription= "" ;
    }
    if (hasError) {
      this.setState({ errors });
      return;
    }

    // function to create new post or update post
    let newPost = {
      "userName": this.state.newUserName,
      "imageUrl": this.state.newImageUrl,
      "typeOfAstrography": this.state.newTypeOfAstrography,
      "equipment": {
        "camera": this.state.newCamera,
        "mount": this.state.newMount,
        "telescope": this.state.newTelescope,
      },
      "processingData": this.state.newProcessingData,
      "calibrationFrame": this.state.newCalibrationFrame,
      "location": {
        "latitude": this.state.newLatitude,
        "longitude": this.state.newLongitude,
      },
      "description": this.state.newDescription,
    };
    console.log(newPost);
    if (this.state.postId === null) {
      this.addPost(newPost);
    } else {
      this.updatePost(newPost);
    }
  };

  // post data to server to create new post
  addPost = (data) => {
    axios
      .post("https://astrohunting.herokuapp.com/createPosts", data)
      .then((response) => {
        console.log(response);
        this.setState({ submitSuccess: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ submitError: error });
      });
  };

   // post data to server to update post
  updatePost = (data) => {
    axios
      .put("https://astrohunting.herokuapp.com/updatePosts/" + this.state.postId, data)
      .then((response) => {
        console.log(response);
        this.setState({ submitSuccess: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ submitError: error });
      });
  };

  render() {
    let equipments = [
      {
        "label": "Camera",
        "name": "newCamera",
        "placeholder": "Model of camera",
      },
      {
        "label": "Mount",
        "name": "newMount",
        "placeholder": "Model of mount",
      },
      {
        "label": "Telescope",
        "name": "newTelescope",
        "placeholder": "Model of telescope",
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

    let calibrationFrames = [
      {
        "label": "Dark",
        "value": "Dark",
        "id": "dark",
      },
      {
        "label": "Bias",
        "value": "Bias",
        "id": "bias",
      },
      {
        "label": "Flat",
        "value": "Flat",
        "id": "flat",
      },
      {
        "label": "Light",
        "value": "Light",
        "id": "light",
      },
    ];

    return (
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="custom-form">
          <form onSubmit={this.submitForm}>
            <h5>{this.state.postId ? "Edit Existing" : "Create New"} Post</h5>

            {/* username */}
            <div>
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="newUserName"
                value={this.state.newUserName}
                placeholder="Enter Username"
                onChange={this.updateFormField}
              />
              {this.state.errors.newUserName ? (
                <span className="form-error-message">
                  {" "}
                  {this.state.errors.newUserName}{" "}
                </span>
              ) : null}
            </div>
            {/* image url */}
            <div>
              <label>Image URL of Sightings</label>
              <input
                className="form-control"
                type="text"
                name="newImageUrl"
                value={this.state.newImageUrl}
                placeholder="https://example.com/JBAYcvA5R6I.jpg"
                onChange={this.updateFormField}
              />
              {this.state.errors.newImageUrl ? (
                <span className="form-error-message">
                  {" "}
                  {this.state.errors.newImageUrl}{" "}
                </span>
              ) : null}
              {this.state.newImageUrl ? (
                <img
                  src={this.state.newImageUrl}
                  alt="Rendered from URL"
                  className="image-url-rendered"
                />
              ) : null}
            </div>
            {/* type of astrography */}
            <div>
              <label>Type of Astrography</label>
              <select
                className="form-select form-control"
                name="newTypeOfAstrography"
                onChange={this.updateFormField}
                value={this.state.newTypeOfAstrography}
              >
                <option value="solar">Solar</option>
                <option value="planetary">Planetary</option>
                <option value="deep sky">Deep Sky</option>
              </select>
            </div>
            {/* equipment use */}
            <h5> Equipment Use </h5>
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
            {/* processing data */}
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
                      name="newProcessingData"
                      value={datum.value}
                      onChange={this.updateCheckbox}
                      checked={this.state.newProcessingData.includes(
                        datum.value
                      )}
                      id={datum.id}
                    />
                    <label className="form-check-label" htmlFor={datum.id}>
                      {datum.label}
                    </label>
                  </div>
                ))}
                {this.state.errors.newProcessingData ? (
                <span className="form-error-message">
                  {" "}
                  {this.state.errors.newProcessingData}{" "}
                </span>
              ) : null}
            </div>
            {/* calibration frame */}
            <div>
              <label className="form-check-label d-block">
                Calibration Frame
              </label>
              {calibrationFrames &&
                calibrationFrames.map((calibrationFrame) => (
                  <div
                    className="form-check form-check-inline"
                    key={calibrationFrame.name}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="newCalibrationFrame"
                      value={calibrationFrame.value}
                      checked={this.state.newCalibrationFrame.includes(
                        calibrationFrame.value
                      )}
                      id={calibrationFrame.id}
                      onChange={this.updateCheckbox}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={calibrationFrame.id}
                    >
                      {calibrationFrame.label}
                    </label>
                  </div>
                ))}
              {this.state.errors.newCalibrationFrame ? (
                <span className="form-error-message">
                  {" "}
                  {this.state.errors.newCalibrationFrame}{" "}
                </span>
              ) : null}
            </div>
            {/* location */}
            <h5> Location </h5>
            <div>
              <div>
                <label>Latitude</label>
                <input
                  className="form-control"
                  type="text"
                  name="newLatitude"
                  value={this.state.newLatitude}
                  placeholder="eg. 1.290270"
                  onChange={this.updateFormField}
                />
                {this.state.errors.newLatitude ? (
                  <span className="form-error-message">
                    {" "}
                    {this.state.errors.newLatitude}{" "}
                  </span>
                ) : null}
              </div>
              <div>
                <label>Longitude</label>
                <input
                  className="form-control"
                  type="text"
                  name="newLongitude"
                  value={this.state.newLongitude}
                  placeholder="eg. 103.851959"
                  onChange={this.updateFormField}
                />
                {this.state.errors.newLongitude ? (
                  <span className="form-error-message">
                    {" "}
                    {this.state.errors.newLongitude}{" "}
                  </span>
                ) : null}
              </div>
            </div>
            {/* description input */}
            <div>
              <label>Description</label>
              <textarea
                className="form-control"
                name="newDescription"
                value={this.state.newDescription}
                placeholder="Write a short description"
                rows="5"
                onChange={this.updateFormField}
              ></textarea>
              {this.state.errors.newDescription ? (
                <span className="form-error-message">
                  {" "}
                  {this.state.errors.newDescription}{" "}
                </span>
              ) : null}
            </div>

            <div className="custom-btn-group">
              {/* submit button */}
              <button
                className="btn btn-primary custom-btn-primary"
                type="submit"
              >
                {this.state.postId ? "Edit" : "Add"}
              </button>
              {/* button to trigger cancel modal */}
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.props.showBrowse}
              >
                Cancel
              </button>
            </div>
            {this.state.submitSuccess && (
              <Alert variant="success">
                The post has been added successfully!
              </Alert>
            )}
            {this.state.submitError && (
              <Alert variant="danger">{this.state.submitError?.message}</Alert>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;