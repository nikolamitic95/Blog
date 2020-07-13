import React from 'react';

import style from './Authors.module.css';

import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import { authorService } from '../../Services/AuthorService';

class Author extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    authorService.getAuthorPosts(this.props.id)
      .then(data => {
        this.setState({ posts: data })
      })
  }
  render() {
    return (
      <Row>
        <Col
          m={12}
          s={12}
        >
          <Collection>
            <CollectionItem className={`${style.link} teal`}
            >
              {`${this.props.name} (${this.state.posts.length})`}
            </CollectionItem>
          </Collection>
        </Col>
      </Row>
    )
  }
}
export { Author };