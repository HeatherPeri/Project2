$( document ).ready(function() {

    $(".input-group-text").click(function(){

        var searchTerm = $(".form-control").val();// value entered by the user
        //var newUrl = 'https://api.php?action=query&list=search'+searchTerm+'&srsearch=meaning'
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&srsearch=meaning&format=json&callback=?"; // url to look for using the search input by the user
    
        $.ajax({
            type:"GET",
            url:url,
            async:true,
            dataType: "json",
            success:function(data){
                console.log(data[1][0]);
                console.log(data[2][0]);
                console.log(data[3][0]);
            },
    
            error: function(errorMessage){alert("Error");}
        }).then(function(response){
            console.log(response)
            $('#newtext').append(response[2])
        });
    });
  });