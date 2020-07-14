import React from 'react';

import { Link } from 'react-router-dom';
import { Author } from './Author';

const Authors = ({ authors }) => {
    return (

        authors.map(author =>
            <Link to={`/authors/singleauthor/${author.id}`}>
                <Author
                    key={author.id}
                    name={author.name}
                    id={author.id} />
            </Link>
        )

    )
}

export { Authors }