import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
//   // Gets all posts
//   getPosts: function() {
//     return axios.get("/api/posts");
//   },
  // Gets the post with the given id
  getCharacter: function (uid) {
    return axios.get("/api/character/" + uid);
  },
  // Gets the post with the given id
  update: function (characterData) {
    return axios.put("/api/character/" + characterData.uid);
  },
//   // Deletes the post with the given id
//   deletePost: function(id) {
//     return axios.delete("/api/posts/" + id);
//   },
//   // Saves a post to the database
  createCharacter: function(characterData) {
    return axios.post("/api/character", characterData);
  }
};
