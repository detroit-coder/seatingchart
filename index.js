$(function(){
var reserved = [];
$("button").on("click", function(){
    var name = $("#name").val();
    var table = $("#table").val();
    reserved.push({
        name: name,
        table: table
    });

    var divArray = Array.from($('div'));
    for (var i = 0; i < divArray.length; i++){
      var $div = $(divArray[i]);
      if($div.text().trim() === table){
        $div.addClass('reserved');
      }
    }
    // So he created an Array and added another For loop in order to  check through all of the Divs(tables). Then he added the class Reserved with a background color of Red. If the Div text equals the table selected when the button is clicked it turns Red. 

    $("div").hover(function(){
        console.log('before loop', reserved);
        for (var i = 0; i<reserved.length; i++){
            var $div = $(this);
            if($div.text().trim() == reserved[i].table.trim()){
                $div.text(reserved[i].name);
            }
            
    }
    
    });
});
});

