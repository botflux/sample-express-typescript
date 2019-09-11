import { getBlogPosts } from '../../src/api/blog-post'

describe ('#getBlogPosts', () => {
    it ('returns an array wrapped in a promise', async () => {
        const posts = await getBlogPosts ()

        expect(Array.isArray(posts)).toBe(true)
    })
})