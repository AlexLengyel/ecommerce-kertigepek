import { SELECTED_CATEGORIES } from "../actionTypes";

const initialState = {
  // Category Slug
  selectedCategories: [],
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
