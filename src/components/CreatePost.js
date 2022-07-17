// import React from 'react'
// import PostForm from '../forms/PostForm';


// export default class CreatePost extends React.Component {
//     state = {
//         newUserName: "",
//         newImageUrl: "",
//         newTypeOfAstrography: "Solar",
//         newCamera: "",
//         newMount: "",
//         newTelescope: "",
//         newProcessingData: [],
//         newCalibrationFrame: [],
//         newLatitude: "",
//         newLongitude: "",
//         newDescription:"",
//         addValid: false
//     }

//     // function for form fields 2 way binding
//     updateFormField = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     // function for checkboxes 2 way binding
//     updateCheckbox = (e) => {
//         let key = e.target.name
//         if (this.state[key].includes(e.target.value)) {
//             let indexToRemove = this.state[key].findIndex((t) => t === e.target.value)
//             this.setState({
//                 [key]: [...this.state[key].slice(0, indexToRemove), ...this.state[key].slice(indexToRemove + 1)]
//             })
//         } else {
//             this.setState({
//                 [key]: [...this.state[key], e.target.value]
//             })
//         }
//     }

//     addFormIsValid = () => {
//         this.setState({
//             addValid: true
//         })
//     }

//     // post request to backend server
//     // createNewPost = async () => {
//     //     let newPost = {
//     //         "userName": this.state.newUserName,
//     //         "imageUrl": this.state.newImageUrl,
//     //         "typeOfAstrography": this.state.newTypeOfAstrography,
//     //         "equipment": {
//     //             "camera": this.state.newCamera,
//     //             "mount": this.state.newMount,
//     //             "telescope": this.state.newTelescope,
//     //         },
//     //         "processingData": this.state.newProcessingData,
//     //         "calibrationFrame": this.state.newCalibrationFrame,
//     //         "location": {
//     //             "latitude": this.state.latitude,
//     //             "longitude": this.state.longitude,
//     //         },
//     //         "description": this.state.description,
//     //     }
//     // }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className='container-fluid content-container'>
//                     <div className='add-content'>
//                         <h3>Create a memorable Astrography Sightings</h3>
//                         <PostForm updateFormField={this.updateFormField}
//                             updateCheckbox={this.updateCheckbox}
//                             createNewPost={this.createNewPost}
//                             setActive={this.props.setActive}
//                             newUserName={this.state.newName}
//                             newImageUrl={this.state.newImgUrl}
//                             newTypeOfAstrography={this.state.newGender}
//                             newCamera={this.state.newDateOfBirth}
//                             newMount={this.state.newSpecies}
//                             newTelescope={this.state.newBreed}
//                             newProcessingData={this.state.newDescription}
//                             newCalibrationFrame={this.state.newStatusTags}
//                             newLatitude={this.state.newAdoptFoster}
//                             newLongitude={this.state.newCaretakerName}
//                             newDescription={this.state.newCaretakerEmail}
//                             addValid={this.state.addValid}
//                             addFormIsValid={this.addFormIsValid}
//                         />
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }
// }