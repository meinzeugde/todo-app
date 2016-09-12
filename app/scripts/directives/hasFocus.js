angular.module('todoApp')

  /**
   * this directive can be used to focus an input field on certain conditions
   *
   * Example:
   *
   * <input type="text" has-focus="true" ng-model="focusOnStart" />
   * <input type="text" has-focus="focusOnStart.length > 10" ng-model="focusOnCondition" />
   **/
  .directive('hasFocus', ['$timeout', function($timeout) {
    return {
      scope: {
        hasFocus: '='
      },
      link: function(scope, element, attrs) {
        scope.$watch('hasFocus', function(value) {
          if(value) {
            scope.hasFocus = false;
            // $timeout(function() {
              element[0].focus();
            // });
          }
        });
      }
    };
  }]);
