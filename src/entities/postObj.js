export class PostObj {
    constructor(postApi) {
        this.id = postApi.id
        this.title=postApi.title
        this.body=postApi.body
    }
}

export class SinglePostObj {
    constructor(postApi) {
        this.id = postApi.id
        this.userId=postApi.userId
        this.title=postApi.title
        this.body=postApi.body
    }
}