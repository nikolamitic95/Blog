import React from 'react';

import style from './Authors.module.css';

import { Header } from '../Header/Header';
import { authorService } from '../../services/AuthorService';
import { Container } from 'react-materialize';
import { Authors } from './Authors';
import { Loader } from '../Loader/Loader';

class ListAuthors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: [],
            isLoading: true
        }
    }
    componentDidMount() {
        authorService.getAuthors()
            .then(data => { this.setState({ authors: data }) })
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading ?
                    <Loader />
                    :
                    <Container>
                        <h4 className={style.title}><i class='fas fa-user'></i> AUTHORS ({this.state.authors.length})</h4>
                        <Authors authors={this.state.authors} />
                    </Container>
                }
            </div>
        )
    }
}

export { ListAuthors };