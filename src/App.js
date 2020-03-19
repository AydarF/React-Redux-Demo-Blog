import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import SinglePost from "./pages/SinglePost";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route path="/posts/:id" component={SinglePost} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
