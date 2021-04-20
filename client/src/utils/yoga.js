import axios from "axios";

const youtube_Key = "AIzaSyCkGh56mI4GQnvTtVoHCWVTvkUX7uzpjr8"

/// NEED to FIND API FOR YOGA ///
export default {
  // Gets all quotes
  getVideo: function() {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`
    )},
  // Gets the blog with the given id
  getYoga: function() {
    return axios.get('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json');
  },
  // Deletes the book with the given id
  deleteBlog: function(id) {
    return axios.delete("/blog/" + id);
  },
  // Saves a book to the database
  saveBlog: function(blogData) {
    return axios.post("/blog", blogData);
  }
};

