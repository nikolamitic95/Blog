import React from 'react';

import { Row, Col, CardPanel } from 'react-materialize';
import { AiOutlineFileText } from 'react-icons/ai';
import { GiModernCity } from 'react-icons/gi';
import { RiUser4Line } from 'react-icons/ri'

const AuthorCompany = ({ name, slogan }) => {
  return (
    <Row>
      <Col
        m={8} offset='m2'
        s={12}
   

      >
        <CardPanel className="teal">
          <span className="white-text">
            <h5><GiModernCity /> COMPANY</h5>
            <h6><RiUser4Line /> {name}</h6>
            <h6><AiOutlineFileText /> {slogan}</h6>
          </span>
        </CardPanel>
      </Col>
    </Row>
  )
}

export { AuthorCompany };