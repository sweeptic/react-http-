
import React, { Component } from 'react';
import axios from '../../../axios';
import Post from './../../../components/Post/Post';
import './Posts.module.css';
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import FullPost from './../FullPost/FullPost';

export default class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log(this.props)
        axios
            .get("/posts")
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "Max",
                    };
                });
                this.setState({
                    posts: updatedPosts,
                });
                // console.log(response);
            })
            .catch((error) => {
                console.log(error)
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push('/posts/' + id);
    };

    render() {
        let posts = (<p style={{ textAlign: "center" }}>Something went wrong!</p>);

        if (!this.state.error) {
            posts = this.state.posts.map((post) => (
                // <Link to={'/' + post.id} key={post.id}>
                <Post
                    key={post.id}
                    clicked={() => this.postSelectedHandler(post.id)}
                    title={post.title}
                    author={post.author} />
                // </Link>
            ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}


