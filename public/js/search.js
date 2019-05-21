$(document).ready(function(){
   /*var url = "https://api.nasa.gov/planetary/apod?api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN";


$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});*/



    //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
    $(".btn-outline-success").click(function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user
    
        $.ajax({
          type:"GET",
          url:url,
          success:function(result, error){
              console.log(result)
              console.log(result.near_earth_objects)
              Object.keys(result.near_earth_objects).forEach(element => {
                var try2 = result.near_earth_objects[element];
                console.log(try2)
                var theDate = try2[0].close_approach_data[0].close_approach_date
                $('#firstP').append((theDate+ "\n <br>"))
                for (i = 0; i < try2.length; i++){
                  console.log(result.near_earth_objects[element])
                  console.log(try2[i])
                  $('#firstP').append((try2[i].name + "\n <br>"))
                }
              });
          }
  });
}) // url to look for using the search input by the user'
})
