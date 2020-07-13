import React from 'react';

import style from './Authors.module.css';

import { Header } from '../Header/Header';
import { authorService } from '../../services/AuthorService';
import { Author } from './Author';
import { Container } from 'react-materialize';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'

class Authors extends React.Component {
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
                    <h4 className={style.title}><FaUser /> AUTHORS</h4>
                    {this.state.authors.map(author =>
                        <Link to={`/authors/singleauthor/${author.id}`}>
                            <Author
                                key={author.id}
                                name={author.name}
                                id={author.id} />
                        </Link>
                    )}
                </Container>
            </div>

        )
    }
}
export { Authors };