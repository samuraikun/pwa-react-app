import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <Link to="/">Feed</Link>
    <Link to="/profile">Profile</Link>
  </div>
);

const Template = ({ title }) => (
  <div>
    <NavBar />
    <p className="page-info">
      This is the {title} page.
    </p>
  </div>
);

const Feed = (props) => (
  <Template title="Feed" />
);

const Profile = (props) => (
  <Template title="Profile" />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Feed} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
