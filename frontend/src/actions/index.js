import jsonPlaceHolder from "../api/jsonPlaceHolder";

// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const promise = jsonPlaceHolder.get("/posts");
//     dispatch({ type: "FETCH_POSTS", payload: promise });
//   };
// };

//optimising the above code

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/tracks");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
  //console.log("fetch", response);
};

export const fetchTrackById = id => async dispatch => {
  console.log(id, "id");
  const response = await jsonPlaceHolder.get(`/tracks/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
  console.log("users", response.data);
};
