import React from 'react';

import styles from  './SinglePost.module.css';

import { postService } from '../../services/PostService';
import { authorService } from '../../services/AuthorService';
import { Row, Col, Container, Card, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Post } from '../Home/Post';
import { Header } from '../Header/Header';
import { FaChevronCircleDown, FaBackward, FaBlogger, FaUser } from 'react-icons/fa';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: [],
            authorPosts: []
        }
    }

    componentDidMount() {
        postService.getSinglePost(this.props.match.params.id)
            .then(data => {
                this.setState({ singlePost: data })
                authorService.getAuthorPosts(this.state.singlePost.userId)
                    .then(data => {
                        this.setState({ authorPosts: data })
                    })
            })

    }
    render() {
        return (
            <div>
                <Header />
                <Container>

                    <h4 className={styles.title}><FaBlogger /> SINGLE POST</h4>
                    <Link to={`/authors/singleauthor/${this.state.singlePost.userId}`}><h5 className={styles.link}><FaUser /> Author</h5></Link>
                    <Row>
                        <Col
                            m={12}
                            s={12}
                        >
                            <Link to="/"><h6><FaBackward />   Back</h6></Link>
                            <Card
                                className={` ${styles.card} blue-grey darken-1`}
                                closeIcon={<Icon>close</Icon>}
                                revealIcon={<Icon>more_vert</Icon>}
                                textClassName="white-text"

                            >
                                <h4>{`Post id: ${this.state.singlePost.id}`}</h4>
                                <h5>{`Title: ${this.state.singlePost.title}`}</h5>
                                <h6>{this.state.singlePost.body}</h6>
                            </Card>
                        </Col>
                    </Row>
                    <h5 className={styles.more}><FaChevronCircleDown />  3 MORE POSTS FROM SAME AUTHOR</h5>
                    {this.state.authorPosts.slice(0, 3).map(post =>
                        <Post
                            id={post.id}
                            title={post.title}
                        />
                    )}
                </Container>
            </div>
        )
    }
}

export { SinglePost };