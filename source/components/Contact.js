import React from 'react';

var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>CONTACT</h2>
          <p>For any queries, please send an email to :
            <a href={"mailto: " + "shashank.gupta@talentica.com"}>Shashank</a>.
          </p>
        </div>
      );
    }
});

module.exports = Contact;
