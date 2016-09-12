angular.module('todoApp')

  .filter('markTags',[
    function() {
      return function(input) {
        if(typeof input != 'string') return input;
        input = input.replace(/(@|#)(\w+)/g,function myFunction(w){return '<a href="#tag">'+w+'</a>';});
        return input;
      }
    }])

;
