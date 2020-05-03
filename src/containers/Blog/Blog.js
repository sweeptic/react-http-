import React, { Component } from "react";
import "./Blog.module.css";
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost';

class Blog extends Component {
   state = {
      auth: false
   }

   render() {
      return (
         <div className="Blog">
            <header>
               <nav>
                  <ul>
                     <li><NavLink
                        to="/posts/"
                        exact
                        activeClassName="my-active"
                        activeStyle={{
                           color: '#fa923f',
                           textDecoration: 'underline'
                        }}>Home</NavLink></li>
                     <li><NavLink to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                     }}>New Post</NavLink></li>  
                  </ul>
               </nav>
            </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1> } />
           <Route path="/"  render={() => <h1>Home2</h1> } /> */}
            <Switch>
               {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
               <Route path="/posts" component={Posts} />
               <Route render={ () => <h1>Not found</h1> } />
               {/* <Redirect from="/" to="/posts" /> */}
            </Switch>
         </div>
      );
   }
}

export default Blog;