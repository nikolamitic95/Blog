import React from 'react';

import style from './Posts.module.css'

import { Header } from '../Header/Header';
import { postService } from '../../services/PostService';
import { Posts } from './Posts';
import { Container } from 'react-materialize';


class ListPosts extends React.Component {
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
                <h4 className={style.title}>​<i class='fab fa-blogger-b'></i> POSTS</h4>
                <Container>
                    <Posts posts={this.state.posts} />
                </Container>
            </div>
        )
    }
}
export { ListPosts };