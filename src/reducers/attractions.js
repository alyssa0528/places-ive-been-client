export default (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTIONS":
      return action.attractions;
    case "CREATE_ATTRACTION":
      return state.concat(action.attraction);
    case "DESTROY_ATTRACTION":
      return state.filter(attraction => attraction.id !== action.attraction.id)
      //<Route path="/places" component={Attractions}/>
      // console.log(state)
      // console.log(action.attraction.id)
        //state.filter(attraction => attraction.id !== action.attraction.id))
      //.filter(attraction => attraction.id !== action.attraction))
    default:
      return state;
  }
}
