export class AuthorObj {
    constructor(authorApi) {
        this.id = authorApi.id
        this.name = authorApi.name
    }
}

export class SingleAuthorObj {
    constructor(authorApi) {
        this.authorName = authorApi.name
        this.id = authorApi.id
        this.username = authorApi.username
        this.website = authorApi.website
        this.phone = authorApi.phone
        this.email = authorApi.email
        this.street = authorApi.address.street
        this.lat = authorApi.address.geo.lat
        this.lng = authorApi.address.geo.lng
        this.city = authorApi.address.city
        this.zipcode = authorApi.address.zipcode
        this.companyName = authorApi.company.name
        this.slogan = authorApi.company.bs
    }
}

export class PostsAuthorObj {
    constructor(authorApi) {
        this.id = authorApi.id
        this.title = authorApi.title
    }
}
