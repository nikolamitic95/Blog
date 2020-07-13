import { baseAPI } from '../shared/baseApi';
import { AuthorObj, PostsAuthorObj, SingleAuthorObj } from '../entities/authorObj';

class AuthorService {


    getAuthors = () => {

        return baseAPI.get(`/users`)
            .then(data => data.data)
            .then(authors => {
                let newAuthors = authors.map(author => new AuthorObj(author))
                return newAuthors;
            })
            .catch(error => console.log(error))
    }


    getSingleAuthor = (id) => {
        return baseAPI.get(`/users/${id}`)
            .then(data => new SingleAuthorObj(data.data))
            .catch(error => console.log(error))
    }

    getAuthorPosts = (id) => {

        return baseAPI.get(`/posts?userId=${id}`)
            .then(data => data.data)
            .then(postsAuthors => {
                let newPostsAuthors = postsAuthors.map(author => new PostsAuthorObj(author))
                return newPostsAuthors;
            })
            .catch(error => console.log(error))
    }
}
export const authorService = new AuthorService();