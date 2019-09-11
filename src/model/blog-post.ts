/**
 * A blog post
 */
class BlogPost {
    id: number
    name: string
    body: string

    /**
     * Initializes a new post with his id, name and body.
     * 
     * @param id Post id
     * @param name Post name
     * @param body Post body
     */
    constructor (id: number, name: string, body: string) {
        this.id = id
        this.name = name
        this.body = body
    } 
}

export default BlogPost