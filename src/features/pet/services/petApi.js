import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const submitPet = async (data) => {
  try {
    const response = await axios.post(
      "https://reqres.in/api/users",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("API ERROR:", error?.response || error);
    throw { message: "API request failed" };
  }
};

export const fetchRandomImage = async () => {
  try {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );
    return response.data.message;
  } catch (error) {
    throw { message: "Failed to fetch image" };
  }
};