//Custom filters.

/// <reference path="event_handler.js" />

app.filter('gender', function() {
  return function(gender) {
    switch (gender) {
          case 1:
            return 'Male';
            break;
          case 2:
            return 'Female';
            break;
          case 3:
            return 'Not disclosed';
            break;
          default:
            return "Not available";
    }
  };
})

.filter('proficient', function () {
  return function (proficient) {
     switch (proficient) {
           case 1:
             return 'Yes';
             break;
           case 2:
             return 'No';
             break;
           case 3:
             return 'Sort of';
             break;
           default:
             return "Not available";
         }
  }
});

