import BlogPost from '../model/blog-post'

/**
 * Returns all posts
 */
const getBlogPosts = () => {
    return Promise.resolve(
        [...Array(100).keys()].map((n: number) => new BlogPost(n, `Post ${n}`, `Body ${n}`))
    )
}

export { getBlogPosts }