import axios from "axios";

const API_KEY = "44880507-e262705ec6c77a24c3bfba1fe";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  //{q, page, category, order}
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log("final url: ", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const respone = await axios.get(formatUrl(params));
    const { data } = respone;
    return { succes: true, data };
  } catch (error) {
    console.log("got error: ", error.message);
    return { success: false, msg: error.message };
  }
};
