import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Section">
        <MDBBtn className="ms-3 mt-3">Section</MDBBtn>
      </Link>
      <Link to="/Small">
        <MDBBtn className="ms-3 mt-3">Small</MDBBtn>
      </Link>
      <Link to="/Review">
        <MDBBtn className="ms-3 mt-3">Review</MDBBtn>
      </Link>
      <Link to="/Gradient">
        <MDBBtn className="ms-3 mt-3">Gradient</MDBBtn>
      </Link>
      <Link to="/Two">
        <MDBBtn className="ms-3 mt-3">Two Columns</MDBBtn>
      </Link>
      <Link to="/Three">
        <MDBBtn className="ms-3 mt-3">Three Columns</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
