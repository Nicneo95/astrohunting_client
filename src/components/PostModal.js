import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export const PostModal = (props) => {
  return (
    <Modal size="lg" show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          By {props.userName} on {props.dateTime}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className="mb-3">
            <Col xs={12} md={12}>
              <img src={props.imageUrl} alt={props.imageUrl} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Type of Astrography:</p>
            </Col>
            <Col xs={6} md={6}>
              <p>{props.typeOfAstrography}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Equipment (Camera):</p>
            </Col>
            <Col xs={6} md={6}>
              <p>{props.camera}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Equipment (Mount):</p>
            </Col>
            <Col xs={6} md={6}>
              <p>{props.mount}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Equipment (Telescope):</p>
            </Col>
            <Col xs={6} md={6}>
              <p>{props.telescope}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Processing Data:</p>
            </Col>
            <Col xs={6} md={6}>
              <p>{props.processingData && props.processingData.join(",")}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Calibration Frame:</p>
            </Col>
            <Col xs={6} md={6}>
              <p>
                {props.calibrationFrame && props.calibrationFrame.join(",")}
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>Location:</p>
            </Col>
            <Col xs={6} md={6}>
              <p>
                {props.latitude}, {props.longitude}
              </p>
            </Col>
          </Row>
          <Row>
            <p>{props.description}</p>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => props.deletePost(props._id)}>
          Delete
        </Button>

        <Button variant="primary" onClick={() => props.updatePost(props._id)}>
          Update
        </Button>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
