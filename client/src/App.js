import React from "react";
import axios from "axios";
import Grid from "./components/Grid";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [
        // { name: "Alex Morgan", country: "United States", searches: 100, id: 0 },
      ]
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
        <Grid playerData={this.state.playerData} />
      </div>
    );
  }
}

export default App;
