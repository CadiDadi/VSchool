import React, { Component } from 'react'
import axios from 'axios'

const BlogContext = React.createContext()

class BlogProvider extends Component {
    constructor(){
        super()
        this.state = {
            blogs: [],
            singleBlog: {} 
        }
    }

    // Get all user's blogs
    getUserBlogs = userID => {
        axios.get(`/blog/${userID}`).then(res => {
            this.setState({
                blogs: res.data
            })
        })
        .catch(err => console.log(err))
    }

    // Get one user blog
    getSingleBlog = (userID, blogID) => {
        axios.get(`/blog/${userID}/${blogID}`).then(res => {
            this.setState({
                singleBlog: res.data
            })
        })
        .catch(err => console.log(err))
    }

    // Add new blog
    addBlog = (blogObj, userID) => {
        axios.post(`/blog/${userID}`, blogObj).then(res => {
            this.setState(prevState => {
                return {
                    blogs: [...prevState.blogs, res.data]
                }
            })
        })
        .catch(err => console.log(err))
    }


    render(){
        return (
            <BlogContext.Provider
                value={{
                    blogs: this.state.blogs,
                    singleBlog: this.state.singleBlog,
                    getSingleBlog: this.getSingleBlog,
                    getUserBlogs: this.getUserBlogs
                }}>
                { this.props.children }
            </BlogContext.Provider>
        )
    }
}

export default BlogProvider


export const withBlogs = C => props => (
    <BlogContext.Consumer>
        {value => <C {...props} {...value}/> }
    </BlogContext.Consumer>
)