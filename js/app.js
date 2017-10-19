/* ====================== */
/* ===== Functions ====== */
/* ====================== */


function displayProject(project, exists) {
  if(project.attr("src") === "images/TripAdvisor_Logo.png"){
    if($("#TripAdvisor").is(":visible")){
      $('#TripAdvisor').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(exists == 0)
      $('#TripAdvisor').show();
    else
      $('#TripAdvisor').show(400);
  }

  else if(project.attr('src') === "images/FermiersdeFrance_Logo.png"){
    if($("#FermiersdeFrance").is(":visible")){
      $('#FermiersdeFrance').hide(300);
      $("#project-description-content").slideUp("slow");
    }
    else if(exists == 0)
      $('#FermiersdeFrance').show();
    else
      $('#FermiersdeFrance').show(400);
  }

  else if(project.attr('src') === "images/PokeQuiz_Logo.PNG"){
    if($("#PokeQuiz").is(":visible")){
      $('#PokeQuiz').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(exists == 0)
      $('#PokeQuiz').show();
    else
      $('#PokeQuiz').show(400);
  }

  else if(project.attr('src') === "images/SitePerso_Logo.PNG"){
    if($("#SitePerso").is(":visible")){
      $('#SitePerso').hide(400);
      $("#project-description-content").slideUp("slow");
    }
    else if(exists == 0)
      $('#SitePerso').show();
    else
      $('#SitePerso').show(400);
  }
};


// Check email adress
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    return pattern.test(emailAddress);
};


// Btn effects
function applyHoverEffect(hoverElement) {
  var underlineDiv = hoverElement.find(".underline");
  var btn = hoverElement.find(".btn");

  underlineDiv.addClass("underline-hover-effect");
  if (btn.hasClass("parallax-btn")) {
    btn.addClass("parallax-btn-hover-effect");

  } else {
    btn.addClass("btn-hover-effect");
  }
}

function removeHoverEffect(hoverElement) {
  var underlineDiv = hoverElement.find(".underline");
  var btn = hoverElement.find(".btn");

  underlineDiv.removeClass("underline-hover-effect");
  if (btn.hasClass("parallax-btn")) {
    btn.removeClass("parallax-btn-hover-effect");

  } else {
    btn.removeClass("btn-hover-effect");
  }
}



$(document).ready(function() {


  /* ===== Loading animation ===== */
  $("#project-description-content").hide();
  $('#project-description-content').find(".project").hide();

  /* ===== Button effect ===== */
  $(".btn-container").on("mouseenter", function() {
    applyHoverEffect($(this));
  });

  $(".btn-container").on("mouseleave", function() {
    removeHoverEffect($(this));
  });


  /* ===== Parallax ===== */
  $('.parallax-window').parallax({imageSrc: 'images/Parallax_img.JPG'});

});

$(window).on("load", function() {

  $(".loader").css("display", "none");
  $(".main").css("display", "inline");


  /* ===== Parallax title opacity ===== */
	parallaxTitle = $(".parallax-title");
  btnContainer  = $("#parallax-btn-container");

	$(window).on('scroll', function () {
    	var scrollTop = $(this).scrollTop();
      // For parallax
    	var parallaxTitleOffset  = parallaxTitle.offset().top;
    	var parallaxTitleOpacity = 1 - scrollTop/parallaxTitleOffset;
      // For btn
      var btnContainerOffset  = btnContainer.offset().top;
      var btnContainerOpacity = 1 - scrollTop/btnContainerOffset;

    	if(parallaxTitleOpacity < 0)
    		parallaxTitleOpacity = 0;

      if(btnContainerOpacity < 0)
        btnContainerOpacity = 0;

    	parallaxTitle.css({"opacity": parallaxTitleOpacity});
      btnContainer.css({"opacity": btnContainerOpacity});
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
        if($(".header-content").css("position") == "fixed")
            $(".header-content").toggleClass("header-content-new-background");
	}, {offset: "70px"});


  /* ===== Skill Bar Waypoint ===== */
  $("#competences").waypoint(function() {
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
      displayProject($(this), 1);
    }
    else {
      displayProject($(this), 0);
      $("#project-description-content").slideDown("slow");
    }
  });


  /* ===== Contact Waypoint ===== */
  $("#contact").waypoint(function() {
    $(".label").each(function(index, element) {
        setTimeout(function() {
            $(element).css("opacity", 1)
        }, index*200);
    });

    setTimeout(function() {
        $("#labelArea").css("opacity", 1)
    },800);

    setTimeout(function() {
        $(".input").each(function(index, element) {
            setTimeout(function() {
                $(element).css("opacity", 1)
            }, index*200);
        });
    }, 100);

    setTimeout(function() {
        $("#area").css("opacity", 1)
    },900)

    setTimeout(function() {
        $("#submit").css("opacity", 1)
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
                  $("#mail").val("");
                  $("#name").val("");
                  $("#fname").val("");
                  $("#object").val("");
                  $("#area").val("");
              }
          })
      }
  });


  /* ====== Smooth effect ===== */
  $(function() {
      var scrollToAnchor = function( id ) {
          var elem = $("section[id='"+ id +"']");
          if ( typeof elem.offset()  === "undefined" ) {
              elem = $("#"+id);
          }
          if ( typeof elem.offset()  !== "undefined" ) {
              $('html, body').animate({
                  scrollTop: elem.offset().top
              }, 800 );}
      };

      $("a").click(function( event ) {
          if ( $(this).attr("href").match("#") ) {
              event.preventDefault();
              var href = $(this).attr('href').replace('#', '')
              scrollToAnchor( href );
          }
      });
  });

});