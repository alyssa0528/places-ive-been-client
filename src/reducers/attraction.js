export default (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTION":
      return action.attraction;
    default:
      return state;
  }
}
