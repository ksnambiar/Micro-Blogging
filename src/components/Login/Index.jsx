import React, { Component } from "react";
import { Card, Content, Button } from "react-bulma-components";
import Loader from "../Loader/Loader";
export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  handleSignIn = e => {
    const { userSession } = this.props;
    e.preventDefault();
    userSession.redirectToSignIn();
    this.setState({ loading: true });
  };
  render() {
    const { loading } = this.state;
    return (
      <div>
        <Card>
          <Card.Content>
            <Content>
              {loading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                <Button color="primary" onClick={this.handleSignIn}>
                  Sign In
                </Button>
              )}
            </Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
