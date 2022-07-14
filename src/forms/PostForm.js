import React from "react";
import { FormValidation } from "../validations/FormValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../assets/style/form.css";
import "../assets/style/modal.css"

export default function PostForm(props) {
    const { create, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormValidation)
    })
    const submitForm = (data) => {
        props.addFormIsValid()
        props.createNewPost()
    }

    return (
        <div className='container-fluid d-flex flex-column align-items-center'>
            <div className='custom-form'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <h5>Create New Post</h5>
                    {/* new post information */}
                    {/* username */}
                    <div>
                        <label>Username</label>
                        <input className="form-control"
                            type="text"
                            name="newUserName"
                            value={props.newUserName}
                            {...create("newUserName", { onChange: props.updateFormField })} />
                        {errors.newUserName ? <span className="form-error-message"> {errors.newUserName?.message} </span> : null}
                    </div>
                    {/* image url */}
                    <div>
                        <label>Image URL of Sightings</label>
                        <input className="form-control"
                            type="text"
                            name="newImageUrl"
                            value={props.newImageUrl}
                            {...create("newImageUrl", { onChange: props.updateFormField })} />
                        {errors.newImageUrl ? <span className="form-error-message"> {errors.newImageUrl?.message} </span> : null}
                        {props.newImageUrl ? <img src={props.newImageUrl}
                            alt="Rendered from URL"
                            className='image-url-rendered' /> : null}
                    </div>
                    {/* type of astrography */}
                    <div>
                        <label>Type of Astrography</label>
                        <select className="form-select form-control"
                            name="newTypeOfAstrography"
                            onChange={props.updateFormField}
                            value={props.newTypeOfAstrography}>
                            <option value="Solar">Solar</option>
                            <option value="Planetary">Planetary</option>
                            <option value="Deep Sky">Deep Sky</option>
                        </select>
                    </div>
                    {/* equipment use */}
                    <h5> Equipment used </h5>
                    <div>
                        <div>
                            <label>Camera</label>
                            <input className="form-control"
                                type="text"
                                name="newCamera"
                                value={props.newCamera}
                                placeholder="Brand/Model of camera"
                                {...create("newCamera", { onChange: props.updateFormField })}
                            />
                            {errors.newCamera ? <span className="form-error-message"> {errors.newCamera?.message} </span> : null}
                        </div>
                        <div>
                            <label>Mount</label>
                            <input className="form-control"
                                type="text"
                                name="newMount"
                                value={props.newMount}
                                {...create("newMount", { onChange: props.updateFormField })} />
                            {errors.newMount ? <span className="form-error-message"> {errors.newMount?.message} </span> : null}
                        </div>
                        <div>
                            <label>Telescope</label>
                            <input className="form-control"
                                type="text"
                                name="newTelescope"
                                value={props.newTelescope}
                                {...create("newTelescope", { onChange: props.updateFormField })} />
                            {errors.newTelescope ? <span className="form-error-message"> {errors.newTelescope?.message} </span> : null}
                        </div>    
                    </div>
                    {/* processing data */}
                    <div>
                        <label className="form-check-label d-block" >Processing Data</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="PixInsight"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("PixInsight")}
                                id="pixInsight" />
                            <label className="form-check-label" htmlFor="pixInsight">PixInsight</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="Stacker"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("Stacker")}
                                id="stacker" />
                            <label className="form-check-label" htmlFor="stacker">Stacker</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="Deep Sky"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("Deep Sky")}
                                id="deep-sky" />
                            <label className="form-check-label" htmlFor="deep-sky">Deep Sky</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="Photoshop"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("Photoshop")}
                                id="photoshop" />
                            <label className="form-check-label" htmlFor="photoshop">Photoshop</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="Lightroom"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("Lightroom")}
                                id="lightroom" />
                            <label className="form-check-label" htmlFor="lightroom">Lightroom</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newProcessingData"
                                value="StarStaX"
                                onChange={props.updateCheckbox}
                                checked={props.newProcessingData.includes("StarStaX")}
                                id="starstax" />
                            <label className="form-check-label" htmlFor="starstax">StarStaX</label>
                        </div>
                    </div>
                    {/* calibration frame */}
                    <div>
                        <label className="form-check-label d-block" >Calibration Frame</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newCalibrationFrame"
                                value="Dark"
                                checked={props.newCalibrationFrame.includes("Dark")}
                                id="dark"
                                {...create("newCalibrationFrame", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="dark">Dark</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newCalibrationFrame"
                                value="Bias"
                                checked={props.newCalibrationFrame.includes("Bias")}
                                id="bias"
                                {...create("newCalibrationFrame", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="bias">Bias</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newCalibrationFrame"
                                value="Flat"
                                checked={props.newCalibrationFrame.includes("Flat")}
                                id="flat"
                                {...create("newCalibrationFrame", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="flat">Flat</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="checkbox"
                                name="newCalibrationFrame"
                                value="Light"
                                checked={props.newCalibrationFrame.includes("Light")}
                                id="light"
                                {...create("newCalibrationFrame", { onChange: props.updateCheckbox })} />
                            <label className="form-check-label" htmlFor="light">Light</label>
                        </div>
                        {errors.newCalibrationFrame ? <span className="form-error-message"> {errors.newCalibrationFrame?.message} </span> : null}
                    </div>
                    {/* location */}
                    <h5> Location </h5>
                    <div>
                        <div>
                            <label>Latitude</label>
                            <input className="form-control"
                                type="text"
                                name="newLatitude"
                                value={props.newLatitude}
                                placeholder="Latitude"
                                {...create("newLatitude", { onChange: props.updateFormField })}
                            />
                            {errors.newLatitude ? <span className="form-error-message"> {errors.newLatitude?.message} </span> : null}
                        </div>
                        <div>
                            <label>Longitude</label>
                            <input className="form-control"
                                type="text"
                                name="newLongitude"
                                value={props.newLongitude}
                                {...create("newLongitude", { onChange: props.updateFormField })} />
                            {errors.newLongitude ? <span className="form-error-message"> {errors.newLongitude?.message} </span> : null}
                        </div>
                    </div>
                    {/* description input */}
                    <div>
                        <label>Description</label>
                        <textarea className="form-control"
                            name="newDescription"
                            value={props.newDescription}
                            placeholder="Write a short description on the animal"
                            rows="5"
                            {...create("newDescription", { onChange: props.updateFormField })}></textarea>
                        {errors.newDescription ? <span className="form-error-message"> {errors.newDescription?.message} </span> : null}
                    </div>
                    {props.addValid ? <div className='alert alert-success'>Sighting sucessfully created. Redirecting to Browse page.</div> : null}
                    <div className='custom-btn-group'>
                        {/* submit button */}
                        <button className="btn btn-primary custom-btn-primary"
                            type="submit"
                        >Add</button>
                        {/* button to trigger cancel modal */}
                        <button className="btn btn-secondary"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#cancelAddModal">Cancel</button>
                    </div>
                    {/* cancel modal */}
                    <div className="modal fade" id="cancelAddModal" data-bs-backdrop="static" data-bs-keyboard="false">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="cancelAddModalLabel">Discard changes?</h5>
                                    <button type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Discard changes and head to browse page?
                                </div>
                                <div className="modal-footer">
                                    <button type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                        onClick={() => props.setActive('browse')}>Discard changes</button>
                                    <button type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}