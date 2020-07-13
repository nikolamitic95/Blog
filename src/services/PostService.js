
import { baseAPI } from '../shared/baseApi';
import { PostObj, SinglePostObj } from '../entities/postObj';


class PostService {

    getPosts = () => {
        return baseAPI.get(`/posts`)
        .then(response => response.data.slice(0, 20))
            .then(posts => {
                let newPosts = posts.map(post => new PostObj(post))
                return newPosts;
            })
            .catch(error => console.log(error)) 
    }

    getSinglePost = (id) => {
        return baseAPI.get(`/posts/${id}`)
            .then(response => new SinglePostObj(response.data))
            .catch(error => console.log(error)) 
    }
}

export const postService = new PostService();