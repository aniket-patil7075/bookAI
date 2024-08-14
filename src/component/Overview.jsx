import React from "react";
import Modal from "react-bootstrap/Modal";

function Overview() {
  return (
    <div className="overviewMain">
      <div className="overview">
        <h3 id="overviewHeader">Overview</h3>
        <p>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </div>
      {/* <div
        className="modal show "
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center" }}
      >
        <Modal.Dialog className="">
          <Modal.Header style={{ backgroundColor: "#1e293b", color: "#a5b4fc" ,width:"800px" }}>
            <Modal.Title>Overview</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#1e293b", color: "#e2e8f0" }}>
            <p>
              The Book Generator API allows you to generate books on various
              topics using different language models. This documentation
              provides details on how to use the API, including authentication,
              available endpoints, and code examples..
            </p>
          </Modal.Body>
        </Modal.Dialog>
      </div> */}
    </div>
  );
}

export default Overview;
