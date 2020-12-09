import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
//   // Gets all posts
//   getPosts: function() {
//     return axios.get("/api/posts");
//   },
//   // Gets the character with the user's uid
  getCharacter: function(uid) {
    return axios.get("/api/character/" + uid);
  },
  // Deletes the post with the given id
  deleteCharacter: function(uid) {
    return axios.delete("/api/character/" + uid);
  },
//   // Saves a post to the database
  createCharacter: function(characterData) {
    return axios.post("/api/character/", characterData);
  },
  // Brooklynne:
  // in postman, I am able to change a key value to this uid
  // then run a get to return the onject by uid with the change
  updateCharacter: function(uid, data) {
    return axios.put("/api/character/" + uid, data)
  },
};
