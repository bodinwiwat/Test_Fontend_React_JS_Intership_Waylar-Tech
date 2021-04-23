import React, { Component } from "react";
import User from "./User";
import Album from "./Album";
import Photo from "./Photo";
import Navbar from "./Navbar";
import "./Home.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Search from "./Search";
class Home extends Component {
  state = {
    photos: [],
    selectedUserId: false,
    selectedAlbumId: false,
    selectedAlbum: false,
  };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/photos");
    await new Promise((x) => setTimeout(x, 1000));

    this.setState({ photos: result.data });
  }

  onUserSelected = (userId) => {
    console.log(userId);
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  onAlbumSelected = (albumId) => {
    this.setState({ selectedAlbumId: albumId });
  };

  onAlbum = (events) => {
    this.setState({ selectedAlbum: events, selectedAlbumId: false });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <ReactBootStrap.Container>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <div className="SideNav">
                <ReactBootStrap.Alert variant="secondary">
                  <Search></Search>
                </ReactBootStrap.Alert>
              </div>
              <ReactBootStrap.Alert variant="secondary">
              <h5>Select Album Photo</h5>
                  <Album
                    selectedUserId={this.state.selectedUserId}
                    onAlbumSelected={this.onAlbumSelected}
                    onAlbum={this.state.onAlbum}
                  />
                </ReactBootStrap.Alert>
            </ReactBootStrap.Col>
            <ReactBootStrap.Col>
              <div className="SideNav">
                <ReactBootStrap.Alert variant="secondary">
                  <h3>Choose a photographer</h3>
                  <User
                    onUserSelected={this.onUserSelected}
                    selectedUserId={this.state.selectedUserId}
                  />
                </ReactBootStrap.Alert>
              </div>
              <div className="Alert"></div>
              
            </ReactBootStrap.Col>
            <ReactBootStrap.Alert variant="secondary">
                <h6>Photo Bar</h6>
                <Photo selectedAlbumId={this.state.selectedAlbumId} />
              </ReactBootStrap.Alert>
          </ReactBootStrap.Row>
        </ReactBootStrap.Container>
      </div>
    );
  }
}
export default Home;
