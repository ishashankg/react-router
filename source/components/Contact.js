import React from 'react';

export default class Contact extends React.Component{
  render() {
      return (
        <div>
          <h2>CONTACT</h2>
          <p>For any queries, please send an email to :
            <a href={"mailto: " + "shashank.gupta@talentica.com"}>Shashank</a>.
          </p>
        </div>
      );
    }
};
