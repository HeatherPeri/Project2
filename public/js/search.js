$(document).ready(function(){

    $('.btn-outline-success').on('click', function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        //var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&srsearch=meaning&format=json&callback=?"; // url to look for using the search input by the user
        var url = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?term='+searchTerm+ '&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user

        $.ajax({
            type:"GET",
            url:url,
            async:true,
            dataType: "json",
            success:function(data){
                console.log(data)
                console.log(data[1]);
                console.log(data[2]);
                console.log(data[3]);
            },

            error: function(errorMessage){alert("Error");}
        }).then(function(response){
            console.log(response)
            $('#newtext').append(response[2])
        })

    })


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
              //console.log(result)
              //console.log(result.near_earth_objects)
              Object.keys(result.near_earth_objects).forEach(element => {
                var try2 = result.near_earth_objects[element];
                //console.log(try2)
                var theDate = try2[0].close_approach_data[0].close_approach_date
                $('#secondP').append(('date:'+theDate+ "\n <br>"))
                for (i = 0; i < try2.length; i++){
                  //console.log(result.near_earth_objects[element])
                  //console.log(try2[i])
                  $('#secondP').append('name:'+(try2[i].name + "\n <br>"))
                }
              });
          }
  });
}) // url to look for using the search input by the user'
