$(document).ready(function(){


     function displayAPOD(){
        var url = "https://api.nasa.gov/planetary/apod?api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN";
         $.ajax({
          url: url,
          success: function(result){
              console.log(result)
          //if("copyright" in result) {
            //$("#copyright").text("Image Credits: " + result.copyright);
          //}
          //else {
            //$("#copyright").text("Image Credits: " + "Public Domain");
          //}
          
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
        });
    }
    displayAPOD()
function epic(){
    //var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');
      var currentDate = moment().format('YYYY-MM-DD');
    $.ajax('https://epic.gsfc.nasa.gov/api/natural', {
        success : function(iDataArr, stat, xhr) {
            // do something with the list
            console.log(iDataArr)
            console.log(stat);
            console.log(xhr)
            for (i = 0; i < iDataArr.length; i++){
                //$('.container').append(iDataArr[0].image)
                $("#img_id").attr("src",iDataArr[0].image);
            }
        }
    });
}
epic()




    $('.btn-outline-success').on('click', function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&srsearch=meaning&title&srlimit=1&format=json&callback=?"; // url to look for using the search input by the user
        //var wikiurl = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?term='+searchTerm+ '&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user

        $.ajax({
            type:"GET",
            url:wikiurl,
            async:true,
            dataType: "json",
            success:function(data){
                console.log(data)
                console.log(data[1]);
                console.log(data[2]);
                console.log(data[3]);
                for (i = 0; i < data.length; i++){
                    //$('.container').append(data[1])
                    var cat = data[1]
                    var description = data[2]
                    var link = data[3]
                    for(i = 0; i< data.length; i++){
                        console.log(cat[0])
                        console.log(description[0])
                        $('.container').append(cat[0])
                        $('.container').append(description[0])
                        $('.container').append('<a href ='+link[0]+'>' + link[0] + '</a>')
                    }
                }
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
    var endDate = moment().add(0, 'days').format('YYYY-MM-DD'); 
    console.log(todayDate)
    var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var url = 'https://api.nasa.gov/neo/rest/v1/feed?size=2&start_date='+todayDate+'&end_date='+endDate+'&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user
    
        $.ajax({
          type: "GET",
          url: url,
          success: function (result, error) {
            console.log(result)
            console.log(result.near_earth_objects)
            Object.keys(result.near_earth_objects).forEach(element => {
              var astroidObject = result.near_earth_objects[element];
              console.log(astroidObject)
              var theDate = astroidObject[0].close_approach_data[0].close_approach_date
              $('#secondP').append(("<tr><td id='boldspace'>" + theDate + "" + "</td></tr>"))
              for (i = 0; i < astroidObject.length; i++) {
                console.log(result.near_earth_objects[element])
                console.log(astroidObject[i])
                var name = astroidObject[i].name;
                var nasaUrl = astroidObject[i].nasa_jpl_url;
                var distance = astroidObject[i].close_approach_data[0].miss_distance.miles;
                var trimDistance = distance.slice(0, -8);
                var speed = astroidObject[i].close_approach_data[0].relative_velocity.miles_per_hour;
                var trimSpeed = speed.slice(0, -11);
                var hazardous = astroidObject[i].is_potentially_hazardous_asteroid;
                if (hazardous == true){
                  hazardous = "<i style='font-weight: bolder;'>true</i>"
                };
                $('#secondP').append(("<tr><<td id='bluespace'><a target='_blank' href='" + nasaUrl + "'" + '>' + name + "</a></td><td id='space'>" + trimDistance + "</td><td id='space'>" + trimSpeed + "</td><td id='space'>" + hazardous + "</td></tr>"))
              }
            });
          }
        });
      }) // url to look for using the search input by the user'
      