//when this function is executed, it will hit the attractionFormData reducer
export const newAttractionFormData = attractionFormData => {
  return {
    type: "ADD_ATTRACTION",
    attractionFormData
  }
}

export const clearForm = () => {
  return {
    type: "CLEAR_FORM"
  }
}
