import express, { Request, Response } from 'express'
import { AppDependenciesOptions } from 'app-dependencies'
import BlogPost from './model/blog-post'

/**
 * Initializes the application
 * 
 * @param dependencies Application dependencies
 */
const makeServer = (dependencies: AppDependenciesOptions) => {
    const app = express()

    app.get('/', (request: Request, response: Response) => {
        return response.status(200).send('My app')
    })

    app.get('/posts', async (request: Request, response: Response) => {
        const blogPosts = await dependencies.getBlogPosts()

        return response.status(200).send(
            blogPosts.map((post: BlogPost) => `<div>${post.id} ${post.name}</div>`).join('')
        )
    })

    return app
}

export default makeServer