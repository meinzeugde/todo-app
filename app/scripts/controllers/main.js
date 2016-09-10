'use strict';

angular.module('todoApp')
  .controller('MainCtrl',
    ['$scope', 'toastr', 'TodoEntry',
      function ($scope, toastr, TodoEntry) {
        /**
         * DEFINE SCOPES
         **/
        $scope.localData = {
          newEntry: {},
          todoEntries: []
        };
        $scope.localFunctions = {};

        /**
         * FUNCTIONS
         **/
        $scope.localFunctions.loadTodoList = function() {
          TodoEntry.all().then(function(entries) {
            $scope.localData.todoEntries = entries;
          })
        };

        $scope.localFunctions.saveTodoEntry = function(todoEntry) {
          TodoEntry.save($scope.localData.todoEntries,todoEntry).then(function(entries) {
            $scope.localData.newEntry = {};
            $scope.localData.todoEntries = entries;
            toastr.success('todo entry saved','success');
          }).catch(function(error) {
            toastr.error(error,"error");
          });
        };

        /**
         * INITIALIZATION
         **/
         $scope.localFunctions.loadTodoList();
      }]);
