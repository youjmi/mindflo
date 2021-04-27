import axios from "axios";

const baseURL= "https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json"



/// NEED to FIND API FOR YOGA ///
export default {
  // Gets all quotes
  // getVideo: function() {
  //   return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`
  //   )},
  // Gets the blog with the given id
  getYoga: function() {
    return axios.get(`${baseURL}`);
  },
  getPosePhoto: function(id) {
    return axios.get(`${baseURL}/`+ id);
  },
};

