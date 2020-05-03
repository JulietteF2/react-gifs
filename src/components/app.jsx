// Import component base code from react lib to build classes
import React, { Component } from 'react';
// Import giphy tools from giphy-api js package
import giphy from 'giphy-api';

import GifList from './gifList';
import Gif from './gif';
import SearchBar from './searchBar';

// necessary to reach giphy's api
const GIPHY_API_KEY = "6BSWzLcH4l4p5gnKlR6zBfcUCO3uWIXZ";

// Building a mutable component
class App extends Component {
  // inherited props method
  // define a by default gif id before the user selects one
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  // define the search function, taking a query as a param
  // use giphy's API
  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  // define the function that will set this.state.selectedGifId, taking an ID
  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  // what piece of HTML code this component (unique div) will render
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

// Mandatory export to be used in index
export default App;
