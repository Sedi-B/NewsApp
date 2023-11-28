const initialState = {
  news: [],
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NEWS_SUCCESS":
      return { ...state, news: action.payload, error: null };
    case "FETCH_NEWS_FAILURE":
      return { ...state, news: [], error: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
