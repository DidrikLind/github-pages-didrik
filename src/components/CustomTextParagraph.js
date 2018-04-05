import React from 'react'

export default class CustomTextParagraph extends React.Component {

  render() {
    return (
      <div className="customTextParagraph">
        {this.props.text}
      </div>
    );
  }
}