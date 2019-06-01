$(document).ready(function(){
  //$('.collapse').collapse()
  
  
    var date = $('#form-mars').val()
    var proxy = 'https://cors-anywhere.herokuapp.com/'
    var marsurl = 'http://api.open-notify.org/astros.json';
    $.ajax({
      type:"GET",
      url:proxy+marsurl,
      success: function(data){
        console.log(data)
        console.log(data.photos)
        var newData = data.people
        for (i = 0; i < newData.length; i++){
          if (i === 1) { break; }
         $('.panel-body').append("<p>"+newData[0].name+"</p>")
         $('.panel-body').append("<p>"+newData[1].name+"</p>")
         $('.panel-body').append("<p>"+newData[2].name+"</p>")
         $('.panel-body').append("<p>"+newData[3].name+"</p>")
         $('.panel-body').append("<p>"+newData[4].name+"</p>")
         $('.panel-body').append("<p>"+newData[5].name+"</p>")
         console.log(newData[0])
         //$('.panel-body').append('<img src='+data.photos[0].img_src+'/>')
         //$('.panel-body').append(data.photos)
        }
      }

  
  
})

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
/*function epic(){
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
epic()*/



function wikiSearchMain(data){
  
    $('#searchImg').on('click', function(){
      event.preventDefault()
      console.log(data)
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
                    var data1 = data[1]
                    var description = data[2]
                    var link = data[3]
                    
                      console.log(data1)
                        console.log(data1[0])
                        console.log(description[0])
                        $('#wikiTitle').append(data1[0])
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
  }
  wikiSearchMain()


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
        $('.marsDisplay').hide()
        $('.marsDisplay2').hide()
        $('.marsDisplay3').hide()
        $('#searchMars').on('click', function(){
          $('#nasaTitle').empty();
          $('#nasaDescription').empty()
          $('.marsDisplay').fadeIn()
          $('#nasaTitle2').empty();
          $('#nasaDescription2').empty()
          $('.marsDisplay2').fadeIn()
          $('#nasaTitle3').empty();
          $('#nasaDescription3').empty()
          $('.marsDisplay3').fadeIn()
          var query = $('#form-mars').val()
          var imgUrl = "https://images-api.nasa.gov/search?q="+query;
          $.ajax({
            type: "GET",
            url: imgUrl,
            success: function (data) {
              console.log(data)
              console.log(data.collection)
              console.log(data.collection.items[0])
              $('#nasaTitle').append( data.collection.items[0].data[0].title)
              $('#nasaDescription').append(data.collection.items[0].data[0].description)
              $('#nasa_img_id').attr("src", data.collection.items[0].links[0].href)
              $('#nasaTitle2').append( data.collection.items[1].data[0].title)
              $('#nasaDescription2').append(data.collection.items[1].data[0].description)
              $('#nasa_img_id2').attr("src", data.collection.items[1].links[0].href)
              $('#nasaTitle3').append( data.collection.items[2].data[0].title)
              $('#nasaDescription3').append(data.collection.items[2].data[0].description)
              $('#nasa_img_id3').attr("src", data.collection.items[2].links[0].href)
            }
            })
          })
         
           $('.marsbtn').on('click', function(){
              $('#nasaTitle').empty();
          $('#nasaDescription').empty()
          $('#nasaTitle2').empty();
          $('#nasaDescription2').empty()
          $('#nasaTitle3').empty();
          $('#nasaDescription3').empty()
          $('.marsDisplay').fadeIn()
          $('.marsDisplay2').fadeIn()
          $('.marsDisplay3').fadeIn()
          var $this = $(this)
              var btnquery =$(this).val()
              console.log(btnquery)
          var mrsurl = "https://images-api.nasa.gov/search?q="+btnquery;
          $.ajax({
            type: "GET",
            url: mrsurl,
            success: function (data) {
              console.log(data)
              console.log(data.collection)
              console.log(data.collection.items[0])
              $('#nasaTitle').append( data.collection.items[0].data[0].title)
              $('#nasaDescription').append(data.collection.items[0].data[0].description)
              $('#nasa_img_id').attr("src", data.collection.items[0].links[0].href)
              $('#nasaTitle2').append( data.collection.items[1].data[0].title)
              $('#nasaDescription2').append(data.collection.items[1].data[0].description)
              $('#nasa_img_id2').attr("src", data.collection.items[1].links[0].href)
              $('#nasaTitle3').append( data.collection.items[2].data[0].title)
              $('#nasaDescription3').append(data.collection.items[2].data[0].description)
              $('#nasa_img_id3').attr("src", data.collection.items[2].links[0].href)
            }
            })
            })
          
         function stars(){
          var proxy = 'https://cors-anywhere.herokuapp.com/';
          var starurl = "https://www.sky-map.org/?img_source=SDSS&object=m100&box_width=10&box_height=10";
          $.ajax({
            url: starurl,
            success: function (data) {
              console.log()
            }
         })
        }
        stars()
        
        $('#roverpic1').hide()
        $('#roverRow').hide()
        //$('#rovererr').hide()
      $('.marspics').on('click', function(){
        $('#roverRow').fadeIn()
        $('#rovererr').empty()
        $('#roverpic1').fadeIn()
        $('.rover1').empty()
          var camera = $(this).val()
          var date = $('#marsInput').val()
          console.log(date)
          var marsRoverUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+'&camera='+camera+'&api_key=DGayCeCopIiwsgjpM1jghFg2fFfzzpeXQZiI18IN'
          $.ajax({
            url:marsRoverUrl,
            success: function(data, error){
              if(data.photos.length == 0){
                $('#roverpic1').hide()
                $('#roverRow').hide()
                $('#rovererr').append('Sorry, no pictures from this camera for this date!')
              }else{
                $('#rovererr').empty()
              console.log(data)
              console.log(data.photos[0].camera.full_name)
              $('#cameraName1').append("Camera Full Name: "+data.photos[0].camera.full_name)
              $('#landingdate1').append("Landing Date: "+data.photos[0].rover.landing_date)
              $('#roverStatus1').append("Status: "+ data.photos[0].rover.status)
              $('#roverpic1').attr('src', data.photos[0].img_src)
            }
              
            }
          })
        
      })
     
      }) // url to look for using the search input by the user'
      
