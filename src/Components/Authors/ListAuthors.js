import React from 'react';

import style from './Authors.module.css';

import { Header } from '../Header/Header';
import { authorService } from '../../services/AuthorService';
import { Container } from 'react-materialize';
import { Authors } from './Authors';

class ListAuthors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authors: []
        }
    }
    componentDidMount() {
        authorService.getAuthors()
            .then(data => {
                this.setState({ authors: data })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h4 className={style.title}><i class='fas fa-user'></i> AUTHORS</h4>
                    <Authors authors={this.state.authors} />
                </Container>
            </div>
        )
    }
}

export { ListAuthors };