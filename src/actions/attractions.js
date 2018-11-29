//this file is all about updating our list of attractions in any way

const API_URL = process.env.REACT_APP_API_URL

// Calls that go to reducers
const setAttractions = attractions => {
  return {
    type: "GET_ATTRACTIONS",
    attractions
  }
}

const addAttraction = attraction => {
  return {
    type: "CREATE_ATTRACTION",
    attraction
  }
}

const setAttraction = attraction => {
  return {
    type: "GET_ATTRACTION",
    attraction
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

export const createAttraction = attraction => {
  return dispatch => {
    return fetch(`${API_URL}/attractions`, {
      method: "POST",
      body: JSON.stringify({ attraction: attraction }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(attraction => dispatch(addAttraction(attraction)))
      //.catch(error => console.log(error));
  }
}

export const getAttraction = (id) => {
  return dispatch => {
    return fetch(`${API_URL}/attractions/${id}`)
      .then(response => response.json())
      .then(attraction => dispatch(setAttraction(attraction)))
      .catch(error => console.log(error));
  }
}
