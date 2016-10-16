import React from 'react';
import { Link } from 'react-router';

var App = React.createClass({
  render : function(){
    return (
      <div>
          <h1>React Router Example</h1>
          <ul className="header">
            <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
            <li><Link to="/summary" activeClassName="active">Summary</Link></li>
            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          </ul>
          <div className="content">
              {this.props.children}
          </div>
      </div>
    );
  }
});

module.exports = App;
