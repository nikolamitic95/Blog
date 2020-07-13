import React from 'react';

import style from './Posts.module.css'

import { Header } from '../Header/Header';
import { postService } from '../../services/PostService';
import { Post } from './Post';
import { Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import { FaBlogger } from 'react-icons/fa';


class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getPosts()
            .then(data => {
                this.setState({ posts: data })
            })
    }

    render() {
        return (
            <div className={style.posts}>
                <Header />
                <h4 className={style.title}><FaBlogger /> POSTS</h4>
                <Container>
                    {this.state.posts.map(post =>
                        <Link to={`/posts/singlepost/${post.id}`}>
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        </Link>
                    )}
                </Container>
            </div>
        )
    }
}
export { Posts };