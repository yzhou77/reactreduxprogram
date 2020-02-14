export default (state = [], action) => {
  // console.log('userreducer')
  switch (action.type) {
    case "FETCH_USER":
      return [(state = []), action.payload];

    default:
      return state;
  }
};
