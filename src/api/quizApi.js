import axios from "axios";

// Use All Origins proxy to bypass CORS issues
const API_URL =
  "https://api.allorigins.win/get?url=" +
  encodeURIComponent("https://api.jsonserve.com/Uw5CrX");

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(API_URL);
    // The data is wrapped inside the "contents" key, so we parse it.
    return JSON.parse(response.data.contents);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    throw error;
  }
};
