import { SELECTED_CATEGORIES } from "../actionTypes";

export const getSelectedCategories = (selectedCategories) => (dispatch) => {
  const action = {
    type: SELECTED_CATEGORIES,
    payload: selectedCategories,
  };
  return dispatch(action);
};
