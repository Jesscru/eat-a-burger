// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newburger = $(this).data("newburger");
  
      var newDevoured = {
        devoured: newburger
      };
  
      var checkDev = {
        devoured: $("[devoured=0]:checked").val()
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(
        function() {
          if (!checkDev) {
            $(".change-devoured").css('visibility', 'hidden')
          }
          console.log("changed devoured to", newburger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: $("[devoured=0]:checked").val().trim()
      };
      
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  