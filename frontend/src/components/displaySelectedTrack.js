import React, { Component } from "react";
import { fetchTrackById } from "../actions/index";
import { connect } from "react-redux";

class DisplaySelectedTrack extends Component {
  render() {
    console.log(this.props.users, "users");
    return (
      <div>
        {this.props.users === [] ? <span>Nodata</span> : <span>Hello</span>}
        {this.props.users.map(item => (
          <span>
            {item.track_title} {item.artist}
          </span>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.users, "display");
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchTrackById })(
  DisplaySelectedTrack
);
