
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  Form  from 'react-bootstrap/Form';
import { Config } from '../config/Config';
import  Spinner  from 'react-bootstrap/Spinner';


function Upload({showFunction, show, setPictures}) {
  const handleClose = () => showFunction(false);
  const [uploading, setUpload] = useState(false);
  const [disable, setDisable] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.file; // Access the input element by its name or id
    const selectedFile = fileInput.files[0]
    const maxSize = 5 * 1024 * 1024; 
    if(selectedFile.size > maxSize) {
      alert ("File too large file size limit exceeded, the file should be less than 5MB")
    } else {
    // Get form data
    setDisable(true)
    setUpload(true)
    const formData = new FormData(e.target);
    console.log("here")
    let response = await fetch(`${Config.getBaseUrl()}/api/files/upload`, {
      method: "POST",
      body: formData,
    })
    if(response.status === 200) {
      let data = await response.json()
      setPictures(prev => {
        let newState = [...prev];
        newState.push(data)
        return newState
      })
      alert("upload success")
      handleClose()
    }  else {
      console.log("File Size must be less than 200")
    }
    setDisable(false)
    setUpload(false)
  }
  }
  return (
    <>
      <Modal  size='lg' backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name of Image</Form.Label>
                <Form.Control name='name' required type="text" placeholder="File Name" />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label className='mb-2'>Upload Image file</Form.Label>
                <Form.Control name='file' accept='image/*' required type="file" size="md" />
            </Form.Group>

            <Button variant='dark' disabled={disable} className='btn-info ' type='submit'> {!uploading ? "Submit" : <Spinner />}</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Upload