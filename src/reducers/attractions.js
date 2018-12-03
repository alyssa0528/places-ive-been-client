export default (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTIONS":
      return action.attractions;
    case "CREATE_ATTRACTION":
      return state.concat(action.attraction);
    case "DESTROY_ATTRACTION":
      return state.filter(attraction => attraction.id !== action.attraction.id)
    default:
      return state;
  }
}
