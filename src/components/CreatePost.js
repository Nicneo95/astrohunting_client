import React from "react";
import PostForm from "../forms/PostForm";

const CreatePost = (props) => {
  return (
    <React.Fragment>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <div className="clouds"></div>
    <div className="background">
      <div className="createPost">
        <div className="add-content">
          <h3>Create a memorable Astrography Sightings</h3>
          <PostForm postId={props.postId} showBrowse={props.showBrowse} />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default CreatePost;
