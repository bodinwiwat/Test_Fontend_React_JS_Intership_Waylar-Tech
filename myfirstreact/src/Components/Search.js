import React, { Component } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
class Search extends Component {
  state = {
    users: [],
    vcxvxcv: "",
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
  testsearch = (e) => {
    const userData = this.state.users;
    console.log(userData);
    let data = e.target.value;
    console.log(data);
    this.setState({
      vcxvxcv: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (this.state.vcxvxcv === "1") {
      alert("ID : " + this.state.vcxvxcv + " Name is Leane Graham");
    }
    else if (this.state.vcxvxcv === "2") {
      alert("ID : " + this.state.vcxvxcv + " Name is Ervin Howell");
    }
    else if (this.state.vcxvxcv === "3") {
      alert("ID : " + this.state.vcxvxcv + " Name is Clementine Bauch");
    }
    else if (this.state.vcxvxcv === "4") {
      alert("ID : " + this.state.vcxvxcv + " Name is Patricaia Lebsack");
    }
    else if (this.state.vcxvxcv === "5") {
      alert("ID : " + this.state.vcxvxcv + " Name is Chelsey Dietrich");
    }
    else if (this.state.vcxvxcv === "6") {
      alert("ID : " + this.state.vcxvxcv + " Name is Mrs.Dietrich Schulist");
    }
    else if (this.state.vcxvxcv === "7") {
      alert("ID : " + this.state.vcxvxcv + " Name is Kurtis Weissnat");
    }
    else if (this.state.vcxvxcv === "8") {
      alert("ID : " + this.state.vcxvxcv + " Name is Nicholas Runolfsdottir V");
    }
    else if (this.state.vcxvxcv === "9") {
      alert("ID : " + this.state.vcxvxcv + " Name is Glenna Reichert");
    }
    else if (this.state.vcxvxcv === "10") {
      alert("ID : " + this.state.vcxvxcv + " Name is Clementina DuBuque");
    } else {
      alert("No data !!!");
    }
  };

  render() {
    const userData = this.state.users;
    const { vcxvxcv } = this.state;
    return (
      <ReactBootStrap.Container>
        <div>
          <form onSubmit={this.onSubmit}>
            <ReactBootStrap.InputGroup className="form-group">
              <ReactBootStrap.FormControl
                placeholder="Please enter your User ID"
                aria-describedby="basic-addon2"
                value={vcxvxcv}
                onChange={this.testsearch}
              ></ReactBootStrap.FormControl>
              <ReactBootStrap.InputGroup.Append
                class="from-control"
                className="form-group"
              >
                <ReactBootStrap.Button
                  variant="primary"
                  type="submit"
                  class="btn btn-primary"
                >
                  Search
                </ReactBootStrap.Button>
              </ReactBootStrap.InputGroup.Append>
            </ReactBootStrap.InputGroup>
          </form>
        </div>
        <ReactBootStrap.Row>
          <ReactBootStrap.Table
            striped
            bordered
            hover
            variant="responsive"
            size="sm"
          >
            {!userData ? (
              <p>...Loading</p>
            ) : (
              <tbody>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {userData.map((userItem) => {
                  return (
                    <tbody>
                      <tr>
                        <th>
                          {" "}
                          <h6>{userItem.id}</h6>{" "}
                        </th>
                        <th>
                          {" "}
                          <h6>{userItem.name}</h6>
                        </th>
                        <th>
                          {" "}
                          <h6>{userItem.email}</h6>
                        </th>
                      </tr>
                    </tbody>
                  );
                })}
              </tbody>
            )}
          </ReactBootStrap.Table>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    );
  }
}
export default Search;
