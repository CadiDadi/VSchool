import React, { Component } from 'react';
import { withUser } from '../context/UserProvider'
import { withBlogs } from '../context/BlogProvider'

class BlogPost extends Component {
    componentDidMount(){
        this.props.getSingleBlog(this.props.user._id, this.props.match.params.id)
    }
    render() {
        return (
            <div>
                Title: {this.props.singleBlog.title}
                Body: {this.props.singleBlog.body}
            </div>
        )
    }
}

export default withBlogs(withUser(BlogPost));