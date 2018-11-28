export default (state = {
  name: "",
  city: "",
  year_visited: 0,
  img_url: "",
  notes: ""
}, action) => {
  switch (action.type) {
    case "ADD_ATTRACTION":
      return action.attractionFormData;
    default:
      return state;
  }
}
