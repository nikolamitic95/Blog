import React from 'react';

import './AuthorComponents.css';

import { Row, Col, CardPanel } from 'react-materialize';


const AuthorAddress = ({ street, city, zipcode, lat, lng }) => {
  return (
    <Row>
      <Col
        m={8} offset='m2'
        s={12}
       
      >
        <CardPanel className="teal authorAddress__card">
          <span className="white-text">
            <h5><i class="fa fa-address-card"></i> ADDRESS</h5>
            <h6><i class="fa fa-street-view"></i> {street}</h6>
            <h6><i class='fas fa-city'></i> {city}</h6>
            <h6><i class="fa fa-file"></i> {zipcode}</h6>
          </span>
          <span>
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title={street}
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
            />
          </span>
        </CardPanel>
      </Col>
    </Row>
  )
}

export { AuthorAddress };