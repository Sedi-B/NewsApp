import axios from "axios";

export const fetchNews = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=5e07f714ef1043979ccbdb2375f34b05`
    );
    console.log(response);
    dispatch({ type: "FETCH_NEWS_SUCCESS", payload: response.data.articles });
  } catch (err) {
    dispatch({ type: "FETCH_NEWS_FAILURE", payload: err.message });
  }
};
