import React, { Component } from "react";

import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

class Photo extends Component {
  state = {
    photos: [] 
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${
          nextProps.selectedAlbumId
        }`
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const photoData = this.state.photos; 
    return (
      <div>
        {!photoData ? (
          <p>...Loading</p>
        ) : (
          <div className="photobox_container" >
              {photoData.map(photoItem => {
              return <ReactBootStrap.Image  thumbnail src={photoItem.thumbnailUrl}/>
              ;
            })}
            
          </div>
        )}
        
      </div>
      
    );
  }
}

export default Photo;
