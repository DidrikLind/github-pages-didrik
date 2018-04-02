import React from 'react'
import Flexbox from 'flexbox-react';

import './Style.css';
const textParagraphFlexStyle = {
  "backgroundColor": "white"
}

export default class CustomTextParagraph extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="customTextParagraph">
        {this.props.text}
      </div>
    );
  }
}