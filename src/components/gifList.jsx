// Right side, gif list part
import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  // map the gif list thanks to ids received in searchFunction (define in app)
  // return a Gif component with the right params for each element of the list
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
