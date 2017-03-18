/* ===== Functions ====== */


function afficheProjet(projet, existe) {
  if(projet.attr("src") === "images/TripAdvisor_Logo.png"){
    if($("#TripAdvisor").is(":visible")){
      $('#TripAdvisor').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(existe == 0)
      $('#TripAdvisor').show();
    else
      $('#TripAdvisor').show(400);
  }
    
  else if(projet.attr('src') === "images/FermiersdeFrance_Logo.png"){
    if($("#FermiersdeFrance").is(":visible")){
      $('#FermiersdeFrance').hide(300);
      $("#project-description-content").slideUp("slow");
    }
    else if(existe == 0)
      $('#FermiersdeFrance').show();
    else
      $('#FermiersdeFrance').show(400);
  }

  else if(projet.attr('src') === "images/PokeQuiz_Logo.PNG"){
    if($("#PokeQuiz").is(":visible")){
      $('#PokeQuiz').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(existe == 0)
      $('#PokeQuiz').show();
    else
      $('#PokeQuiz').show(400);
  }

  else if(projet.attr('src') === "images/SitePerso_Logo.PNG"){
    if($("#SitePerso").is(":visible")){
      $('#SitePerso').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(existe == 0)
      $('#SitePerso').show();
    else
      $('#SitePerso').show(400);
  }
};



function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};




$(document).ready(function() {

  /* Loading animation */ 

  $("#project-description-content").hide();
  $('#project-description-content').find(".project").hide();

  /* ===== Parallax ===== */

  $('.parallax-window').parallax({imageSrc: 'images/Parallax_img.JPG'});
  
})

$(window).on("load", function() {

  $(".loader").css("display", "none");
  $(".main").css("display", "inline");

/* ===== Parallax title opacity ===== */

	parallaxTitle = $(".parallax-title");

	$(window).on('scroll', function () {
    	var scrollTop = $(this).scrollTop();
    	var offset = parallaxTitle.offset().top;
    	var opacity = 1 - scrollTop/offset;
    	if(opacity < 0)
    		opacity = 0;
    	parallaxTitle.css({"opacity": opacity})
    });

/* ===== Responsive Menu ===== */

  $("#responsive-icon").on("click", function() {
  	$(".header-content").toggleClass("header-content-new-opacity");
  	$(".hidden-responsive-menu").toggleClass("responsive-menu");
  });

  $(window).scroll(function () {
      if ($(".hidden-responsive-menu").hasClass("responsive-menu")) {
          $(".header-content").removeClass("header-content-new-opacity");
          $(".hidden-responsive-menu").removeClass("responsive-menu");
      }
  });

/* ===== Header Waypoint ===== */

	$("#apropos").waypoint(function() {
    console.log($("#apropos").scrollTop())
        if($(".header-content").css("position") == "fixed")
            $(".header-content").toggleClass("header-content-new-background");
	}, {offset: "70px"});


/* ===== Skill Bar Waypoint ===== */


  $("#competences").waypoint(function() {
    console.log("competences")
    $('.skillbar').each(function(){
      $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
      },2000);
    });
  }, {offset: '40%'});







/* ===== Projects Waypoint ===== */

  $("#portfolio").waypoint(function() {
    $(".project-img-content").each(function(index, element) {
      setTimeout(function() {
        $(element).css("opacity", 1);
      }, index*400);
    });
  }, {offset: '60%'});


/* ===== Image Click ===== */

  $('.project-img').click(function() {
    if($('#project-description-content').is(":visible")) {
      $('#project-description-content').find(".project").hide(400);
      afficheProjet($(this), 1);
    }
    else {
      afficheProjet($(this), 0);
      $("#project-description-content").slideDown("slow");
    }
  });



/* ===== Contact Waypoint ===== */


  $("#contact").waypoint(function() {
    $(".label").each(function(index, element) {
        setTimeout(function() {
            $(element).css("opacity", 1)//.addClass("animated bounceInLeft");
        }, index*200);
    });
    
    setTimeout(function() {
        $("#labelArea").css("opacity", 1)//.addClass("animated bounceInLeft");
    },800);
    
    setTimeout(function() {
        $(".input").each(function(index, element) {
            setTimeout(function() {
                $(element).css("opacity", 1)//.addClass("animated bounceInRight");
            }, index*200);
        });
    }, 100);
    
    setTimeout(function() {
        $("#area").css("opacity", 1)//.addClass("animated bounceInRight");
    },900)
    
    setTimeout(function() {
        $("#submit").css("opacity", 1)//.addClass("animated bounceInLeft");
    },1000);
    
    setTimeout(function() {
        $("#networks-content").css("opacity", 1);
    },1600);
      
  }, {offset: "50%"});




/* ===== AJAX ===== */


  $("form").on("submit", function(e) {
      e.preventDefault();
      var form = $("form");
      if(($("#mail").val() != "") && isValidEmailAddress($("#mail").val()) && ($("#name").val() != "") && ($("#fname").val() != "") && ($("#object").val() != "") && ($("#area").val() != "")) {
          $.ajax({
              url: form.attr("action"),
              type: form.attr("method"),
              data: form.serialize()
          })
          .done(function(data){
              if(data == "error") {
                  $("#msgAjax").addClass("error").html("Votre mail n'a pas pu être envoyé");
              }
              else {
                  $("#msgAjax").addClass("valid").html("Votre mail a bien été envoyé");
              }
          })
      }
  });


  /* ====== Smooth effect ===== */
  $(function() {
      var scrollToAnchor = function( id ) {
          var elem = $("section[id='"+ id +"']"); // on crÃ©e une balise d'ancrage
          if ( typeof elem.offset()  === "undefined" ) { // on verifie si l'Ã©lÃ©ment existe
              elem = $("#"+id); 
          }
          if ( typeof elem.offset()  !== "undefined" ) { // si l'Ã©lÃ©ment existe, on continue
              $('html, body').animate({
                  scrollTop: elem.offset().top 
              }, 800 );} // on dÃ©fini un temps de dÃ©filement de page
      };

      $("a").click(function( event ) { // on attache la fonction au click
          if ( $(this).attr("href").match("#") ) { // on vÃ©rifie qu'il s'agit d'une ancre
              event.preventDefault();
              var href = $(this).attr('href').replace('#', '') // on scroll vers la cible
              scrollToAnchor( href ); 
          }
      });
  });

});