import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
import './AuthorComponents.css';
import{FaAddressCard, FaStreetView, FaCity} from 'react-icons/fa';
import {AiFillCodeSandboxSquare} from 'react-icons/ai';

const AuthorAddress = ({ street, city, zipcode, lat, lng }) => {
    return (
        <Row>
  <Col
    m={8} offset='m2'
    s={12}
  >
    <CardPanel className="teal authorAddress__card">
     <span className="white-text">
     <h5><FaAddressCard/> ADDRESS</h5>
     <h6><FaStreetView/> street: {street}</h6>
     <h6><FaCity/> city: {city}</h6>
     <h6><AiFillCodeSandboxSquare/> zipcode: {zipcode}</h6>
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