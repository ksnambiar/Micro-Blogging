import React, { Component } from "react";
import "./_loader.scss";
export default class Loader extends Component {
  render() {
    return (
      <div>
        <div class="cssload-thecube">
          <div class="cssload-cube cssload-c1" />
          <div class="cssload-cube cssload-c2" />
          <div class="cssload-cube cssload-c4" />
          <div class="cssload-cube cssload-c3" />
        </div>
      </div>
    );
  }
}
