export default (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTIONS":
      return action.attractions;
    default:
      return state;
  }
}
