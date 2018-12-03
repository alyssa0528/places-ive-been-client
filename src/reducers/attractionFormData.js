let initialState = {
  name: "",
  city: "",
  year_visited: 0,
  img_url: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ATTRACTION":
      return action.attractionFormData;
    case "CLEAR_FORM":
      return initialState;
    default:
      return state;
  }
}
