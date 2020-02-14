import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchTrackById } from "../actions/index";
import DisplaySelectedTrack from "./displaySelectedTrack";

class TracksList extends Component {
 

  componentDidMount() {
    this.props.fetchPosts();
  }

  showDetails = post => {
    console.log(post, "posts");
    //this.setState({ _id: post._id });
    this.props.fetchTrackById(post._id);
  };

  render() {
    
    return (
      <div>
        <DisplaySelectedTrack users={this.props.users}></DisplaySelectedTrack>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tracktitle</th>
              <th>Artists</th>
            </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => (
              <tr key={post.id} onClick={() => this.showDetails(post)}>
                <td>{post.id}</td>
                <td>{post.track_title}</td>
                <td>{post.artist}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.posts, "hello");
  //console.log(state.users);
  return { posts: state.posts, users: state.users };
};

export default connect(mapStateToProps, { fetchPosts, fetchTrackById })(
  TracksList
);
