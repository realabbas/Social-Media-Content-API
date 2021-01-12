var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "YOUR_CONSUMER_KEY",
  consumer_secret: "YOUR_CONSUMER_SECRET",
  access_token_key: "YOUR_ACCESS_TOKEN",
  access_token_secret: "YOUR_ACCESS_TOKEN_SECRET",
});

// Load your image if you want to upload an image to the status
var data = require("fs").readFileSync("file_path");
// For Example
// var data = require("fs").readFileSync("./demo/image.jpg");

// Make post request on media endpoint. Pass file data as media parameter
client.post("media/upload", { media: data }, function (error, media, response) {
  if (!error) {
    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: YOUR_STATUS,
      media_ids: media.media_id_string, // Pass the media id string
    };

    client.post("statuses/update", status, function (error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });
  }
});