var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "43XIsj1aXqRImF6wPvDHNil2Z",
  consumer_secret: "89S0RQl5iVtSkhEmBWxSktGnZpz8uJgCkO3phrGwW6jZdat9IG",
  access_token_key: "1264634059751256065-9tZq6Bj9V50YZsbcpea6FnmjDEZhwS",
  access_token_secret: "8EJHcBXbUnWNOIrrAM7hSbmxkGa5Gsl8Y5Ts7ciSjezeJ",
});

var params = { screen_name: "nodejs" };
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
// client.post("statuses/update", { status: "I Love Twitter" }, function (
//   error,
//   tweet,
//   response
// ) {
//   if (error) throw error;
//   console.log(tweet); // Tweet body.
//   console.log(response); // Raw response object.
// });
// Load your image
var data = require("fs").readFileSync("image.jpg");

// Make post request on media endpoint. Pass file data as media parameter
client.post("media/upload", { media: data }, function (error, media, response) {
  if (!error) {
    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status:
        "Amazon Audible. Purchase at best price on #amazon https://amzn.to/2XtNz3l #audible #songs #ecommerce",
      media_ids: media.media_id_string, // Pass the media id string
    };

    client.post("statuses/update", status, function (error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });
  }
});
