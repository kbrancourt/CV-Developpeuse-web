//remplacer le logo par la photo en le survolant avec la souris

$(document).ready(function(){
    //qd je survole le logo avec la souris
    $(".logo").on({
        //la photo apparait et disparait qd la souris n'est plus dessus
        mouseenter: function(){
           
            $(".logo").attr("src", "../images/eedf04b7-25ca-469b-9714-618d520ddfab.jpg").css("width: 50px","heigth:50px");  
          },
        
        mouseleave: function(){
            $(".logo").attr("src", "../images/K.png");
          }, 
    })
})



//faire montrer et cacher le texte de présentation

$(document).ready(function(){
//aller chercher l'ID ds html
     $(".fleche").on({
        //qd je survole le logo avec la souris
        //la photo apparait et disparait qd la souris n'est plus dessus
         mouseenter: function(){
            $(".presentation").show();  
          },
        
        mouseleave: function(){
            $(".presentation").hide();
          }, 
    })
})
