<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

// This is our API key
   var APIKey = "tU5b8sHWxkaUKBCfnutInU98czA1N8BZGKVDH9bz";

   // Here we are building the URL we need to query the database
   var queryURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + "2019/05/05" +
     "&end_date=" + "2019/12/12" + "&api_key=" + APIKey;

     // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
  
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);
  
          // Transfer content to HTML
          $(".city").html("<h1>" + response.name + " Weather Details</h1>");
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".temp").text("Temperature (F) " + response.main.temp);
  
          // Log the data in the console as well
          console.log("Wind Speed: " + response.wind.speed);
          console.log("Humidity: " + response.main.humidity);
          console.log("Temperature (F): " + response.main.temp);
        });
     