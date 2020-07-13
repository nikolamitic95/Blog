import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import { CreatePost } from './Components/CreatePost/CreatePost';
import { Authors } from './Components/Authors/Authors';
import { About } from './Components/About/About';
import { Posts } from './Components/Home/Posts';
import { SinglePost } from './Components/SinglePost/SinglePost';
import { SingleAuthor } from './Components/SingleAuthor/SingleAuthor';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Posts} />
      <Route exact path='/createnew' component={CreatePost} />
      <Route exact path='/authors' component={Authors} />
      <Route path='/about' component={About} />
      <Route path='/posts/singlepost/:id' component={SinglePost} />
      <Route path='/authors/singleauthor/:id' component={SingleAuthor} />
    </Switch>
  );
}

export default App;
