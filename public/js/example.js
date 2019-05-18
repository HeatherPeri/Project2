function displayPage() {
  // Get the example from the URL hash
  let exampleNumber = location.hash.substr(1);

  // Send the GET request.
  API.getExample(exampleNumber).then(
    function(example) {
      refreshExample(example);
    }
  );
}

function refreshExample(example) {
  $("#example-id").text(example.id);
  $("#example-text").text(example.text);
  $("#example-description").text(example.description);
}


// The API object contains methods for each kind of request we'll make
var API = {
  getExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "GET"
    });
  }
};

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  displayPage();
});
