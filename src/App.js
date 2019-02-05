import React, { Component } from "react";
import { Button, Container } from "react-bulma-components";
import { appConfig } from "utils/constants";
import { UserSession } from "blockstack";
import Navbar from "components/Navbar/Index";
import Login from "./components/Login/Index";
import Routes from "./Pages/Routes";
import "./stylesheets/main.scss";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSession: new UserSession({ appConfig })
    };
    // this.handleSignIn = this.handleSignIn.bind(this);
  }
  componentDidMount = async () => {
    const { userSession } = this.state;
    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn();

      if (!userData.username) {
        throw new Error("this app requires a username");
      }
      window.location = "/";
    }
  };

  render() {
    console.log(this.state.userSession);
    const { userSession } = this.state;
    return (
      <div className="App">
        <Navbar userSession={userSession} />
        <Container>
          {userSession.isUserSignedIn() ? (
            <Routes userSession={userSession} />
          ) : (
            <Login userSession={userSession} />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
