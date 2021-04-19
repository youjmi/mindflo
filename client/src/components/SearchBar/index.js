import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchBar() {
  return (
    <div className="container">
      <Form>
        <Form.Group className="form-group">
          <Row>
            
              <label htmlFor="search">Search:</label>
              <Col>
              <input
                name="search"
                type="text"
                className="form-control"
                placeholder="Enter Search Term"
                id="search"
              />
            </Col>
            <Col>
              <Button className="searchBtn">Search</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBar;
