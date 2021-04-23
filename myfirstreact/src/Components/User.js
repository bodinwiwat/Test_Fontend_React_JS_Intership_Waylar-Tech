import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./User.css";
import * as ReactBootStrap from "react-bootstrap";
class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleClick = (userId) => {
    if (userId === this.props.selectedUserId) {
      this.props.onUserSelected(false);
      console.log(userId)

    } else {
      this.props.onUserSelected(userId);
      console.log(userId)
    }
  };

  render() {
    const userData = this.state.users;
    return (
      <div className="Slid">
        {!userData ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {userData.map((userItem) => {
              return (
                <ReactBootStrap.Button
                  variant="link"
                  active
                  block
                  key={userItem.id}
                  className="user_box"
                  onClick={() => this.handleClick(userItem.id)}
                >
                  <h5>{userItem.name}</h5>
                </ReactBootStrap.Button>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default User;
