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
                $(".container").attr("src",iDataArr[0].image);
                console.log(iDataArr[0].image)
            }
        }
    });
}
epic()



  
$('#severeStorms').on('click', function(){
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/10?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var eonetEvent = data.events
            $('#eonetDisplay').append('<h2>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4>' + data.description + '</h4>')
            for (i = 0; i < eonetEvent.length; i++){
                
                var eonetEvent2 = eonetEvent[0].categories
                var coordinates1 = eonetEvent[0].geometries[0].coordinates
                console.log(eonetEvent2)
                console.log(eonetEvent)
                console.log(eonetEvent[0].title)
                console.log(coordinates1)
                console.log(eonetEvent[0].sources[0].url)
                $('#eonetDisplay').append('<h4> Name:' + eonetEvent[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + eonetEvent[0].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + eonetEvent[0].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + eonetEvent[0].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ eonetEvent[0].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + eonetEvent[1].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + eonetEvent[1].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + eonetEvent[1].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + eonetEvent[1].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ eonetEvent[1].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + eonetEvent[2].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + eonetEvent[2].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + eonetEvent[2].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + eonetEvent[2].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ eonetEvent[2].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + eonetEvent[3].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + eonetEvent[3].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + eonetEvent[3].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + eonetEvent[3].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ eonetEvent[3].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                
                
                

            }
        }
    })
})
$('#vulkanos').on('click', function(){
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var volkanoevent = data.events
            $('#eonetDisplay').append('<h2>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4>' + data.description + '</h4>')
            for (i = 0; i < volkanoevent.length; i++){
                if (i === 1) { break; }
                var volkanoevent2 = volkanoevent[0].categories
                var coordinates1 = volkanoevent[0].geometries[0].coordinates
                console.log(volkanoevent2)
                console.log(volkanoevent)
                console.log(volkanoevent[0].title)
                console.log(coordinates1)
                console.log(volkanoevent[0].sources[0].url)
                $('#eonetDisplay').append('<h4> Name:' + volkanoevent[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + volkanoevent[0].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + volkanoevent[0].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + volkanoevent[0].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ volkanoevent[0].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + volkanoevent[1].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + volkanoevent[1].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + volkanoevent[1].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + volkanoevent[1].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ volkanoevent[1].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + volkanoevent[2].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + volkanoevent[2].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + volkanoevent[2].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + volkanoevent[2].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ volkanoevent[2].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + volkanoevent[3].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + volkanoevent[3].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + volkanoevent[3].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + volkanoevent[3].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ volkanoevent[3].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                

            }
        }
    })
})






    $('#searchImg').on('click', function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var wikiurl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&srsearch=meaning&title&srlimit=1&format=json&callback=?"; // url to look for using the search input by the user
        //var wikiurl = 'https://genelab-data.ndc.nasa.gov/genelab/data/search?term='+searchTerm+ '&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'; // url to look for using the search input by the user
        $('#wikiTitle').empty()
        $('#wikiText').empty()
        $('#wikiLinks').empty()
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
                  if (i === 1) { break; }
                    //$('.container').append(data[1])
                    var cat = data[1]
                    var description = data[2]
                    var link = data[3]
                    
                      console.log(cat)
                        console.log(cat[0])
                        console.log(description[0])
                        $('#wikiTitle').append(cat[0])
                        $('#wikiText').append(description[0])
                        $('#wikiLinks').append('<tr> <td><a href ='+link[0]+'>' + link[0] + '</a></td></tr>')
                        if(description[0] == ""){
                          $('#wikiText').append(description[1])
                        };
                        
                    
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
      