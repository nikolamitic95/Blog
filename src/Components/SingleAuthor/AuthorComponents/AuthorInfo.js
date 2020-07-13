import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import unnamed from '../../../Images/unnamed.png';
import { Link } from "react-router-dom";
import{FaBackward} from 'react-icons/fa';
import{FiUser, FiMail, FiSmartphone} from 'react-icons/fi';
import{MdWeb} from 'react-icons/md'
import {AiOutlineFieldNumber} from 'react-icons/ai'


const AuthorInfo = ({ name, id, username, email, phone, website }) => {
    return (
        <Row>
            <Col
                m={8} offset="m2"
                s={12}
            >
                <Link className="singleAuthor__back" to='/authors'><h6><FaBackward/> Back</h6></Link>
                <Card className="teal white-text singleAuthor__card"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={unnamed} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <h5><FiUser/> {name}</h5>
                    <h6><AiOutlineFieldNumber/> id: {id} </h6>
                    <h6><FiUser/> username: {username} </h6>
                    <h6><FiMail/> email: {email} </h6>
                    <h6><FiSmartphone/> phone: {phone} </h6>
                    <h6><MdWeb/> website: {website} </h6>
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorInfo };