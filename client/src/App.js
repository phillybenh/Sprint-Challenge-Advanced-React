import React from "react";
import axios from "axios";
import UserGrid from "./components/UserGrid";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        // console.log("Axios Data: ", response.data);
        this.setState({
          playerData: response.data,
        });
        // axios.get(response.data.followers_url, config).then((response) => {
        //   // console.log("Follower Data: ", response.data);
        //   response.data.forEach((user) => {
        //     axios.get(user.url, config).then((response) => {
        //       console.log("Follower Data: ", response.data);
        //       this.setState({
        //         followerData: [...this.state.followerData, response.data]
        //       });
        //     });
        //   });
        // });
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sprint Challenge: Advanced React - Women's World Cup</h1>
        </header>
        <UserGrid playerData={this.state.playerData} />
        {/* <Header>
          <H1>GitHub User Followers</H1>
        </Header>
        <UserGrid
          githubData={this.state.githubData}
          followerData={this.state.followerData}
        /> */}
      </div>
    );
  }
}

export default App;
