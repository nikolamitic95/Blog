import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import { CreatePost } from './Components/CreatePost/CreatePost';
import { ListAuthors } from './Components/Authors/ListAuthors';
import { About } from './Components/About/About';
import { ListPosts } from './Components/Home/ListPosts';
import { SinglePost } from './Components/SinglePost/SinglePost';
import { SingleAuthor } from './Components/SingleAuthor/SingleAuthor';
import { Footer } from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={ListPosts} />
          <Route exact path='/createnew' component={CreatePost} />
          <Route exact path='/authors' component={ListAuthors} />
          <Route path='/about' component={About} />
          <Route path='/posts/singlepost/:id' component={SinglePost} />
          <Route path='/authors/singleauthor/:id' component={SingleAuthor} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
