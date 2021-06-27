const cheerio = require("cheerio")
const fs = require("fs")
const request = require('request')


const URL = "https://www.flipkart.com/search?q=mobiles";

request.get(URL, (err , res , body) => {
   if (err) {console.log(err)}
   else {
      Crawler(body)
   }
})



function Crawler(body) {

   const $ = cheerio.load(body)
   let array = []

   $("div._1YokD2 > div._1AtVbE").each(function(index) {
      const res = {

      name: $(this).find("div._4rR01T").text(),
      url: $(this).find("a._1fQZEK").attr('href'),
      rating: $(this).find("div._3LWZlK").text(),
      
      ram: $(this).find("li.rgWa7D").text(),
      price : $(this).find("div._30jeq3").text(),
      }

      array.push((res))
      
   })
   renderData(array)

}
      

function renderData(data) {
   console.log(data)
   

}


  


  
