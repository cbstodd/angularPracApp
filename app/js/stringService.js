// reference path service.js

app.factory('stringService', function () {
  return  {
    processString: function (input) {
      if (!input){
        return input;
      }
      var output = "";
      // changes
      for ( var i = 0; i < input.length; i += 1 ){
        //puts spaces between camel case words.
        if (i > 0 && input[i] == input[i].toUpperCase()) {
          output = output + " ";
        }
        output = output + input[i];
      }
      return output;
    }
  }
});