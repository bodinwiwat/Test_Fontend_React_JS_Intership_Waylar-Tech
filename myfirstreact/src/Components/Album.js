import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Album.css";

class Album extends Component {
  state = {
    albums: [],
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUserId)
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums?userId=${nextProps.selectedUserId}`
        )
        .then((res) => {
          this.setState({
            albums: res.data,
          });
        })
        .catch((err) => console.log(err));
  }

  change = (event) => {
    this.props.onAlbumSelected(event.target.value);
  };

  render() {
    const albumData = this.state.albums;
    return (
      <div>
        <div >
          <select className="dropdown" onChange={this.change}>
            <option selected disabled>
              Albums
            </option>
            {!albumData} ? <p>...Loading</p> :
            {albumData.map((albumItem) => {
              return (
                <option value={albumItem.id} className="album_box">
                  {albumItem.title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default Album;
