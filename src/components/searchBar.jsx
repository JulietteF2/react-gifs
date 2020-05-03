import React, { Component } from 'react';

class SearchBar extends Component {
  // pass the query (value) to the search function define in app
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  // renders an form input an pass the handleUpdate on change event
  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
