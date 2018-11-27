export default (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTIONS":
      return action.attractions;
    case "CREATE_ATTRACTION":
      return state.concat(action.attraction);
    default:
      return state;
  }
}
