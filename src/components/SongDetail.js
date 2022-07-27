import React from 'react';
import { connect } from 'react-redux';

//destructuring the props to not do ${props.song.title} etc. have direct access to the selected state song
const SongDetail = ({song}) => {
  if(!song){
    return <div>Select a song</div>;
  }
  // console.log(props);
  return <div><h3><strong>Song Details</strong></h3><p>Title: {song.title}</p> <p>Duration: {song.duration}</p></div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
