import React from 'react';

import unnamed from '../../../Images/unnamed.png';

import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import {AiOutlineFieldNumber} from 'react-icons/ai'


const AuthorInfo = ({ name, id, username, email, phone, website }) => {
    return (
        <Row>
            <Col
                m={8} offset="m2"
                s={12}
                
            >
                <Card className="teal white-text singleAuthor__card"
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image={unnamed} />}
                    horizontal
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <h5>​<i class='fas fa-user'></i> {name}</h5>
                    <h6><AiOutlineFieldNumber/>  {id} </h6>
                    <h6><i class='fas fa-user'></i> {username} </h6>
                    <h6><i class="fa fa-envelope"></i> {email} </h6>
                    <h6><i class="material-icons">phone_iphone</i> {phone} </h6>
                    <h6><i class="fa fa-desktop"></i> {website} </h6>
                </Card>
            </Col>
        </Row>
    )
}

export { AuthorInfo };