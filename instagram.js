/* tslint:disable:no-console */

// import { IgApiClient } from "instagram-private-api";

const readFile = require("fs").readFile;

const promisify = require("util").promisify;
const IgApiClient = require("instagram-private-api").IgApiClient;
const ig = new IgApiClient();
const readFileAsync = promisify(readFile);

// const ig = new IgApiClient();

async function login() {
  // basic login-procedure

  ig.state.generateDevice("amazon_india_deals_");

  ig.state.proxyUrl = process.env.IG_PROXY;

  await ig.account.login("amazon_india_deals_", "vintageVRT5");
}

(async () => {
  await login();

  const path = "./image.jpg";

  const { latitude, longitude, searchQuery } = {
    latitude: 0.0,

    longitude: 0.0,

    // not required

    searchQuery: "place",
  };

  /**

   * Get the place

   * If searchQuery is undefined, you'll get the nearest places to your location

   * this is the same as in the upload (-configure) dialog in the app

   */

  const locations = await ig.search.location(latitude, longitude, searchQuery);

  /**

   * Get the first venue

   * In the real world you would check the returned locations

   */

  const mediaLocation = locations[0];

  console.log(mediaLocation);

  const publishResult = await ig.publish.photo({
    // read the file into a Buffer

    file: await readFileAsync(path),

    // optional, default ''

    caption: "my caption",

    // optional

    location: mediaLocation,

    // optional

    // usertags: {
    //   in: [
    //     // tag the user 'instagram' @ (0.5 | 0.5)

    //     await generateUsertagFromName("instagram", 0.5, 0.5),
    //   ],
    // },
  });

  console.log(publishResult);
})();
