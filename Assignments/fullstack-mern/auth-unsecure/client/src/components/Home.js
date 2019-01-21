import React, { Component } from 'react';
import { withUser } from '../context/UserProvider'
import { withBlogs } from '../context/BlogProvider'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Home extends Component {
    componentDidMount(){
        this.props.getUserBlogs(this.props.user._id)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.logout}>Logout</button>
                Welcome @{this.props.user.username}
                {
                    this.props.blogs.map(blog => <Link to={`/post/${blog._id}`}>{blog.title}</Link>)
                }
            </div>
        )
    }
}

export default withBlogs(withUser(Home));