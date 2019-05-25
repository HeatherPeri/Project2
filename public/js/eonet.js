$(document).ready(function(){
$('#severeStorms').on('click', function(){
    $('#eonetDisplay').empty()
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/10?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var eonetEvent = data.events
            $('#eonetDisplay').append('<h2 id="eoTitle">' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4 id="eoDesc">' + data.description + '</h4>')
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
    $('#eonetDisplay').empty()
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var volkanoevent = data.events
            $('#eonetDisplay').append('<h2 id="eoTitle>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4 id="eoDesc>' + data.description + '</h4>')
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
$('#snow').on('click', function(){
    $('#eonetDisplay').empty()
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/17?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var snowevent = data.events
            $('#eonetDisplay').append('<h2 id="eoTitle>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4 id="eoDesc>' + data.description + '</h4>')
            for (i = 0; i < snowevent.length; i++){
                if (i === 1) { break; }
                var snowevent2 = snowevent[0].categories
                var coordinates1 = snowevent[0].geometries[0].coordinates
                console.log(snowevent2)
                console.log(snowevent)
                console.log(snowevent[0].title)
                console.log(coordinates1)
                console.log(snowevent[0].sources[0].url)
                $('#eonetDisplay').append('<h4> Name:' + snowevent[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + snowevent[0].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + snowevent[0].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + snowevent[0].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ snowevent[0].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + snowevent[1].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + snowevent[1].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + snowevent[1].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + snowevent[1].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ snowevent[1].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + snowevent[2].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + snowevent[2].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + snowevent[2].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + snowevent[2].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ snowevent[2].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + snowevent[3].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + snowevent[3].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + snowevent[3].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + snowevent[3].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ snowevent[3].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                

            }
        }
    })
})
$('#wildFire').on('click', function(){
    $('#eonetDisplay').empty()
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var wildFireevent = data.events
            $('#eonetDisplay').append('<h2 id="eoTitle>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4 id="eoDesc>' + data.description + '</h4>')
            for (i = 0; i < wildFireevent.length; i++){
                if (i === 1) { break; }
                var wildFireevent2 = wildFireevent[0].categories
                var coordinates1 = wildFireevent[0].geometries[0].coordinates
                console.log(wildFireevent2)
                console.log(wildFireevent)
                console.log(wildFireevent[0].title)
                console.log(coordinates1)
                console.log(wildFireevent[0].sources[0].url)
                $('#eonetDisplay').append('<h4> Name:' + wildFireevent[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + wildFireevent[0].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + wildFireevent[0].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + wildFireevent[0].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ wildFireevent[0].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + wildFireevent[1].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + wildFireevent[1].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + wildFireevent[1].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + wildFireevent[1].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ wildFireevent[1].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + wildFireevent[2].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + wildFireevent[2].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + wildFireevent[2].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + wildFireevent[2].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ wildFireevent[2].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + wildFireevent[3].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + wildFireevent[3].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + wildFireevent[3].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + wildFireevent[3].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ wildFireevent[3].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                

            }
        }
    })
})
$('#earthquake').on('click', function(){
    $('#eonetDisplay').empty()
    $.ajax('https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/16?status=open',{
        success: function(data){
            console.log(data)
            console.log(data.events)
            var earthquakeevent = data.events
            $('#eonetDisplay').append('<h2 id="eoTitle>' + data.title + '</h2>')
            $('#eonetDisplay').append('<h4 id="eoDesc>' + data.description + '</h4>')
            for (i = 0; i < earthquakeevent.length; i++){
                if (i === 1) { break; }
                var earthquakeevent2 = earthquakeevent[0].categories
                var coordinates1 = earthquakeevent[0].geometries[0].coordinates
                console.log(earthquakeevent2)
                console.log(earthquakeevent)
                console.log(earthquakeevent[0].title)
                console.log(coordinates1)
                console.log(earthquakeevent[0].sources[0].url)
                $('#eonetDisplay').append('<h4> Name:' + earthquakeevent[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + earthquakeevent[0].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + earthquakeevent[0].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + earthquakeevent[0].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ earthquakeevent[0].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + earthquakeevent[1].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + earthquakeevent[1].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + earthquakeevent[1].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + earthquakeevent[1].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ earthquakeevent[1].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + earthquakeevent[2].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + earthquakeevent[2].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + earthquakeevent[2].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + earthquakeevent[2].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ earthquakeevent[2].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                $('#eonetDisplay').append('<h4> Name:' + earthquakeevent[3].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Type:' + earthquakeevent[3].categories[0].title+ '</h4>')
                $('#eonetDisplay').append('<h4> Date:' + earthquakeevent[3].geometries[0].date+ '</h4>');
                $('#eonetDisplay').append('<h4> Coordinates:' + earthquakeevent[3].geometries[0].coordinates+ '</h4>')
                $('#eonetDisplay').append('<h4 <a href = > Link: '+ earthquakeevent[3].sources[0].url+ '</a></h4>')
                $('#eonetDisplay').append('<br><br>');
                if(earthquakeevent === " "){
                    $('#eaonetDisplay').append('<h4>Sorry, Nothing to Display, Come back tomorrow!</h4>')
                }

            }
        }
    })
})
})
