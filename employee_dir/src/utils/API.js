import axios from "axios";

// Export an object containing methods we'll use for accessing the json placeholder API

export default {
  getRandomUser: function() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
};