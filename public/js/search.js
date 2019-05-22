$(document).ready(function(){
    //moment().format();
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
    var todayDate = moment().format('YYYY-MM-DD');
    var endDate = moment().add(2, 'days').format('YYYY-MM-DD'); 
    console.log(todayDate)
    var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var url = 'https://api.nasa.gov/neo/rest/v1/feed?size=2&start_date='+todayDate+'&end_date='+endDate+'&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user
    
        $.ajax({
          type:"GET",
          url:url,
          success:function(result, error){
              console.log(result)
              console.log(result.near_earth_objects)
              Object.keys(result.near_earth_objects).forEach(element => {
                var astroidObject = result.near_earth_objects[element];
                console.log(astroidObject)
                var theDate = astroidObject[0].close_approach_data[0].close_approach_date
                $('#secondP').append(('date:'+theDate+ "\n <br>"))
                for (i = 0; i < astroidObject.length; i++){
                  console.log(result.near_earth_objects[element])
                  console.log(astroidObject[i])
                  $('#secondP').append('name:'+(astroidObject[i].name + "\n <br>"))
                }
              });
          }
  });
}) // url to look for using the search input by the user'
