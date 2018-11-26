const API_URL = process.env.REACT_APP_API_URL

// Calls that go to reducers
const setAttractions = attractions => {
  return {
    type: "GET_ATTRACTIONS",
    attractions
  }
}

// Async actions
export const getAttractions = () => {
  return dispatch => {
    return fetch(`${API_URL}/attractions`)
      .then(response => response.json())
      .then(attractions => dispatch(setAttractions(attractions)))
      .catch(error => console.log(error));
  }
}
