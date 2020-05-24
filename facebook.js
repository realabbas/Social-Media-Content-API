var request = require("request");
var options = {
  method: "POST",
  url:
    "https://graph.facebook.com/112321467159511/feed?message=Bounceback ® Oneplus 7t Case Cover Soft Shock Proof Back Cover Case for Oneplus 7t - Simple Blue &access_token=EAAHv6CoAWGcBAJQF21NhWJX22O54GFfS6DzDF1pXru3TlBZCPyTxQnUnFa7XzBY6MYBw8m5Uin1nzRpF5OFzSD3cdopbP2E5dKxAWWt3MyODl7qGsOt3cIeHoG2m7fNhZAR0lK1LHBmxTGXVeYPrQEsjRQJj1Vj5xQ6ICNVxMdm3jfyG2IIz50jptb8GWD9SzleZCbpsAZDZD&link=https://amzn.to/3cZ9dTJ",
  headers: {},
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
