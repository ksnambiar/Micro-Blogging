import React, { Component } from "react";
import Loader from "components/Loader/Loader";
import _ from "lodash";
import UserProvider from "components/User/UserProvider";
import { Switch, Route, Redirect } from "react-router-dom";

class Routes extends Component {
  state = { user: {} };
  componentDidMount() {
    const { userSession } = this.props;
    const user = userSession.loadUserData();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    const { userSession } = this.props;
    if (_.isEmpty(user)) {
      return <Loader />;
    }
    return (
      <UserProvider userSession={userSession}>
        <Switch>
          <Route exact path="/" render={() => <div>Root Route</div>} />
          <Route
            path="/admin/:username"
            render={({ match }) => <div>Hello {match.params.username}</div>}
          />
        </Switch>
      </UserProvider>
    );
  }
}
export default Routes;
