import {
  axiosInstance as Api,
  axiosElasticSearchInstance as searchApi,
} from "@/services/Api";

export default {
  async uploadMusic({
    song: song,
    name: name,
    artist: artist,
    album: album,
    duration: duration,
    description: description,
    cover: cover,
  }) {
    try {
      const data = {
        song: song,
        name: name,
        artist: artist,
        album: album,
        duration: duration,
        description: description,
        cover: cover,
      };
      const response = await Api.post("/musics/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getMusic(id) {
    try {
      const response = await Api.get("/musics/" + id, {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async editMusic({
    id: id,
    name: name,
    artist: artist,
    album: album,
    duration: duration,
    description: description,
    cover: cover,
  }) {
    try {
      const data = {
        name: name,
        artist: artist,
        album: album,
        duration: duration,
        description: description,
        cover: cover,
      };
      if (typeof data.cover === "object") delete data["cover"];
      const response = await Api.put(`/musics/${id}`, data, {
        credentials: "include",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async deleteMusic(id) {
    try {
      const response = await Api.delete("/musics/" + id, {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async likeMusic(id) {
    try {
      const response = await Api.patch("/musics/" + id + "/like");
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPlayOn() {
    try {
      const response = await Api.get("/musics/play-on");
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPrevMusic(time) {
    try {
      const response = await Api.get(`/musics/prev/${time}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  // async getNextMusic(){
  //   try {
  //     const response = await Api.get('')
  //   } catch (err) {

  //   }
  // }

  async getPopularMusics() {
    try {
      const response = await Api.get(`/musics/mostpopular`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getSimilarMusics(producerId) {
    try {
      const response = await Api.get(`/musics/similar/${producerId}`);
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getSearchedResults(searchInput) {
    try {
      const response = await searchApi.get("/music/_search", {
        query: {
          fuzzy: {
            name: {
              value: searchInput,
              fuzziness: "AUTO",
              max_expansions: 60,
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
