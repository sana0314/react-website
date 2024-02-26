import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiEdit2 } from "react-icons/fi";
import Form from "react-bootstrap/Form";


export default function EditProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <button className="button-primary mt-4 mt-sm-0 mx-4 mb-4"  onClick={handleShow}>
       <FiEdit2 />
       <span> Edit Profile</span>
      </button>
       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>  Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="my-4" controlId=" exampleForm.ControlInput1">
              <div className="mb-3 align-items-center row">
                <div className="col-4">
                 
                  <Form.Label>Profile Picture</Form.Label>
                </div>
                <div className="col-8">
                 
                  <div className="">
                    <div className="row align-items-center">
                      <div className="col-3">
                       
                        <img
                          className="modal-image"
                          src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
                        />
                      </div>
                      <div className="col-9">
                       
                        <span className="primaryColor">Upload Photo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 row ">
                <div className="col-3">
                 
                  <Form.Label>Cover Photo</Form.Label>
                </div>
                <div className="col-9 ">
                  <img
                    className="cover-photo"
                    src="https://www.shutterstock.com/image-photo/black-asphalt-floor-background-dark-600nw-2250580785.jpg"
                    alt="Banner image"
                  />
                  <span className="primaryColor">Upload Photo</span>
                </div>
              </div>
              <div className="mb-3 row align">
                <div className="col-3">
                 
                  <Form.Label>Bio</Form.Label>
                </div>
                <div className="col-9">
                  <Form.Control as="textarea" rows={3} />
                </div>
              </div>
              <div className="mb-3 row align">
                <div className="col-3">
                 
                  <Form.Label>Username</Form.Label>
                </div>
                <div className="col-9">
                 
                  <Form.Control type="email" placeholder="" />
                </div>
              </div>
              <div className="mb-3 row align">
                <div className="col-3">
                 
                  <Form.Label>Location</Form.Label>
                </div>
                <div className="col-9">
                 
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <div className="mb-3 row align">
                <div className="col-3">
                 
                  <Form.Label>Relationship</Form.Label>
                </div>
                <div className="col-9">
                 
                  <Form.Select aria-label="Default select example">
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </div>
              <div className="mb-3 row align">
                <div className="col-3">
                 
                  <Form.Label>Website</Form.Label>
                </div>
                <div className="col-9">
                 
                  <Form.Control type="email" placeholder="" />
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <button className="button-primary"  onClick={handleClose}>
            <span className="px-4"> Save</span> </button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
