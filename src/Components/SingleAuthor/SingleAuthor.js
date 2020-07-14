import React from 'react';

import styles from './SingleAuthor.module.css'

import { authorService } from '../../services/AuthorService';
import { Container, Row, Col } from 'react-materialize';
import { AuthorInfo } from './AuthorComponents/AuthorInfo';
import { AuthorAddress } from './AuthorComponents/AuthorAddress';
import { AuthorCompany } from './AuthorComponents/AuthorCompany';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom'

class SingleAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleAuthor: []
        }
    }
    componentDidMount() {
        authorService.getSingleAuthor(this.props.match.params.id)
            .then(data => {
                this.setState({ singleAuthor: data })
            })

    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Container>
                        <Row>
                            <Col>
                                <Link className={styles.link} to='/authors'>
                                    <h5 className={styles.back}><i class='fas fa-angle-double-left'></i> Back</h5>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <h4 className={styles.title}>​<i class='fas fa-user'></i> SINGLE AUTHOR</h4>
                    <AuthorInfo
                        key={this.state.singleAuthor.id}
                        name={this.state.singleAuthor.authorName}
                        id={this.state.singleAuthor.id}
                        username={this.state.singleAuthor.username}
                        website={this.state.singleAuthor.website}
                        phone={this.state.singleAuthor.phone}
                        email={this.state.singleAuthor.email}
                    />
                    <AuthorAddress
                        key={this.state.singleAuthor.id}
                        street={this.state.singleAuthor.street}
                        lat={this.state.singleAuthor.lat}
                        lng={this.state.singleAuthor.lng}
                        city={this.state.singleAuthor.city}
                        zipcode={this.state.singleAuthor.zipcode}
                    />

                    <AuthorCompany
                        key={this.state.singleAuthor.id}
                        name={this.state.singleAuthor.companyName}
                        slogan={this.state.singleAuthor.slogan}
                    />
                </Container>
            </div>
        )
    }

}

export { SingleAuthor };                                     