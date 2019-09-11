import makeApp from "./make-app"
import { getBlogPosts } from './api/blog-post'


const port = process.env.PORT || 5000

const app = makeApp({
    getBlogPosts
})

app.listen (port, () => {
    console.log(`App listening on port ${port}`)
})
