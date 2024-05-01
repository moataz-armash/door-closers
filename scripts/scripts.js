//To change the navbar title
$(document).ready(function () {
  // Function to handle hovering over the parent link and the dropdown menu
  $("a#how, div.how-drop-hover").hover(
    function () {
      var text = $("a#how").attr("data-text");
      $("a#how").text(text);
      // Display the dropdown menu when hovering over the parent link or the dropdown menu itself
      $("div.how-drop-hover").addClass("show");
    },
    function () {
      var text = $("a#how").text().trim().split(" ")[0];
      $("a#how").text(text);
      // Hide the dropdown menu when leaving the parent link or the dropdown menu
      $(".dropdown-hover").removeClass("show");
    }
  );
});

//--------------------------------

$(document).ready(function () {
  // Function to handle hovering over the parent link and the dropdown menu
  $("a#elevate, div.elevate-drop-hover").hover(
    function () {
      var originalText = $("a#elevate").text().trim();
      var newText = $("a#elevate").attr("data-text");
      $("a#elevate").attr("data-original-text", originalText).text(newText);
      // Display the dropdown menu when hovering over the parent link or the dropdown menu itself
      $("div.elevate-drop-hover").addClass("show");
    },
    function () {
      var originalText = $("a#elevate").attr("data-original-text");
      $("a#elevate").text(originalText);
      // Hide the dropdown menu when leaving the parent link or the dropdown menu
      $("div.elevate-drop-hover").removeClass("show");
    }
  );
});

//To dropdown when hover on navbar

$(document).ready(function () {
  $(".navbar-nav .dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").fadeIn(200); // Show the dropdown menu
    },
    function () {
      $(this).find(".dropdown-menu").fadeOut(200); // Hide the dropdown menu
    }
  );
});
