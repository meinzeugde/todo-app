angular.module('todoApp')

  /**
   * @input Array|String|Object|Integer|Float|Boolean
   *
   * this filter is an extensive check if a input is really empty
   * this filter is intended to be used with the ng-if directive
   *
   * opposite of isNotEmpty filter
   *
   * example:
   *      <p ng-if="[] | isEmpty">[] is empty</p>
   *      <p ng-if="{} | isEmpty">{} is empty</p>
   *      <p ng-if="0 | isEmpty">0 is empty</p>
   *      <p ng-if="0.0 | isEmpty">0.0 is empty</p>
   *      <p ng-if="'' | isEmpty">'' is empty</p>
   *      <p ng-if="'   ' | isEmpty">'   ' is empty</p>
   *      <p ng-if="false | isEmpty">false is empty</p>
   **/
  .filter('isEmpty',[
    function() {
      var objectHasKeys = function(obj) {
        var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            return true
          }
        }
        return false;
      };

      return function(input) {
        if(typeof input != 'undefined' && input != null) {
          switch (typeof input) {
            case 'string':
              return (input.trim() == "");
            case 'number':
              return (input == 0);
            case 'boolean':
              return (input!= true);
            case 'object':
              //check Arrays
              if(input.length != undefined) return (input.length == 0);
              //check Objects
              if(input.length == undefined) return !objectHasKeys(input);
          }
        } else {
          return true
        }

      }
    }])

  /**
   * @input Array|String|Object|Integer|Float|Boolean
   *
   * this filter is an extensive check if a input is really NOT empty
   * this filter is intended to be used with the ng-if directive
   *
   * opposite of isEmpty filter
   *
   * example:
   *      <p ng-if="['value'] | isNotEmpty">['value'] is not empty</p>
   *      <p ng-if="{key: 'value'} | isNotEmpty">{key: 'value'} is not empty</p>
   *      <p ng-if="1 | isNotEmpty">1 is not empty</p>
   *      <p ng-if="1.0 | isNotEmpty">1.0 is not empty</p>
   *      <p ng-if="'string' | isNotEmpty">'string' is not empty</p>
   *      <p ng-if="true | isNotEmpty">true is not empty</p>
   **/
  .filter('isNotEmpty',['$filter',
    function($filter) {
      return function(input) {
        return ($filter('isEmpty')(input)) ? false : true
      }
    }])

;
