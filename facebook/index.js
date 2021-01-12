var request = require("request");

var LINK = "YOUR_LINK"
var MESSAGE = "YOUR_MESSAGE"
var ACCESS_TOKEN = "YOUR_ACCESS_TOKEN"

var options = {
  method: "POST",
  url:
    `https://graph.facebook.com/112321467159511/feed?message=${MESSAGE}&access_token=${ACCESS_TOKEN}&link=${LINK}`,
  headers: {},
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
