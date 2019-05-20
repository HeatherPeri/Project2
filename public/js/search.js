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

$(".input-group-text").click(function(){

    //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
    $(".input-group-text").click(function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
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
        });
    });'; // url to look for using the search input by the user'
})
})
