import {
  axiosInstance as Api,
  axiosElasticSearchInstance as searchApi,
} from "@/services/Api";

export default {
  async authUser({ username: username, password: password }) {
    try {
      const response = await Api.post(
        "/users/login",
        {
          user: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async createUser({
    username: username,
    password: password,
    confirmation: confirmation,
    secQuestion: secQuestion,
    secQuestionAnswer: secQuestionAnswer,
  }) {
    try {
      const response = await Api.post(
        "/users/signup",
        {
          user: username,
          password: password,
          confirmation: confirmation,
          question: secQuestion,
          answer: secQuestionAnswer,
        },
        {
          withCredentials: false,
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async forgetPassword({ user, secQuestion, secQuestionAnswer }) {
    try {
      const response = await Api.post("/users/forgetpassword", {
        user: user,
        question: secQuestion,
        answer: secQuestionAnswer,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async setNewPassword({
    user: user,
    password: password,
    confirmation: confirmation,
  }) {
    try {
      const response = await Api.post("/users/resetpassword", {
        user: user,
        password: password,
        confirmation: confirmation,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getLikedMusic() {
    try {
      const response = await Api.get("/users/likes", {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async getPlayedHistory() {
    try {
      const response = await Api.get(`/users/history`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getSearchedResults(searchInput) {
    try {
      const response = await searchApi.post("/music/_search", {
        query: {
          fuzzy: {
            name: {
              value: searchInput,
              fuzziness: "AUTO",
              max_expansions: 5,
              transpositions: true,
            },
          },
        },
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
