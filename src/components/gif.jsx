import React, { Component } from 'react';

class Gif extends Component {
  // on click, pass id to the select gif function (define in app)
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  // render the image, passing the onClick event function
  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
