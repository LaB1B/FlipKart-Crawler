const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
// importing the modules

const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";
// the url we want to scrap

request(url, (err, res, body) => {
  if (err) console.log(err);
  else {
    parseBody(body); // calls the function with body
  }
}); // sending request to the url or the webpage



function parseBody(body) {
  const $ = cheerio.load(body);  // cheerio loads the HTML body
  let array = [];
  $("tbody.lister-list > tr").each(function (index) {
    const movie = {
      name: $(this).find("td.titleColumn > a").text(), // the name of the movie
      rating: $(this).find("td.ratingColumn > strong").text(), // the rating of the movie
    };
    array.push(movie);
  });

  console.log(array);
} 
