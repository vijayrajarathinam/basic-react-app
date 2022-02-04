import axios from "axios";

export default axios.create({
  // baseURL: "api/v1",
  // timeout: 1000,
  headers: {
    "content-type": "application/json",
    //   "x-access-token": localStorage.getItem("token"),
    //   "Time-Zone": userTimeZone
  },
});
