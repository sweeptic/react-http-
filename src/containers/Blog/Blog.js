import React, { Component } from "react";
import "./Blog.module.css";
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom'

class Blog extends Component {

   render() {
      return (
         <div className="Blog">
            <header>
               <nav>
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/new-post">New Post</a></li>
                  </ul>
               </nav>
            </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1> } />
           <Route path="/"  render={() => <h1>Home2</h1> } /> */}
            <Route path="/" exact component={Posts} />
         </div>
      );
   }
}

export default Blog;