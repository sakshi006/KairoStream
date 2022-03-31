export const likeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIKES":
      return {
        ...state,
        likes: [...action.payload],
        loading: false,
      };
    case "API_REQUEST":
      return { ...state, loading: true };
    case "ERROR_HANDLE":
      return { ...state, loading: false };
    default:
      return state;
  }
};
 